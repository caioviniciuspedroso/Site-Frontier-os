'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';

const words = ['Arquitetura.', 'Integração.', 'Automação.', 'Evolução.'];

const shards = [
  { left: 19, top: 24, size: 220, rotation: -24, direction: -1 },
  { left: 70, top: 19, size: 118, rotation: 34, direction: 1 },
  { left: 81, top: 55, size: 160, rotation: 88, direction: -1 },
  { left: 64, top: 79, size: 92, rotation: 14, direction: 1 },
  { left: 31, top: 76, size: 150, rotation: -62, direction: 1 },
  { left: 12, top: 57, size: 92, rotation: 24, direction: -1 },
  { left: 50, top: 18, size: 76, rotation: 128, direction: 1 },
  { left: 49, top: 84, size: 70, rotation: -14, direction: -1 },
];

const clamp = (value: number) => Math.min(1, Math.max(0, value));
const smooth = (value: number) => {
  const bounded = clamp(value);
  return bounded * bounded * (3 - 2 * bounded);
};

export function BrandSequence() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const shardElements = Array.from(section.querySelectorAll<HTMLElement>('[data-sequence-shard]'));
    const wordElements = Array.from(section.querySelectorAll<HTMLElement>('[data-sequence-word]'));
    const finale = section.querySelector<HTMLElement>('[data-sequence-finale]');
    const markers = Array.from(section.querySelectorAll<HTMLElement>('[data-sequence-marker]'));
    if (!finale) return;

    section.classList.add('motion-ready');
    let frame = 0;

    const update = () => {
      frame = 0;
      const bounds = section.getBoundingClientRect();
      const distance = Math.max(1, section.offsetHeight - window.innerHeight);
      const progress = clamp(-bounds.top / distance);
      const enter = smooth(progress / 0.08);
      const exit = smooth((progress - 0.9) / 0.08);

      shardElements.forEach((element, index) => {
        const shard = shards[index];
        const driftX = Math.sin(progress * Math.PI * (1.6 + index * 0.13) + index) * (8 + index % 3 * 2);
        const driftY = Math.cos(progress * Math.PI * (1.8 + index * 0.11) + index * 0.7) * (6 + index % 2 * 3);
        const depth = 0.78 + enter * 0.22 + Math.sin(progress * Math.PI + index) * 0.06;
        const rotation = shard.rotation + progress * (190 + index * 24) * shard.direction;
        element.style.opacity = (enter * (1 - exit) * (0.74 + (index % 3) * 0.1)).toFixed(3);
        element.style.filter = `blur(${((1 - enter) * 7 + exit * 8).toFixed(2)}px)`;
        element.style.transform = `translate3d(${driftX.toFixed(2)}vw, ${driftY.toFixed(2)}vh, 0) rotateX(${(progress * 74 * shard.direction).toFixed(2)}deg) rotateY(${(progress * 96 + index * 8).toFixed(2)}deg) rotateZ(${rotation.toFixed(2)}deg) scale(${depth.toFixed(3)})`;
      });

      wordElements.forEach((element, index) => {
        const start = 0.08 + index * 0.205;
        const end = start + 0.165;
        const visibility = smooth((progress - start) / 0.045)
          * (1 - smooth((progress - (end - 0.045)) / 0.045))
          * (1 - exit);
        const translate = clamp((progress - start) / (end - start)) * -26;
        element.style.opacity = visibility.toFixed(3);
        element.style.filter = `blur(${((1 - visibility) * 8).toFixed(2)}px)`;
        element.style.transform = `translate3d(0, -50%, 0) translate3d(0, ${translate.toFixed(2)}px, 0)`;
      });

      const finaleProgress = smooth((progress - 0.88) / 0.08);
      finale.style.opacity = finaleProgress.toFixed(3);
      finale.style.filter = `blur(${((1 - finaleProgress) * 9).toFixed(2)}px)`;
      finale.style.transform = `translate3d(0, ${((1 - finaleProgress) * 28).toFixed(2)}px, 0) scale(${(0.9 + finaleProgress * 0.1).toFixed(3)})`;

      markers.forEach((marker, index) => {
        marker.classList.toggle('is-active', progress >= 0.08 + index * 0.205);
      });
    };

    const requestUpdate = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };

    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate);
    requestUpdate();

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener('scroll', requestUpdate);
      window.removeEventListener('resize', requestUpdate);
      section.classList.remove('motion-ready');
    };
  }, []);

  return (
    <section className="brand-sequence" ref={sectionRef} aria-labelledby="sequence-title">
      <h2 className="orbit-caption" id="sequence-title">Arquitetura, integração, automação e evolução em um único sistema.</h2>
      <div className="brand-sequence-sticky">
        <div className="sequence-static" aria-hidden="true">
          <Image src="/brand/frontier-logo.png" alt="" width={132} height={132} />
          <p>Arquitetura que conecta.<br />Operação que evolui.</p>
        </div>

        <div className="sequence-dynamic" aria-hidden="true">
          <div className="sequence-shards">
            {shards.map((shard, index) => (
              <svg
                className="sequence-shard"
                data-sequence-shard
                key={`${shard.left}-${shard.top}`}
                viewBox="0 0 120 104"
                style={{ left: `${shard.left}%`, top: `${shard.top}%`, width: `${shard.size}px` }}
              >
                <defs>
                  <linearGradient id={`shard-metal-${index}`} x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stopColor="#4f1c14" />
                    <stop offset="0.28" stopColor="#fff8ef" />
                    <stop offset="0.52" stopColor="#9c311f" />
                    <stop offset="0.76" stopColor="#e6dbcd" />
                    <stop offset="1" stopColor="#26100c" />
                  </linearGradient>
                </defs>
                <path className="shard-shadow" d="M60 7 114 98H6Z" />
                <path className="shard-metal" d="M60 7 114 98H6Z" stroke={`url(#shard-metal-${index})`} />
                <path className="shard-highlight" d="M60 7 114 98H6Z" />
              </svg>
            ))}
          </div>

          <div className="sequence-words">
            {words.map((word) => <p data-sequence-word key={word}>{word}</p>)}
          </div>

          <div className="sequence-finale" data-sequence-finale>
            <Image src="/brand/frontier-logo.png" alt="" width={128} height={128} />
            <strong>Frontier OS</strong>
            <span>Estrutura criada para continuar evoluindo.</span>
          </div>

          <div className="sequence-progress">
            {words.map((word, index) => <span data-sequence-marker key={word}><i />{String(index + 1).padStart(2, '0')}</span>)}
          </div>
        </div>
      </div>
    </section>
  );
}
