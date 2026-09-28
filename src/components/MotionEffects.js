import React, { useEffect, useRef, useState } from 'react';

// Elements that fade/slide in as they scroll into view
const REVEAL_SELECTORS = [
  '.section-header',
  '.timeline-item',
  '.deployments-overview',
  '.deployment-card',
  '.project-card',
  '.skill-category-card',
  '.skill-card',
  '.note-card',
  '.colab-card',
  '.achievement-card',
  '.academic-card',
  '.summary-card',
  '.stat-card',
  '.contact-item',
  '.highlight-card',
  '.interests-card'
].join(',');

// Cards that get the 3D tilt + spotlight on hover
const TILT_SELECTORS = [
  '.deployment-card',
  '.project-card',
  '.skill-category-card',
  '.note-card',
  '.colab-card',
  '.achievement-card',
  '.academic-card',
  '.stat-card',
  '.summary-card',
  '.floating-card'
].join(',');

const COUNT_SELECTORS = '.stat-number';

const prefersReducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const countUp = (el) => {
  if (el.dataset.fxCounted) return;
  el.dataset.fxCounted = 'true';
  const original = el.textContent.trim();
  const match = original.match(/^(\d+(?:\.\d+)?)(.*)$/);
  if (!match) return;

  const target = parseFloat(match[1]);
  const suffix = match[2];
  const decimals = (match[1].split('.')[1] || '').length;
  const duration = 1400;
  const start = performance.now();

  const tick = (now) => {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = (target * eased).toFixed(decimals) + suffix;
    if (progress < 1) requestAnimationFrame(tick);
    else el.textContent = original;
  };
  requestAnimationFrame(tick);
};

const MotionEffects = () => {
  const [progress, setProgress] = useState(0);
  const [showTop, setShowTop] = useState(false);
  const glowRef = useRef(null);

  // Scroll progress + back-to-top visibility
  useEffect(() => {
    let ticking = false;
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? window.scrollY / max : 0);
      setShowTop(window.scrollY > 600);
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  // Scroll reveal + count-up stats
  useEffect(() => {
    const root = document.querySelector('main');
    if (!root) return undefined;

    if (prefersReducedMotion() || !('IntersectionObserver' in window)) {
      document.documentElement.classList.add('fx-no-motion');
      return undefined;
    }
    document.documentElement.classList.add('fx-motion');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          el.classList.add('fx-in');
          el.querySelectorAll(COUNT_SELECTORS).forEach(countUp);
          observer.unobserve(el);
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    const statObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          countUp(entry.target);
          statObserver.unobserve(entry.target);
        });
      },
      { threshold: 0.6 }
    );

    const seen = new WeakSet();
    const scan = () => {
      root.querySelectorAll(REVEAL_SELECTORS).forEach((el) => {
        if (seen.has(el) || el.classList.contains('fx-in')) return;
        // Don't double-animate cards nested inside another revealing card
        if (el.parentElement && el.parentElement.closest('.fx-reveal')) return;
        seen.add(el);
        const siblings = Array.from(el.parentElement ? el.parentElement.children : []);
        const index = Math.max(siblings.indexOf(el), 0);
        el.style.setProperty('--fx-delay', `${(index % 6) * 90}ms`);
        el.classList.add('fx-reveal');
        observer.observe(el);
      });
      root.querySelectorAll(COUNT_SELECTORS).forEach((el) => {
        if (seen.has(el)) return;
        seen.add(el);
        statObserver.observe(el);
      });
    };

    scan();
    let pending = null;
    const mutations = new MutationObserver(() => {
      clearTimeout(pending);
      pending = setTimeout(scan, 120);
    });
    mutations.observe(root, { childList: true, subtree: true });

    return () => {
      clearTimeout(pending);
      mutations.disconnect();
      observer.disconnect();
      statObserver.disconnect();
    };
  }, []);

  // 3D tilt, spotlight and cursor glow (mouse/trackpad only)
  useEffect(() => {
    if (prefersReducedMotion() || !window.matchMedia('(pointer: fine)').matches) return undefined;

    let frame = null;
    let lastEvent = null;
    let activeCard = null;

    const resetCard = (card) => {
      card.style.removeProperty('--fx-rx');
      card.style.removeProperty('--fx-ry');
      card.classList.remove('fx-tilting');
    };

    const apply = () => {
      frame = null;
      const e = lastEvent;
      if (!e) return;

      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
        glowRef.current.style.opacity = '1';
      }

      const card = e.target instanceof Element ? e.target.closest(TILT_SELECTORS) : null;
      if (activeCard && activeCard !== card) resetCard(activeCard);
      activeCard = card;
      if (!card) return;

      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      card.classList.add('fx-tilting');
      card.style.setProperty('--fx-mx', `${x * 100}%`);
      card.style.setProperty('--fx-my', `${y * 100}%`);
      card.style.setProperty('--fx-rx', `${(0.5 - y) * 8}deg`);
      card.style.setProperty('--fx-ry', `${(x - 0.5) * 8}deg`);
    };

    const onMove = (e) => {
      lastEvent = e;
      if (!frame) frame = requestAnimationFrame(apply);
    };
    const onLeave = () => {
      if (glowRef.current) glowRef.current.style.opacity = '0';
      if (activeCard) resetCard(activeCard);
      activeCard = null;
    };

    document.addEventListener('pointermove', onMove, { passive: true });
    document.documentElement.addEventListener('pointerleave', onLeave);
    return () => {
      if (frame) cancelAnimationFrame(frame);
      document.removeEventListener('pointermove', onMove);
      document.documentElement.removeEventListener('pointerleave', onLeave);
    };
  }, []);

  const circumference = 2 * Math.PI * 22;

  return (
    <>
      <div className="fx-progress" style={{ transform: `scaleX(${progress})` }} aria-hidden="true" />
      <div className="fx-cursor-glow" ref={glowRef} aria-hidden="true" />
      <button
        type="button"
        className={`fx-back-to-top ${showTop ? 'visible' : ''}`}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
      >
        <svg viewBox="0 0 50 50" aria-hidden="true">
          <circle className="fx-ring-track" cx="25" cy="25" r="22" />
          <circle
            className="fx-ring-fill"
            cx="25"
            cy="25"
            r="22"
            strokeDasharray={circumference}
            strokeDashoffset={circumference * (1 - progress)}
          />
        </svg>
        <span className="fx-arrow">↑</span>
      </button>
    </>
  );
};

export default MotionEffects;
