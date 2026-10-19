import { projects } from '../content.js';
import Sample from './Sample.jsx';

export default function Projects() {
  return (
    <section className="section projects" id="projects" aria-labelledby="projects-title">
      <div className="container">
        <header className="section-head reveal">
          <p className="eyebrow">Our Work</p>
          <h2 id="projects-title" className="display">Featured Projects</h2>
        </header>
      </div>

      {projects.map((p, i) => (
        <article key={p.title} className={`project${i % 2 ? ' is-reversed' : ''}`} aria-labelledby={`project-${i}`}>
          <figure className="project-media reveal">
            <img src={p.image} alt={p.alt} width="768" height="511" loading="lazy" data-parallax="-0.12" data-parallax-max="0.06" />
          </figure>
          <div className="project-body reveal">
            <p className="eyebrow">Featured Project <Sample /></p>
            <h3 id={`project-${i}`} className="project-title">{p.title}</h3>
            <p>{p.text}</p>
            <dl className="project-stats">
              <div><dt>Location</dt><dd>{p.location}</dd></div>
              <div><dt>Budget</dt><dd>{p.budget}</dd></div>
              <div><dt>Design Time</dt><dd>{p.design}</dd></div>
              <div><dt>Installation</dt><dd>{p.install}</dd></div>
            </dl>
          </div>
        </article>
      ))}
    </section>
  );
}
