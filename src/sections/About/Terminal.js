import { useEffect, useRef, useState } from 'react';
import asciiPortrait from '../../data/asciiPortrait';
import { profile, projects, resume, skills } from '../../data/content';
import styles from './Terminal.module.css';

const QUICK = ['whoami', 'ls projects', 'cat stack.txt', 'img2txt me.jpg', 'wget resume.pdf'];

function downloadResume() {
  const a = document.createElement('a');
  a.href = resume.href;
  a.download = resume.filename;
  a.click();
}

// Static outputs, derived from the site's content. A string result prints as preformatted art.
const COMMANDS = {
  help: () => [`commands: ${[...QUICK, 'clear'].join(', ')}`],
  whoami: () => [profile.name, profile.role],
  'ls projects': () => projects.map((p) => p.name),
  'cat stack.txt': () => skills.slice(0, 5).map((g) => `${g.title}: ${g.items.slice(0, 4).join(', ')}`),
  'img2txt me.jpg': () => asciiPortrait,
  'wget resume.pdf': () => {
    downloadResume();
    return [`Saving to: '${resume.filename}'`, `resume.pdf  100%[====================>]  saved`];
  },
};

/**
 * Tiny canned-command terminal. Inert until clicked; prints static text.
 * `fill`: on desktop, stretch to the parent's height instead of a fixed one.
 */
function Terminal({ fill = false, className = '' }) {
  const [lines, setLines] = useState([]);
  const [value, setValue] = useState('');
  const inputRef = useRef(null);
  const bodyRef = useRef(null);

  // Bring the newest entry into view from its first line (tall art would otherwise show its bottom)
  useEffect(() => {
    const body = bodyRef.current;
    const latest = body?.querySelector(`.${styles.entry}:last-of-type`);
    if (!body) return;
    body.scrollTop = latest ? Math.min(latest.offsetTop - 8, body.scrollHeight) : 0;
  }, [lines]);

  const run = (raw) => {
    const cmd = raw.trim().replace(/\s+/g, ' ').toLowerCase();
    if (!cmd) return;
    if (cmd === 'clear') {
      setLines([]);
      return;
    }
    const output = COMMANDS[cmd] ? COMMANDS[cmd]() : [`command not found: ${cmd}. try "help"`];
    setLines((prev) => [...prev, { cmd, output }]);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    run(value);
    setValue('');
  };

  return (
    <div className={`mono ${styles.terminal} ${fill ? styles.fill : ''} ${className}`}>
      <div className={styles.bar} aria-hidden="true">
        <span className={styles.dots}>
          <span />
          <span />
          <span />
        </span>
        <span>terminal</span>
      </div>

      {/* Clicking anywhere in the body focuses the prompt */}
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */}
      <div ref={bodyRef} className={styles.body} onClick={() => inputRef.current?.focus()}>
        <div role="log" aria-live="polite" aria-label="Terminal output">
          {lines.length === 0 && <p className={styles.hint}>click to try a command — or type "help"</p>}
          {lines.map(({ cmd, output }, i) => (
            <div key={i} className={styles.entry}>
              <p>
                <span className={styles.ps1} aria-hidden="true">
                  ${' '}
                </span>
                {cmd}
              </p>
              {typeof output === 'string' ? (
                <pre className={styles.art} role="img" aria-label={`ASCII portrait of ${profile.name}`}>
                  {output}
                </pre>
              ) : (
                output.map((line) => (
                  <p key={line} className={styles.out}>
                    {line}
                  </p>
                ))
              )}
            </div>
          ))}
        </div>

        <form className={styles.prompt} onSubmit={onSubmit}>
          <span className={styles.ps1} aria-hidden="true">
            $
          </span>
          <input
            ref={inputRef}
            className={styles.input}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            aria-label="Terminal command"
            autoComplete="off"
            autoCapitalize="off"
            spellCheck="false"
          />
        </form>
      </div>

      <div className={styles.quick}>
        {QUICK.map((cmd) => (
          <button key={cmd} type="button" className={styles.quickBtn} onClick={() => run(cmd)}>
            {cmd}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Terminal;
