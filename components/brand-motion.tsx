'use client';

import { useEffect, useId, useRef, useState } from 'react';
import type { CSSProperties } from 'react';
import { Pause, Play } from 'lucide-react';

const particles = [
  [76, 16, 1.1], [84, 28, 0.7], [66, 36, 1.4], [91, 45, 0.9],
  [72, 58, 0.6], [81, 72, 1.2], [62, 82, 0.8], [94, 88, 1.5],
  [55, 20, 0.7], [58, 68, 1], [88, 10, 0.6], [69, 91, 0.8],
];

type ParticleStyle = CSSProperties & {
  '--particle-x': string;
  '--particle-y': string;
  '--particle-size': string;
  '--particle-delay': string;
};

function FrontierMark({ className, tone }: { className: string; tone: string }) {
  const filterId = `frontier-mark-${useId().replaceAll(':', '')}`;

  return (
    <svg className={className} viewBox="0 0 500 500" focusable="false" aria-hidden="true">
      <defs>
        <filter id={filterId} x="-8%" y="-8%" width="116%" height="116%" colorInterpolationFilters="sRGB">
          <feColorMatrix
            type="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0.2126 0.7152 0.0722 0 -0.42"
            result="keyed"
          />
          <feComponentTransfer in="keyed" result="matte">
            <feFuncA type="linear" slope="3" intercept="0" />
          </feComponentTransfer>
          <feFlood floodColor={tone} result="color" />
          <feComposite in="color" in2="matte" operator="in" />
        </filter>
      </defs>
      <image href="/brand/frontier-logo.png" width="500" height="500" filter={`url(#${filterId})`} />
    </svg>
  );
}

export function BrandMotion() {
  const fieldRef = useRef<HTMLDivElement>(null);
  const motionActiveRef = useRef(true);
  const [motionActive, setMotionActive] = useState(true);

  useEffect(() => {
    const field = fieldRef.current;
    const section = field?.closest<HTMLElement>('.film-section');
    if (!field || !section) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let stateFrame = 0;
    let frame = 0;

    const setProgress = (progress: number) => {
      const arc = Math.sin(progress * Math.PI);
      section.style.setProperty('--film-progress', progress.toFixed(4));
      section.style.setProperty('--film-copy-opacity', (1 - Math.min(0.14, Math.max(0, (progress - 0.88) * 1.3))).toFixed(4));
      section.style.setProperty('--film-copy-y', `${(progress * -16).toFixed(2)}px`);
      section.style.setProperty('--brand-field-scale', (1.025 - progress * 0.025).toFixed(4));
      section.style.setProperty('--brand-halo-scale', (0.86 + progress * 0.2).toFixed(4));
      section.style.setProperty('--brand-mark-scale', (0.82 + progress * 0.2).toFixed(4));
      section.style.setProperty('--brand-mark-x', `${((0.5 - progress) * 5.2).toFixed(3)}vw`);
      section.style.setProperty('--brand-mark-y', `${(arc * -4.2).toFixed(3)}vh`);
      section.style.setProperty('--brand-mark-rotate', `${(-7 + progress * 14).toFixed(3)}deg`);
      section.style.setProperty('--brand-ghost-spread', `${(18 + arc * 36).toFixed(2)}px`);
      section.style.setProperty('--brand-orbit-rotate', `${(-18 + progress * 42).toFixed(3)}deg`);
      section.style.setProperty('--brand-scan-y', `${(-24 + progress * 148).toFixed(3)}%`);
    };

    const update = () => {
      frame = 0;
      if (!motionActiveRef.current) return;

      const rect = section.getBoundingClientRect();
      const distance = Math.max(1, section.offsetHeight - window.innerHeight);
      const progress = Math.min(1, Math.max(0, -rect.top / distance));
      setProgress(progress);
    };

    const requestUpdate = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };

    const observer = new IntersectionObserver(([entry]) => {
      field.classList.toggle('is-offscreen', !entry.isIntersecting);
      if (entry.isIntersecting) requestUpdate();
    }, { rootMargin: '100px' });

    const handleVisibility = () => field.classList.toggle('is-hidden', document.hidden);

    if (reducedMotion) {
      motionActiveRef.current = false;
      setProgress(0.58);
      stateFrame = window.requestAnimationFrame(() => setMotionActive(false));
    }

    observer.observe(field);
    document.addEventListener('visibilitychange', handleVisibility);
    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate);
    requestUpdate();

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      if (stateFrame) window.cancelAnimationFrame(stateFrame);
      observer.disconnect();
      document.removeEventListener('visibilitychange', handleVisibility);
      window.removeEventListener('scroll', requestUpdate);
      window.removeEventListener('resize', requestUpdate);
      [
        '--film-progress', '--film-copy-opacity', '--film-copy-y', '--brand-field-scale',
        '--brand-halo-scale', '--brand-mark-scale', '--brand-mark-x', '--brand-mark-y', '--brand-mark-rotate',
        '--brand-ghost-spread', '--brand-orbit-rotate', '--brand-scan-y',
      ].forEach((property) => section.style.removeProperty(property));
    };
  }, []);

  function toggleMotion() {
    const nextState = !motionActiveRef.current;
    motionActiveRef.current = nextState;
    setMotionActive(nextState);
    if (nextState) window.dispatchEvent(new Event('scroll'));
  }

  return (
    <div className={`brand-motion${motionActive ? '' : ' is-paused'}`} ref={fieldRef}>
      <div className="brand-motion-stage" aria-hidden="true">
        <div className="brand-motion-halo" />
        <svg className="brand-motion-orbits" viewBox="0 0 1000 1000">
          <g className="brand-motion-orbit-spin">
            <circle cx="500" cy="500" r="368" />
            <circle cx="500" cy="500" r="286" />
            <circle cx="500" cy="500" r="208" />
            <path d="M132 500H868M500 132V868" />
            <path d="M240 240 760 760M760 240 240 760" />
          </g>
        </svg>

        <div className="brand-motion-ghost brand-motion-ghost-a"><FrontierMark className="brand-motion-logo" tone="#d2462e" /></div>
        <div className="brand-motion-ghost brand-motion-ghost-b"><FrontierMark className="brand-motion-logo" tone="#9c311f" /></div>
        <div className="brand-motion-mark"><FrontierMark className="brand-motion-logo" tone="#fff8ef" /></div>

        <div className="brand-motion-particles">
          {particles.map(([x, y, size], index) => (
            <i
              key={`${x}-${y}`}
              style={{
                '--particle-x': `${x}%`,
                '--particle-y': `${y}%`,
                '--particle-size': `${size}px`,
                '--particle-delay': `${index * -0.7}s`,
              } as ParticleStyle}
            />
          ))}
        </div>
        <span className="brand-motion-scan" />
      </div>

      <div className="brand-motion-meta">
        <span>Frontier Vision / Marca viva ligada à rolagem</span>
        <button type="button" onClick={toggleMotion} aria-pressed={motionActive}>
          {motionActive ? <Pause aria-hidden="true" /> : <Play aria-hidden="true" />}
          {motionActive ? 'Pausar movimento' : 'Ativar movimento'}
        </button>
      </div>
    </div>
  );
}
