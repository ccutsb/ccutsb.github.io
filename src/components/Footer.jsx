import { useLang } from "../i18n/LanguageContext";
import styles from "./Footer.module.css";

export default function Footer() {
  const { t } = useLang();
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <p className={styles.copy}>
        © {year} Cristian Cortés B. {t.footer.rights}
      </p>
      <p className={styles.tagline}>{t.footer.tagline}</p>
    </footer>
  );
}
