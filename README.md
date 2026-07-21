# Portafolio — ccutsb.github.io

Portafolio personal con estética terminal/hacker, construido con **React + Vite** y desplegado en **GitHub Pages**.

## Stack

- React 18 + Vite
- CSS Modules + variables CSS (sin frameworks de UI)
- Tipografía JetBrains Mono
- i18n propio (ES/EN) con Context API
- Formulario de contacto vía Formspree
- Deploy automático con GitHub Actions

## Desarrollo local

```bash
npm install
npm run dev      # servidor de desarrollo
npm run build    # build de producción en dist/
npm run preview  # previsualizar el build
```

## Estructura

```
├── index.html              # entrada de Vite + SEO (meta, OG, JSON-LD)
├── public/                 # assets estáticos (foto, CV, verificación Google)
├── src/
│   ├── main.jsx / App.jsx
│   ├── components/         # Navbar, Hero, About, Skills, Projects, Contact, Footer
│   ├── data/               # proyectos y skills (datos verificados contra los repos)
│   ├── i18n/               # traducciones ES/EN + contexto de idioma
│   └── styles/global.css   # tokens de diseño, scanlines, glitch, utilidades
└── .github/workflows/deploy.yml  # build + deploy a GitHub Pages
```

## Deploy

Cada push a `main` ejecuta el workflow que compila el sitio y lo publica en GitHub Pages.

> Requisito único (una sola vez): en **Settings → Pages** del repo, la fuente debe estar en **GitHub Actions**.

## Autor

Cristian Cortés B. — [github.com/ccutsb](https://github.com/ccutsb)
