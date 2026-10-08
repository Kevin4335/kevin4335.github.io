import heroBg from '../../assets/hero-bg.webp';
import { profile } from '../../data/content';
import Button from '../../components/Button/Button';
import styles from './Hero.module.css';

function Hero() {
  const words = profile.name.split(' ');
  const lastWord = words.pop();

  return (
    <section id="top" className={styles.hero} aria-labelledby="hero-heading">
      {/* Back layer: full-bleed image, revealed by the panel's diagonal cut */}
      <div className={styles.backdrop} aria-hidden="true">
        <img src={heroBg} alt="" className={styles.image} />
      </div>

      {/* Front layer: solid panel; the ink copy behind it outlines the cut */}
      <span className={styles.edge} aria-hidden="true" />
      <div className={styles.panel}>
        <div className={`container ${styles.content}`}>
          <h1 id="hero-heading" className={styles.name}>
            <span>{words.join(' ')} </span>
            <span className={styles.highlight}>{lastWord}</span>
          </h1>
          <p className={`mono ${styles.role}`}>{profile.role}</p>
          <div className={styles.actions}>
            <Button href="#experience">Experience</Button>
            <Button href="#contact" variant="secondary">
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
