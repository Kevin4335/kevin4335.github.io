import { useEffect, useMemo } from 'react';
import { motion, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion';
import { contours } from 'd3-contour';
import { createNoise3D } from 'simplex-noise';
import styles from './Background.module.css';

// One tile of terrain (field units). It repeats seamlessly top-to-bottom, so it can scroll forever.
const WIDTH = 2400;
const TILE_H = 3200;
const CELL = 8; // field units per noise sample
const SCALE = 0.0015; // noise frequency per unit: lower = broader hills
const LEVELS = 10;
const INDEX_EVERY = 4; // every Nth line is a bolder "index contour", like a topo map
const RATE = 0.2; // background scroll speed relative to the page (1 = moves with the content)

/** Small seeded PRNG so the terrain is the same on every visit. */
function mulberry32(seed) {
  return () => {
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/**
 * GeoJSON MultiPolygon (grid units) → SVG path data (field units).
 * d3 closes every ring along the grid border; those border runs are dropped so tiles
 * meet without seams. Grid coords are offset by half a cell from the samples.
 */
function toPath({ coordinates }, cols, rows) {
  const onBorder = ([x, y]) => x === 0 || y === 0 || x === cols || y === rows;
  const pt = ([x, y]) => `${((x - 0.5) * CELL).toFixed(1)},${((y - 0.5) * CELL).toFixed(1)}`;
  let d = '';
  for (const polygon of coordinates) {
    for (const ring of polygon) {
      let penDown = false;
      for (let k = 1; k < ring.length; k += 1) {
        const a = ring[k - 1];
        const b = ring[k];
        if (onBorder(a) && onBorder(b)) {
          penDown = false;
        } else {
          d += penDown ? `L${pt(b)}` : `M${pt(a)}L${pt(b)}`;
          penDown = true;
        }
      }
    }
  }
  return d;
}

function buildContours() {
  const noise3D = createNoise3D(mulberry32(7));
  const cols = WIDTH / CELL + 1;
  const tileRows = TILE_H / CELL;
  const rows = tileRows + 1; // last row repeats the first, so the tile wraps
  const values = new Float64Array(cols * rows);
  // y is sampled around a circle, which makes the noise periodic over one tile height
  const radius = (TILE_H * SCALE) / (2 * Math.PI);

  for (let j = 0; j < rows; j += 1) {
    const theta = (2 * Math.PI * j) / tileRows;
    const cy = radius * Math.cos(theta);
    const cz = radius * Math.sin(theta);
    for (let i = 0; i < cols; i += 1) {
      const x = i * CELL * SCALE;
      // Two octaves: broad terrain plus a little detail
      values[j * cols + i] = noise3D(x, cy, cz) + 0.2 * noise3D(x * 2.3 + 40, cy * 2.3, cz * 2.3);
    }
  }

  const thresholds = Array.from({ length: LEVELS }, (_, k) => -1.2 + (2.4 * (k + 0.5)) / LEVELS);
  return contours()
    .size([cols, rows])
    .smooth(true)
    .thresholds(thresholds)(values)
    .map((c, k) => ({ d: toPath(c, cols, rows), index: k % INDEX_EVERY === 0 }));
}

/** Scale that lets one tile cover the viewport; the tile's on-screen height follows from it. */
function measure() {
  return Math.max(window.innerWidth / WIDTH, window.innerHeight / TILE_H);
}

/**
 * Fixed decorative backdrop: faint topographic contour lines from seeded simplex noise.
 * Two stacked copies of a seamless tile scroll with the page (slower, for depth) and wrap,
 * so the terrain keeps moving for the whole page. A soft spring eases it in and out.
 */
function Background() {
  const lines = useMemo(buildContours, []);
  const reduceMotion = useReducedMotion();
  const scale = useMotionValue(measure());

  useEffect(() => {
    const onResize = () => scale.set(measure());
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [scale]);

  const { scrollY } = useScroll();
  const smoothY = useSpring(scrollY, { stiffness: 40, damping: 20, mass: 1 });
  const y = useTransform([smoothY, scale], ([v, s]) => -((v * RATE) % (TILE_H * s)));
  const width = useTransform(scale, (s) => WIDTH * s);
  const height = useTransform(scale, (s) => 2 * TILE_H * s);

  return (
    <div className={styles.root} aria-hidden="true">
      <motion.svg
        className={styles.svg}
        style={{ width, height, y: reduceMotion ? 0 : y }}
        viewBox={`0 0 ${WIDTH} ${2 * TILE_H}`}
      >
        <defs>
          <clipPath id="bg-tile-clip">
            <rect width={WIDTH} height={TILE_H} />
          </clipPath>
          <g id="bg-tile" clipPath="url(#bg-tile-clip)">
            {lines.map((line, k) => (
              <path key={k} d={line.d} className={line.index ? styles.index : styles.line} />
            ))}
          </g>
        </defs>
        <use href="#bg-tile" />
        <use href="#bg-tile" y={TILE_H} />
      </motion.svg>
    </div>
  );
}

export default Background;
