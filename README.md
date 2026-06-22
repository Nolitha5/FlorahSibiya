# Florah Portfolio — React + Vite

A React conversion of the original static HTML/CSS/JS portfolio, rebuilt with
Vite for fast dev/build tooling and broken into reusable, data-driven
components.

## Getting started

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview   # preview the production build locally
```

## Adding your images

Drop your image files into `public/assets/` using the filenames listed in
`public/assets/README.txt`. Vite serves everything in `public/` from the
site root, so `public/assets/proff.png` becomes `/assets/proff.png` in the
app — matching the paths already used in the components.

## Project structure

```
portfolio-react/
├── index.html              # Vite entry HTML (loads fonts, mounts #root)
├── package.json
├── vite.config.js
├── public/
│   ├── favicon.svg
│   └── assets/              # ← put your images + Resume1.pdf here
└── src/
    ├── main.jsx              # React root, mounts <App />
    ├── App.jsx                # Composes all page sections
    ├── styles/
    │   └── global.css         # CSS variables, resets, shared utility classes
    ├── data/                  # Content separated from markup
    │   ├── site.js             # nav links, social links, contact info
    │   ├── about.js             # About section mini-cards
    │   ├── skills.js             # Skill groups + levels
    │   └── projects.js            # Project entries
    └── components/
        ├── Navbar.jsx / .css       # Nav bar + mobile menu (with state)
        ├── Hero.jsx / .css         # Hero / intro section
        ├── About.jsx / .css        # About section
        ├── AboutCard.jsx / .css     # Single about mini-card
        ├── Skills.jsx / .css       # Skills section
        ├── SkillGroup.jsx / .css    # Category card of skill bars
        ├── SkillBar.jsx / .css      # Single skill progress row
        ├── Projects.jsx / .css     # Projects section
        ├── ProjectCard.jsx / .css   # Single project card
        ├── ProjectLink.jsx / .css   # GitHub/Demo link button
        ├── Contact.jsx / .css      # Contact section
        ├── ContactChannel.jsx / .css # Single contact method row
        ├── Footer.jsx / .css       # Footer
        └── Icons.jsx               # Shared inline SVG icon components
```

## Design notes

- **Component-per-section** — each visual section of the original page
  (Hero, About, Skills, Projects, Contact, Footer) is its own component with
  a co-located CSS file, so styles stay scoped to the part of the UI they
  describe.
- **Data/markup separation** — project entries, skill levels, nav links, and
  contact info live in `src/data/*.js` as plain arrays/objects. Add a new
  project by adding an object to `src/data/projects.js` — no JSX editing
  required.
- **Reusable building blocks** — `ProjectCard`, `SkillGroup`, `SkillBar`,
  `AboutCard`, and `ContactChannel` are generic components driven entirely by
  props, used via `.map()` over the data files.
- **State moved from vanilla JS to React** — the mobile hamburger menu
  (previously `toggleMenu()` / `closeMenu()` in a `<script>` tag) is now a
  `useState` hook inside `Navbar.jsx`.
- **CSS variables preserved** — the original design system (colors, spacing,
  radii, fonts) lives in `src/styles/global.css` as CSS custom properties,
  exactly as in the original `:root` block, so the visual design is
  unchanged.
