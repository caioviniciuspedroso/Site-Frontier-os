'use client';

import { useEffect, useRef } from 'react';

type Ribbon = {
  base: number;
  drift: number;
  amplitude: number;
  frequency: number;
  phase: number;
  spread: number;
  strands: number;
  colors: [string, string, string];
};

const ribbons: Ribbon[] = [
  {
    base: 0.48,
    drift: 0.12,
    amplitude: 0.105,
    frequency: 5.2,
    phase: 0,
    spread: 84,
    strands: 30,
    colors: ['rgba(230,219,205,0)', 'rgba(255,248,239,0.92)', 'rgba(230,219,205,0)'],
  },
  {
    base: 0.61,
    drift: -0.08,
    amplitude: 0.075,
    frequency: 4.1,
    phase: 2.4,
    spread: 62,
    strands: 24,
    colors: ['rgba(156,49,31,0)', 'rgba(210,70,46,0.8)', 'rgba(156,49,31,0)'],
  },
  {
    base: 0.34,
    drift: 0.04,
    amplitude: 0.052,
    frequency: 6.4,
    phase: 4.7,
    spread: 38,
    strands: 15,
    colors: ['rgba(156,49,31,0)', 'rgba(185,59,38,0.42)', 'rgba(156,49,31,0)'],
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

    const drawRibbon = (ribbon: Ribbon, time: number) => {
      const gradient = context.createLinearGradient(0, 0, width, 0);
      gradient.addColorStop(0, ribbon.colors[0]);
      gradient.addColorStop(0.46, ribbon.colors[1]);
      gradient.addColorStop(1, ribbon.colors[2]);
      context.strokeStyle = gradient;
      context.shadowColor = ribbon.colors[1];
      context.shadowBlur = 12;

      for (let strand = 0; strand < ribbon.strands; strand += 1) {
        const strandPosition = ribbon.strands === 1 ? 0 : strand / (ribbon.strands - 1) - 0.5;
        context.globalAlpha = 0.14 + (1 - Math.abs(strandPosition) * 1.6) * 0.38;
        context.lineWidth = strand % 7 === 0 ? 1.55 : 0.72;
        context.beginPath();

        for (let step = 0; step <= 92; step += 1) {
          const progress = step / 92;
          const envelope = Math.sin(Math.PI * progress) ** 0.72;
          const flow = Math.sin(progress * ribbon.frequency + time * 0.00034 + ribbon.phase);
          const detail = Math.sin(progress * 13.2 - time * 0.00021 + ribbon.phase * 1.7) * 0.34;
          const x = progress * width;
          const y = height * (ribbon.base + progress * ribbon.drift)
            + (flow + detail) * height * ribbon.amplitude
            + strandPosition * ribbon.spread * envelope;

          if (step === 0) context.moveTo(x, y);
          else context.lineTo(x, y);
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

      const vignette = context.createRadialGradient(width * 0.48, height * 0.52, width * 0.08, width * 0.5, height * 0.5, width * 0.72);
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
