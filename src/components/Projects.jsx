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
          <article key={p.id} className={styles.card}>
            <div className={styles.cardBar}>
              <span className={styles.fileName}>
                ~/proyectos/{p.id}
              </span>
            </div>
            <div className={styles.cardBody}>
              <h3 className={styles.name}>{p.name}</h3>
              <p className={styles.description}>{p.description[lang]}</p>
              <ul className={styles.stack}>
                {p.stack.map((tech) => (
                  <li key={tech} className={styles.tech}>
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
                  [{t.projects.codeLabel}]
                </a>
                {p.demo && (
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.link}
                  >
                    [{p.demoType === "site" ? t.projects.siteLabel : t.projects.demoLabel}]
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
