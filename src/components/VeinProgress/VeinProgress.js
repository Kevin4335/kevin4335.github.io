import { useEffect, useState } from 'react';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { navLinks } from '../../data/content';
import styles from './VeinProgress.module.css';

const sectionIds = navLinks.map((link) => link.id);

/** Where each section starts, as a fraction of the total scroll distance. */
function useSectionStops() {
  const [stops, setStops] = useState([]);

  useEffect(() => {
    const measure = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (max <= 0) return;
      const navH = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--nav-h')) || 0;
      setStops(
        sectionIds
          .map((id) => document.getElementById(id))
          .filter(Boolean)
          .map((el) => Math.min(1, Math.max(0, (el.getBoundingClientRect().top + window.scrollY - navH) / max)))
      );
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(document.body);
    return () => observer.disconnect();
  }, []);

  return stops;
}

/**
 * Scroll progress drawn as a leaf vein along the nav's bottom edge: a midrib that
 * fills left→right as you scroll, with a side vein per section that lights up
 * once you reach it. Decorative.
 */
function VeinProgress() {
  const { scrollYProgress } = useScroll();
  const stops = useSectionStops();
  const [reached, setReached] = useState(0);

  // Only re-renders when the number of reached sections changes.
  const update = (v) => setReached(stops.filter((stop) => v >= stop - 0.005).length);
  useMotionValueEvent(scrollYProgress, 'change', update);

  // Sync once stops are measured (e.g. page loaded mid-scroll or via #anchor).
  useEffect(() => {
    setReached(stops.filter((stop) => scrollYProgress.get() >= stop - 0.005).length);
  }, [stops, scrollYProgress]);

  return (
    <div className={styles.root} aria-hidden="true">
      <div className={styles.track} />
      <motion.div className={styles.fill} style={{ scaleX: scrollYProgress }} />
      {stops.map((stop, i) => (
        <svg
          key={sectionIds[i]}
          viewBox="0 0 16 12"
          className={`${styles.vein} ${i % 2 ? styles.below : styles.above} ${i < reached ? styles.lit : ''}`}
          style={{ left: `${stop * 100}%` }}
        >
          <path d="M0 12 C 5 10, 10 7, 15 1" />
        </svg>
      ))}
    </div>
  );
}

export default VeinProgress;
