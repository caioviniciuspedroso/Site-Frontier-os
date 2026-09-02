import type { Metadata } from 'next';
import { Barlow_Condensed, Manrope } from 'next/font/google';
import './globals.css';

const display = Barlow_Condensed({
  variable: '--font-display',
  subsets: ['latin'],
  weight: ['500', '600', '700'],
});

const body = Manrope({
  variable: '--font-body',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Frontier OS — Toda a sua operação digital em um só sistema',
  description:
    'Sites premium, CRM, IA, automações, sistemas, mídia e dados conectados para sua empresa operar e crescer melhor.',
  openGraph: {
    title: 'Frontier OS — Toda a sua operação digital em um só sistema',
    description:
      'Sites premium, CRM, IA, automações, sistemas, mídia e dados conectados para sua empresa operar e crescer melhor.',
    type: 'website',
    locale: 'pt_BR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Frontier OS — Toda a sua operação digital em um só sistema',
    description:
      'Sites premium, CRM, IA, automações, sistemas, mídia e dados conectados para sua empresa operar e crescer melhor.',
  },
};

const directionContract = `
THESIS: Frontier OS transforma serviços digitais dispersos em uma rota operacional visível; recusa o catálogo genérico de cards de agência.
OWN-WORLD: preto mate, vermelho Frontier #9C311F e marfim #E6DBCD; manual industrial vivo com rotas, registros e campos de cor comprometidos.
STORY: o visitante reconhece a fragmentação, vê presença, aquisição, operação e inteligência conectadas e inicia uma conversa.
FIRST VIEWPORT: marca e ação no topo; headline condensada no canto inferior esquerdo; vídeo e chama como núcleo; uma rota vermelha resolve quatro destinos à direita.
FORM: manual operacional industrial, posição 4 da lista fundamentada; seed 80b72c58.
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
`.trim();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const injectContract = `document.body.insertBefore(document.createComment(${JSON.stringify(
    directionContract,
  )}), document.body.firstChild);`;

  return (
    <html lang="pt-BR" className="dark">
      <body className={`${display.variable} ${body.variable}`}>
        <script dangerouslySetInnerHTML={{ __html: injectContract }} />
        {children}
      </body>
    </html>
  );
}
