'use client';

import { useState, type SyntheticEvent } from 'react';
import { ArrowUpRight, Check, Clipboard, LoaderCircle } from 'lucide-react';

function getTextField(data: FormData, name: string) {
  const value = data.get(name);
  return typeof value === 'string' ? value.trim() : '';
}

export function ProjectBriefForm() {
  const [brief, setBrief] = useState('');
  const [copyState, setCopyState] = useState<'idle' | 'copying' | 'copied' | 'error'>('idle');

  function prepareBrief(event: SyntheticEvent<HTMLFormElement, SubmitEvent>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = getTextField(data, 'name');
    const company = getTextField(data, 'company');
    const whatsapp = getTextField(data, 'whatsapp');
    const email = getTextField(data, 'email');
    const project = getTextField(data, 'project');
    const message = getTextField(data, 'message');

    setBrief(
      `Olá, Frontier Vision. Sou ${name}${company ? `, da ${company}` : ''}. Quero conversar sobre ${project}. O que precisamos resolver: ${message}. Meu e-mail é ${email}${whatsapp ? ` e meu WhatsApp é ${whatsapp}` : ''}.`,
    );
    setCopyState('idle');
  }

  async function copyBrief() {
    setCopyState('copying');
    try {
      if (!navigator.clipboard) throw new Error('Clipboard API unavailable');
      await navigator.clipboard.writeText(brief);
      setCopyState('copied');
    } catch {
      setCopyState('error');
    }
  }

  return (
    <div className="brief-workspace">
      <form className="brief-form" onSubmit={prepareBrief}>
        <div className="brief-form-row">
          <label>
            <span>Nome</span>
            <input name="name" autoComplete="name" required placeholder="Como podemos chamar você" />
          </label>
          <label>
            <span>Empresa <small>opcional</small></span>
            <input name="company" autoComplete="organization" placeholder="Nome da sua empresa" />
          </label>
        </div>
        <div className="brief-form-row">
          <label>
            <span>WhatsApp <small>opcional</small></span>
            <input name="whatsapp" autoComplete="tel" inputMode="tel" placeholder="(11) 90000-0000" />
          </label>
          <label>
            <span>E-mail</span>
            <input name="email" type="email" autoComplete="email" required placeholder="voce@empresa.com" />
          </label>
        </div>
        <label>
          <span>O que deseja construir</span>
          <select name="project" required defaultValue="">
            <option value="" disabled>Selecione uma frente</option>
            <option>Site, landing page ou e-commerce</option>
            <option>CRM e processo comercial</option>
            <option>Agente de IA</option>
            <option>Automação</option>
            <option>Sistema sob medida</option>
            <option>SEO e presença local</option>
            <option>Tráfego pago estratégico</option>
            <option>Estrutura digital completa</option>
            <option>Dashboard e inteligência</option>
            <option>Ainda não sei — preciso de direção</option>
          </select>
        </label>
        <label>
          <span>Mensagem</span>
          <textarea
            name="message"
            required
            rows={5}
            placeholder="Descreva o problema, o objetivo ou o que hoje está travando sua operação."
          />
        </label>
        <label className="consent-field">
          <input name="consent" type="checkbox" required />
          <span>Autorizo a Frontier Vision a entrar em contato comigo sobre este pedido.</span>
        </label>
        <div className="brief-action">
          <button className="brief-submit" type="submit">Preparar mensagem <ArrowUpRight aria-hidden="true" /></button>
          <p className="brief-help">Você revisa a mensagem antes de encaminhar.</p>
        </div>
      </form>

      {brief && (
        <div className="brief-result" aria-live="polite">
          <strong>Mensagem pronta</strong>
          <p>{brief}</p>
          <button
            className="copy-brief"
            onClick={copyBrief}
            type="button"
            disabled={copyState === 'copying'}
            aria-describedby={copyState === 'error' ? 'copy-error' : undefined}
          >
            {copyState === 'copying' ? <LoaderCircle className="spin" aria-hidden="true" /> : null}
            {copyState === 'copied' ? <Check aria-hidden="true" /> : null}
            {copyState === 'idle' || copyState === 'error' ? <Clipboard aria-hidden="true" /> : null}
            {copyState === 'copying' ? 'Copiando…' : copyState === 'copied' ? 'Briefing copiado' : 'Copiar briefing'}
          </button>
          {copyState === 'error' ? (
            <output className="copy-feedback" id="copy-error" aria-live="polite">
              Não foi possível copiar automaticamente. Selecione o texto acima e copie manualmente.
            </output>
          ) : null}
        </div>
      )}
    </div>
  );
}
