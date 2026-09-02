'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';

const nodes = [
  ['Site', 'Recebe a demanda', 'node-site'],
  ['SEO', 'Gera descoberta', 'node-seo'],
  ['Formulário', 'Captura o lead', 'node-form'],
  ['Agente de IA', 'Faz a triagem', 'node-ai'],
  ['CRM', 'Organiza o contato', 'node-crm'],
  ['Automação', 'Move informações', 'node-automation'],
  ['Dashboard', 'Devolve contexto', 'node-dashboard'],
  ['Sistema', 'Sustenta a operação', 'node-system'],
];

export function ConnectedSystem() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    section.classList.add('motion-ready');
    let revealFrame = 0;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      revealFrame = window.requestAnimationFrame(() => section.classList.add('is-visible'));
      observer.disconnect();
    }, { threshold: 0.18 });

    observer.observe(section);

    return () => {
      if (revealFrame) window.cancelAnimationFrame(revealFrame);
      observer.disconnect();
      section.classList.remove('motion-ready', 'is-visible');
    };
  }, []);

  return (
    <section className="connected-section" ref={sectionRef} aria-labelledby="connected-title">
      <h2 id="connected-title">Tudo conectado.</h2>
      <div className="connected-layout">
        <figure className="system-orbit">
          <figcaption className="orbit-caption">
            Frontier OS conecta site, SEO, formulário, agente de IA, CRM, automação, dashboard e sistema.
          </figcaption>
          <svg viewBox="0 0 720 560" aria-hidden="true">
            <circle className="orbit-ring" cx="360" cy="280" r="192" />
            <path d="M360 280V65 M360 280L535 110 M360 280H595 M360 280L535 450 M360 280V495 M360 280L185 450 M360 280H125 M360 280L185 110" />
            <circle cx="360" cy="65" r="4" /><circle cx="535" cy="110" r="4" />
            <circle cx="595" cy="280" r="4" /><circle cx="535" cy="450" r="4" />
            <circle cx="360" cy="495" r="4" /><circle cx="185" cy="450" r="4" />
            <circle cx="125" cy="280" r="4" /><circle cx="185" cy="110" r="4" />
          </svg>
          <div className="orbit-core" aria-hidden="true">
            <Image src="/brand/frontier-logo.png" alt="" width={92} height={92} />
          </div>
          <ul>
            {nodes.map(([title, detail, className], index) => (
              <li className={className} key={title} style={{ transitionDelay: `${420 + index * 72}ms` }}>
                <strong>{title}</strong><small>{detail}</small>
              </li>
            ))}
          </ul>
        </figure>

        <div className="connected-copy">
          <h3>Cada ferramenta sabe o que a próxima precisa.</h3>
          <p>Site, mídia, CRM, automação, IA e dados compartilham o mesmo fluxo. A informação avança sem se perder entre plataformas — e volta como contexto para a próxima decisão.</p>
          <div className="connected-route" aria-label="Fluxo operacional do Frontier OS">
            <span>Atrair</span><span>Organizar</span><span>Executar</span><span>Decidir</span>
          </div>
        </div>
      </div>
    </section>
  );
}
