'use client';

import { useEffect, useRef } from 'react';

type Ribbon = {
  start: number;
  end: number;
  base: number;
  drift: number;
  amplitude: number;
  frequency: number;
  phase: number;
  thickness: number;
  speed: number;
  shells: number;
  filaments: number;
  glow: string;
  colors: [string, string, string, string];
};

const ribbons: Ribbon[] = [
  {
    start: 0.22,
    end: 1.18,
    base: 0.22,
    drift: 0.33,
    amplitude: 0.12,
    frequency: 5.1,
    phase: 2.1,
    thickness: 0.1,
    speed: 0.00017,
    shells: 5,
    filaments: 16,
    glow: 'rgba(210,70,46,0.72)',
    colors: ['rgba(76,16,8,0)', 'rgba(156,49,31,0.2)', 'rgba(210,70,46,0.76)', 'rgba(76,16,8,0)'],
  },
  {
    start: -0.16,
    end: 1.12,
    base: 0.18,
    drift: 0.48,
    amplitude: 0.14,
    frequency: 5.8,
    phase: 0,
    thickness: 0.205,
    speed: 0.00013,
    shells: 9,
    filaments: 38,
    glow: 'rgba(255,232,198,0.86)',
    colors: ['rgba(106,71,43,0)', 'rgba(230,194,150,0.54)', 'rgba(255,248,239,0.96)', 'rgba(132,78,45,0)'],
  },
  {
    start: -0.08,
    end: 1.1,
    base: 0.62,
    drift: -0.02,
    amplitude: 0.08,
    frequency: 4.3,
    phase: 3.4,
    thickness: 0.075,
    speed: -0.0001,
    shells: 4,
    filaments: 13,
    glow: 'rgba(185,59,38,0.5)',
    colors: ['rgba(80,18,10,0)', 'rgba(126,34,21,0.16)', 'rgba(185,59,38,0.52)', 'rgba(80,18,10,0)'],
  },
];

export function HeroWave() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');
    const container = canvas?.parentElement;
    if (!canvas || !context || !container) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let width = 1;
    let height = 1;
    let ratio = 1;
    let frame = 0;
    let visible = true;
    let pageVisible = !document.hidden;
    let lastPaint = 0;

    const point = (ribbon: Ribbon, progress: number, time: number, offset = 0) => {
      const envelope = Math.sin(Math.PI * progress) ** 0.66;
      const breath = 0.78 + Math.sin(progress * 7.4 - time * ribbon.speed * 0.72 + ribbon.phase) * 0.22;
      const flow = Math.sin(progress * ribbon.frequency + time * ribbon.speed + ribbon.phase);
      const fold = Math.sin(progress * 12.6 - time * ribbon.speed * 0.62 + ribbon.phase * 1.7) * 0.28;
      const x = width * (ribbon.start + (ribbon.end - ribbon.start) * progress);
      const center = height * (ribbon.base + progress * ribbon.drift)
        + (flow + fold) * height * ribbon.amplitude * envelope;
      const halfWidth = height * ribbon.thickness * envelope * breath;
      return { x, y: center + halfWidth * offset };
    };

    const drawRibbon = (ribbon: Ribbon, time: number) => {
      const gradient = context.createLinearGradient(width * ribbon.start, height * 0.08, width * ribbon.end, height * 0.86);
      gradient.addColorStop(0, ribbon.colors[0]);
      gradient.addColorStop(0.24, ribbon.colors[1]);
      gradient.addColorStop(0.58, ribbon.colors[2]);
      gradient.addColorStop(1, ribbon.colors[3]);

      context.shadowColor = ribbon.glow;
      context.shadowBlur = 26;

      for (let shell = ribbon.shells - 1; shell >= 0; shell -= 1) {
        const inset = ribbon.shells === 1 ? 0 : shell / (ribbon.shells - 1);
        const shellWidth = 1 - inset * 0.72;
        context.beginPath();

        for (let step = 0; step <= 120; step += 1) {
          const progress = step / 120;
          const current = point(ribbon, progress, time + shell * 38, -shellWidth);
          if (step === 0) context.moveTo(current.x, current.y);
          else context.lineTo(current.x, current.y);
        }

        for (let step = 120; step >= 0; step -= 1) {
          const progress = step / 120;
          const current = point(ribbon, progress, time + shell * 38, shellWidth);
          context.lineTo(current.x, current.y);
        }

        context.closePath();
        context.fillStyle = gradient;
        context.globalAlpha = 0.055 + (1 - inset) * 0.085;
        context.fill();
      }

      context.shadowBlur = 10;
      context.strokeStyle = gradient;
      for (let filament = 0; filament < ribbon.filaments; filament += 1) {
        const position = ribbon.filaments === 1 ? 0 : filament / (ribbon.filaments - 1) * 1.84 - 0.92;
        context.globalAlpha = 0.13 + (1 - Math.abs(position)) * 0.35;
        context.lineWidth = filament % 9 === 0 ? 1.3 : 0.58;
        context.beginPath();

        for (let step = 0; step <= 120; step += 1) {
          const progress = step / 120;
          const ripple = Math.sin(progress * 16 + filament * 0.43 - time * ribbon.speed * 0.82) * 0.06;
          const current = point(ribbon, progress, time + filament * 7, position + ripple);
          if (step === 0) context.moveTo(current.x, current.y);
          else context.lineTo(current.x, current.y);
        }

        context.stroke();
      }
    };

    const paint = (time: number) => {
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      context.clearRect(0, 0, width, height);
      context.fillStyle = '#050505';
      context.fillRect(0, 0, width, height);
      context.globalCompositeOperation = 'screen';
      ribbons.forEach((ribbon) => drawRibbon(ribbon, time));
      context.globalCompositeOperation = 'source-over';
      context.globalAlpha = 1;
      context.shadowBlur = 0;

      const vignette = context.createRadialGradient(width * 0.5, height * 0.48, width * 0.08, width * 0.5, height * 0.5, width * 0.74);
      vignette.addColorStop(0, 'rgba(5,5,5,0)');
      vignette.addColorStop(0.68, 'rgba(5,5,5,0.12)');
      vignette.addColorStop(1, 'rgba(5,5,5,0.88)');
      context.fillStyle = vignette;
      context.fillRect(0, 0, width, height);
    };

    const animate = (time: number) => {
      frame = 0;
      if (!visible || !pageVisible || reducedMotion) return;
      if (time - lastPaint >= 32) {
        paint(time);
        lastPaint = time;
      }
      frame = window.requestAnimationFrame(animate);
    };

    const start = () => {
      if (frame || reducedMotion || !visible || !pageVisible) return;
      frame = window.requestAnimationFrame(animate);
    };

    const resize = () => {
      const bounds = container.getBoundingClientRect();
      ratio = Math.min(window.devicePixelRatio || 1, 1.5);
      width = Math.max(1, Math.round(bounds.width));
      height = Math.max(1, Math.round(bounds.height));
      canvas.width = Math.round(width * ratio);
      canvas.height = Math.round(height * ratio);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      paint(reducedMotion ? 3600 : performance.now());
    };

    const resizeObserver = new ResizeObserver(resize);
    const intersectionObserver = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (!visible && frame) {
        window.cancelAnimationFrame(frame);
        frame = 0;
      }
      start();
    }, { rootMargin: '100px' });

    const handleVisibility = () => {
      pageVisible = !document.hidden;
      if (!pageVisible && frame) {
        window.cancelAnimationFrame(frame);
        frame = 0;
      }
      start();
    };

    resizeObserver.observe(container);
    intersectionObserver.observe(canvas);
    document.addEventListener('visibilitychange', handleVisibility);
    resize();
    start();

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      document.removeEventListener('visibilitychange', handleVisibility);
    };
  }, []);

  return <canvas ref={canvasRef} className="hero-wave-canvas" aria-hidden="true" />;
}
