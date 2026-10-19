import { business, nav } from '../content.js';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <span className="footer-logo">
            <img src="/media/logo.png" alt={business.name} width="250" height="126" loading="lazy" />
          </span>
          <p>Custom landscape design and outdoor living for Austin and the Texas Hill Country.</p>
        </div>
        <nav aria-label="Footer">
          <h2 className="footer-heading">Explore</h2>
          <ul>
            {nav.map((n) => (
              <li key={n.href}><a href={n.href}>{n.label}</a></li>
            ))}
          </ul>
        </nav>
        <div>
          <h2 className="footer-heading">Contact</h2>
          <ul>
            <li><a href={business.phoneHref}>{business.phone}</a></li>
            <li><a href={`mailto:${business.email}`}>{business.email}</a></li>
            <li>{business.city}</li>
          </ul>
        </div>
        <div>
          <h2 className="footer-heading">Service Areas</h2>
          <p className="footer-areas">{business.serviceAreas.join(' · ')}</p>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>&copy; {new Date().getFullYear()} {business.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}
