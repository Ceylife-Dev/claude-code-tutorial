import { MapPin } from 'lucide-react';
import { business } from '../content.js';

export default function Intro() {
  return (
    <section className="section intro" id="intro" aria-labelledby="intro-title">
      <div className="container intro-grid">
        <div className="intro-copy reveal">
          <p className="eyebrow">Summit View Landscapes</p>
          <h2 id="intro-title" className="display">Live More of What You Love</h2>
          <p className="lead">
            Summit View Landscapes is Austin&rsquo;s outdoor living specialist. We create backyards designed
            for real life: slow mornings, long dinners, and evenings that stretch out under the Texas sky.
          </p>
          <p>
            Every space we build is designed for the Central Texas climate, from limestone and native
            plantings to lighting and drainage that hold up to summer heat and spring storms.
          </p>
          <div className="areas">
            <p className="areas-label">
              <MapPin size={16} aria-hidden="true" /> Proudly serving
            </p>
            <ul className="areas-list">
              {business.serviceAreas.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
          </div>
          <a className="btn btn-outline" href="#process">How We Work</a>
        </div>
        <figure className="intro-media reveal">
          <img
            src="/media/pergola-lawn.jpg"
            data-parallax="-0.08"
            alt="Backyard at dusk with a lit lawn, landscape lighting and a pergola with string lights"
            width="768"
            height="511"
            loading="lazy"
          />
        </figure>
      </div>
    </section>
  );
}
