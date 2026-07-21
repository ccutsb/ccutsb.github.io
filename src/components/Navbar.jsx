import { useState } from "react";
import { useLang } from "../i18n/LanguageContext";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const { lang, toggleLang, t } = useLang();
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#inicio", label: t.nav.home },
    { href: "#sobre-mi", label: t.nav.about },
    { href: "#skills", label: t.nav.skills },
    { href: "#proyectos", label: t.nav.projects },
    { href: "#servicios", label: t.nav.services },
    { href: "#contacto", label: t.nav.contact },
  ];

  return (
    <header className={styles.header}>
      <nav className={styles.nav} aria-label="Principal">
        <a href="#inicio" className={styles.logo}>
          <span className={styles.prompt}>~$</span> ccutsb
          <span className={styles.cursor} aria-hidden="true">
            ▋
          </span>
        </a>

        <ul
          id="site-nav"
          className={`${styles.links} ${open ? styles.linksOpen : ""}`}
        >
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={styles.link}
                onClick={() => setOpen(false)}
              >
                <span aria-hidden="true">./</span>
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className={styles.controls}>
          <button
            type="button"
            className={styles.langBtn}
            onClick={toggleLang}
            aria-label={
              lang === "es" ? "Switch to English" : "Cambiar a español"
            }
          >
            [{lang === "es" ? "EN" : "ES"}]
          </button>
          <button
            type="button"
            className={styles.menuBtn}
            aria-expanded={open}
            aria-controls="site-nav"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? "[x]" : "[≡]"}
          </button>
        </div>
      </nav>
    </header>
  );
}
