import { about, education, profile } from '../../data/content';
import Section from '../../components/Section/Section';
import Terminal from './Terminal';
import styles from './About.module.css';

function About() {
  return (
    <Section id="about" index="01" label="About" title="About Me">
      <div className={styles.grid}>
        <div className={styles.side}>
          <figure className={styles.frame}>
            <img src={profile.headshot} alt={profile.name} width="800" height="800" className={styles.photo} />
          </figure>
          <Terminal fill className={styles.terminal} />
        </div>

        <div className={styles.textCol}>
          <div className={styles.bio}>
            {about.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>

          <h3 className={`mono ${styles.label}`}>Education</h3>
          <ul className={styles.facts}>
            {education.map((item) => (
              <li key={item.school} className={styles.fact}>
                <img src={item.logo} alt="" width="40" height="40" className={styles.logo} />
                <div>
                  <p className={styles.school}>{item.school}</p>
                  <p className={styles.degree}>{item.degree}</p>
                  <p className={`mono ${styles.detail}`}>{item.detail}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}

export default About;
