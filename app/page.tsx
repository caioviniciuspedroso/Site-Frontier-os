import Image from 'next/image';
import type { CSSProperties } from 'react';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { ProjectBriefForm } from '@/components/project-brief-form';
import { CinematicStrip } from '@/components/cinematic-strip';
import { ConnectedSystem } from '@/components/connected-system';

const stages = ['Presença', 'Aquisição', 'Operação', 'Inteligência'];

const services = [
  ['Sites premium', 'Landing pages, sites institucionais e experiências de marca.'],
  ['E-commerce', 'Estrutura de venda que conecta catálogo, conversão e operação.'],
  ['CRM', 'Pipeline, histórico e próximas ações em um fluxo visível.'],
  ['Agentes de IA', 'Inteligência aplicada a atendimento, análise e execução.'],
  ['Automações', 'Tarefas repetitivas saem da mão e entram no processo.'],
  ['Sistemas', 'Ferramentas sob medida para o jeito que sua empresa trabalha.'],
  ['SEO', 'Arquitetura e conteúdo para ser encontrado com consistência.'],
  ['Google Meu Negócio', 'Presença local organizada para transformar busca em contato.'],
  ['Tráfego estratégico', 'Aquisição orientada por oferta, página e leitura de dados.'],
  ['Estrutura digital', 'Canais, ferramentas e processos organizados em uma base única.'],
  ['Dashboards', 'Indicadores que devolvem clareza para a próxima decisão.'],
];

const heroServices = [
  'Sites premium',
  'E-commerce',
  'CRM',
  'Agentes de IA',
  'Automações',
  'Sistemas',
  'SEO',
  'Google Meu Negócio',
  'Tráfego estratégico',
  'Estrutura digital',
  'Dashboards',
];

const process = [
  ['Diagnóstico', 'Entendemos operação, gargalos, oferta, canais e objetivo real.'],
  ['Arquitetura', 'Desenhamos a rota, as prioridades e o que precisa se conectar.'],
  ['Implementação', 'Construímos, integramos, testamos e colocamos a estrutura no ar.'],
  ['Evolução', 'Lemos os sinais, removemos atrito e ampliamos o que funciona.'],
];

export default function Home() {
  return (
    <main id="conteudo">
      <section className="hero" id="topo" aria-labelledby="hero-title">
        <header className="site-header">
          <a className="brand-lockup" href="#topo" aria-label="Frontier OS, voltar ao início">
            <Image className="brand-mark" src="/brand/frontier-logo.png" alt="" width={44} height={44} priority />
            <span>Frontier <strong>OS</strong></span>
          </a>
          <nav className="desktop-nav" aria-label="Navegação principal">
            <a href="#sistema">O sistema</a>
            <a href="#solucoes">Soluções</a>
            <a href="#processo">Como funciona</a>
          </nav>
          <a className="header-cta" href="#contato">
            Começar um projeto
            <ArrowUpRight aria-hidden="true" />
          </a>
        </header>

        <div className="hero-atmosphere" aria-hidden="true">
          <Image
            src="/brand/frontier-hero-atmosphere.png"
            alt=""
            fill
            sizes="100vw"
            priority
          />
        </div>

        <svg className="hero-route-overlay" viewBox="0 0 1536 1024" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
          <path d="M600 454 H778 Q846 454 846 384 V168 Q846 142 874 142 H1088" />
          <path d="M600 468 H818 Q878 468 878 422 V380 Q878 360 902 360 H1088" />
          <path d="M600 482 H932 Q978 482 978 526 V610 H1088" />
          <path d="M600 496 H834 Q868 496 868 548 V812 Q868 836 896 836 H1088" />
        </svg>

        <div className="hero-route-labels" aria-label="O núcleo Frontier conecta quatro frentes da operação digital">
          {stages.map((stage, index) => (
            <span key={stage} style={{ '--route-index': index } as CSSProperties}>
              <small>{String(index + 1).padStart(2, '0')}</small>{stage}
            </span>
          ))}
        </div>

        <div className="hero-copy">
          <h1 id="hero-title">Um sistema.<span>Toda a sua operação digital.</span></h1>
          <p>Estratégia, tecnologia e execução conectadas para sua empresa atrair, converter, operar e decidir melhor.</p>
          <a className="primary-cta" href="#contato">Começar um projeto<ArrowUpRight aria-hidden="true" /></a>
        </div>

        <aside className="hero-service-rail" aria-label="Soluções Frontier OS">
          <span className="rail-title">Soluções conectadas</span>
          <ol>
            {heroServices.map((service) => <li key={service}>{service}</li>)}
          </ol>
        </aside>

        <div className="hero-footer">
          <span className="system-id">FOS / SYS—001</span>
          <div className="stage-rail" aria-label="Fluxo do sistema Frontier OS">
            {stages.map((stage, index) => <span key={stage}><small>{String(index + 1).padStart(2, '0')}</small>{stage}</span>)}
          </div>
          <a className="scroll-cue" href="#sistema" aria-label="Ir para a próxima seção">Explorar<ArrowDown aria-hidden="true" /></a>
        </div>
      </section>

      <section className="manifesto" id="sistema" aria-labelledby="manifesto-title">
        <div className="manifesto-heading">
          <h2 id="manifesto-title">Não entregamos peças soltas.</h2>
          <p>Um site sem aquisição espera. Mídia sem processo desperdiça. Automação sem estratégia acelera o lugar errado. A Frontier conecta o todo.</p>
        </div>
        <ol className="service-index" id="solucoes">
          {services.map(([title, description], index) => (
            <li key={title}>
              <span className="service-number">{String(index + 1).padStart(2, '0')}</span>
              <h3>{title}</h3><p>{description}</p><ArrowUpRight aria-hidden="true" />
            </li>
          ))}
        </ol>
      </section>

      <ConnectedSystem />

      <section className="film-section" aria-labelledby="film-title">
        <div className="film-sticky" data-film-sticky>
          <div className="film-copy">
            <h2 id="film-title">Uma identidade. Um fluxo. Uma operação.</h2>
            <p>Role para percorrer a marca em movimento. A mesma lógica organiza sua estrutura digital: cada etapa avança conectada à próxima.</p>
          </div>
          <CinematicStrip />
          <div className="film-progress" aria-hidden="true"><span /></div>
        </div>
      </section>

      <section className="process-section" id="processo" aria-labelledby="process-title">
        <div className="process-heading">
          <h2 id="process-title">Do diagnóstico à evolução.</h2>
          <p>Construção com começo claro, decisões visíveis e continuidade depois do lançamento.</p>
        </div>
        <ol className="process-list">
          {process.map(([title, description], index) => (
            <li key={title}><span>{String(index + 1).padStart(2, '0')}</span><h3>{title}</h3><p>{description}</p></li>
          ))}
        </ol>
      </section>

      <section className="contact-section" id="contato" aria-labelledby="contact-title">
        <div className="contact-shell">
          <div className="contact-heading">
            <h2 id="contact-title">Conte o que precisa ser resolvido.</h2>
            <p>Não precisa chegar com o projeto pronto. Descreva o problema e a gente organiza o caminho, define as prioridades e conecta o que fizer sentido.</p>
          </div>
          <ProjectBriefForm />
        </div>
      </section>

      <footer className="site-footer">
        <a className="brand-lockup" href="#topo" aria-label="Frontier OS, voltar ao início">
          <Image className="brand-mark" src="/brand/frontier-logo.png" alt="" width={44} height={44} />
          <span>Frontier <strong>OS</strong></span>
        </a>
        <p>Frontier Vision — estratégia, tecnologia e execução conectadas.</p>
        <a href="#topo">Voltar ao topo <ArrowUpRight aria-hidden="true" /></a>
      </footer>
    </main>
  );
}
