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

  // Menú móvil toggle
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    menuToggle.classList.toggle("open");
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
              behavior: "smooth"
            });
          } else {
            // Scroll suave a la posición calculada
            window.scrollTo({
              top: Math.max(0, targetPosition), // Asegurar que no sea negativo
              behavior: "smooth"
            });
          }
        }
      }
      
      navLinks.classList.remove("open");
      menuToggle.classList.remove("open");
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

  // La animación del texto hero se maneja completamente con CSS

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
        submitButton.innerHTML = '<span class="spinner"></span> Enviando...';
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
            formStatus.textContent =
              "Envío exitoso. ¡Gracias por contactarme!";
            formStatus.classList.add("success");
          }
          contactForm.reset();
        } else {
          if (formStatus) {
            formStatus.textContent =
              "Error en el envío. Intenta nuevamente más tarde.";
            formStatus.classList.add("error");
          }
        }
      } catch (error) {
        console.error("Error al enviar el formulario:", error);
        if (formStatus) {
          formStatus.textContent =
            "Error en el envío. Revisa tu conexión e intenta de nuevo.";
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
    const wrapper = document.querySelector('.projects-carousel[data-carousel="projects"]');
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
      dots.forEach((d, i) => d.setAttribute("aria-current", i === index ? "true" : "false"));
    }

    function updateButtons() {
      const i = getActiveIndex();
      if (prevBtn) prevBtn.disabled = i === 0;
      if (nextBtn) nextBtn.disabled = i === cards.length - 1;
      setActiveDot(i);
    }

    // Buttons
    prevBtn?.addEventListener("click", () => scrollToIndex(getActiveIndex() - 1));
    nextBtn?.addEventListener("click", () => scrollToIndex(getActiveIndex() + 1));

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

});
