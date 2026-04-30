// Shared DOM references for navigation, theme switching, filters, and form behavior.
const navToggle = document.querySelector("[data-nav-toggle]");
const navToggleIcon = document.querySelector("[data-nav-icon]");
const navList = document.querySelector("[data-nav-list]");
const navLinks = document.querySelectorAll("[data-nav-link]");
const themeToggle = document.querySelector("[data-theme-toggle]");
const themeIcon = document.querySelector("[data-theme-icon]");
const themeMeta = document.querySelector('meta[name="theme-color"]');
const sections = document.querySelectorAll("[data-section]");
const filterButtons = document.querySelectorAll("[data-filter]");
const projectCards = document.querySelectorAll(".project-card[data-category]");
const contactForm = document.querySelector("#contact-form");
const formStatus = document.querySelector("#form-status");
const revealItems = document.querySelectorAll("[data-reveal]");

// Keep the mobile menu state synchronized with ARIA, icon state, and scroll lock.
function setNavOpen(isOpen) {
  if (!navToggle || !navList) return;

  navToggle.setAttribute("aria-expanded", String(isOpen));
  navToggle.setAttribute(
    "aria-label",
    isOpen ? "Close navigation menu" : "Open navigation menu",
  );
  if (navToggleIcon) {
    navToggleIcon.className = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
  }
  navList.classList.toggle("is-open", isOpen);
  document.body.classList.toggle("nav-open", isOpen);
}

navToggle?.addEventListener("click", () => {
  const isOpen = navToggle.getAttribute("aria-expanded") === "true";
  setNavOpen(!isOpen);
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => setNavOpen(false));
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    setNavOpen(false);
  }
});

document.addEventListener("click", (event) => {
  if (!navToggle || !navList) return;
  if (navToggle.getAttribute("aria-expanded") !== "true") return;

  const target = event.target;
  if (
    target instanceof Node &&
    !navList.contains(target) &&
    !navToggle.contains(target)
  ) {
    setNavOpen(false);
  }
});

// Reset mobile-only state when the layout returns to the desktop navigation.
const desktopQuery = window.matchMedia("(min-width: 901px)");

function handleDesktopChange(event) {
  if (event.matches) {
    setNavOpen(false);
  }
}

if (desktopQuery.addEventListener) {
  desktopQuery.addEventListener("change", handleDesktopChange);
} else {
  desktopQuery.addListener(handleDesktopChange);
}

// Theme preference is bootstrapped in the head, then persisted from this control.
function getCurrentTheme() {
  return document.documentElement.dataset.theme === "light" ? "light" : "dark";
}

function setTheme(theme, shouldPersist = true) {
  document.documentElement.dataset.theme = theme;

  if (themeToggle) {
    themeToggle.setAttribute(
      "aria-label",
      theme === "light" ? "Switch to dark mode" : "Switch to light mode",
    );
    themeToggle.setAttribute("aria-pressed", String(theme === "light"));
  }

  if (themeIcon) {
    themeIcon.className =
      theme === "light" ? "fa-solid fa-sun" : "fa-solid fa-moon";
  }

  if (themeMeta) {
    themeMeta.setAttribute("content", theme === "light" ? "#f6f8fb" : "#080a0f");
  }

  if (shouldPersist) {
    try {
      localStorage.setItem("theme", theme);
    } catch {
      // Theme persistence is progressive enhancement.
    }
  }
}

setTheme(getCurrentTheme(), false);

themeToggle?.addEventListener("click", () => {
  setTheme(getCurrentTheme() === "light" ? "dark" : "light");
});

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

// Scroll reveal is progressive enhancement and respects reduced-motion users.
if (
  revealItems.length &&
  "IntersectionObserver" in window &&
  !reduceMotion.matches
) {
  document.body.classList.add("reveal-ready");

  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    {
      rootMargin: "0px 0px -12% 0px",
      threshold: 0.12,
    },
  );

  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

// Highlight the currently viewed section in the primary navigation.
const navBySection = new Map(
  Array.from(navLinks).map((link) => [
    link.getAttribute("href")?.slice(1),
    link,
  ]),
);

function setActiveNav(sectionId) {
  const activeLink = navBySection.get(sectionId);
  if (!activeLink) return;

  navLinks.forEach((link) => link.removeAttribute("aria-current"));
  activeLink.setAttribute("aria-current", "page");
}

if ("IntersectionObserver" in window) {
  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveNav(entry.target.id);
        }
      });
    },
    {
      rootMargin: "-45% 0px -45% 0px",
      threshold: 0,
    },
  );

  sections.forEach((section) => sectionObserver.observe(section));
} else {
  setActiveNav("home");
}

setActiveNav("home");

// Project filtering keeps hidden cards out of both the layout and accessibility tree.
function applyProjectFilter(filter) {
  filterButtons.forEach((button) => {
    const isActive = button.dataset.filter === filter;
    button.setAttribute("aria-pressed", String(isActive));
  });

  projectCards.forEach((card) => {
    const shouldShow = filter === "all" || card.dataset.category === filter;
    card.hidden = !shouldShow;
  });
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    applyProjectFilter(button.dataset.filter || "all");
  });
});

// Date-derived content stays current without hardcoding yearly edits.
function getAge(dateString) {
  const today = new Date();
  const birthDate = new Date(dateString);
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDifference = today.getMonth() - birthDate.getMonth();

  if (
    monthDifference < 0 ||
    (monthDifference === 0 && today.getDate() < birthDate.getDate())
  ) {
    age -= 1;
  }

  return age;
}

const aboutAge = document.querySelector("#about-age");
if (aboutAge) {
  aboutAge.textContent = getAge("2007-08-26");
}

const year = document.querySelector("#year");
if (year) {
  year.textContent = new Date().getFullYear();
}

// Static-site contact form: validate fields, then open a prefilled email draft.
contactForm?.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!contactForm.reportValidity()) {
    return;
  }

  const data = new FormData(contactForm);
  const name = String(data.get("name") || "").trim();
  const email = String(data.get("email") || "").trim();
  const phone = String(data.get("phone") || "").trim();
  const message = String(data.get("message") || "").trim();

  const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
  const body = encodeURIComponent(
    [
      `Name: ${name}`,
      `Email: ${email}`,
      phone ? `Phone: ${phone}` : "",
      "",
      message,
    ]
      .filter(Boolean)
      .join("\n"),
  );

  if (formStatus) {
    formStatus.textContent = "Opening your email app...";
  }

  window.location.href = `mailto:mosokara2007@gmail.com?subject=${subject}&body=${body}`;
});
