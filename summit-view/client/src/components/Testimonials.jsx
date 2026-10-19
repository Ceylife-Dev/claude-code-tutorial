import { Star } from 'lucide-react';
import { testimonials } from '../content.js';
import Sample from './Sample.jsx';

export default function Testimonials() {
  return (
    <section className="section testimonials" id="reviews" aria-labelledby="reviews-title">
      <div className="container">
        <header className="section-head reveal">
          <p className="eyebrow">Client Reviews</p>
          <h2 id="reviews-title" className="display">Kind Words from Home</h2>
        </header>
        <ul className="testimonial-grid">
          {testimonials.map((t) => (
            <li key={t.name} className="testimonial reveal">
              <figure>
                <div className="stars" role="img" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }, (_, i) => (
                    <Star key={i} size={16} fill="currentColor" strokeWidth={0} aria-hidden="true" />
                  ))}
                  <Sample />
                </div>
                <blockquote>&ldquo;{t.quote}&rdquo;</blockquote>
                <figcaption>
                  <strong>{t.name}</strong>
                  <span>{t.location}</span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
