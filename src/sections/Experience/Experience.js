import { coursework, experience } from '../../data/content';
import Section from '../../components/Section/Section';
import styles from './Experience.module.css';

function Publications({ groups }) {
  return groups.map((group) => (
    <div key={group.heading} className={styles.pubGroup}>
      <h4 className={`mono ${styles.miniLabel}`}>{group.heading}</h4>
      <ul className={styles.pubList}>
        {group.items.map((pub) => (
          <li key={pub.title}>
            {pub.authors && `${pub.authors} `}
            <em>{pub.title}</em>
            {pub.venue && `. ${pub.venue} `}
            {pub.url && (
              <a href={pub.url} target="_blank" rel="noopener noreferrer" className={`link ${styles.pubLink}`}>
                {pub.url}
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  ));
}

function Experience() {
  return (
    <Section id="experience" index="02" label="Experience" title="Experience">
      <ol className={styles.timeline}>
        {experience.map((job) => (
          <li key={job.org} className={styles.item}>
            <span className={styles.node} aria-hidden="true" />
            <article className={styles.entry}>
              <header className={styles.head}>
                <img src={job.logo} alt={job.logoAlt} width="44" height="44" className={styles.logo} />
                <div>
                  <h3 className={styles.role}>{job.role}</h3>
                  <p className={styles.org}>{job.org}</p>
                </div>
                <p className={`mono ${styles.dates}`}>{job.dates}</p>
              </header>
              <p className={styles.description}>{job.description}</p>
              {job.publications && <Publications groups={job.publications} />}
            </article>
          </li>
        ))}
      </ol>

      <h3 className={styles.courseTitle}>Coursework</h3>
      <div className={styles.courseGroups}>
        {coursework.map(({ group, courses }) => (
          <section key={group} aria-label={group}>
            <h4 className={`mono ${styles.miniLabel}`}>{group}</h4>
            <ul className={styles.courses}>
              {courses.map(({ code, name, inProgress }) => (
                <li key={code} className={styles.course}>
                  <span className={`mono ${styles.courseCode}`}>{code}</span>
                  <span className={styles.courseName}>{name}</span>
                  {inProgress && <span className={`mono ${styles.badge}`}>In progress</span>}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </Section>
  );
}

export default Experience;
