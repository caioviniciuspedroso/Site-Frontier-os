'use client';

import { useEffect, useRef, useState } from 'react';
import { Pause, Play } from 'lucide-react';

export function CinematicStrip() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion) {
      video.pause();
      return;
    }

    video.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
  }, []);

  function togglePlayback() {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
    } else {
      video.pause();
      setPlaying(false);
    }
  }

  return (
    <div className="film-strip">
      <video ref={videoRef} muted loop playsInline preload="metadata" aria-label="Animação da marca Frontier Vision">
        <source src="/brand/frontier-motion.mp4" type="video/mp4" />
      </video>
      <div className="film-strip-meta">
        <span>Frontier Vision / Motion study</span>
        <button type="button" onClick={togglePlayback} aria-label={playing ? 'Pausar animação' : 'Reproduzir animação'}>
          {playing ? <Pause aria-hidden="true" /> : <Play aria-hidden="true" />}
          {playing ? 'Pausar' : 'Reproduzir'}
        </button>
      </div>
    </div>
  );
}
