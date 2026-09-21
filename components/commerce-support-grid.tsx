'use client';

import type { CSSProperties, PointerEvent, ReactNode } from 'react';
import { BarChart3, BrainCircuit, CalendarCheck2, MessageCircleMore } from 'lucide-react';
import styles from '@/app/consultoria-ecommerce/consultoria.module.css';

const resources = [
  {
    icon: <BarChart3 aria-hidden="true" />,
    title: 'Painel de performance',
    text: 'Indicadores, prioridades e andamento da operação em uma leitura única.',
  },
  {
    icon: <CalendarCheck2 aria-hidden="true" />,
    title: 'Ritual de evolução',
    text: 'Revisões semanais e direção estratégica mensal para ajustar a rota.',
  },
  {
    icon: <MessageCircleMore aria-hidden="true" />,
    title: 'Suporte no dia a dia',
    text: 'Comunicação direta para orientar o time e destravar a execução.',
  },
  {
    icon: <BrainCircuit aria-hidden="true" />,
    title: 'Portal com IA',
    text: 'Contexto, histórico e apoio técnico para transformar análise em decisão.',
  },
];

type GlowStyle = CSSProperties & { '--glow-x': string; '--glow-y': string };

function SupportCard({ icon, title, text }: { icon: ReactNode; title: string; text: string }) {
  function moveGlow(event: PointerEvent<HTMLElement>) {
    const bounds = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty('--glow-x', `${event.clientX - bounds.left}px`);
    event.currentTarget.style.setProperty('--glow-y', `${event.clientY - bounds.top}px`);
  }

  return (
    <article
      className={styles.supportCard}
      onPointerMove={moveGlow}
      style={{ '--glow-x': '50%', '--glow-y': '50%' } as GlowStyle}
    >
      <span className={styles.supportIcon}>{icon}</span>
      <div>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </article>
  );
}

export function CommerceSupportGrid() {
  return (
    <div className={styles.supportGrid}>
      {resources.map((resource) => <SupportCard key={resource.title} {...resource} />)}
    </div>
  );
}
