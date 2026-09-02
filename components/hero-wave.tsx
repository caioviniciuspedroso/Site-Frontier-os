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
    shells: 4,
    filaments: 10,
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
    shells: 6,
    filaments: 24,
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
    shells: 3,
    filaments: 8,
    glow: 'rgba(185,59,38,0.5)',
    colors: ['rgba(80,18,10,0)', 'rgba(126,34,21,0.16)', 'rgba(185,59,38,0.52)', 'rgba(80,18,10,0)'],
  },
];

const CURVE_STEPS = 76;
const DESKTOP_PIXEL_BUDGET = 1_400_000;
const MOBILE_PIXEL_BUDGET = 700_000;

export function HeroWave() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');
    const container = canvas?.parentElement;
    if (!canvas || !context || !container) return;

    let width = 1;
    let height = 1;
    let ratio = 1;
    let resizeFrame = 0;

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

      context.save();
      context.strokeStyle = gradient;
      context.globalAlpha = 0.16;
      context.lineWidth = Math.max(18, height * ribbon.thickness * 0.72);
      context.shadowColor = ribbon.glow;
      context.shadowBlur = 18;
      context.beginPath();

      for (let step = 0; step <= CURVE_STEPS; step += 1) {
        const progress = step / CURVE_STEPS;
        const current = point(ribbon, progress, time);
        if (step === 0) context.moveTo(current.x, current.y);
        else context.lineTo(current.x, current.y);
      }

      context.stroke();
      context.restore();
      context.shadowBlur = 0;

      for (let shell = ribbon.shells - 1; shell >= 0; shell -= 1) {
        const inset = ribbon.shells === 1 ? 0 : shell / (ribbon.shells - 1);
        const shellWidth = 1 - inset * 0.72;
        context.beginPath();

        for (let step = 0; step <= CURVE_STEPS; step += 1) {
          const progress = step / CURVE_STEPS;
          const current = point(ribbon, progress, time + shell * 38, -shellWidth);
          if (step === 0) context.moveTo(current.x, current.y);
          else context.lineTo(current.x, current.y);
        }

        for (let step = CURVE_STEPS; step >= 0; step -= 1) {
          const progress = step / CURVE_STEPS;
          const current = point(ribbon, progress, time + shell * 38, shellWidth);
          context.lineTo(current.x, current.y);
        }

        context.closePath();
        context.fillStyle = gradient;
        context.globalAlpha = 0.055 + (1 - inset) * 0.085;
        context.fill();
      }

      context.strokeStyle = gradient;
      for (let filament = 0; filament < ribbon.filaments; filament += 1) {
        const position = ribbon.filaments === 1 ? 0 : filament / (ribbon.filaments - 1) * 1.84 - 0.92;
        context.globalAlpha = 0.13 + (1 - Math.abs(position)) * 0.35;
        context.lineWidth = filament % 9 === 0 ? 1.3 : 0.58;
        context.beginPath();

        for (let step = 0; step <= CURVE_STEPS; step += 1) {
          const progress = step / CURVE_STEPS;
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

    const render = () => {
      const bounds = container.getBoundingClientRect();
      width = Math.max(1, Math.round(bounds.width));
      height = Math.max(1, Math.round(bounds.height));
      const pixelBudget = width < 768 ? MOBILE_PIXEL_BUDGET : DESKTOP_PIXEL_BUDGET;
      const budgetRatio = Math.sqrt(pixelBudget / (width * height));
      ratio = Math.max(0.5, Math.min(window.devicePixelRatio || 1, 1, budgetRatio));
      canvas.width = Math.round(width * ratio);
      canvas.height = Math.round(height * ratio);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      paint(3600);
    };

    const resize = () => {
      if (resizeFrame) window.cancelAnimationFrame(resizeFrame);
      resizeFrame = window.requestAnimationFrame(() => {
        resizeFrame = 0;
        render();
      });
    };

    const resizeObserver = new ResizeObserver(resize);
    const intersectionObserver = new IntersectionObserver(([entry]) => {
      container.classList.toggle('is-wave-paused', !entry.isIntersecting);
    }, { rootMargin: '100px' });

    const handleVisibility = () => {
      container.classList.toggle('is-wave-hidden', document.hidden);
    };

    resizeObserver.observe(container);
    intersectionObserver.observe(container);
    document.addEventListener('visibilitychange', handleVisibility);
    handleVisibility();
    render();

    return () => {
      if (resizeFrame) window.cancelAnimationFrame(resizeFrame);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      document.removeEventListener('visibilitychange', handleVisibility);
      container.classList.remove('is-wave-paused', 'is-wave-hidden');
    };
  }, []);

  return <canvas ref={canvasRef} className="hero-wave-canvas" aria-hidden="true" />;
}
