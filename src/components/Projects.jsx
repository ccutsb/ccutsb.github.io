import { ExternalLink } from "lucide-react";
import { GithubIcon } from "./BrandIcons";
import { useLang } from "../i18n/LanguageContext";
import SectionHeading from "./SectionHeading";
import { projects } from "../data/projects";
import styles from "./Projects.module.css";

export default function Projects() {
  const { lang, t } = useLang();

  return (
    <section id="proyectos">
      <SectionHeading title={t.projects.title} sub={t.projects.sub} />
      <div className={styles.grid}>
        {projects.map((p) => (
          <article key={p.id} className={`card ${styles.card}`}>
            <div className={styles.cardBody}>
              <div className={styles.titleRow}>
                <h3 className={styles.name}>{p.name}</h3>
                <a
                  href={p.demo || p.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.titleLink}
                  aria-label={`Abrir ${p.name}`}
                >
                  <ExternalLink size={20} strokeWidth={2} />
                </a>
              </div>
              <p className={styles.description}>{p.description[lang]}</p>
              <ul className={styles.stack}>
                {p.stack.map((tech) => (
                  <li key={tech} className="badge">
                    {tech}
                  </li>
                ))}
              </ul>
              <div className={styles.links}>
                <a
                  href={p.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  <GithubIcon size={18} />
                  {t.projects.codeLabel}
                </a>
                {p.demo && (
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.link}
                  >
                    <ExternalLink size={18} strokeWidth={2} />
                    {p.demoType === "site"
                      ? t.projects.siteLabel
                      : t.projects.demoLabel}
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
