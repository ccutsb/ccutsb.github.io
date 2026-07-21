import { useLang } from "../i18n/LanguageContext";
import Typewriter from "./Typewriter";
import styles from "./Hero.module.css";

export default function Hero() {
  const { t } = useLang();

  return (
    <section id="inicio" className={styles.hero}>
      <div className={styles.terminal}>
        <div className={styles.terminalBar}>
          <span className={`${styles.dot} ${styles.dotRed}`} aria-hidden="true" />
          <span className={`${styles.dot} ${styles.dotYellow}`} aria-hidden="true" />
          <span className={`${styles.dot} ${styles.dotGreen}`} aria-hidden="true" />
          <span className={styles.terminalTitle}>{t.hero.terminalTitle}</span>
        </div>

        <div className={styles.terminalBody}>
          <div className={styles.avatarWrap}>
            <img
              src="/assets/img/mainpic.png"
              alt="Foto de perfil de Cristian Cortés"
              className={styles.avatar}
              width="180"
              height="180"
            />
          </div>

          <div className={styles.text}>
            <p className={styles.greeting}>
              <span className={styles.prompt}>~$</span> whoami
            </p>
            <h1 className={styles.name}>
              <span className={styles.greetingWord}>{t.hero.greeting}</span>{" "}
              <span
                className={`glitch ${styles.nameGlitch}`}
                data-text="Cristian Cortés"
              >
                Cristian Cortés
              </span>
            </h1>
            <p className={styles.role}>{t.hero.role}</p>
            <p className={styles.typed}>
              <span className={styles.prompt}>&gt;</span>{" "}
              <Typewriter phrases={t.hero.typed} />
            </p>

            <div className={styles.actions}>
              <a href="#proyectos" className="btn btn-primary">
                {t.hero.ctaProjects}
              </a>
              <a href="#contacto" className="btn btn-ghost">
                {t.hero.ctaContact}
              </a>
              <a
                href="/assets/documents/CristianCortesCV.pdf"
                className="btn btn-ghost"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t.hero.cvLabel} ↓
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
