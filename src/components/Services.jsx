import { LifeBuoy, Code2, Zap, ArrowRight } from "lucide-react";
import { useLang } from "../i18n/LanguageContext";
import SectionHeading from "./SectionHeading";
import styles from "./Services.module.css";

const icons = [LifeBuoy, Code2, Zap];

export default function Services() {
  const { t } = useLang();

  return (
    <section id="servicios">
      <SectionHeading title={t.services.title} sub={t.services.sub} />
      <div className={styles.grid}>
        {t.services.items.map((service, i) => {
          const Icon = icons[i] || Code2;
          return (
            <article key={i} className={`card ${styles.card}`}>
              <span className={styles.iconWrap}>
                <Icon size={24} strokeWidth={1.5} />
              </span>
              <h3 className={styles.name}>{service.name}</h3>
              <p className={styles.description}>{service.description}</p>
            </article>
          );
        })}
      </div>

      <p className={styles.cta}>
        {t.services.ctaText}{" "}
        <a href="#contacto" className={styles.ctaLink}>
          {t.services.ctaLink}
          <ArrowRight size={18} strokeWidth={2} />
        </a>
      </p>
    </section>
  );
}
