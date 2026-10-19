import { useEffect, useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { business, nav } from '../content.js';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className={`site-header${scrolled ? ' is-scrolled' : ''}`}>
      <div className="container header-inner">
        <a href="#top" className="brand" onClick={close} aria-label={`${business.name}, back to top`}>
          <img src="/media/logo.png" alt={business.name} width="250" height="126" />
        </a>

        <nav className="nav-desktop" aria-label="Primary">
          {nav.map((n) => (
            <a key={n.href} href={n.href}>{n.label}</a>
          ))}
        </nav>

        <div className="header-actions">
          <a className="header-phone" href={business.phoneHref}>
            <Phone size={16} aria-hidden="true" />
            <span>{business.phone}</span>
          </a>
          <a className="btn btn-primary btn-sm" href="#contact">Free Consultation</a>
          <button
            className="menu-toggle"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
          </button>
        </div>
      </div>

      <nav id="mobile-nav" className={`nav-mobile${open ? ' is-open' : ''}`} aria-label="Mobile" hidden={!open}>
        {nav.map((n) => (
          <a key={n.href} href={n.href} onClick={close}>{n.label}</a>
        ))}
        <a className="btn btn-primary" href="#contact" onClick={close}>Get a Free Consultation</a>
        <a className="nav-mobile-phone" href={business.phoneHref}>
          <Phone size={18} aria-hidden="true" /> {business.phone}
        </a>
      </nav>
    </header>
  );
}
