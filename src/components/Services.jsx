import { useLang } from "../i18n/LanguageContext";
import SectionHeading from "./SectionHeading";
import styles from "./Services.module.css";

export default function Services() {
  const { t } = useLang();

  return (
    <section id="servicios">
      <SectionHeading title={t.services.title} sub={t.services.sub} />
      <div className={styles.grid}>
        {t.services.items.map((service, i) => (
          <article key={i} className={styles.card}>
            <div className={styles.cardBar}>
              <span className={styles.index}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className={styles.prompt}>~$</span> ./servicio
            </div>
            <div className={styles.cardBody}>
              <h3 className={styles.name}>{service.name}</h3>
              <p className={styles.description}>{service.description}</p>
            </div>
          </article>
        ))}
      </div>

      <p className={styles.cta}>
        <span className={styles.prompt}>&gt;</span> {t.services.ctaText}{" "}
        <a href="#contacto" className={styles.ctaLink}>
          {t.services.ctaLink} →
        </a>
      </p>
    </section>
  );
}
