import { useEffect, useRef, useState } from 'react';
import { contacts } from '../../data/content';
import Button from '../../components/Button/Button';
import Section from '../../components/Section/Section';
import { CheckIcon, CopyIcon } from '../../components/Icons';
import ResumeCard from './ResumeCard';
import styles from './Contact.module.css';

function CopyButton({ label, copied, onCopy }) {
  return (
    <Button
      as="button"
      type="button"
      variant="secondary"
      size="icon"
      className={styles.copy}
      onClick={onCopy}
      aria-label={copied ? `${label} copied` : `Copy ${label}`}
      title={copied ? 'Copied!' : `Copy ${label}`}
    >
      {copied ? <CheckIcon /> : <CopyIcon />}
    </Button>
  );
}

function Contact() {
  const [copied, setCopied] = useState(null);
  const timer = useRef();

  useEffect(() => () => clearTimeout(timer.current), []);

  const copy = async (id, text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(id);
      clearTimeout(timer.current);
      timer.current = setTimeout(() => setCopied(null), 2000);
    } catch {
      setCopied(null);
    }
  };

  return (
    <Section id="contact" index="05" label="Contact" title="Get In Touch">
      <p className={styles.intro}>Let's Connect</p>
      <div className={styles.layout}>
        <ul className={styles.list}>
          {contacts.map(({ id, label, value, href, external }) => (
            <li key={id} className={styles.row}>
              <span className={`mono ${styles.label}`}>{label}</span>
              <a
                href={href}
                className={`link ${styles.value}`}
                {...(external && { target: '_blank', rel: 'noopener noreferrer' })}
              >
                {value}
              </a>
              <CopyButton label={label} copied={copied === id} onCopy={() => copy(id, value)} />
            </li>
          ))}
        </ul>
        <ResumeCard />
      </div>
      <p className="visually-hidden" role="status" aria-live="polite">
        {copied ? 'Copied!' : ''}
      </p>
    </Section>
  );
}

export default Contact;
