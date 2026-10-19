import { process } from '../content.js';

export default function Process() {
  return (
    <section className="section process" id="process" aria-labelledby="process-title">
      <div className="container">
        <header className="section-head reveal">
          <p className="eyebrow eyebrow-light">Our Process</p>
          <h2 id="process-title" className="display">Design Is Just the Beginning</h2>
          <p className="section-sub">
            A clear, four-step path from idea to the evening you first light the fire pit.
          </p>
        </header>
        <ol className="process-grid">
          {process.map((s) => (
            <li key={s.step} className="process-step reveal">
              <span className="process-num" aria-hidden="true">{s.step}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
