import { profile } from '../../data/content';
import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container mono ${styles.inner}`}>
        <p>
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        <p>Built with React &amp; Framer Motion</p>
      </div>
    </footer>
  );
}

export default Footer;
