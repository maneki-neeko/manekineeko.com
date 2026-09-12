# 🐱 Maneki Neeko — Sites, Landing Pages & Sistemas Sob Medida

> **O site profissional que o seu negócio precisa — sem templates amadores e sem mensalidades abusivas de agência.**

Plataforma web oficial da **Maneki Neeko** ([manekineeko.com](https://manekineeko.com)), desenvolvida com foco total em alta taxa de conversão, velocidade extrema no celular (sub-1s) e geração direta de leads para o WhatsApp.

---

## 🚀 Sobre o Projeto

A **Maneki Neeko** cria soluções digitais exclusivas para autônomos, clínicas, consultórios, escritórios e pequenas/médias empresas que precisam de presença digital profissional com entrega ágil e investimento justo.

### 🌟 Principais Pilares:
- **Design 100% Exclusivo:** Sem templates prontos, genéricos ou pesados de plataformas como Wix ou WordPress.
- **Velocidade Extrema:** Otimizado para abrir em menos de 1 segundo no celular (4G/5G).
- **Foco em Conversão no WhatsApp:** CTAs estratégicos, botão flutuante e formulário inteligente com pré-seleção de pacotes.
- **Código Proprietário:** O código e o domínio pertencem 100% ao cliente, sem mensalidades obrigatórias de agência.
- **Entrega Ágil:** Projetos colocados no ar em prazos de **5 a 15 dias úteis**.

---

## 🛠️ Stack Tecnológica

O projeto foi construído sobre uma arquitetura moderna, tipada e de alto desempenho:

| Camada | Tecnologia | Descrição |
| :--- | :--- | :--- |
| **Core & Build** | [Vite 5](https://vitejs.dev/) + [React 18](https://react.dev/) | Bundler ultrarrápido com Hot Module Replacement (HMR) instantâneo |
| **Linguagem** | [TypeScript](https://www.typescriptlang.org/) | Tipagem estática em toda a base de código para maior robustez |
| **Estilização** | [Tailwind CSS 3](https://tailwindcss.com/) | Estilização utilitária com design system personalizado (`obsidian`, `amber`, `teal`) |
| **Componentes UI** | [Radix UI](https://www.radix-ui.com/) / [shadcn/ui](https://ui.shadcn.com/) | Primitivas acessíveis para modais, drawers, accordions e selects |
| **Animações** | [Framer Motion](https://www.framer.com/motion/) + `tailwindcss-animate` | Transições suaves, efeitos de ambient glow e microinterações |
| **Ícones** | [Lucide React](https://lucide.dev/) | Coleção consistente e leve de ícones SVG |
| **Formulários & Notificações** | [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/) + [Sonner](https://sonner.emilkowal.ski/) | Validação robusta e toasts elegantes para confirmação de pedidos |

---

## 📂 Estrutura de Diretórios

```plaintext
manekineeko.com/
├── public/                     # Imagens estáticas, logo em WebP e manifestos
│   └── MANEKINEEKO.webp        # Logotipo oficial em alta resolução
├── src/
│   ├── components/
│   │   ├── landing/            # Seções principais da Landing Page
│   │   │   ├── Header.tsx           # Topo fixo, navegação e drawer mobile
│   │   │   ├── Hero.tsx             # Seção hero com copy de conversão e logo 3D
│   │   │   ├── ComparisonBar.tsx    # Comparativo: Maneki Neeko vs Wix vs Agências
│   │   │   ├── PricingPlans.tsx     # Cards de serviços, prazos e pacotes
│   │   │   ├── Cases.tsx            # Métricas e depoimentos de clientes
│   │   │   ├── Process.tsx          # Etapas do desenvolvimento em 4 passos
│   │   │   ├── Faq.tsx              # Accordion com perguntas frequentes
│   │   │   ├── ContactForm.tsx      # Simulador de orçamento e formulário de contato
│   │   │   ├── Footer.tsx           # Rodapé institucional e canais de atendimento
│   │   │   └── FloatingWhatsApp.tsx # Botão flutuante de conversão contínua
│   │   └── ui/                 # Componentes reutilizáveis (shadcn/Radix UI)
│   ├── config/
│   │   └── site.ts             # Configuração global centralizada (telefones, links e e-mails)
│   ├── pages/
│   │   ├── Index.tsx           # Página inicial com orquestração das seções
│   │   └── NotFound.tsx        # Página 404 personalizada
│   ├── App.tsx                 # Configuração de rotas e providers
│   ├── index.css               # Variáveis de tema e tokens CSS
│   └── main.tsx                # Ponto de entrada da aplicação
├── index.html                  # HTML base com SEO, Open Graph e Schema.org
├── tailwind.config.ts          # Configuração de cores, sombras e fontes personalizadas
└── vite.config.ts              # Configuração do Vite e aliases (@/ -> src/)
```

---

## ⚙️ Configuração Centralizada (`src/config/site.ts`)

Todas as informações de contato, links sociais e comportamentos da Maneki Neeko ficam centralizados no arquivo [`src/config/site.ts`](file:///c:/Users/Vi/Projetos/manekineeko.com/src/config/site.ts).

Para alterar número de WhatsApp, e-mail de contato ou links de redes sociais em todo o site de uma só vez:

```typescript
export const siteConfig = {
  name: 'Maneki Neeko',
  tagline: 'sites & landing pages sob medida',
  url: 'https://manekineeko.com',
  
  contact: {
    email: 'contato@manekineeko.com',
    whatsappNumber: '5511999999999', // Apenas números: DDI + DDD + Telefone
    whatsappDisplay: '(11) 99999-9999',
    city: 'São Paulo',
    state: 'SP',
    country: 'Brasil',
    defaultWhatsappMessage: 'Olá! Vim pelo site da Maneki Neeko e gostaria de um orçamento para o meu projeto.',
  },
  // ...
};
```

---

## 💻 Como Executar Localmente

### Pré-requisitos
- [Node.js](https://nodejs.org/) versão 18 ou superior
- Gerenciador de pacotes `npm` (ou `bun` / `pnpm`)

### Passo a passo

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/maneki-neeko/manekineeko.com.git
   cd manekineeko.com
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```
   O servidor estará disponível por padrão em: `http://localhost:8080/`

4. **Gerar build de produção:**
   ```bash
   npm run build
   ```
   Os arquivos otimizados serão gerados no diretório `dist/`.

5. **Visualizar a build de produção localmente:**
   ```bash
   npm run preview
   ```

---

## 📜 Scripts Disponíveis

| Comando | Descrição |
| :--- | :--- |
| `npm run dev` | Inicia o servidor de desenvolvimento local no Vite (porta 8080) |
| `npm run build` | Compila o projeto com TypeScript e Vite para produção na pasta `dist/` |
| `npm run build:dev` | Compila o projeto em modo de desenvolvimento |
| `npm run preview` | Executa um servidor local servindo a pasta `dist/` gerada |
| `npm run lint` | Executa o ESLint para verificar padrões e qualidade do código |

---

## 🎨 Identidade Visual & Design System

- **Tema Padrão:** Obsidian Dark (`#090A0D` / `#111318`)
- **Cor Primária (Ações e Destaques):** Warm Amber (`#F59E0B` / `#D97706` com glow)
- **Cor Secundária (Métricas e Sucesso):** Electric Teal (`#14B8A6` / `#0D9488`)
- **Tipografia:**
  - **Títulos / Display:** *Plus Jakarta Sans*
  - **Corpo de Texto:** *Inter*
  - **Métricas & Badges:** *JetBrains Mono*

---

## 📄 Licença

Projeto proprietário desenvolvido para **Maneki Neeko**. Todos os direitos reservados.
