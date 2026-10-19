import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <img
        className="hero-bg"
        data-parallax="0.4"
        data-parallax-mode="scroll"
        src="/media/grand-approach.jpg"
        alt=""
        width="768"
        height="511"
        fetchpriority="high"
      />
      <div className="hero-overlay" aria-hidden="true" />
      <div className="container hero-content" data-parallax="0.2" data-parallax-mode="scroll" data-parallax-fade>
        <p className="eyebrow eyebrow-light">Custom Landscaping · Austin &amp; the Texas Hill Country</p>
        <h1 id="hero-title" className="hero-title">
          Elevate
          <br />
          Every Evening
        </h1>
        <p className="hero-sub">
          We design and build outdoor living spaces that make home feel like a getaway, from the first
          cup of coffee to the last glow of the fire pit.
        </p>
        <div className="hero-ctas">
          <a className="btn btn-primary btn-lg" href="#contact">Get a Free Consultation</a>
          <a className="btn btn-ghost-light btn-lg" href="#projects">View Our Work</a>
        </div>
      </div>
      <a className="scroll-cue" href="#intro" aria-label="Scroll to learn more" data-parallax="0" data-parallax-mode="scroll" data-parallax-fade>
        <span>scroll</span>
        <ChevronDown size={20} aria-hidden="true" />
      </a>
    </section>
  );
}
