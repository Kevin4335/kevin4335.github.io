import styles from './Button.module.css';

/**
 * Pill button. Renders an <a> by default; pass as="button" for actions.
 * variant: 'primary' (cream) | 'secondary' (outline; fill rises on hover)
 * size: 'md' | 'sm' | 'icon'
 */
function Button({ as: Tag = 'a', variant = 'primary', size = 'md', className = '', children, ...rest }) {
  return (
    <Tag className={`${styles.button} ${styles[variant]} ${styles[size]} ${className}`} {...rest}>
      <span className={styles.label}>{children}</span>
    </Tag>
  );
}

export default Button;
