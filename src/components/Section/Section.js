import { Reveal } from '../motion';
import styles from './Section.module.css';

function Section({ id, index, label, title, children }) {
  const headingId = `${id}-heading`;
  return (
    <section id={id} className={styles.section} aria-labelledby={headingId}>
      <Reveal className={`container ${styles.inner}`}>
        <header className={styles.header}>
          <p className={`mono ${styles.label}`}>
            {index} / {label}
          </p>
          <h2 id={headingId} className={styles.title}>
            {title}
          </h2>
        </header>
        {children}
      </Reveal>
    </section>
  );
}

export default Section;
