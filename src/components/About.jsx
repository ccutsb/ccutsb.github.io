import { useLang } from "../i18n/LanguageContext";
import SectionHeading from "./SectionHeading";
import styles from "./About.module.css";

export default function About() {
  const { t } = useLang();

  return (
    <section id="sobre-mi">
      <SectionHeading title={t.about.title} />
      <div className={styles.card}>
        <p className={styles.paragraph}>{t.about.p1}</p>
        <p className={styles.paragraph}>{t.about.p2}</p>
        <p className={`${styles.paragraph} blink-cursor`}>{t.about.p3}</p>
      </div>
    </section>
  );
}
