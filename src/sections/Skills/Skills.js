import { skills } from '../../data/content';
import Section from '../../components/Section/Section';
import styles from './Skills.module.css';

function Skills() {
  return (
    <Section id="skills" index="04" label="Skills" title="Technical Skills">
      <div className={styles.groups}>
        {skills.map((group) => (
          <div key={group.title} className={styles.group}>
            <h3 className={`mono ${styles.title}`}>{group.title}</h3>
            <ul className={styles.chips}>
              {group.items.map((item) => (
                <li key={item} className="chip">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}

export default Skills;
