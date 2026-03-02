// Esperar a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", () => {
  // Referencias a elementos del DOM
  const header = document.querySelector("header");
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");
  const navLinksItems = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll("section");
  const skillItems = document.querySelectorAll(".skill-item");
  const projectCards = document.querySelectorAll(".project-card");
  const themeToggle = document.querySelector(".theme-toggle");
  const langToggle = document.querySelector(".lang-toggle");

  const translations = {
    es: {
      "nav.home": "Inicio",
      "nav.skills": "Habilidades",
      "nav.projects": "Proyectos",
      "nav.contact": "Contacto",
      "hero.roleMain": "Desarrollador de Software",
      "hero.roleAlt": "Tecnico en Informatica",
      "hero.subtitle":
        'Construyendo la <span class="accent">infraestructura</span> del futuro digital',
      "hero.description":
        "Creacion de paginas web, arquitecturas escalables, APIs y soluciones de alto rendimiento",
      "hero.ctaPrimary": "Ver Proyectos",
      "hero.ctaSecondary": "Contactar",
      "skills.title": 'Mis <span class="accent">Habilidades</span>',
      "skills.subtitle": "Tecnologias y herramientas que manejo",
      "projects.title": 'Mis <span class="accent">Proyectos</span>',
      "projects.subtitle": "Soluciones tecnologicas que he desarrollado",
      "projects.more": "Ver mas proyectos",
      "contact.title": 'Ponte en <span class="accent">Contacto</span>',
      "contact.subtitle": "Tienes un proyecto en mente? Hablemos!",
      "contact.locationLabel": "Ubicacion",
      "contact.socialTitle": "Redes",
      "contact.form.name": "Nombre",
      "contact.form.service": "Que tipo de servicio necesitas?",
      "contact.form.webDesign": "Diseno Web",
      "contact.form.webDev": "Desarrollo Web",
      "contact.form.backend": "Desarrollo Backend",
      "contact.form.consulting": "Consultoria",
      "contact.form.support": "Soporte Informatico",
      "contact.form.other": "Otro",
      "contact.form.message": "Mensaje",
      "contact.form.submit": "Enviar Mensaje",
      "contact.form.sending": "Enviando...",
      "contact.form.success": "Envio exitoso. Gracias por contactarme!",
      "contact.form.error": "Error en el envio. Intenta nuevamente mas tarde.",
      "contact.form.network": "Error en el envio. Revisa tu conexion e intenta de nuevo.",
      "footer.tagline": "Construyendo soluciones robustas y escalables",
      "footer.links": "Enlaces",
      "footer.services": "Servicios",
      "footer.api": "Desarrollo de APIs",
      "footer.architecture": "Arquitectura de Sistemas",
      "footer.db": "Optimizacion de Bases de Datos",
      "footer.devops": "Consultoria DevOps",
      "footer.copy": "© 2026 Cristian Cortes B. Todos los derechos reservados.",
      "projectsPage.title": 'Mis <span class="accent">Proyectos</span>',
      "projectsPage.subtitle":
        "Explora mi portafolio de soluciones backend y aplicaciones desarrolladas",
      "projectsPage.ctaTitle": "Tienes un proyecto en mente?",
      "projectsPage.ctaBody":
        "Estoy disponible para nuevos proyectos. Contactame y hablemos sobre como puedo ayudarte a construir soluciones tecnologicas.",
      "projectsPage.ctaBtn": "Contactar ahora",
      "theme.dark": "Oscuro",
      "theme.light": "Claro",
      "menu.open": "Abrir menu de navegacion",
      "menu.close": "Cerrar menu de navegacion",
    },
    en: {
      "nav.home": "Home",
      "nav.skills": "Skills",
      "nav.projects": "Projects",
      "nav.contact": "Contact",
      "hero.roleMain": "Software Developer",
      "hero.roleAlt": "IT Technician",
      "hero.subtitle":
        'Building the <span class="accent">infrastructure</span> of the digital future',
      "hero.description":
        "Building websites, scalable architectures, APIs and high-performance solutions",
      "hero.ctaPrimary": "View Projects",
      "hero.ctaSecondary": "Get in Touch",
      "skills.title": 'My <span class="accent">Skills</span>',
      "skills.subtitle": "Technologies and tools I work with",
      "projects.title": 'My <span class="accent">Projects</span>',
      "projects.subtitle": "Technology solutions I have developed",
      "projects.more": "See more projects",
      "contact.title": 'Get in <span class="accent">Touch</span>',
      "contact.subtitle": "Have a project in mind? Lets talk!",
      "contact.locationLabel": "Location",
      "contact.socialTitle": "Social",
      "contact.form.name": "Name",
      "contact.form.service": "What kind of service do you need?",
      "contact.form.webDesign": "Web Design",
      "contact.form.webDev": "Web Development",
      "contact.form.backend": "Backend Development",
      "contact.form.consulting": "Consulting",
      "contact.form.support": "IT Support",
      "contact.form.other": "Other",
      "contact.form.message": "Message",
      "contact.form.submit": "Send Message",
      "contact.form.sending": "Sending...",
      "contact.form.success": "Message sent successfully. Thanks for reaching out!",
      "contact.form.error": "Message failed. Please try again later.",
      "contact.form.network": "Message failed. Check your connection and try again.",
      "footer.tagline": "Building robust and scalable solutions",
      "footer.links": "Links",
      "footer.services": "Services",
      "footer.api": "API Development",
      "footer.architecture": "Systems Architecture",
      "footer.db": "Database Optimization",
      "footer.devops": "DevOps Consulting",
      "footer.copy": "© 2026 Cristian Cortes B. All rights reserved.",
      "projectsPage.title": 'My <span class="accent">Projects</span>',
      "projectsPage.subtitle":
        "Explore my portfolio of backend solutions and built applications",
      "projectsPage.ctaTitle": "Do you have a project in mind?",
      "projectsPage.ctaBody":
        "I am available for new projects. Contact me and lets talk about how I can help you build technology solutions.",
      "projectsPage.ctaBtn": "Contact now",
      "theme.dark": "Dark",
      "theme.light": "Light",
      "menu.open": "Open navigation menu",
      "menu.close": "Close navigation menu",
    },
  };

  const getCurrentLanguage = () => {
    const stored = localStorage.getItem("language");
    if (stored === "en" || stored === "es") return stored;
    return document.documentElement.lang === "en" ? "en" : "es";
  };

  const t = (key, lang = getCurrentLanguage()) =>
    translations[lang]?.[key] || translations.es[key] || key;

  function applyLanguage(lang) {
    document.documentElement.lang = lang;
    localStorage.setItem("language", lang);

    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const key = element.getAttribute("data-i18n");
      if (!key) return;
      element.textContent = t(key, lang);
    });

    document.querySelectorAll("[data-i18n-html]").forEach((element) => {
      const key = element.getAttribute("data-i18n-html");
      if (!key) return;
      element.innerHTML = t(key, lang);
    });

    if (langToggle) {
      const langLabel = langToggle.querySelector("[data-lang-label]");
      if (langLabel) langLabel.textContent = lang === "es" ? "EN" : "ES";
    }

    const isMenuOpen = navLinks?.classList.contains("open");
    if (menuToggle) {
      menuToggle.setAttribute("aria-label", isMenuOpen ? t("menu.close", lang) : t("menu.open", lang));
    }

    const currentTheme = document.documentElement.dataset.theme === "dark" ? "dark" : "light";
    updateThemeToggleLabel(currentTheme, lang);
  }

  function updateThemeToggleLabel(theme, lang = getCurrentLanguage()) {
    if (!themeToggle) return;
    const label = themeToggle.querySelector("[data-theme-label]");
    const icon = themeToggle.querySelector("i");
    const nextTheme = theme === "dark" ? "light" : "dark";

    if (label) {
      label.textContent = nextTheme === "dark" ? t("theme.dark", lang) : t("theme.light", lang);
    }

    if (icon) {
      icon.classList.remove("fa-sun", "fa-moon");
      icon.classList.add(theme === "dark" ? "fa-sun" : "fa-moon");
    }

    themeToggle.setAttribute("aria-label", `Switch to ${nextTheme} mode`);
    themeToggle.setAttribute("aria-pressed", theme === "dark" ? "true" : "false");
  }

  function applyTheme(theme) {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);
    updateThemeToggleLabel(theme);
  }

  (function initPreferences() {
    const preferredTheme = localStorage.getItem("theme");
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
    applyTheme(preferredTheme || systemTheme);
    applyLanguage(getCurrentLanguage());
  })();

  themeToggle?.addEventListener("click", () => {
    const current = document.documentElement.dataset.theme === "dark" ? "dark" : "light";
    const next = current === "dark" ? "light" : "dark";
    applyTheme(next);
  });

  langToggle?.addEventListener("click", () => {
    const current = getCurrentLanguage();
    applyLanguage(current === "es" ? "en" : "es");
  });

  // Función para cambiar el estilo del header al hacer scroll
  function handleScroll() {
    if (window.scrollY > 100) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }

    // Actualizar navegación activa basada en la sección visible
    let currentSection = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.offsetHeight;

      if (
        window.scrollY >= sectionTop &&
        window.scrollY < sectionTop + sectionHeight
      ) {
        currentSection = section.getAttribute("id");
      }
    });

    navLinksItems.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${currentSection}`) {
        link.classList.add("active");
      }
    });
  }

  // Evento de scroll
  window.addEventListener("scroll", handleScroll);

  // Menú móvil toggle con estados de accesibilidad
  const closeMobileMenu = () => {
    navLinks.classList.remove("open");
    menuToggle.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", t("menu.open"));
  };

  const openMobileMenu = () => {
    navLinks.classList.add("open");
    menuToggle.classList.add("open");
    menuToggle.setAttribute("aria-expanded", "true");
    menuToggle.setAttribute("aria-label", t("menu.close"));
  };

  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.contains("open");
    if (isOpen) {
      closeMobileMenu();
      return;
    }
    openMobileMenu();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMobileMenu();
    }
  });

  document.addEventListener("click", (event) => {
    const clickedOutsideMenu =
      !navLinks.contains(event.target) && !menuToggle.contains(event.target);
    if (clickedOutsideMenu) {
      closeMobileMenu();
    }
  });

  // Cerrar menú móvil y manejar scroll suave con offset para header fijo
  navLinksItems.forEach((link) => {
    link.addEventListener("click", (e) => {
      const href = link.getAttribute("href");

      // Solo procesar si es un enlace de ancla (#)
      if (href.startsWith("#")) {
        const targetId = href.substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
          e.preventDefault();

          // Calcular posición con offset para el header fijo
          const headerHeight = header.offsetHeight;
          const targetPosition = targetSection.offsetTop - headerHeight;

          // Si es la sección inicio y ya estamos en el top, no hacer scroll
          if (targetId === "inicio" && window.scrollY <= headerHeight) {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          } else {
            // Scroll suave a la posición calculada
            window.scrollTo({
              top: Math.max(0, targetPosition), // Asegurar que no sea negativo
              behavior: "smooth",
            });
          }
        }
      }

      closeMobileMenu();
    });
  });

  // Animación de entrada para elementos de habilidades
  function animateSkillsOnScroll() {
    skillItems.forEach((item) => {
      const itemPosition = item.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.3;

      if (itemPosition < screenPosition) {
        item.classList.add("animate");
      }
    });
  }

  // Iniciar animación de habilidades al cargar y al hacer scroll
  animateSkillsOnScroll();
  window.addEventListener("scroll", animateSkillsOnScroll);

  // Tooltip/tap behavior para Skills (mismo efecto que desktop en todas las vistas)
  function setupSkillTooltipToggle() {
    if (!skillItems || skillItems.length === 0) return;

    // Mejora accesibilidad (teclado / lectores)
    skillItems.forEach((item) => {
      item.setAttribute("tabindex", "0");
      item.setAttribute("role", "button");
      item.setAttribute("aria-haspopup", "true");
    });

    function clearActive(exceptEl = null) {
      skillItems.forEach((el) => {
        if (exceptEl && el === exceptEl) return;
        el.classList.remove("active");
        el.setAttribute("aria-expanded", "false");
      });
    }

    skillItems.forEach((item) => {
      item.addEventListener("click", (e) => {
        e.stopPropagation();
        const isActive = item.classList.contains("active");
        clearActive();
        if (!isActive) {
          item.classList.add("active");
          item.setAttribute("aria-expanded", "true");
        }
      });

      item.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          item.click();
        }
        if (e.key === "Escape") {
          item.classList.remove("active");
          item.setAttribute("aria-expanded", "false");
        }
      });

      // Al perder foco (teclado), cerramos el tooltip
      item.addEventListener("blur", () => {
        item.classList.remove("active");
        item.setAttribute("aria-expanded", "false");
      });
    });

    // Click fuera cierra todo
    document.addEventListener("click", () => clearActive());

    // Al hacer scroll, también cerramos para evitar tooltips "colgando"
    window.addEventListener("scroll", () => clearActive(), { passive: true });
  }

  setupSkillTooltipToggle();

  // Función para mostrar notificaciones
  function showNotification(message, type = "info") {
    const existingNotification = document.querySelector(".notification");
    if (existingNotification) {
      existingNotification.remove();
    }

    const notification = document.createElement("div");
    notification.classList.add("notification", type);
    notification.textContent = message;

    document.body.appendChild(notification);

    setTimeout(() => {
      notification.classList.add("show");
    }, 10);

    setTimeout(() => {
      notification.classList.remove("show");
      setTimeout(() => {
        notification.remove();
      }, 300);
    }, 3000);
  }

  // Manejo del formulario de contacto con Formspree
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    const formStatus = document.getElementById("formStatus");
    const submitButton = contactForm.querySelector('button[type="submit"]');
    const originalButtonText = submitButton ? submitButton.innerHTML : "";

    contactForm.addEventListener("submit", async function (event) {
      event.preventDefault(); // Evita el envío tradicional

      // Limpiar estados previos
      if (formStatus) {
        formStatus.textContent = "";
        formStatus.classList.remove("success", "error");
      }

      // Mostrar spinner en el botón
      if (submitButton) {
        submitButton.disabled = true;
        submitButton.innerHTML = `<span class="spinner"></span> ${t("contact.form.sending")}`;
      }

      const formData = new FormData(contactForm);

      try {
        const response = await fetch("https://formspree.io/f/xdalebor", {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json",
          },
        });

        if (response.ok) {
          if (formStatus) {
            formStatus.textContent = t("contact.form.success");
            formStatus.classList.add("success");
          }
          contactForm.reset();
        } else {
          if (formStatus) {
            formStatus.textContent = t("contact.form.error");
            formStatus.classList.add("error");
          }
        }
      } catch (error) {
        console.error("Error al enviar el formulario:", error);
        if (formStatus) {
          formStatus.textContent = t("contact.form.network");
          formStatus.classList.add("error");
        }
      } finally {
        // Restaurar botón
        if (submitButton) {
          submitButton.disabled = false;
          submitButton.innerHTML = originalButtonText;
        }
      }
    });
  }

  // ===== Projects carousel (mobile-first UX) =====
  function initProjectsCarousel() {
    const wrapper = document.querySelector(
      '.projects-carousel[data-carousel="projects"]',
    );
    if (!wrapper) return;

    const track = wrapper.querySelector(".projects-container");
    const cards = Array.from(wrapper.querySelectorAll(".project-card"));
    const prevBtn = wrapper.querySelector(".carousel-btn.prev");
    const nextBtn = wrapper.querySelector(".carousel-btn.next");
    const dotsWrap = wrapper.querySelector(".carousel-dots");

    if (!track || cards.length === 0) return;

    // Dots
    if (dotsWrap) {
      dotsWrap.innerHTML = "";
      cards.forEach((_, i) => {
        const dot = document.createElement("button");
        dot.type = "button";
        dot.className = "carousel-dot";
        dot.setAttribute("aria-label", `Ir al proyecto ${i + 1}`);
        dot.addEventListener("click", () => scrollToIndex(i));
        dotsWrap.appendChild(dot);
      });
    }

    function getGap() {
      const styles = window.getComputedStyle(track);
      const gap = parseFloat(styles.columnGap || styles.gap || "0");
      return Number.isFinite(gap) ? gap : 0;
    }

    function scrollToIndex(index) {
      const clamped = Math.max(0, Math.min(index, cards.length - 1));
      const card = cards[clamped];
      const left = card.offsetLeft - 12; // pequeño padding visual
      track.scrollTo({ left, behavior: "smooth" });
      setActiveDot(clamped);
    }

    function getActiveIndex() {
      const trackRect = track.getBoundingClientRect();
      const center = trackRect.left + trackRect.width / 2;
      let bestIdx = 0;
      let bestDist = Infinity;

      cards.forEach((card, i) => {
        const r = card.getBoundingClientRect();
        const c = r.left + r.width / 2;
        const d = Math.abs(c - center);
        if (d < bestDist) {
          bestDist = d;
          bestIdx = i;
        }
      });

      return bestIdx;
    }

    function setActiveDot(index) {
      if (!dotsWrap) return;
      const dots = Array.from(dotsWrap.querySelectorAll(".carousel-dot"));
      dots.forEach((d, i) =>
        d.setAttribute("aria-current", i === index ? "true" : "false"),
      );
    }

    function updateButtons() {
      const i = getActiveIndex();
      if (prevBtn) prevBtn.disabled = i === 0;
      if (nextBtn) nextBtn.disabled = i === cards.length - 1;
      setActiveDot(i);
    }

    // Buttons
    prevBtn?.addEventListener("click", () =>
      scrollToIndex(getActiveIndex() - 1),
    );
    nextBtn?.addEventListener("click", () =>
      scrollToIndex(getActiveIndex() + 1),
    );

    // Keyboard (cuando el track tiene focus)
    track.addEventListener("keydown", (e) => {
      if (e.key === "ArrowLeft") scrollToIndex(getActiveIndex() - 1);
      if (e.key === "ArrowRight") scrollToIndex(getActiveIndex() + 1);
    });

    // Update state on scroll (throttled)
    let ticking = false;
    track.addEventListener("scroll", () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        updateButtons();
        ticking = false;
      });
    });

    // Inicial
    updateButtons();
    setTimeout(updateButtons, 150); // por si hay carga de imágenes/video
  }

  initProjectsCarousel();

  // Scroll reveal liviano
  (function setupRevealAnimations() {
    const revealTargets = document.querySelectorAll(
      ".section-header, .project-card, .skill-item, .contact-item, .contact-form-container, .footer-content",
    );
    if (!revealTargets.length) return;

    revealTargets.forEach((element) => element.classList.add("reveal"));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.16 },
    );

    revealTargets.forEach((element) => observer.observe(element));
  })();

  // ===== Skills Ambient Video: lazy-load + visibility control =====
  (function setupSkillsAmbientVideo() {
    const prefersReduced = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)",
    )?.matches;
    if (prefersReduced) return;

    const section = document.querySelector("#habilidades");
    const video = section?.querySelector(".skills-ambient__video");
    if (!section || !video) return;

    // Lazy-load: cargamos fuentes cuando la sección entra en viewport
    const sources = Array.from(video.querySelectorAll("source"));
    const hasSrc = sources.some((s) => s.getAttribute("src"));

    // Si preload="none" + src ya está, solo controlamos play/pause
    const playSafe = async () => {
      try {
        await video.play();
      } catch (_) {}
    };

    const pauseSafe = () => {
      try {
        video.pause();
      } catch (_) {}
    };

    const io = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;

        if (entry.isIntersecting) {
          // Forzamos carga en el primer ingreso real
          if (video.preload === "none") {
            video.preload = "metadata";
            // Safari a veces necesita load() explícito
            video.load();
          }
          playSafe();
        } else {
          pauseSafe();
        }
      },
      { threshold: 0.15 },
    );

    io.observe(section);

    // Pausa al cambiar de pestaña (performance)
    document.addEventListener("visibilitychange", () => {
      if (document.hidden) pauseSafe();
      else playSafe();
    });
  })();
});
