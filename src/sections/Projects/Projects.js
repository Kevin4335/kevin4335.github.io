import { projects } from '../../data/content';
import Button from '../../components/Button/Button';
import Section from '../../components/Section/Section';
import { ArrowUpRightIcon } from '../../components/Icons';
import styles from './Projects.module.css';

function Projects() {
  return (
    <Section id="projects" index="03" label="Projects" title="Projects">
      <ul className={styles.grid}>
        {projects.map((project) => (
          <li key={project.name} className={`${styles.cell} ${project.featured ? styles.featuredCell : ''}`}>
            <article className={`card ${project.featured ? `fill-plum ${styles.featured}` : ''} ${styles.card}`}>
              <p className={`mono ${styles.context}`}>{project.context}</p>
              <h3 className={styles.name}>
                <a href={project.url} target="_blank" rel="noopener noreferrer" className={styles.cardLink}>
                  {project.name}
                  <ArrowUpRightIcon className={styles.arrow} />
                  <span className="visually-hidden"> (opens in a new tab)</span>
                </a>
              </h3>
              <p className={styles.description}>{project.description}</p>
              {project.links && (
                <ul className={styles.extraLinks}>
                  {project.links.map((link) => (
                    <li key={link.url}>
                      <Button href={link.url} target="_blank" rel="noopener noreferrer" variant="secondary" size="sm">
                        {link.label} ↗<span className="visually-hidden"> (opens in a new tab)</span>
                      </Button>
                    </li>
                  ))}
                </ul>
              )}
              <ul className={styles.tags} aria-label="Technologies">
                {project.tags.map((tag) => (
                  <li key={tag} className={`chip ${styles.tag}`}>
                    {tag}
                  </li>
                ))}
              </ul>
            </article>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export default Projects;
