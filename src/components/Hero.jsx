import { ArrowRight, Mail, Download } from "lucide-react";
import { useLang } from "../i18n/LanguageContext";
import styles from "./Hero.module.css";

export default function Hero() {
  const { t } = useLang();

  return (
    <section id="inicio" className={styles.hero}>
      <div className={styles.inner}>
        <div className={styles.text}>
          <p className={styles.greeting}>{t.hero.greeting}</p>
          <h1 className={styles.name}>
            Cristian <span className={styles.accent}>Cortés</span>
          </h1>
          <p className={styles.tagline}>{t.hero.tagline}</p>
          <p className={styles.role}>{t.hero.role}</p>

          <div className={styles.actions}>
            <a href="#proyectos" className="btn btn-primary">
              {t.hero.ctaProjects}
              <ArrowRight size={20} strokeWidth={2} />
            </a>
            <a href="#contacto" className="btn btn-ghost">
              <Mail size={20} strokeWidth={2} />
              {t.hero.ctaContact}
            </a>
            <a
              href="/assets/documents/CristianCortesCV.pdf"
              className="btn btn-ghost"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Download size={20} strokeWidth={2} />
              {t.hero.cvLabel}
            </a>
          </div>
        </div>

        <div className={styles.avatarWrap}>
          <span className={styles.avatarGlow} aria-hidden="true" />
          <img
            src="/assets/img/mainpic.png"
            alt="Foto de perfil de Cristian Cortés"
            className={styles.avatar}
            width="320"
            height="320"
          />
        </div>
      </div>
    </section>
  );
}
