import { useEffect } from 'react';

// Scroll-linked parallax for elements with a data-parallax="<speed>" attribute.
//   data-parallax-mode="scroll"  offset = scrollY * speed (for the hero, which starts at the top)
//   (default)                    offset = distance of the parent's center from the viewport center * speed
//   data-parallax-max="0.06"     clamp the offset to this fraction of the parent's height (for clipped images)
//   data-parallax-fade           fade out as the hero scrolls away
// Uses the CSS `translate` property so it composes with existing transforms and animations.
// Disabled when the user prefers reduced motion.
export default function useParallax() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const els = [...document.querySelectorAll('[data-parallax]')];
    let frame = 0;

    const update = () => {
      frame = 0;
      const vh = window.innerHeight;
      for (const el of els) {
        const speed = parseFloat(el.dataset.parallax) || 0;
        let y;
        if (el.dataset.parallaxMode === 'scroll') {
          if (window.scrollY > vh * 1.5) continue;
          y = window.scrollY * speed;
          if ('parallaxFade' in el.dataset) el.style.opacity = Math.max(0, 1 - window.scrollY / (vh * 0.75)).toFixed(3);
        } else {
          // Measure the parent so our own translate doesn't feed back into the calculation.
          const r = el.parentElement.getBoundingClientRect();
          if (r.bottom < -200 || r.top > vh + 200) continue;
          y = (r.top + r.height / 2 - vh / 2) * speed;
          const max = parseFloat(el.dataset.parallaxMax);
          if (max) y = Math.max(-r.height * max, Math.min(r.height * max, y));
        }
        el.style.translate = `0 ${y.toFixed(1)}px`;
      }
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      cancelAnimationFrame(frame);
      els.forEach((el) => {
        el.style.translate = '';
        el.style.opacity = '';
      });
    };
  }, []);
}
