'use client';

import { useEffect, useRef, useState } from 'react';
import { Pause, Play } from 'lucide-react';

export function CinematicStrip() {
  const stripRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const motionActiveRef = useRef(true);
  const [motionActive, setMotionActive] = useState(true);

  useEffect(() => {
    const strip = stripRef.current;
    const video = videoRef.current;
    const section = strip?.closest<HTMLElement>('.film-section');
    if (!strip || !video || !section) return;

    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const reducedMotion = motionQuery.matches;
    let stateFrame = 0;

    const setProgress = (progress: number) => {
      section.style.setProperty('--film-progress', progress.toFixed(4));
      section.style.setProperty('--film-copy-opacity', (1 - Math.min(0.16, Math.max(0, (progress - 0.86) * 1.2))).toFixed(4));
      section.style.setProperty('--film-copy-y', `${(progress * -18).toFixed(2)}px`);
      section.style.setProperty('--film-scale', (1.045 - progress * 0.045).toFixed(4));
      section.style.setProperty('--film-video-scale', (1.13 - progress * 0.08).toFixed(4));
      section.style.setProperty('--film-video-shift', `${((0.5 - progress) * 1.8).toFixed(3)}%`);
    };

    if (reducedMotion) {
      motionActiveRef.current = false;
      setProgress(0.62);
      stateFrame = window.requestAnimationFrame(() => setMotionActive(false));
    }

    let frame = 0;

    const update = () => {
      frame = 0;
      if (!motionActiveRef.current) return;

      const rect = section.getBoundingClientRect();
      const distance = section.offsetHeight - window.innerHeight;
      const rawProgress = distance > 1
        ? -rect.top / distance
        : (window.innerHeight - rect.top) / (window.innerHeight + section.offsetHeight);
      const progress = Math.min(1, Math.max(0, rawProgress));
      setProgress(progress);

      if (Number.isFinite(video.duration) && video.duration > 0) {
        const targetTime = progress * Math.max(0, video.duration - 0.08);
        if (Math.abs(video.currentTime - targetTime) > 0.025) video.currentTime = targetTime;
      }
    };

    const requestUpdate = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };

    video.pause();
    video.addEventListener('loadedmetadata', requestUpdate);
    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate);
    requestUpdate();

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      if (stateFrame) window.cancelAnimationFrame(stateFrame);
      video.removeEventListener('loadedmetadata', requestUpdate);
      window.removeEventListener('scroll', requestUpdate);
      window.removeEventListener('resize', requestUpdate);
      [
        '--film-progress',
        '--film-copy-opacity',
        '--film-copy-y',
        '--film-scale',
        '--film-video-scale',
        '--film-video-shift',
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
    <div className="film-strip" ref={stripRef}>
      <video ref={videoRef} muted playsInline preload="metadata" aria-label="Animação da marca Frontier Vision controlada pela rolagem">
        <source src="/brand/frontier-motion.mp4" type="video/mp4" />
      </video>
      <div className="film-strip-meta">
        <span>Frontier Vision / Movimento ligado à rolagem</span>
        <button type="button" onClick={toggleMotion} aria-pressed={motionActive}>
          {motionActive ? <Pause aria-hidden="true" /> : <Play aria-hidden="true" />}
          {motionActive ? 'Pausar movimento' : 'Ativar movimento'}
        </button>
      </div>
    </div>
  );
}
