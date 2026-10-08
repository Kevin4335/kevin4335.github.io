import styles from './Background.module.css';

/** Fixed decorative backdrop: a faint dotted grid. Static. */
function Background() {
  return <div className={styles.root} aria-hidden="true" />;
}

export default Background;
