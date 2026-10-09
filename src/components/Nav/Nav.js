import { useEffect, useState } from 'react';
import { navLinks, profile } from '../../data/content';
import { CloseIcon, MenuIcon } from '../Icons';
import VeinProgress from '../VeinProgress/VeinProgress';
import useActiveSection from './useActiveSection';
import styles from './Nav.module.css';

const sectionIds = navLinks.map((link) => link.id);
// The hero ('top') is watched too, so no link is marked current while it's in view
const watchedIds = ['top', ...sectionIds];

function Nav() {
  const [open, setOpen] = useState(false);
  const active = useActiveSection(watchedIds);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    document.documentElement.classList.add('menu-open');
    window.addEventListener('keydown', onKey);
    return () => {
      document.documentElement.classList.remove('menu-open');
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className={styles.header}>
      <nav className={`container ${styles.nav}`} aria-label="Primary">
        <a href="#top" className={styles.brand} onClick={close}>
          {profile.name}
        </a>

        <button
          type="button"
          className={styles.toggle}
          aria-expanded={open}
          aria-controls="nav-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>

        <ul id="nav-menu" className={`${styles.links} ${open ? styles.open : ''}`}>
          {navLinks.map(({ id, label }, i) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={styles.link}
                aria-current={active === id ? 'location' : undefined}
                onClick={close}
              >
                <span className={`mono ${styles.num}`} aria-hidden="true">
                  0{i + 1}
                </span>
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <VeinProgress />
    </header>
  );
}

export default Nav;
