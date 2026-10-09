import { motion, useReducedMotion } from 'framer-motion';
import styles from './HeroVeins.module.css';

// Midrib: one cubic curve sweeping from the bottom-left up toward the cut (viewBox 0 0 600 800).
const P0 = [-60, 860];
const P1 = [130, 560];
const P2 = [180, 300];
const P3 = [320, -40];

function point(t) {
  const u = 1 - t;
  const a = u * u * u, b = 3 * u * u * t, c = 3 * u * t * t, d = t * t * t;
  return [0, 1].map((i) => a * P0[i] + b * P1[i] + c * P2[i] + d * P3[i]);
}

function tangent(t) {
  const u = 1 - t;
  const v = [0, 1].map(
    (i) => 3 * u * u * (P1[i] - P0[i]) + 6 * u * t * (P2[i] - P1[i]) + 3 * t * t * (P3[i] - P2[i])
  );
  const len = Math.hypot(v[0], v[1]);
  return [v[0] / len, v[1] / len];
}

const midrib = `M ${P0} C ${P1} ${P2} ${P3}`;

/**
 * Side veins arc off the midrib and bend toward the tip, like the leaf in the photo.
 * side = 1 → up-left (long), side = -1 → down-right (shorter, toward the copy).
 */
const veins = [];
for (let i = 0; i < 11; i += 1) {
  const t = 0.08 + i * 0.075;
  for (const side of [1, -1]) {
    const [x, y] = point(t);
    const [tx, ty] = tangent(t);
    const [nx, ny] = [ty * side, -tx * side]; // perpendicular, pointing to this side
    const len = (side === 1 ? 260 : 210) * (0.35 + Math.sin(Math.PI * t));
    const ctrl = [x + nx * len * 0.75, y + ny * len * 0.75];
    const end = [x + nx * len + tx * len * 0.55, y + ny * len + ty * len * 0.55];
    veins.push({
      d: `M ${x.toFixed(1)} ${y.toFixed(1)} Q ${ctrl.map((n) => n.toFixed(1))} ${end.map((n) => n.toFixed(1))}`,
      delay: 0.5 + t * 1.2,
    });
  }
}

/** Decorative leaf-vein line drawing filling the hero panel's left side; draws in once on load. */
function HeroVeins() {
  const reduceMotion = useReducedMotion();
  const draw = (delay, duration) =>
    reduceMotion
      ? {}
      : {
          initial: { pathLength: 0 },
          animate: { pathLength: 1 },
          transition: { delay, duration, ease: [0.2, 0.8, 0.2, 1] },
        };

  return (
    <div className={styles.root} aria-hidden="true">
      <svg className={styles.svg} viewBox="0 0 600 800" preserveAspectRatio="xMinYMax slice">
        {veins.map((v) => (
          <motion.path key={v.d} d={v.d} className={styles.vein} {...draw(v.delay, 1.4)} />
        ))}
        <motion.path d={midrib} className={styles.midrib} {...draw(0.1, 1.8)} />
      </svg>
    </div>
  );
}

export default HeroVeins;
