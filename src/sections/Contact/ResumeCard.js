import { resume } from '../../data/content';
import styles from './ResumeCard.module.css';

/** Little tilted résumé page with a download badge. */
function ResumeIcon() {
  return (
    <svg viewBox="0 0 64 80" className={styles.icon} aria-hidden="true" focusable="false">
      {/* page with a folded corner */}
      <path className={styles.page} d="M6 4h38l14 14v54a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4z" />
      <path className={styles.fold} d="M44 4v10a4 4 0 0 0 4 4h10" />
      {/* header: avatar + name line */}
      <circle className={styles.accent} cx="15" cy="20" r="6" />
      <rect className={styles.accent} x="25" y="15" width="16" height="4" rx="2" />
      <rect className={styles.line} x="25" y="22" width="11" height="3" rx="1.5" />
      {/* body text lines */}
      <rect className={styles.line} x="9" y="34" width="40" height="3" rx="1.5" />
      <rect className={styles.line} x="9" y="41" width="34" height="3" rx="1.5" />
      <rect className={styles.line} x="9" y="48" width="38" height="3" rx="1.5" />
      <rect className={styles.line} x="9" y="55" width="24" height="3" rx="1.5" />
      {/* download badge */}
      <circle className={styles.badge} cx="50" cy="66" r="11" />
      <path className={styles.arrow} d="M50 60v10m-4-4 4 4 4-4" />
    </svg>
  );
}

function ResumeCard() {
  return (
    <a href={resume.href} download={resume.filename} className={styles.card}>
      <ResumeIcon />
      <span className={styles.text}>
        <span className={styles.title}>Download resume</span>
        <span className={`mono ${styles.meta}`}>PDF · 1 page</span>
      </span>
    </a>
  );
}

export default ResumeCard;
