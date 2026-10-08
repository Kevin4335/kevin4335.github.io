import { motion, useReducedMotion } from 'framer-motion';

// The site's single reveal: slow fade + small rise, once.
const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const viewport = { once: true, amount: 0.1 };

/** Reveals its content once when scrolled into view (instant with reduced motion). */
export function Reveal({ as = 'div', children, ...rest }) {
  const Tag = motion[as];
  const initial = useReducedMotion() ? false : 'hidden';
  return (
    <Tag variants={fadeUp} initial={initial} whileInView="visible" viewport={viewport} {...rest}>
      {children}
    </Tag>
  );
}
