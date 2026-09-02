---
name: "Frontier OS"
description: "Um sistema operacional visual para conectar presença, aquisição, operação e inteligência."
colors:
  frontier-red: "#9C311F"
  signal-red: "#D2462E"
  action-red-hover: "#B93B26"
  warm-ivory: "#E6DBCD"
  bright-ivory: "#FFF8EF"
  matte-black: "#050505"
  surface-black: "#0B0B0B"
  frontier-graphite: "#141313"
  warm-ink: "#181411"
  muted-warm: "#B9AD9E"
  muted-earth: "#655A51"
  feedback-soft-red: "#F3C4B9"
typography:
  display:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "clamp(4.7rem, 7.4vw, 6rem)"
    fontWeight: 600
    lineHeight: 0.83
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "clamp(4.2rem, 8.5vw, 6rem)"
    fontWeight: 600
    lineHeight: 0.86
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "clamp(2rem, 3.2vw, 3.15rem)"
    fontWeight: 600
    lineHeight: 0.94
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Manrope, sans-serif"
    fontSize: "clamp(0.98rem, 1.1vw, 1.13rem)"
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: "normal"
  label:
    fontFamily: "Manrope, sans-serif"
    fontSize: "0.7rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "0.12em"
rounded:
  none: "0"
spacing:
  xs: "8px"
  sm: "12px"
  md: "18px"
  lg: "24px"
  xl: "34px"
  section-inline: "clamp(20px, 5vw, 80px)"
  section-block: "clamp(88px, 12vw, 180px)"
components:
  button-primary:
    backgroundColor: "{colors.frontier-red}"
    textColor: "{colors.bright-ivory}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0 24px"
    height: "58px"
  button-primary-hover:
    backgroundColor: "{colors.action-red-hover}"
    textColor: "{colors.bright-ivory}"
    rounded: "{rounded.none}"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.warm-ivory}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0 14px"
    height: "44px"
  input-underline:
    backgroundColor: "transparent"
    textColor: "{colors.warm-ink}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: "10px 2px"
    height: "54px"
  brief-result:
    backgroundColor: "{colors.warm-ink}"
    textColor: "{colors.warm-ivory}"
    rounded: "{rounded.none}"
    padding: "clamp(28px, 4vw, 54px)"
---

# Design System: Frontier OS

## Overview

**Creative North Star: "The Living Operations Manual"**

Frontier OS transforma a linguagem de um manual operacional industrial em uma experiência digital viva. O sistema parece pertencer ao próprio universo da Frontier: preto mate, campos comprometidos de vermelho e marfim quente, rotas luminosas, índices numerados e linhas de registro fazem serviços dispersos parecerem uma infraestrutura única, visível e governável.

A composição é cinematográfica sem abandonar utilidade. Grandes silhuetas tipográficas abrem cada capítulo; regras finas, trilhos e listas organizam o detalhe; a rota técnica conecta Presença, Aquisição, Operação e Inteligência. O acabamento aprovado para envio privilegia contraste, ritmo e mecanismo concreto, recusando cartões genéricos, cantos amigáveis em excesso, gradientes de texto e métricas fictícias.

**Key Characteristics:**

- Manual industrial vivo, editorial e orientado por rotas.
- Campos de cor inteiros em preto mate, vermelho Frontier e marfim quente.
- Hierarquia condensada e monumental com texto corrido calmo e legível.
- Estrutura quadrada, guiada por bordas finas, índices e marcas de registro.
- Profundidade luminosa concentrada na rota, na mídia e no núcleo da marca.
- Movimento funcional que nunca esconde conteúdo e respeita redução de movimento.

## Colors

A paleta combina matéria escura, papel aquecido e sinais vermelhos precisos; o vermelho funciona como ação e condução, não como preenchimento decorativo indiscriminado.

### Primary

- **Vermelho Frontier:** campo institucional para chamadas principais, manifesto, seleção e estados de ação.
- **Vermelho de Sinal:** traço mais luminoso para rotas, índices, marcadores e pequenos pontos de atenção técnica.
- **Vermelho de Ação em Hover:** resposta de interação reservada aos controles preenchidos.

### Secondary

- **Marfim Quente:** texto principal no escuro e grande campo claro para capítulos explicativos e de contato.
- **Marfim Luminoso:** contraste máximo sobre vermelho e superfície de inversão nos estados de lista.

### Neutral

- **Preto Mate:** palco dominante, fundo do hero, cabeçalho e rodapé.
- **Preto de Superfície:** camada discreta para superfícies escuras funcionais.
- **Grafite Frontier:** matéria de apoio e bordas escuras sem competir com o preto principal.
- **Tinta Quente:** texto e painel de resultado sobre capítulos em marfim.
- **Neutro Quente Atenuado:** texto secundário em superfícies escuras.
- **Terra Atenuada:** ajuda, placeholder e detalhe secundário sobre marfim.
- **Vermelho Suave de Feedback:** mensagem de erro legível dentro de superfícies escuras.

### Named Rules

**The Routed Red Rule.** Use o vermelho para mostrar ação, passagem ou estado; em áreas escuras, sua raridade é o que torna a rota legível.

**The Committed Field Rule.** Quando uma seção muda de cor, ela assume o campo por inteiro; não transforme vermelho e marfim em mosaicos de cartões pequenos.

## Typography

**Display Font:** Barlow Condensed (com Arial Narrow e sans-serif como fallback)  
**Body Font:** Manrope (com sans-serif como fallback)

**Character:** Barlow Condensed entrega a voz de manual técnico com presença de cartaz; Manrope mantém instruções, explicações e formulários claros. A tensão entre condensação expressiva e corpo neutro sustenta o caráter premium sem parecer ornamental.

### Hierarchy

- **Display** (600, fluido até 6rem, line-height 0.83): headline principal em caixa alta, com quebras intencionais e largura controlada.
- **Headline** (600, fluido até 6rem, line-height 0.86): títulos de capítulo, normalmente limitados a 9–12 caracteres por linha visual.
- **Title** (600, escala fluida de seção, line-height 0.94): nomes de serviços, etapas e destinos operacionais.
- **Body** (400, escala fluida próxima de 1rem, line-height 1.7): argumentos, descrições e instruções; prefira linhas de até 54–58ch.
- **Label** (700, 0.7rem, tracking 0.12em, caixa alta): códigos, índices, controles e metadados; numerais usam alinhamento tabular quando formam sequências.

### Named Rules

**The Condensed Command Rule.** Barlow Condensed com peso 600–700 é a voz de comando; não a use em parágrafos extensos.

**The Uppercase Hierarchy Rule.** Caixa alta pertence a headlines, rótulos e ações; o corpo em Manrope preserva leitura natural.

## Layout

O sistema usa uma grade editorial de alta densidade com trilhos laterais, faixas inferiores, listas indexadas e capítulos em campos contínuos. No hero desktop, o cabeçalho tem três colunas, o texto ocupa o quadrante inferior esquerdo, a rota resolve quatro destinos à direita e um trilho de serviços fecha a borda; a faixa inferior ancora o identificador do sistema e as quatro etapas.

As seções principais usam respiro vertical fluido e margem lateral responsiva. Introduções combinam uma coluna dominante de título com uma coluna menor de explicação; listas usam quatro colunas quando a sequência é essencial. Em até 980px, navegação central e trilho de serviços saem de cena, grades de quatro etapas viram duas colunas e as introduções empilham. Em até 640px, os capítulos usam margem lateral de 20px, as sequências viram uma coluna e a ação principal ocupa toda a largura. Os elementos desaparecem apenas quando sua função já está coberta pela narrativa, nunca para esconder conteúdo essencial.

**The Route Before Grid Rule.** Toda grade deve reforçar uma sequência, um índice ou uma relação operacional; não use colunas apenas para produzir variedade visual.

## Elevation & Depth

O sistema é plano por padrão e não usa sombras de cartão. Profundidade vem da atmosfera de mídia, de superfícies translúcidas escuras com blur controlado, da sobreposição de linhas e de um brilho vermelho localizado na rota. Sombras de texto aparecem somente onde são necessárias para separar rótulos técnicos da imagem; bordas e campos de cor continuam sendo a estrutura principal.

### Shadow Vocabulary

- **Brilho de Rota:** halo vermelho curto aplicado à linha conectiva para sugerir energia sem engrossar o traço.
- **Separação de Rótulo:** sombra preta concentrada sob os destinos do hero para preservar leitura sobre a atmosfera.

### Named Rules

**The No Floating Cards Rule.** Superfícies permanecem presas à grade por bordas e contraste tonal; nunca simule profundidade com cartões soltos e sombras difusas.

**The Luminous Mechanism Rule.** Brilho é evidência de fluxo e deve permanecer confinado à rota, ao núcleo ou à mídia ativa.

## Shapes

Cantos são quadrados em botões, campos, painéis e controles. A geometria recorrente vem de linhas de 1px, divisórias, cantos de registro de 18px, trilhos horizontais e verticais e pequenos traços vermelhos. Curvas pertencem à rota que contorna obstáculos e conecta etapas; não amaciam containers. Recortes de mídia ficam presos a molduras parciais e bordas abertas, como pranchas técnicas em movimento.

**The Square Instrument Rule.** A forma padrão é reta e registrável; qualquer curva precisa descrever movimento, não decoração.

## Components

### Buttons

- **Shape:** bloco quadrado sem raio, com altura confortável entre 44px e 58px.
- **Primary:** campo Vermelho Frontier, texto Marfim Luminoso, Barlow Condensed semibold em caixa alta e espaçamento lateral de 20–28px.
- **Hover / Focus:** o preenchimento clareia para o Vermelho de Ação em Hover; setas se deslocam 3px na diagonal em 180ms; foco visível usa contorno de 2px com offset de 4px e cor adaptada ao campo.
- **Outline:** fundo escuro translúcido ou transparente, borda fina em marfim e rótulo compacto; usado para controle de mídia e cópia secundária.

### Cards / Containers

- **Corner Style:** cantos retos, sem raio.
- **Background:** campos contínuos ou painéis de Tinta Quente; não há cartão branco genérico sobre fundo neutro.
- **Shadow Strategy:** nenhuma sombra de elevação; use borda, inversão tonal e alinhamento com a grade.
- **Border:** regras de 1px com opacidade baixa e cor herdada do campo.
- **Internal Padding:** fluido conforme escala e função; painéis de resultado usam respiro maior que células indexadas.

### Inputs / Fields

- **Style:** fundo transparente, apenas sublinhado de 1px, cantos retos e Manrope em tamanho de corpo.
- **Focus:** contorno global de 2px em vermelho sobre superfícies claras, com offset de 4px; o campo mantém sua linha de base.
- **Error / Disabled:** erro usa texto vermelho suave; espera reduz opacidade do controle sem alterar sua geometria.

### Navigation

Links de navegação são compactos, em Manrope semibold e caixa alta. No hover, o texto migra de marfim atenuado para marfim integral e uma linha vermelha cresce da direita para a esquerda em 220ms. Em tablet e celular, a navegação central é removida e a marca mais a ação principal preservam o caminho essencial.

### Indexed Rows

Listas de serviços e processos funcionam como tabelas editoriais: número tabular, título condensado, explicação e seta ocupam colunas estáveis separadas por regras. No hover, a linha de serviços inverte para marfim claro e tinta escura; no mobile, descrição e ação refluem sem virar cartões.

### Operational Route

A rota é o componente-assinatura. Um traço vermelho fino e tracejado parte do núcleo Frontier e resolve exatamente quatro destinos — Presença, Aquisição, Operação e Inteligência — com halo técnico discreto e animação linear contínua. O conteúdo permanece compreensível sem movimento, e `prefers-reduced-motion` reduz a animação a uma única passagem praticamente instantânea.

### Cinematic Strip

A mídia ocupa uma faixa horizontal presa à borda da seção, com moldura parcial interna, metadado em caixa alta e controle de reprodução quadrado. O vídeo usa crop responsivo; em redução de movimento, inicia pausado e continua acessível pelo controle.

## Do's and Don'ts

### Do:

- **Do** use a rota Presença → Aquisição → Operação → Inteligência como estrutura recorrente para explicar conexão entre capacidades.
- **Do** alterne campos completos de preto mate, vermelho e marfim para marcar capítulos com decisão.
- **Do** preserve a combinação Barlow Condensed para comando e Manrope para explicação.
- **Do** use índices, numerais tabulares, bordas finas e marcas de registro para organizar informação real.
- **Do** mantenha foco visível, alvos de toque confortáveis e equivalência de conteúdo com movimento reduzido.
- **Do** trate a chama Frontier e a mídia fornecida como ativos de marca preservados, nunca como formas a redesenhar livremente.

### Don't:

- **Don't** transforme o portfólio em uma grade genérica de cartões arredondados.
- **Don't** espalhe brilho, gradientes ou vermelho por elementos sem função de ação ou rota.
- **Don't** invente leituras de instrumento, métricas, clientes, resultados ou dados para preencher a estética operacional.
- **Don't** use sombras macias para destacar containers; borda, posição e campo de cor devem fazer esse trabalho.
- **Don't** esconda conteúdo essencial atrás de vídeo, animação, hover ou interação exclusiva de desktop.
- **Don't** dilua a hierarquia com muitas escalas concorrentes, textos condensados longos ou rótulos sem função.
