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
    navLinks.classList.toggle("active");
    menuToggle.classList.toggle("active");
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
      
      navLinks.classList.remove("active");
      menuToggle.classList.remove("active");
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

  // La animación del texto hero ahora se maneja completamente con CSS
  // No se necesita JavaScript para esta funcionalidad

  // Estilos para las notificaciones y animaciones
  const styles = document.createElement("style");
  styles.textContent = `
      :root {
        --bg-color: #0f1624;          /* Azul oscuro casi negro */
        --bg-secondary: #171f2e;      /* Azul oscuro secundario */
        --text-color: #e6e7e8;        /* Blanco suave */
        --text-secondary: #a3b3c9;    /* Azul claro */
        --border-color: #2a3649;      /* Borde azul oscuro */
        --card-bg: #1a2332;           /* Fondo de tarjeta */
        --shadow-color: rgba(0, 0, 0, 0.5);  /* Sombra */
        --primary-color: #64ffda;     /* Verde cian brillante */
        --accent-color: #5d5dff;      /* Púrpura brillante */
      }
      
      body {
        background-color: var(--bg-color);
        color: var(--text-color);
        transition: background-color 0.3s ease, color 0.3s ease;
        @apply antialiased;
      }
      
      .navbar {
        background-color: rgba(15, 22, 36, 0.8);
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
        backdrop-filter: blur(10px);
      }
      
      .project-card,
      .skill-item,
      .contact-form {
        background-color: var(--card-bg);
        box-shadow: 0 5px 15px var(--shadow-color);
        border: 1px solid var(--border-color);
        @apply rounded-lg transition-all duration-300 hover:shadow-lg;
      }
      
      .form-line {
        background-color: var(--primary-color);
      }
      
      footer {
        background-color: var(--bg-color);
        border-top: 1px solid var(--border-color);
      }
      
      .hero {
        background-color: var(--bg-color);
        @apply relative overflow-hidden;
      }
      
      .section-header {
        color: var(--text-color);
        @apply font-bold tracking-tight;
      }
      
      .nav-link {
        color: var(--text-color);
        @apply transition-colors duration-200;
      }
      
      .nav-link:hover {
        color: var(--primary-color);
      }
      
      .btn {
        background-color: var(--primary-color);
        color: var(--bg-color);
        border: none;
        @apply px-6 py-2 rounded-full font-medium transition-all duration-300 hover:shadow-md;
      }
      
      .btn:hover {
        background-color: var(--accent-color);
        @apply transform scale-105;
      }
      
      .skill-bar {
        background-color: var(--border-color);
        @apply rounded-full;
      }
      
      .skill-level {
        background: linear-gradient(135deg, #64ffda 0%, #5d5dff 100%);
        @apply rounded-full transition-all duration-500;
      }
      
      .tech-tag {
        background-color: rgba(100, 255, 218, 0.1);
        color: var(--primary-color);
        border: 1px solid rgba(100, 255, 218, 0.3);
        @apply px-3 py-1 rounded-full text-sm transition-all duration-300 hover:bg-primary-color hover:text-bg-color;
      }
      
      .notification {
        background-color: var(--card-bg);
        color: var(--text-color);
        box-shadow: 0 5px 15px var(--shadow-color);
        @apply rounded-lg backdrop-blur-sm;
      }

      /* Estilos adicionales de Tailwind */
      .project-card {
        @apply transform transition-all duration-300 hover:-translate-y-1;
      }

      .skill-item {
        @apply p-4 rounded-lg transition-all duration-300 hover:shadow-md;
      }

      .contact-form {
        @apply space-y-4;
      }

      .form-group {
        @apply relative;
      }

      .form-line {
        @apply absolute bottom-0 left-0 w-full h-0.5 transition-all duration-300;
      }

      .section-header h2 {
        @apply text-3xl font-bold mb-2;
      }

      .section-header p {
        @apply text-lg text-text-secondary;
      }

      .hero-text {
        @apply space-y-4;
      }

      .hero-text h1 {
        @apply text-5xl font-bold leading-tight;
      }

      .hero-text p {
        @apply text-xl text-text-secondary;
      }

      .nav-links {
        @apply space-x-6;
      }

      .nav-link {
        @apply relative py-2;
      }

      .nav-link::after {
        @apply absolute bottom-0 left-0 w-0 h-0.5 bg-accent-color transition-all duration-300;
      }

      .nav-link:hover::after {
        @apply w-full;
      }

      .menu-toggle {
        @apply lg:hidden;
      }

      @media (max-width: 768px) {
        .nav-links {
          @apply fixed top-20 left-0 w-full bg-white p-4 space-y-4 transform -translate-x-full transition-transform duration-300;
        }
      }

      .notification {
          position: fixed;
          bottom: 20px;
          right: 20px;
          padding: 15px 25px;
          border-radius: 5px;
          color: var(--text-color);
          font-family: var(--font-secondary);
          z-index: 1000;
          transform: translateY(100px);
          opacity: 0;
          transition: all 0.3s ease;
      }
      
      .notification.show {
          transform: translateY(0);
          opacity: 1;
      }
      
      .notification.success {
          background: linear-gradient(135deg, #64ffda 0%, #5d5dff 100%);
      }
      
      .notification.error {
          background: linear-gradient(135deg, #ff5e5e 0%, #ff5e5e 100%);
      }
      
      .notification.info {
          background: linear-gradient(135deg, #5d5dff 0%, #64ffda 100%);
      }
      
      .nav-link.active {
          color: var(--primary-color);
      }
      
      .nav-link.active::after {
          width: 100%;
      }
      
      .skill-item {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.5s ease, transform 0.5s ease;
      }
      
      .skill-item.animate {
          opacity: 1;
          transform: translateY(0);
      }
      
      .error-message {
          color: #ff5e5e;
          font-size: 0.8rem;
          margin-top: 5px;
          display: block;
      }
      
      .form-group.error .form-line {
          background-color: #ff5e5e;
      }
      
      input.invalid, textarea.invalid {
          border-color: #ff5e5e;
      }

      /* Estilos para el contenedor de imagen */
      .hero-image-container {
        @apply relative w-full h-full min-h-[400px] rounded-lg overflow-hidden;
        background-color: var(--bg-secondary);
      }

      .hero-image-container img {
        @apply w-full h-full object-cover;
      }
  `;

  document.head.appendChild(styles);

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

});
