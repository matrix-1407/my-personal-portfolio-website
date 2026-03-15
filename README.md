<div align="center">
  <h1>My Corner in Matrix 🌐</h1>
  <p>A Dark Minimalist Glassmorphic Portfolio</p>

  ![Theme](https://img.shields.io/badge/Theme-Matrix%20Cyberpunk-00ff41?style=for-the-badge)
  ![Tech Stack](https://img.shields.io/badge/Stack-Vanilla%20JS%20%7C%20HTML5%20%7C%20CSS3-00599C?style=for-the-badge&logo=html5)
  ![Status](https://img.shields.io/badge/Status-Phase%201%20Complete-success?style=for-the-badge)
</div>

<br />

Welcome to the codebase for my personal portfolio! This repository currently houses **Phase 1: Vanilla Web Revamp**, combining custom HTML, CSS, and lightweight JS to create a highly optimized, distinct web experience before advancing to modern frameworks.

## ✨ Design Concept & Features
The aesthetic philosophy is built around a dark, sleek, cyberpunk-inspired matrix theme with strong glassmorphism UI rules (translucent cards, blur effects, structural borders).

- **Responsive "Bento Box" Grid**: A customized, adaptive CSS Grid layout for elegantly showcasing engineering skills, hobbies, and biography data.
- **Glassmorphism Theme System**: Hand-coded CSS variable tokens (`var(--glass-bg)`, `var(--glass-border)`) for easy manipulation of highlights, neon cyan/green accents, and backdrop filters without relying on heavy frontend frameworks.
- **Micro-Animations & Motion**: 
  - Fast 2.2-second "Neural Link" initialization load screen. 
  - Elegant scroll-fade triggers via JS Intersection Observers.
  - Interactive hover transitions across all buttons and bento cards.
- **SVG-first Iconography**: Utilizing scalable vector graphics exclusively—no clunky external icon libraries or standard emojis, ensuring crisp visuals on any resolution.

## 🛠️ Tech Stack (Current Build)
- **HTML5:** Semantic structure, accessible button landmarks, and inline SVGs.
- **CSS3:** Native variable tokens, advanced flexbox/grid architecture, and programmatic keyframe animations.
- **Vanilla JavaScript:** DOM node manipulation, interaction timing, and lightweight Intersection Observers.

## 🚀 Getting Started

To view the project locally, no build steps or dependencies are required:

1. Clone the repository:
   ```bash
   git clone https://github.com/matrix-1407/my-personal-portfolio-website.git
   ```
2. Navigate into the directory:
   ```bash
   cd my-personal-portfolio-website
   ```
3. Run a local server (optional, but recommended for avoiding CORS issues with local assets):
   ```bash
   python -m http.server 3000
   ```
   *Then visit `http://localhost:3000` in your browser.*
   
   *Alternatively, just double click the `index.html` file to open it directly.*

## 🔮 Looking Ahead: Phase 2
This vanilla codebase acts as the foundational UI blueprint! 
Upcoming architectural migrations include:
- **React + Vite Migration:** Upgrading to a modern, robust SPA structure.
- **3D Integrations:** Implementing `Three.js` / `@react-three/fiber` for interactive background elements.
- **Backend/CMS:** Wiring up a database to handle dynamic blog and project content.

---
*Created and maintained by [Mrudul Bokade](https://github.com/matrix-1407).*
*“Building interfaces & backends — learning cloud the hard way | DevOps-curious · ‘it works on my machine’ survivor!”*
