import type { Metadata } from 'next';
import Image from 'next/image';
import { ArrowUpRight, ArrowRight, MessageCircle, Code2 } from 'lucide-react';
import styles from './bio.module.css';

export const metadata: Metadata = {
  title: 'Caio Vinicius | Frontier Vision',
  description: 'Estratégia, tecnologia e execução para o seu negócio crescer. Conheça a consultoria de e-commerce e as soluções digitais da Frontier Vision.',
  alternates: { canonical: '/bio' },
  openGraph: {
    title: 'Caio Vinicius | Frontier Vision',
    description: 'Encontre o próximo passo para o seu negócio.',
    url: '/bio',
  },
};

export default function BioPage() {
  return (
    <main className={styles.page} id="conteudo">
      <div className={styles.column}>
        <header className={styles.profile}>
          <Image className={styles.portrait} src="/brand/caio-bio.webp" alt="Retrato de Caio Vinicius" width={1040} height={1300} priority sizes="(max-width: 560px) 100vw, 520px" />
          <a className={styles.brand} href="/" aria-label="Conhecer a Frontier Vision">
            <Image src="/brand/frontier-logo.png" width={30} height={30} alt="" />
            <span>Frontier Vision</span>
          </a>
          <div className={styles.identity}>
            <h1>Caio <span>Vinicius.</span></h1>
            <p>Estratégia, tecnologia e execução<br />para o seu negócio crescer.</p>
          </div>
        </header>

        <nav className={styles.links} aria-label="Serviços e contato de Caio Vinicius">
          <p className={styles.welcome}>Bom ter você aqui. <span>Qual é o próximo passo?</span></p>

          <a href="/consultoria-ecommerce" className={`${styles.banner} ${styles.commerce}`}>
            <span className={styles.cardCopy}>
              <span className={styles.service}>Consultoria de e-commerce</span>
              <strong>Sua loja vende.<br /><em>Vamos além.</em></strong>
              <span className={styles.description}>Mídia, CRO e CRM no mesmo plano.</span>
              <span className={styles.action}>Conhecer a consultoria <ArrowUpRight aria-hidden="true" /></span>
            </span>
            <Image className={styles.cardPortrait} src="/brand/caio-bio.webp" alt="" width={1040} height={1300} sizes="220px" />
          </a>

          <a href="/" className={`${styles.banner} ${styles.technology}`}>
            <Image className={styles.atmosphere} src="/brand/frontier-hero-atmosphere.png" alt="" width={1536} height={1024} sizes="520px" />
            <span className={styles.cardCopy}>
              <span className={styles.service}><Code2 aria-hidden="true" /> Frontier OS</span>
              <strong>Seu próximo<br /><em>salto digital.</em></strong>
              <span className={styles.description}>Sites, IA, automações e sistemas.</span>
              <span className={styles.action}>Explorar soluções <ArrowUpRight aria-hidden="true" /></span>
            </span>
          </a>

          <a href="/#contato" className={styles.contact}>
            <MessageCircle aria-hidden="true" />
            <span><strong>Tem um projeto em mente?</strong><span>Conte o que você quer construir.</span></span>
            <ArrowRight aria-hidden="true" />
          </a>
        </nav>
        <footer className={styles.footer}>
          <Image src="/brand/frontier-logo.png" alt="" width={24} height={24} />
          <span>Visão para ir além.</span>
          <a href="/">Frontier Vision <ArrowUpRight aria-hidden="true" /></a>
        </footer>
      </div>
    </main>
  );
}
