'use client';

import { useState, type SyntheticEvent } from 'react';
import { ArrowUpRight, Check, Clipboard, LoaderCircle } from 'lucide-react';
import styles from '@/app/consultoria-ecommerce/consultoria.module.css';

function value(data: FormData, name: string) {
  const entry = data.get(name);
  return typeof entry === 'string' ? entry.trim() : '';
}

export function EcommerceDiagnosticForm() {
  const [brief, setBrief] = useState('');
  const [copyState, setCopyState] = useState<'idle' | 'copying' | 'copied' | 'error'>('idle');

  function prepare(event: SyntheticEvent<HTMLFormElement, SubmitEvent>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = value(data, 'name');
    const company = value(data, 'company');
    const site = value(data, 'site');
    const email = value(data, 'email');
    const whatsapp = value(data, 'whatsapp');
    const revenue = value(data, 'revenue');
    const challenge = value(data, 'challenge');
    const context = value(data, 'context');

    setBrief(`Olá, Frontier Vision. Sou ${name}, da ${company}. Nosso e-commerce é ${site} e hoje está na faixa de ${revenue}. O principal desafio é ${challenge}. Contexto: ${context}. Meu e-mail é ${email}${whatsapp ? ` e meu WhatsApp é ${whatsapp}` : ''}.`);
    setCopyState('idle');
  }

  async function copy() {
    setCopyState('copying');
    try {
      await navigator.clipboard.writeText(brief);
      setCopyState('copied');
    } catch {
      setCopyState('error');
    }
  }

  return (
    <div className={styles.formWorkspace}>
      <form className={styles.diagnosticForm} onSubmit={prepare}>
        <div className={styles.formRow}>
          <label><span>Seu nome</span><input name="name" autoComplete="name" required placeholder="Como podemos chamar você" /></label>
          <label><span>Empresa</span><input name="company" autoComplete="organization" required placeholder="Nome da operação" /></label>
        </div>
        <div className={styles.formRow}>
          <label><span>Site da loja</span><input name="site" type="url" inputMode="url" required placeholder="https://sualoja.com.br" /></label>
          <label><span>Faturamento mensal</span><select name="revenue" required defaultValue=""><option value="" disabled>Selecione uma faixa</option><option>Até R$ 100 mil/mês</option><option>De R$ 100 mil a R$ 300 mil/mês</option><option>De R$ 300 mil a R$ 1 milhão/mês</option><option>Acima de R$ 1 milhão/mês</option></select></label>
        </div>
        <div className={styles.formRow}>
          <label><span>E-mail</span><input name="email" type="email" autoComplete="email" required placeholder="voce@empresa.com" /></label>
          <label><span>WhatsApp <small>opcional</small></span><input name="whatsapp" autoComplete="tel" inputMode="tel" placeholder="(11) 90000-0000" /></label>
        </div>
        <label><span>Principal desafio</span><select name="challenge" required defaultValue=""><option value="" disabled>Selecione o gargalo mais visível</option><option>Vendas sem constância</option><option>Não consigo escalar a mídia</option><option>Margem e CAC pressionados</option><option>Conversão da loja baixa</option><option>CRM e recompra fracos</option><option>Time sem prioridade clara</option><option>Não sabemos onde está o gargalo</option></select></label>
        <label><span>Contexto da operação</span><textarea name="context" required rows={5} placeholder="Conte o que já foi tentado, onde a operação trava e o que precisa mudar." /></label>
        <label className={styles.consent}><input name="consent" type="checkbox" required /><span>Autorizo a Frontier Vision a entrar em contato sobre este diagnóstico.</span></label>
        <div className={styles.formAction}><button type="submit">Preparar pedido de diagnóstico <ArrowUpRight aria-hidden="true" /></button><p>Você revisa a mensagem antes de encaminhar.</p></div>
      </form>

      {brief ? (
        <div className={styles.formResult} aria-live="polite">
          <strong>Pedido preparado</strong><p>{brief}</p>
          <button type="button" onClick={copy} disabled={copyState === 'copying'}>
            {copyState === 'copying' ? <LoaderCircle className={styles.spin} aria-hidden="true" /> : copyState === 'copied' ? <Check aria-hidden="true" /> : <Clipboard aria-hidden="true" />}
            {copyState === 'copying' ? 'Copiando…' : copyState === 'copied' ? 'Mensagem copiada' : 'Copiar mensagem'}
          </button>
          {copyState === 'error' ? <output>Não foi possível copiar automaticamente. Selecione o texto acima e copie manualmente.</output> : null}
        </div>
      ) : null}
    </div>
  );
}
