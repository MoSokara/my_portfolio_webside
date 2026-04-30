# Sokara Portfolio

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![SCSS](https://img.shields.io/badge/SCSS-CC6699?style=for-the-badge&logo=sass&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=111)
![Responsive](https://img.shields.io/badge/Responsive-22D3EE?style=for-the-badge)
![Dark Mode](https://img.shields.io/badge/Dark%20Mode-080A0F?style=for-the-badge)

Premium frontend developer portfolio for **Mohamed Sokara**, built as a clean, responsive, and accessible static website for freelance clients and job applications.

The project focuses on strong visual hierarchy, modern startup-style UI, dark/light theme support, polished interactions, and scalable SCSS organization.

## Live Demo

[View Live Portfolio](https://mosokara.netlify.app/)

## Features

- Modern startup-style portfolio interface
- Dark mode first with light mode support
- Theme preference saved with `localStorage`
- Foreground hero profile image with custom abstract tech background
- Responsive navigation with Font Awesome menu icon
- Smooth mobile menu behavior
- Active section highlight in the navbar
- Scroll reveal animations with reduced-motion support
- Filterable project grid
- Freelance-focused services and CTA sections
- Resume/CV access
- Accessible contact form powered by `mailto`
- Custom MS favicon set with ICO, SVG, and PNG sizes
- SEO metadata, Open Graph tags, Twitter card tags, and JSON-LD schema

## Technologies

- HTML5
- SCSS / CSS3
- Vanilla JavaScript
- Font Awesome
- Google Fonts

## Folder Structure

```text
my-portfolio-webside/
├── index.html
├── script.js
├── site.webmanifest
├── README.md
├── assets/
│   ├── favicons/
│   │   ├── favicon.ico
│   │   ├── favicon.svg
│   │   ├── favicon-16x16.png
│   │   ├── favicon-32x32.png
│   │   ├── favicon-48x48.png
│   │   ├── favicon-180x180.png
│   │   ├── favicon-192x192.png
│   │   └── favicon-512x512.png
│   ├── imgs/
│   ├── hero-bg.svg
│   ├── My-Photo.jpeg
│   └── Mohamed Sokara - CV.pdf
├── sass/
│   ├── main.scss
│   ├── main.css
│   ├── abstracts/
│   ├── base/
│   ├── components/
│   ├── layout/
│   └── pages/
└── packages/
    └── fontawesome-free-7.2.0-web/
```

## SCSS Architecture

- `abstracts/` contains theme tokens, Sass variables, and mixins.
- `base/` contains reset, global rules, typography, focus states, and reveal behavior.
- `components/` contains reusable UI components such as navigation, buttons, cards, and forms.
- `layout/` contains spacing and grid helpers.
- `pages/` contains page-specific section composition.

## Run Locally

This is a static website and does not require a build step.

1. Clone the repository:

```bash
git clone https://github.com/MoSokara/my_portfolio_webside.git
```

2. Open the project folder:

```bash
cd my_portfolio_webside
```

3. Open `index.html` in a modern browser.

## Screenshots

Add production screenshots here after deployment updates:

```text
assets/screenshots/home-dark.png
assets/screenshots/home-light.png
assets/screenshots/projects-mobile.png
```

## Author

**Mohamed Sokara**  
Frontend Web Developer

- GitHub: [MoSokara](https://github.com/MoSokara)
- LinkedIn: [mosokara](https://www.linkedin.com/in/mosokara)
- Email: [mosokara2007@gmail.com](mailto:mosokara2007@gmail.com)

## License

This project is available for portfolio and learning purposes.
