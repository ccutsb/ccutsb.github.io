// Datos verificados contra los repos reales en github.com/ccutsb (jul 2026)
export const projects = [
  {
    id: "lifeos",
    name: "LifeOS",
    repo: "https://github.com/ccutsb/LifeOS",
    demo: "https://life-os-azure-theta.vercel.app",
    stack: ["React 18", "TypeScript", "Vite", "Tailwind CSS", "Supabase", "PWA"],
    description: {
      es: "PWA instalable que organiza universidad, trabajo, hogar, salud y finanzas en una sola app móvil. Prioriza tareas de forma inteligente (\"¿qué debería hacer ahora?\"), con hábitos, timer Pomodoro y modo crisis. Backend en Supabase con PostgreSQL y RLS.",
      en: "Installable PWA that organizes university, work, home, health and finances into a single mobile app. Smart task prioritization (\"what should I do now?\"), habits, Pomodoro timer and crisis mode. Supabase backend with PostgreSQL and RLS.",
    },
  },
  {
    id: "pinguino",
    name: "El Pingüino Moderno",
    repo: "https://github.com/ccutsb/El-Pinguino-Moderno",
    demo: "https://ccutsb.github.io/El-Pinguino-Moderno/",
    demoType: "site",
    stack: ["HTML", "CSS", "JavaScript", "Node.js (build)", "GitHub Pages"],
    description: {
      es: "Proyecto educativo en español sobre Linux moderno: un libro y su sitio web estático multipágina, con build system propio en Node.js sin dependencias y venta del libro vía Payhip.",
      en: "Educational project in Spanish about modern Linux: a book and its multi-page static website, with a dependency-free Node.js build system and book sales via Payhip.",
    },
  },
  {
    id: "jobalert",
    name: "Job Alert Bot",
    repo: "https://github.com/ccutsb/Job-alert-bot",
    demo: null,
    stack: ["Python 3.12", "SQLite", "GitHub Actions", "Telegram API", "IMAP/RSS"],
    description: {
      es: "Bot que monitorea el mercado laboral chileno: parsea alertas de correo (IMAP) y feeds RSS, puntúa ofertas por keywords configurables en YAML, deduplica y envía reportes diarios y alertas instantáneas por Telegram. Corre gratis en GitHub Actions cada 6 horas.",
      en: "Bot that monitors the Chilean job market: parses email alerts (IMAP) and RSS feeds, scores postings with YAML-configurable keywords, deduplicates, and sends daily reports and instant alerts via Telegram. Runs free on GitHub Actions every 6 hours.",
    },
  },
  {
    id: "teodosa",
    name: "Espacio Teodosa",
    repo: "https://github.com/ccutsb/espacio_Teodosa",
    demo: "https://espacioteodosa.cl",
    demoType: "site",
    stack: ["HTML", "CSS", "JavaScript", "Formspree", "SEO / JSON-LD"],
    description: {
      es: "Sitio oficial de una sala de ensayo y grabación en Santiago. Estático y rápido: mobile-first, galería con lightbox, formulario con atajos a WhatsApp, SEO completo (JSON-LD, OpenGraph, sitemap) e imágenes optimizadas en WebP/AVIF.",
      en: "Official website for a rehearsal and recording studio in Santiago. Static and fast: mobile-first, gallery with lightbox, contact form with WhatsApp shortcuts, full SEO (JSON-LD, OpenGraph, sitemap) and WebP/AVIF optimized images.",
    },
  },
  {
    id: "planfit",
    name: "PlanFit",
    repo: "https://github.com/ccutsb/Plan-Fit",
    demo: "https://plan-fit-delta.vercel.app",
    stack: ["HTML", "Tailwind CSS", "JavaScript", "SVG charts"],
    description: {
      es: "Prototipo web responsivo de salud y bienestar (proyecto universitario): recomendaciones personalizadas de ejercicio, hidratación y alimentación, con onboarding, metas configurables y reportes mensuales.",
      en: "Responsive health & wellness web prototype (university project): personalized exercise, hydration and nutrition recommendations, with onboarding, configurable goals and monthly reports.",
    },
  },
];
