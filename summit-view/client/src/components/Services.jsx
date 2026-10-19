import { PencilRuler, LayoutGrid, Flame, Waves, Lightbulb, Sprout, ArrowRight } from 'lucide-react';
import { services } from '../content.js';

const icons = { PencilRuler, LayoutGrid, Flame, Waves, Lightbulb, Sprout };

export default function Services() {
  return (
    <section className="section services" id="services" aria-labelledby="services-title">
      <div className="container">
        <header className="section-head reveal">
          <p className="eyebrow">What We Do</p>
          <h2 id="services-title" className="display">Design, Build &amp; Beyond</h2>
          <p className="section-sub">
            One team from first sketch to final walkthrough, with every detail handled in-house.
          </p>
        </header>
        <ul className="services-grid">
          {services.map((s) => {
            const Icon = icons[s.icon];
            return (
              <li key={s.title} className="service-card reveal">
                <span className="service-icon">
                  <Icon size={26} strokeWidth={1.5} aria-hidden="true" />
                </span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </li>
            );
          })}
        </ul>
        <div className="center reveal">
          <a className="btn btn-primary" href="#contact">
            Start Your Project <ArrowRight size={18} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
