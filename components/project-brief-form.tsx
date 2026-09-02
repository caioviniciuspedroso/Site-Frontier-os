'use client';

import { FormEvent, useState } from 'react';
import { Check, Clipboard, LoaderCircle } from 'lucide-react';

export function ProjectBriefForm() {
  const [brief, setBrief] = useState('');
  const [copyState, setCopyState] = useState<'idle' | 'copying' | 'copied' | 'error'>('idle');

  function prepareBrief(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get('name') ?? '').trim();
    const company = String(data.get('company') ?? '').trim();
    const challenge = String(data.get('challenge') ?? '').trim();

    setBrief(
      `Olá, Frontier Vision. Meu nome é ${name} e falo pela ${company}. Nosso principal desafio hoje é: ${challenge}. Quero entender como o Frontier OS pode conectar nossa operação digital.`,
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
            <span>Seu nome</span>
            <input name="name" autoComplete="name" required placeholder="Como podemos chamar você?" />
          </label>
          <label>
            <span>Empresa</span>
            <input name="company" autoComplete="organization" required placeholder="Nome da sua empresa" />
          </label>
        </div>
        <label>
          <span>O que precisa funcionar melhor?</span>
          <textarea
            name="challenge"
            required
            rows={4}
            placeholder="Ex.: nossos leads chegam, mas não entram em um processo organizado..."
          />
        </label>
        <p className="brief-help">
          Por enquanto, o site prepara um briefing para você copiar. O canal direto será conectado quando você definir o contato oficial.
        </p>
        <button className="brief-submit" type="submit">Preparar briefing</button>
      </form>

      {brief && (
        <div className="brief-result" aria-live="polite">
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
            <p className="copy-feedback" id="copy-error" role="status" aria-live="polite">
              Não foi possível copiar automaticamente. Selecione o texto acima e copie manualmente.
            </p>
          ) : null}
        </div>
      )}
    </div>
  );
}
