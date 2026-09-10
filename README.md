# Credita BSB - Plataforma de Crédito Consignado

<p align="center">
  <img src="public/favicon.svg" alt="Credita BSB Logo" width="80" height="80" />
</p>

<p align="center">
  <strong>Seu Agente de Crédito — Mais de 17 anos de mercado em Brasília e todo o Brasil.</strong>
</p>

<p align="center">
  <a href="#-sobre-o-projeto">Sobre</a> •
  <a href="#-funcionalidades">Funcionalidades</a> •
  <a href="#-tecnologias">Tecnologias</a> •
  <a href="#-como-executar">Como Executar</a> •
  <a href="#-estrutura-do-projeto">Estrutura</a> •
  <a href="#-contato">Contato</a>
</p>

---

## 📌 Sobre o Projeto

A **Credita BSB** é uma aplicação web moderna de alta conversão desenvolvida para simulação e contratação de crédito consignado. Focada em aposentados e pensionistas do INSS, servidores públicos (SIAPE/Distritais/Estaduais) e cartões consignados/benefício.

A plataforma combina uma interface limpa, acessível e responsiva com cálculo financeiro em tempo real e integração direta com o WhatsApp para fechamento imediato de propostas.

---

## ✨ Funcionalidades

- 🎯 **Simulador de Crédito em Tempo Real**:
  - Abas no estilo fichário para alternar entre **INSS**, **Servidores Públicos (SIAPE)** e **Cartões Consignados**.
  - Ajuste dinâmico de valor solicitado e prazo de pagamento com recálculo instantâneo das parcelas.
  - Exibição de taxas nominais, CET estimado e economia comparativa.
- 📊 **Comparador de Taxas de Mercado**:
  - Gráfico comparativo interativo mostrando a economia do crédito consignado frente a cheque especial, cartão rotativo e empréstimo pessoal convencional.
- 💬 **Integração Inteligente com WhatsApp**:
  - Encaminhamento com mensagem pré-configurada contendo todos os dados da simulação (valor, categoria e número de parcelas).
  - Barra inferior fixa (*Sticky Bar*) com feed dinâmico alternando taxas e provas sociais de simulações recentes.
- ⚡ **Feed de Prova Social (*Live Alerts*)**:
  - Alertas discretos no topo notificando simulações recentes em tempo real para aumentar a autoridade e taxa de conversão.
- ⭐ **Depoimentos & FAQ Interativo**:
  - Seção com avaliações reais de clientes e acordeão com as principais dúvidas sobre margem, portabilidade e prazos.
- 📱 **100% Responsivo e Otimizado**:
  - Experiência fluida em smartphones, tablets e desktops com tempos de carregamento instantâneos.

---

## 🚀 Tecnologias

- **Front-end**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite 6](https://vite.dev/)
- **Estilização**: [Tailwind CSS v4](https://tailwindcss.com/) com `@tailwindcss/vite`
- **Animações**: [Motion (Framer Motion v12)](https://motion.dev/)
- **Ícones**: [Lucide React](https://lucide.dev/)
- **Tipografia**: Outfit & Plus Jakarta Sans via Google Fonts
- **Assets Vetoriais**: SVG nativo para logotipo e favicon

---

## 💻 Como Executar o Projeto

### Pré-requisitos
- [Node.js](https://nodejs.org/) (versão 18 ou superior)
- Gerenciador de pacotes: `npm`, `yarn` ou `bun`

### Passo a passo

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/SEU-USUARIO/credita-bsb.git
   cd credita-bsb
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   # ou
   bun install
   ```

3. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   # ou
   bun run dev
   ```

4. **Abra no navegador:**
   Acesse `http://localhost:3000`

---

## 🛠️ Scripts Disponíveis

| Script | Descrição |
|---|---|
| `npm run dev` | Inicia o servidor de desenvolvimento na porta 3000 |
| `npm run build` | Compila os arquivos do projeto para produção na pasta `dist` |
| `npm run preview` | Visualiza localmente a versão compilada de produção |
| `npm run lint` | Executa a validação de tipos TypeScript (`tsc --noEmit`) |
| `npm run clean` | Remove pastas temporárias e build anterior |

---

## 📂 Estrutura do Projeto

```
credita-bsb/
├── public/                     # Assets estáticos (favicon.svg, etc.)
├── src/
│   ├── components/             # Componentes modulares da interface
│   │   ├── FAQ.tsx             # Perguntas frequentes (acordeão)
│   │   ├── Footer.tsx          # Rodapé com dados legais e CNPJ
│   │   ├── Header.tsx          # Cabeçalho com navegação e CTA
│   │   ├── Hero.tsx            # Dobra principal com chamada de impacto
│   │   ├── HowItWorks.tsx      # Etapas do processo de contratação
│   │   ├── LiveSimulationAlert.tsx # Alertas rotativos no topo
│   │   ├── Logo.tsx            # Componente de logotipo SVG vetorial
│   │   ├── QuickLeadForm.tsx   # Formulário rápido de contato
│   │   ├── RateComparisonChart.tsx # Gráfico comparativo de juros
│   │   ├── Simulator.tsx       # Simulador interativo com abas de fichário
│   │   ├── StickyWhatsAppBar.tsx # Barra inferior dinâmica de conversão
│   │   └── Testimonials.tsx    # Prova social e avaliações de clientes
│   ├── data.ts                 # Dados institucionais, taxas e configurações
│   ├── types.ts                # Definições de tipos TypeScript
│   ├── App.tsx                 # Composição principal das páginas
│   ├── index.css               # Importação e configuração do Tailwind CSS v4
│   └── main.tsx                # Ponto de entrada da aplicação React
├── index.html                  # HTML com metadados e pré-carregamento de fontes
├── package.json                # Dependências e scripts do projeto
├── tsconfig.json               # Configurações do TypeScript
└── vite.config.ts              # Configuração do Vite e plugins
```

---

## 🏢 Dados Institucionais

- **Razão Social / Nome**: Credita BSB — Seu Agente de Crédito
- **CNPJ**: 15.202.214/0001-18
- **Localização**: SDS Edifício Eldorado, Sala 613, Entrada A, Conic, Brasília - DF, CEP 70392-901
- **WhatsApp**: (61) 98444-3504 / (61) 98374-1464
- **Telefone**: (61) 3224-9118
- **Instagram**: [@creditabsb](https://www.instagram.com/creditabsb/)

---

<p align="center">Desenvolvido com foco em velocidade, acessibilidade e conversão.</p>
