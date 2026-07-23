import { Code, Database, Wrench } from "lucide-react";
import { useLang } from "../i18n/LanguageContext";
import SectionHeading from "./SectionHeading";
import { skillGroups } from "../data/skills";
import styles from "./Skills.module.css";

const groupIcons = {
  frontend: Code,
  backend: Database,
  tools: Wrench,
};

export default function Skills() {
  const { t } = useLang();

  return (
    <section id="skills">
      <SectionHeading title={t.skills.title} sub={t.skills.sub} />
      <div className={styles.grid}>
        {skillGroups.map((group) => {
          const Icon = groupIcons[group.id] || Code;
          return (
            <div key={group.id} className={`card ${styles.group}`}>
              <div className={styles.groupHead}>
                <span className={styles.iconWrap}>
                  <Icon size={22} strokeWidth={1.5} />
                </span>
                <h3 className={styles.groupTitle}>
                  {t.skills.groups[group.id]}
                </h3>
              </div>
              <ul className={styles.list}>
                {group.items.map((skill) => (
                  <li key={skill} className="badge">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}
