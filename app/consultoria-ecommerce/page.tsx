import type { Metadata } from 'next';
import Image from 'next/image';
import { ArrowDown, ArrowUpRight, Check, X } from 'lucide-react';
import { EcommerceDiagnosticForm } from '@/components/ecommerce-diagnostic-form';
import styles from './consultoria.module.css';

export const metadata: Metadata = {
  title: 'Consultoria de E-commerce | Frontier Commerce',
  description:
    'Estratégia e execução para e-commerces que já vendem, mas precisam recuperar constância, margem e capacidade de escala.',
  alternates: { canonical: '/consultoria-ecommerce' },
  openGraph: {
    title: 'Frontier Commerce — Consultoria especializada para e-commerce',
    description:
      'Mídia, CRO, CRM, criativos, calendário comercial, automações e dados trabalhando no mesmo plano.',
    url: '/consultoria-ecommerce',
    type: 'website',
    locale: 'pt_BR',
    siteName: 'Frontier Vision',
  },
};

const frictionPoints = [
  ['Receita instável', 'A operação vende, mas ainda depende demais de campanhas, datas ou picos difíceis de repetir.'],
  ['Escala sem margem', 'A verba aumenta antes de oferta, conversão, retenção e economia da operação estarem prontas.'],
  ['Time sem prioridade', 'Há pessoas e ferramentas, mas falta uma leitura única para decidir o que entra primeiro.'],
  ['Dados sem decisão', 'Relatórios mostram o passado, mas não viram um plano claro de execução para a próxima semana.'],
];

const comparison = [
  ['Ponto de partida', 'Canal, campanha ou entrega isolada', 'Margem, produto, funil e capacidade operacional'],
  ['Leitura', 'ROAS e volume vistos separadamente', 'Aquisição, conversão e retenção lidas em conjunto'],
  ['Plano', 'Lista genérica de recomendações', 'Prioridades específicas, responsáveis e prazo'],
  ['Execução', 'A empresa precisa conectar fornecedores', 'Estratégia e execução coordenadas no mesmo ciclo'],
  ['Ritmo', 'Reunião para apresentar relatório', 'Suporte diário, revisão semanal e direção mensal'],
];

const pillars = [
  {
    title: 'Diagnóstico & margem',
    text: 'Mapeamos curva de produtos, rentabilidade, canais, funil e dados para localizar o gargalo que realmente limita o crescimento.',
    output: 'Leitura completa da operação',
  },
  {
    title: 'Aquisição & oferta',
    text: 'Estruturamos Meta, Google, públicos, campanhas e ofertas com uma lógica comercial compatível com o momento do negócio.',
    output: 'Mídia executada com direção',
  },
  {
    title: 'CRO & experiência',
    text: 'Analisamos navegação, páginas, produto, carrinho e checkout para reduzir atritos antes de pedir mais tráfego.',
    output: 'Backlog de conversão priorizado',
  },
  {
    title: 'CRM & retenção',
    text: 'Organizamos a base, jornadas, e-mail marketing e automações de recompra para o cliente continuar gerando valor.',
    output: 'Relacionamento por ciclo de vida',
  },
  {
    title: 'Criativos & calendário',
    text: 'Conectamos criativos estáticos, argumentos, ofertas e calendário comercial para mídia e loja falarem a mesma língua.',
    output: 'Plano comercial executável',
  },
  {
    title: 'Dados & evolução',
    text: 'Centralizamos indicadores, tarefas e decisões em um painel acompanhado pelo time, com inteligência assistida por IA.',
    output: 'Próxima ação sempre visível',
  },
];

const deliverables = [
  ['Diagnóstico de performance', 'Margem, produto, aquisição, funil, retenção e estrutura operacional.'],
  ['Gestão de mídia', 'Execução e evolução de Meta Ads e Google Ads conectadas à estratégia comercial.'],
  ['Plano de CRO', 'Hipóteses e melhorias priorizadas para loja, páginas, navegação e checkout.'],
  ['CRM e automações', 'Clusterização, jornadas, e-mail marketing e rotinas de recompra.'],
  ['Criativos e calendário', 'Peças estáticas, mensagens, ofertas e planejamento comercial mensal.'],
  ['Painel de operação', 'Indicadores, prioridades, histórico e acompanhamento assistido por IA.'],
];

const fit = [
  'Já vende online e possui uma operação ativa.',
  'Tem estrutura, mas não consegue manter constância.',
  'Investe em aquisição e sente que a escala travou.',
  'Aceita revisar oferta, loja, CRM e processos — não apenas anúncios.',
  'Quer um parceiro que oriente, execute e cobre evolução.',
];

const notFit = [
  'Busca somente campanhas isoladas ou uma solução instantânea.',
  'Ainda não possui operação, produto ou capacidade mínima de execução.',
  'Não pretende compartilhar dados ou implementar mudanças.',
  'Quer aumentar investimento antes de entender margem e conversão.',
];

const faqs = [
  ['Vocês apenas orientam ou também executam?', 'Executamos mídia, análises, CRO, CRM, e-mail marketing, automações, criativos estáticos e calendário comercial. O plano é construído com o seu time, mas não termina em recomendações.'],
  ['Como funciona o acompanhamento?', 'A comunicação acontece no dia a dia. Toda semana revisamos sinais, prioridades e execução; mensalmente, reorganizamos estratégia, calendário, orçamento e próximos ciclos.'],
  ['Preciso ter uma equipe interna?', 'A consultoria funciona melhor quando já existe alguma estrutura para atender clientes, operar a loja e implementar decisões. A Frontier complementa e coordena essa estrutura.'],
  ['Vocês trabalham somente com tráfego pago?', 'Não. Mídia é um dos pilares. A leitura inclui margem, oferta, CRO, experiência, CRM, retenção, criativos, calendário comercial, automações e dados.'],
  ['Em quanto tempo aparecem resultados?', 'O tempo depende do gargalo, do histórico e da capacidade de execução. O primeiro objetivo é criar clareza e priorização; qualquer projeção só é definida depois do diagnóstico dos dados reais.'],
];

export default function EcommerceConsultingPage() {
  return (
    <main className={styles.page} id="conteudo">
      <section className={styles.hero} id="topo" aria-labelledby="commerce-title">
        <header className={styles.header}>
          <a className={styles.brand} href="/" aria-label="Frontier Vision, página inicial">
            <Image src="/brand/frontier-logo.png" alt="" width={42} height={42} priority />
            <span>Frontier <strong>Commerce</strong></span>
          </a>
          <nav aria-label="Navegação da consultoria">
            <a href="#diferencial">Diferencial</a>
            <a href="#metodo">Método</a>
            <a href="#rotina">Acompanhamento</a>
          </nav>
          <a className={styles.headerCta} href="#diagnostico">Solicitar diagnóstico <ArrowUpRight aria-hidden="true" /></a>
        </header>

        <div className={styles.heroGrid}>
          <div className={styles.heroCopy}>
            <p className={styles.signalLabel}>Consultoria especializada para e-commerce</p>
            <h1 id="commerce-title">Seu e-commerce não precisa de mais ações soltas.</h1>
            <p className={styles.heroStatement}>Precisa saber o que priorizar para crescer com margem.</p>
            <p className={styles.heroBody}>Estratégia e execução para operações que já vendem e têm estrutura, mas perderam constância ou encontraram um limite para escalar.</p>
            <div className={styles.heroActions}>
              <a className={styles.primaryCta} href="#diagnostico">Solicitar diagnóstico <ArrowUpRight aria-hidden="true" /></a>
              <a className={styles.textLink} href="#metodo">Conhecer o método <ArrowDown aria-hidden="true" /></a>
            </div>
          </div>

          <div className={styles.heroSystem} aria-label="Fluxo ilustrativo do método Frontier Commerce">
            <div className={styles.instrumentHeader}><span>FRONTIER COMMERCE // MAPA DA OPERAÇÃO</span><span>FC—01</span></div>
            <svg className={styles.systemLines} viewBox="0 0 720 560" preserveAspectRatio="none" aria-hidden="true">
              <path d="M82 110H280C326 110 344 132 344 176V384C344 426 366 448 410 448H650" />
              <path d="M82 232H236C278 232 300 254 300 296V332C300 372 322 394 364 394H650" />
              <path d="M82 354H218C258 354 280 374 280 414V468C280 506 302 526 340 526H650" />
            </svg>
            <div className={styles.systemSource}>
              <span><small>01</small> Oferta</span>
              <span><small>02</small> Mídia</span>
              <span><small>03</small> Loja</span>
              <span><small>04</small> CRM</span>
            </div>
            <div className={styles.systemCore}><Image src="/brand/frontier-logo.png" alt="" width={72} height={72} /></div>
            <div className={styles.systemResult}>
              <span>Margem <i /></span>
              <span>Conversão <i /></span>
              <span>Retenção <i /></span>
            </div>
            <div className={styles.instrumentFooter}><span>DIAGNOSTICAR</span><span>PRIORIZAR</span><span>EXECUTAR</span><span>EVOLUIR</span></div>
          </div>
        </div>

        <div className={styles.heroRail}>
          <span>Uma operação. Seis pilares.</span>
          <span>Mídia</span><span>CRO</span><span>CRM</span><span>Dados</span>
        </div>
      </section>

      <section className={styles.problemSection} aria-labelledby="problem-title">
        <div className={styles.sectionIntro}>
          <div>
            <p className={styles.sectionCode}>O gargalo real</p>
            <h2 id="problem-title">Você não tem falta de esforço. Tem falta de uma leitura única da operação.</h2>
          </div>
          <p>Quando mídia, loja, CRM e calendário comercial trabalham com prioridades diferentes, aumentar a verba só amplia o desalinhamento.</p>
        </div>
        <div className={styles.frictionGrid}>
          {frictionPoints.map(([title, text], index) => (
            <article key={title}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.comparisonSection} id="diferencial" aria-labelledby="comparison-title">
        <div className={styles.comparisonHeading}>
          <p className={styles.sectionCode}>Especialização muda a pergunta</p>
          <h2 id="comparison-title">Uma agência genérica gerencia canais. Uma consultoria especializada entende o sistema.</h2>
          <p>A Frontier começa pelo negócio e conecta cada frente à mesma prioridade comercial.</p>
        </div>
        <div className={styles.comparisonTable} role="table" aria-label="Comparação entre o modelo tradicional e a Frontier Commerce">
          <div className={styles.comparisonHeader} role="row">
            <span role="columnheader">Decisão</span><span role="columnheader">Modelo tradicional</span><span role="columnheader">Frontier Commerce</span>
          </div>
          {comparison.map(([topic, traditional, frontier]) => (
            <div className={styles.comparisonRow} role="row" key={topic}>
              <strong role="cell">{topic}</strong><span role="cell">{traditional}</span><span role="cell">{frontier}</span>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.methodSection} id="metodo" aria-labelledby="method-title">
        <div className={styles.methodHeading}>
          <div>
            <p className={styles.sectionCode}>Método Frontier Commerce</p>
            <h2 id="method-title">Seis pilares. Uma prioridade por vez. Evolução toda semana.</h2>
          </div>
          <p>Os pilares trabalham juntos, mas não competem por atenção. O diagnóstico mostra o gargalo; o ciclo define o que entra primeiro e acompanha a execução até a próxima leitura.</p>
        </div>
        <div className={styles.methodRoute} aria-hidden="true"><span /></div>
        <div className={styles.pillarGrid}>
          {pillars.map((pillar, index) => (
            <article key={pillar.title}>
              <div className={styles.pillarTop}><span>{String(index + 1).padStart(2, '0')}</span><i /></div>
              <h3>{pillar.title}</h3>
              <p>{pillar.text}</p>
              <strong>{pillar.output}</strong>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.cadenceSection} id="rotina" aria-labelledby="cadence-title">
        <div className={styles.cadenceCopy}>
          <p className={styles.sectionCode}>Acompanhamento que mantém o plano vivo</p>
          <h2 id="cadence-title">A estratégia não espera o fim do mês para mudar.</h2>
          <p>Dados entram, prioridades mudam e o time executa. A Frontier acompanha essa cadência para corrigir rota enquanto ainda existe tempo de agir.</p>
        </div>
        <div className={styles.cadenceTimeline}>
          <article><span>01</span><small>Todos os dias</small><h3>Suporte e execução</h3><p>Comunicação direta, acompanhamento do time e avanço das frentes em curso.</p></article>
          <article><span>02</span><small>Toda semana</small><h3>Leitura e prioridade</h3><p>Performance, gargalos, próximos testes e responsáveis pelo ciclo seguinte.</p></article>
          <article><span>03</span><small>Todo mês</small><h3>Direção estratégica</h3><p>Calendário, ofertas, orçamento, metas e decisões maiores da operação.</p></article>
        </div>
        <div className={styles.cycleBar} aria-label="Ciclo contínuo de trabalho">
          <span>Analisar</span><span>Priorizar</span><span>Executar</span><span>Medir</span><span>Evoluir</span>
        </div>
      </section>

      <section className={styles.deliverablesSection} aria-labelledby="deliverables-title">
        <div className={styles.sectionIntro}>
          <div>
            <p className={styles.sectionCode}>O que entra na operação</p>
            <h2 id="deliverables-title">Direção suficiente para decidir. Execução suficiente para avançar.</h2>
          </div>
          <p>Você não recebe um documento para interpretar sozinho. Cada entrega entra no plano, ganha prioridade e retorna para a leitura de performance.</p>
        </div>
        <ol className={styles.deliverableList}>
          {deliverables.map(([title, description], index) => (
            <li key={title}><span>{String(index + 1).padStart(2, '0')}</span><h3>{title}</h3><p>{description}</p><ArrowUpRight aria-hidden="true" /></li>
          ))}
        </ol>
      </section>

      <section className={styles.visibilitySection} aria-labelledby="visibility-title">
        <div className={styles.visibilityBoard}>
          <div className={styles.boardHeader}><span>EXEMPLO DE ROTINA OPERACIONAL</span><span>SEMANA ATUAL</span></div>
          <div className={styles.boardRows}>
            <div><span>Diagnóstico de margem</span><strong>Leitura concluída</strong><i className={styles.complete} /></div>
            <div><span>CRO de produto e checkout</span><strong>Prioridade atual</strong><i className={styles.active} /></div>
            <div><span>CRM de recompra</span><strong>Em execução</strong><i className={styles.progress} /></div>
            <div><span>Próximo calendário comercial</span><strong>Próximo ciclo</strong><i /></div>
          </div>
          <div className={styles.boardFlow}><span>Análise</span><i /><span>Plano</span><i /><span>Execução</span><i /><span>Revisão</span></div>
        </div>
        <div className={styles.visibilityCopy}>
          <p className={styles.sectionCode}>Clareza operacional</p>
          <h2 id="visibility-title">Todo mundo sabe o que está acontecendo — e o que vem depois.</h2>
          <p>Indicadores, histórico, prioridades e tarefas ficam organizados em um painel de acompanhamento com suporte de IA. A informação deixa de morrer no relatório e volta como próxima decisão.</p>
        </div>
      </section>

      <section className={styles.qualifierSection} aria-labelledby="qualifier-title">
        <div className={styles.qualifierHeading}>
          <p className={styles.sectionCode}>Compatibilidade antes da proposta</p>
          <h2 id="qualifier-title">Para operações que já começaram — e decidiram amadurecer.</h2>
        </div>
        <div className={styles.qualifierGrid}>
          <div>
            <h3>Faz sentido se você</h3>
            <ul>{fit.map((item) => <li key={item}><Check aria-hidden="true" />{item}</li>)}</ul>
          </div>
          <div>
            <h3>Não é o melhor momento se você</h3>
            <ul>{notFit.map((item) => <li key={item}><X aria-hidden="true" />{item}</li>)}</ul>
          </div>
        </div>
      </section>

      <section className={styles.contactSection} id="diagnostico" aria-labelledby="diagnostic-title">
        <div className={styles.contactIntro}>
          <p className={styles.sectionCode}>Diagnóstico inicial</p>
          <h2 id="diagnostic-title">Conte onde a sua operação perdeu ritmo.</h2>
          <p>Não precisa diagnosticar o problema antes da conversa. Compartilhe o contexto e a Frontier organiza as primeiras perguntas.</p>
          <div className={styles.contactNote}><span>01</span><p>Entendemos o momento.</p><span>02</span><p>Mapeamos o gargalo.</p><span>03</span><p>Definimos se existe aderência.</p></div>
        </div>
        <EcommerceDiagnosticForm />
      </section>

      <section className={styles.faqSection} aria-labelledby="faq-title">
        <div className={styles.faqHeading}><p className={styles.sectionCode}>Perguntas frequentes</p><h2 id="faq-title">O que precisa estar claro antes de começar.</h2></div>
        <div className={styles.faqList}>
          {faqs.map(([question, answer], index) => (
            <details key={question} open={index === 0}>
              <summary><span>{String(index + 1).padStart(2, '0')}</span>{question}<i aria-hidden="true" /></summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </section>

      <footer className={styles.footer}>
        <a className={styles.brand} href="#topo" aria-label="Frontier Commerce, voltar ao início"><Image src="/brand/frontier-logo.png" alt="" width={42} height={42} /><span>Frontier <strong>Commerce</strong></span></a>
        <p>Estratégia, execução e evolução para e-commerces em operação.</p>
        <a href="/">Conhecer a Frontier OS <ArrowUpRight aria-hidden="true" /></a>
      </footer>
    </main>
  );
}
