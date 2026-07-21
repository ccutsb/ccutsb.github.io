import { useLang } from "../i18n/LanguageContext";
import SectionHeading from "./SectionHeading";
import { skillGroups } from "../data/skills";
import styles from "./Skills.module.css";

export default function Skills() {
  const { t } = useLang();

  return (
    <section id="skills">
      <SectionHeading title={t.skills.title} sub={t.skills.sub} />
      <div className={styles.grid}>
        {skillGroups.map((group) => (
          <div key={group.id} className={styles.group}>
            <p className={styles.command}>
              <span className={styles.prompt}>~$</span> {group.command}
            </p>
            <ul className={styles.list}>
              {group.items.map((skill) => (
                <li key={skill} className={styles.tag}>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
