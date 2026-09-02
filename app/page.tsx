import Image from 'next/image';
import type { CSSProperties } from 'react';
import { ArrowDown, ArrowRight, ArrowUpRight } from 'lucide-react';
import { ProjectBriefForm } from '@/components/project-brief-form';
import { CinematicStrip } from '@/components/cinematic-strip';

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

const flow = [
  {
    title: 'Presença',
    statement: 'Sua empresa é encontrada, compreendida e desejada.',
    detail: 'Sites premium · E-commerce · SEO · Google Meu Negócio',
  },
  {
    title: 'Aquisição',
    statement: 'A atenção certa vira uma oportunidade rastreável.',
    detail: 'Tráfego estratégico · Landing pages · Estrutura de conversão',
  },
  {
    title: 'Operação',
    statement: 'O lead entra em um processo que o time consegue executar.',
    detail: 'CRM · Automações · Sistemas · Integrações',
  },
  {
    title: 'Inteligência',
    statement: 'Dados e IA devolvem contexto para decidir o próximo movimento.',
    detail: 'Agentes de IA · Dashboards · Análise contínua',
  },
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

      <section className="flow-section" aria-labelledby="flow-title">
        <div className="flow-intro">
          <h2 id="flow-title">Da atenção à decisão.</h2>
          <p>Quatro frentes, uma passagem contínua. Cada entrega melhora a próxima etapa e devolve informação para o início do ciclo.</p>
        </div>
        <ol className="flow-list">
          {flow.map((item, index) => (
            <li key={item.title}>
              <div className="flow-marker"><span>{String(index + 1).padStart(2, '0')}</span>{index < flow.length - 1 ? <ArrowRight aria-hidden="true" /> : null}</div>
              <h3>{item.title}</h3><p>{item.statement}</p><small>{item.detail}</small>
            </li>
          ))}
        </ol>
      </section>

      <section className="film-section" aria-labelledby="film-title">
        <div className="film-copy">
          <h2 id="film-title">Uma identidade. Um fluxo. Uma operação.</h2>
          <p>O digital deixa de ser um conjunto de fornecedores e começa a funcionar como infraestrutura: coordenado, mensurável e pronto para evoluir.</p>
        </div>
        <CinematicStrip />
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
        <div className="contact-heading">
          <h2 id="contact-title">Pronto para operar como sistema?</h2>
          <p>Conte o principal gargalo. A conversa começa pelo que precisa funcionar, não por um pacote pronto.</p>
        </div>
        <ProjectBriefForm />
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
