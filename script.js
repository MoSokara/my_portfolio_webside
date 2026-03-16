const allFilterBtn = document.getElementById("all-filter");
const designsFilterBtn = document.getElementById("designs-filter");
const gamesFilterBtn = document.getElementById("games-filter");
const AppsFilterBtn = document.getElementById("Apps-filter");
const templatesFilterBtn = document.getElementById("templates-filter");
const projectList = document.getElementById("project-list");
const projectCards = document.querySelectorAll(".project-card");

allFilterBtn.addEventListener("click", () => {
    projectList.innerHTML = "";
    for (let i = 0; i < projectCards.length; i++) {
        projectList.appendChild(projectCards[i]);
    }
})

gamesFilterBtn.addEventListener("click", () => {
    projectList.innerHTML = "";
    for (let i = 0; i < projectCards.length; i++) {
        if (projectCards[i].className == "project-card games") {
            projectList.appendChild(projectCards[i]);
        }
    }
})

designsFilterBtn.addEventListener("click", () => {
    projectList.innerHTML = "";
    for (let i = 0; i < projectCards.length; i++) {
        if (projectCards[i].className == "project-card designs") {
            projectList.appendChild(projectCards[i]);
        }
    }
})

AppsFilterBtn.addEventListener("click", () => {
    projectList.innerHTML = "";
    for (let i = 0; i < projectCards.length; i++) {
        if (projectCards[i].className == "project-card apps") {
            projectList.appendChild(projectCards[i]);
        }
    }
})

templatesFilterBtn.addEventListener("click", () => {
    projectList.innerHTML = "";
    for (let i = 0; i < projectCards.length; i++) {
        if (projectCards[i].className == "project-card templates") {
            projectList.appendChild(projectCards[i]);
        }
    }
})