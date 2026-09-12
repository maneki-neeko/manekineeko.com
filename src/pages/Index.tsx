import React, { useState } from 'react';
import {
  ArrowRight,
  Check,
  CheckCircle2,
  Code2,
  Globe2,
  Layers3,
  Layout,
  MessageCircle,
  Send,
  ShieldCheck,
  Sliders,
  Sparkles,
  Workflow,
  Zap,
} from 'lucide-react';
import Header from '@/components/landing/Header';
import Footer from '@/components/landing/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { getWhatsappUrl } from '@/config/site';

const capabilities = [
  {
    icon: Code2,
    title: 'Sistemas web sob medida',
    text: 'Aplicações seguras, rápidas e responsivas, criadas para simplificar rotinas, centralizar informações e acompanhar o crescimento do seu negócio.',
  },
  {
    icon: Workflow,
    title: 'Automação de processos',
    text: 'Fluxos digitais inteligentes que reduzem tarefas manuais repetitivas, evitam erros operacionais e ajudam sua equipe a trabalhar com mais clareza.',
  },
  {
    icon: Layers3,
    title: 'Integrações de dados',
    text: 'Conexões sob medida entre ferramentas, bancos de dados, APIs e serviços para eliminar retrabalho e silos de informação na sua operação.',
  },
];

const plans = [
  {
    id: 'landing-page',
    icon: Layout,
    name: 'Landing Page de Alta Conversão',
    tagline: 'Para vender rápido e rodar anúncios no Google & Instagram',
    featured: false,
    timeframe: '5 a 7 dias úteis',
    features: [
      'Página estratégica com foco total em conversão de clientes',
      'Botão flutuante e chamadas diretas para o WhatsApp',
      'Carregamento instantâneo (sub-1s no celular 4G/5G)',
      'Configuração de Pixel da Meta e Tags do Google',
      'Domínio registrado 100% no seu nome',
      'Código proprietário sem mensalidades de plataforma',
    ],
    whatsappMsg: 'Olá! Gostaria de um orçamento para uma Landing Page de Alta Conversão.',
  },
  {
    id: 'site-institucional',
    icon: Globe2,
    name: 'Site Institucional Completo',
    tagline: 'Autoridade máxima para empresas, clínicas e escritórios',
    featured: true,
    badge: 'Mais Escolhido',
    timeframe: '7 a 10 dias úteis',
    features: [
      'Múltiplas páginas (Início, Sobre, Serviços, Contato)',
      'Otimização técnica de SEO para buscas orgânicas no Google',
      'Design 100% exclusivo alinhado à identidade da sua marca',
      'Integração com Google Maps, WhatsApp e formulário de e-mail',
      'Totalmente responsivo em celulares, tablets e computadores',
      'Entrega completa com código proprietário sem mensalidades',
    ],
    whatsappMsg: 'Olá! Gostaria de um orçamento para um Site Institucional Completo.',
  },
  {
    id: 'sistema-sob-medida',
    icon: Sliders,
    name: 'Sistema & Painel Sob Medida',
    tagline: 'Para quem precisa de controle de rotina, clientes e pedidos',
    featured: false,
    timeframe: '10 a 15 dias úteis',
    features: [
      'Painel administrativo enxuto, rápido e seguro',
      'Módulo prático de agendamento online ou controle de pedidos',
      'Centralização de dados e histórico organizado de clientes',
      'Treinamento prático de uso para você e sua equipe',
      'Código 100% seu sem ficar preso a softwares genéricos',
      'Suporte técnico direto com quem desenvolveu o sistema',
    ],
    whatsappMsg: 'Olá! Gostaria de um orçamento para um Sistema Web Sob Medida.',
  },
];

const steps = [
  {
    number: '01',
    title: 'Entendimento',
    text: 'Mapeamos o desafio real, as pessoas envolvidas e os resultados concretos esperados para o projeto.',
  },
  {
    number: '02',
    title: 'Projeto & Arquitetura',
    text: 'Definimos a experiência do usuário, o escopo transparente e o caminho técnico da melhor solução.',
  },
  {
    number: '03',
    title: 'Desenvolvimento Ágil',
    text: 'Construímos com código limpo em ciclos curtos, com acompanhamento próximo e validações contínuas.',
  },
  {
    number: '04',
    title: 'Entrega & Suporte',
    text: 'Colocamos a solução em produção com segurança e prestamos suporte direto para a sua evolução.',
  },
];

const faqs = [
  {
    id: 'faq-1',
    question: 'Como funciona o orçamento e as condições de pagamento?',
    answer:
      'Analisamos os objetivos do seu negócio e enviamos uma proposta clara, transparente e personalizada para o escopo do seu projeto. Facilitamos o pagamento com opções à vista via PIX com desconto ou parcelamento no cartão de crédito.',
  },
  {
    id: 'faq-2',
    question: 'Quanto tempo demora para meu site ou sistema ficar pronto?',
    answer:
      'Uma Landing Page de Alta Conversão fica pronta em média de 5 a 7 dias úteis. Um Site Institucional Completo leva de 7 a 10 dias úteis. Para sistemas web e painéis administrativos sob medida, o prazo médio é de 10 a 15 dias úteis.',
  },
  {
    id: 'faq-3',
    question: 'Eu preciso pagar alguma mensalidade para a Maneki Neeko?',
    answer:
      'Não! Você não fica preso a mensalidades obrigatórias de agência. Todo o código do projeto é 100% de sua propriedade. Os únicos custos contínuos são os padrões da internet: a renovação anual do seu domínio (.com.br) e o servidor de hospedagem.',
  },
  {
    id: 'faq-4',
    question: 'O site funciona perfeitamente no celular e aparece no Google?',
    answer:
      'Sim, 100%! Todas as nossas páginas são construídas com foco no mobile, abrindo em menos de 1 segundo no celular, com botões de contato de toque fácil e estrutura otimizada com as melhores práticas de SEO para o Google.',
  },
  {
    id: 'faq-5',
    question: 'Como funciona o suporte pós-entrega?',
    answer:
      'Oferecemos suporte direto com os próprios desenvolvedores no lançamento para garantir que tudo funcione perfeitamente. Você fala diretamente com quem construiu sua aplicação, sem filas de atendimento ou burocracia.',
  },
];

const Index: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', company: '', need: '' });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const message = [
      'Olá! Vim pelo site da Maneki Neeko e gostaria de conversar sobre um projeto.',
      `Nome: ${formData.name}`,
      formData.company ? `Empresa/órgão: ${formData.company}` : '',
      `Necessidade: ${formData.need}`,
    ].filter(Boolean).join('\n');
    window.open(getWhatsappUrl(message), '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen overflow-hidden bg-[#08090C] text-[#F3F4F6] selection:bg-primary/25 selection:text-white flex flex-col">
      {/* 1. Header com navegação e CTA para WhatsApp */}
      <Header />

      <main className="flex-1 w-full">
        {/* 2. Hero Section com Logo Mascote em destaque */}
        <section id="inicio" className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
          {/* Ambient background glows */}
          <div className="ambient-shape ambient-shape-primary" aria-hidden="true" />
          <div className="ambient-shape ambient-shape-secondary" aria-hidden="true" />

          <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_1fr] lg:gap-14">
            
            {/* Left Column: Commercial Copy & CTAs */}
            <div className="animate-fade-in flex flex-col items-start">
              {/* Status Pill */}
              <div className="glass-pill mb-6 inline-flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                </span>
                <span className="font-mono text-xs font-semibold uppercase tracking-wider text-primary">
                  Software &amp; Sistemas Sob Medida
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="font-brand text-5xl font-extrabold leading-[1.02] text-white sm:text-6xl lg:text-7xl tracking-tight">
                Maneki<br />
                <span className="text-gradient-amber">Neeko.</span>
              </h1>

              {/* Subheadline */}
              <p className="mt-6 max-w-xl text-base sm:text-lg lg:text-xl leading-relaxed text-[#9CA3AF]">
                Transformamos processos complexos em sistemas simples de usar — construídos sob medida para a realidade da sua operação.
              </p>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <Button
                  asChild
                  className="group relative h-14 rounded-2xl px-8 bg-gradient-to-r from-[#FF5E0E] via-[#F26419] to-[#FF7A1A] hover:brightness-110 text-white font-brand text-sm sm:text-base font-bold tracking-tight shadow-[0_12px_28px_-6px_rgba(242,100,25,0.45),_inset_0_1px_0_rgba(255,255,255,0.3)] hover:shadow-[0_16px_36px_-6px_rgba(242,100,25,0.65),_inset_0_1px_0_rgba(255,255,255,0.4)] border border-white/20 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                >
                  <a
                    href={getWhatsappUrl('Olá! Gostaria de conversar sobre um projeto com a Maneki Neeko.')}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center"
                  >
                    <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-black/15 mr-2.5 transition-transform group-hover:scale-110">
                      <MessageCircle className="w-4 h-4 fill-white text-white" />
                    </span>
                    <span>Conversar sobre um projeto</span>
                  </a>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  className="group h-14 rounded-2xl px-7 bg-[#12151E]/90 hover:bg-[#181D29] border border-white/[0.14] hover:border-white/[0.28] text-[#F3F4F6] hover:text-white font-brand text-sm sm:text-base font-semibold backdrop-blur-xl shadow-[0_8px_24px_-6px_rgba(0,0,0,0.5),_inset_0_1px_0_rgba(255,255,255,0.08)] hover:shadow-[0_12px_28px_-6px_rgba(20,184,166,0.15)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                >
                  <a href="#servicos" className="flex items-center justify-center">
                    <span>Ver serviços &amp; pacotes</span>
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-teal-500/10 text-teal-400 ml-2.5 transition-transform group-hover:translate-x-1 group-hover:bg-teal-500/20">
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </a>
                </Button>
              </div>

              {/* Guarantees / Trust Badges */}
              <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-xs sm:text-sm text-[#9CA3AF] pt-5 border-t border-white/[0.08] w-full">
                <span className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-teal-400 shrink-0" />
                  Escopo transparente
                </span>
                <span className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-teal-400 shrink-0" />
                  Contato direto com engenharia
                </span>
                <span className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-teal-400 shrink-0" />
                  Tecnologia 100% proprietária
                </span>
              </div>
            </div>

            {/* Right Column: High-End Logo Mascot Showcase */}
            <div className="relative flex items-center justify-center animate-fade-in lg:pl-4 select-none">
              {/* Dynamic Ambient Background Glows */}
              <div className="pointer-events-none absolute w-72 sm:w-96 lg:w-[420px] h-72 sm:h-96 lg:h-[420px] bg-primary/20 blur-[110px] rounded-full -z-10" />
              <div className="pointer-events-none absolute w-60 sm:w-72 h-60 sm:h-72 bg-teal-500/15 blur-[90px] rounded-full translate-x-12 translate-y-12 -z-10" />

              {/* Floating Badge: Top Right */}
              <div className="absolute top-2 right-2 sm:right-6 z-20 hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#0F1117]/90 border border-white/[0.1] backdrop-blur-md shadow-2xl text-xs font-mono text-white animate-bounce [animation-duration:4.5s]">
                <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Design &amp; Código Exclusivos</span>
              </div>

              {/* Floating Badge: Bottom Left */}
              <div className="absolute bottom-6 left-0 sm:left-4 z-20 hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#0F1117]/90 border border-white/[0.1] backdrop-blur-md shadow-2xl text-xs font-mono text-white animate-bounce [animation-duration:5.5s] [animation-delay:1s]">
                <ShieldCheck className="w-4 h-4 text-teal-400 shrink-0" />
                <span>Segurança &amp; Performance</span>
              </div>

              {/* Central Mascot Patch Emblem */}
              <div className="relative z-10 flex flex-col items-center group">
                <div className="relative transition-all duration-500 ease-out group-hover:scale-105 group-hover:-rotate-1">
                  <img
                    src="/MANEKINEEKO.webp"
                    alt="Mascote Maneki Neeko — Software & Sistemas Sob Medida"
                    className="w-64 sm:w-80 md:w-96 lg:w-[410px] xl:w-[450px] h-auto object-contain drop-shadow-[0_25px_50px_rgba(0,0,0,0.95)] drop-shadow-[0_0_60px_rgba(242,100,25,0.3)] select-none"
                    draggable={false}
                  />
                </div>

                {/* Status Pill underneath Logo */}
                <div className="mt-4 inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#0F1117]/90 border border-white/[0.08] backdrop-blur-md shadow-lg text-xs font-mono text-[#D1D5DB]">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-400" />
                  </span>
                  <span>Disponível para novos projetos neste mês</span>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* 3. Seção Soluções ("O que construímos") */}
        <section id="solucoes" className="section-space relative border-t border-white/[0.06]">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <div className="mb-14 max-w-2xl">
              <p className="section-kicker">O que construímos</p>
              <h2 className="section-title">Tecnologia que acompanha o seu jeito de trabalhar.</h2>
              <p className="section-copy">
                Do primeiro desenho à operação, criamos soluções digitais que resolvem problemas concretos e podem evoluir com o seu negócio.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {capabilities.map(({ icon: Icon, title, text }) => (
                <article key={title} className="glass-card group p-8 flex flex-col justify-between">
                  <div>
                    <div className="icon-box group-hover:scale-110 transition-transform">
                      <Icon />
                    </div>
                    <h3 className="mt-6 font-brand text-xl font-bold text-white tracking-tight">
                      {title}
                    </h3>
                    <p className="mt-3 text-sm sm:text-base leading-relaxed text-[#9CA3AF]">
                      {text}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center gap-2 text-xs font-mono text-teal-400">
                    <Zap className="w-3.5 h-3.5" />
                    <span>Sob medida para sua rotina</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 4. NOVA Seção Serviços & Formatos de Entrega (Substituindo o produto de telefonia municipal) */}
        <section id="servicos" className="section-space relative border-t border-white/[0.06] scroll-mt-12">
          {/* Anchor alias para suportar links antigos com #produto */}
          <span id="produto" className="absolute -top-24 pointer-events-none" />

          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <div className="mb-14 text-center max-w-3xl mx-auto">
              <p className="section-kicker">Nossos Formatos &amp; Serviços</p>
              <h2 className="section-title">Soluções sob medida para o seu momento.</h2>
              <p className="section-copy mx-auto">
                Prazos transparentes, código 100% de sua propriedade e soluções desenvolvidas para gerar retorno real no seu WhatsApp.
              </p>
            </div>

            {/* 3 Plans Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
              {plans.map((plan) => {
                const Icon = plan.icon;
                return (
                  <div
                    key={plan.id}
                    className={`relative flex flex-col justify-between p-7 sm:p-8 rounded-2xl transition-all duration-300 ${
                      plan.featured
                        ? 'bg-[#11141C] border border-primary/60 shadow-lg shadow-primary/10 scale-[1.02] z-10'
                        : 'bg-[#0F1117]/80 border border-white/[0.08] hover:border-white/[0.15]'
                    }`}
                  >
                    {/* Featured Badge */}
                    {plan.featured && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3.5 py-0.5 rounded-full bg-primary text-white text-[11px] font-mono font-semibold uppercase tracking-wider flex items-center gap-1 shadow-md">
                        <Sparkles className="w-3 h-3 text-white" />
                        <span>{plan.badge}</span>
                      </div>
                    )}

                    <div>
                      {/* Icon */}
                      <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-5">
                        <Icon className="w-5 h-5" />
                      </div>

                      {/* Plan Title & Tagline */}
                      <h3 className="font-brand font-bold text-xl text-white mb-2">
                        {plan.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#9CA3AF] mb-5 leading-relaxed">
                        {plan.tagline}
                      </p>

                      {/* Timeframe pill */}
                      <div className="text-xs font-mono text-teal-400 pb-4 mb-5 border-b border-white/[0.08] flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-teal-400" />
                        <span>Entrega em {plan.timeframe}</span>
                      </div>

                      {/* Features List */}
                      <ul className="flex flex-col gap-3 text-xs sm:text-sm text-[#D1D5DB]">
                        {plan.features.map((feature, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-2.5">
                            <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* WhatsApp Action Button */}
                    <div className="mt-8 pt-5 border-t border-white/[0.08]">
                      <Button
                        asChild
                        className={`w-full h-12 rounded-xl text-sm font-semibold transition-all ${
                          plan.featured
                            ? 'bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/25'
                            : 'bg-white/[0.05] text-white hover:bg-white/[0.1] border border-white/[0.08]'
                        }`}
                      >
                        <a
                          href={getWhatsappUrl(plan.whatsappMsg)}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <MessageCircle className="w-4 h-4 mr-1.5 fill-current" />
                          Pedir orçamento no WhatsApp
                        </a>
                      </Button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom Trust Note */}
            <div className="mt-12 text-center text-xs sm:text-sm text-[#9CA3AF] flex flex-col sm:flex-row items-center justify-center gap-3">
              <span className="flex items-center gap-1.5 text-teal-400">
                <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                Garantia de Satisfação: só publicamos quando você aprovar 100%
              </span>
              <span className="hidden sm:inline text-white/20">•</span>
              <span>Pagamento facilitado no PIX com desconto ou cartão de crédito</span>
            </div>
          </div>
        </section>

        {/* 5. Seção Processo ("Como trabalhamos") */}
        <section id="processo" className="section-space relative border-t border-white/[0.06]">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <div className="mb-14 text-center max-w-3xl mx-auto">
              <p className="section-kicker">Como trabalhamos</p>
              <h2 className="section-title">Clareza em cada etapa, do problema à solução.</h2>
              <p className="section-copy mx-auto">
                Metodologia enxuta e transparente para colocar seu projeto no ar sem enrolação.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {steps.map((step) => (
                <article
                  key={step.number}
                  className="relative p-6 rounded-2xl bg-[#0F1117]/80 border border-white/[0.08] hover:border-primary/40 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/[0.06]">
                      <span className="font-mono text-2xl font-bold text-primary">
                        {step.number}
                      </span>
                      <span className="w-2 h-2 rounded-full bg-primary/40" />
                    </div>
                    <h3 className="font-brand text-lg font-bold text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-[#9CA3AF]">
                      {step.text}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 6. Seção Diferenciais ("Por que a Maneki Neeko") */}
        <section id="diferenciais" className="section-space relative border-t border-white/[0.06]">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="section-kicker">Por que a Maneki Neeko</p>
              <h2 className="section-title">Software sério, parceria próxima.</h2>
              <p className="section-copy">
                Tecnologia só gera valor real quando as pessoas conseguem usá-la com confiança no dia a dia. Por isso, equilibramos excelência técnica, comunicação transparente e entendimento do contexto.
              </p>

              <div className="mt-8 flex flex-col gap-3 text-xs sm:text-sm text-[#9CA3AF]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-teal-400 shrink-0" />
                  <span>Sem intermediários: fale diretamente com os desenvolvedores</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-teal-400 shrink-0" />
                  <span>Código 100% proprietário sem mensalidades de plataforma</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-teal-400 shrink-0" />
                  <span>Design exclusivo desenhado para a sua marca</span>
                </div>
              </div>
            </div>

            <div className="glass-card divide-y divide-white/[0.08] px-7 sm:px-8">
              {[
                ['Solução realmente sob medida', 'A tecnologia se adapta ao seu processo operacional — nunca o contrário.'],
                ['Decisões transparentes', 'Escopo, prioridades, arquitetura e evolução apresentados com total clareza.'],
                ['Acompanhamento próximo', 'Contato direto e ágil durante toda a construção e suporte ativo após a entrega.'],
              ].map(([title, text]) => (
                <div key={title} className="flex gap-4 py-6">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-teal-400" />
                  <div>
                    <h3 className="font-brand text-base font-bold text-white">{title}</h3>
                    <p className="mt-1 text-sm text-[#9CA3AF] leading-relaxed">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. Seção Perguntas Frequentes (FAQ) */}
        <section id="faq" className="section-space relative border-t border-white/[0.06] scroll-mt-12">
          <div className="max-w-3xl mx-auto px-5 sm:px-8">
            <div className="flex flex-col items-center text-center mb-12">
              <p className="section-kicker">Tire suas dúvidas</p>
              <h2 className="section-title">Perguntas Frequentes</h2>
              <p className="section-copy mx-auto">
                Tudo o que você precisa saber antes de iniciar seu projeto com a gente.
              </p>
            </div>

            <Accordion type="single" collapsible defaultValue="faq-1" className="w-full flex flex-col gap-3">
              {faqs.map((faq) => (
                <AccordionItem
                  key={faq.id}
                  value={faq.id}
                  className="border border-white/[0.08] rounded-xl px-5 bg-[#0F1117]/80 transition-colors data-[state=open]:border-primary/40 data-[state=open]:bg-[#12151E]"
                >
                  <AccordionTrigger className="font-brand font-semibold text-left text-sm sm:text-base text-white hover:no-underline py-4.5 hover:text-primary transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-xs sm:text-sm text-[#9CA3AF] leading-relaxed pt-1 pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* 8. Seção Contato & Formulário ("Vamos construir?") */}
        <section id="contato" className="section-space pb-28 relative border-t border-white/[0.06]">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <div className="contact-panel">
              {/* Left Column */}
              <div className="lg:col-span-5 flex flex-col justify-between">
                <div>
                  <div className="icon-box mb-5">
                    <Sparkles />
                  </div>
                  <p className="section-kicker">Vamos construir?</p>
                  <h2 className="section-title">Conte seu desafio. Desenhamos o próximo passo.</h2>
                  <p className="section-copy">
                    Preencha o formulário e continue a conversa pelo WhatsApp com as informações já organizadas.
                  </p>
                </div>

                {/* Direct WhatsApp Fast-Track Card */}
                <div className="mt-8 p-5 rounded-2xl bg-white/[0.02] border border-white/[0.08] flex flex-col gap-3">
                  <span className="font-mono text-xs uppercase text-teal-400 flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-teal-400" />
                    Atendimento Imediato
                  </span>
                  <p className="text-xs sm:text-sm text-[#D1D5DB]">
                    Prefere não preencher formulário? Fale diretamente com a gente no WhatsApp agora mesmo.
                  </p>
                  <a
                    href={getWhatsappUrl('Olá! Gostaria de um atendimento rápido sobre um projeto.')}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] text-white font-medium text-xs sm:text-sm transition-colors border border-white/[0.08]"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>Iniciar conversa no WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Form */}
              <form onSubmit={handleSubmit} className="grid gap-5 lg:col-span-7 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-xs font-mono text-[#D1D5DB]">
                    Seu nome <span className="text-primary">*</span>
                  </Label>
                  <Input
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Como podemos chamar você?"
                    className="h-12 bg-white/[0.03] border-white/[0.1] text-white placeholder:text-[#6B7280] focus-visible:ring-primary focus-visible:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company" className="text-xs font-mono text-[#D1D5DB]">
                    Empresa ou órgão
                  </Label>
                  <Input
                    id="company"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Nome da organização (opcional)"
                    className="h-12 bg-white/[0.03] border-white/[0.1] text-white placeholder:text-[#6B7280] focus-visible:ring-primary focus-visible:border-primary"
                  />
                </div>

                <div className="space-y-2 sm:col-span-2">
                  <Label htmlFor="need" className="text-xs font-mono text-[#D1D5DB]">
                    Qual desafio você quer resolver? <span className="text-primary">*</span>
                  </Label>
                  <Textarea
                    id="need"
                    required
                    value={formData.need}
                    onChange={(e) => setFormData({ ...formData, need: e.target.value })}
                    placeholder="Conte brevemente sobre o processo, sistema ou ideia que você deseja desenvolver..."
                    className="min-h-32 resize-none bg-white/[0.03] border-white/[0.1] text-white placeholder:text-[#6B7280] focus-visible:ring-primary focus-visible:border-primary"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="h-13 rounded-xl sm:col-span-2 bg-primary hover:bg-primary/90 text-white font-semibold shadow-lg shadow-primary/25 transition-all hover:scale-[1.01]"
                >
                  <Send className="w-4 h-4 mr-1.5" />
                  Continuar conversa no WhatsApp
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* 9. Rodapé com links e contatos */}
      <Footer />

      {/* 10. Botão Flutuante de WhatsApp com Glow */}
      <Button
        asChild
        size="icon"
        className="fixed bottom-6 right-6 z-40 h-14 w-14 rounded-full bg-primary hover:bg-primary/90 text-white shadow-[0_8px_30px_rgba(242,100,25,0.45)] transition-all hover:scale-110 active:scale-95"
        aria-label="Falar no WhatsApp"
      >
        <a
          href={getWhatsappUrl('Olá! Vim pelo site da Maneki Neeko e gostaria de um orçamento.')}
          target="_blank"
          rel="noreferrer"
        >
          <MessageCircle className="h-6 w-6 fill-white" />
        </a>
      </Button>
    </div>
  );
};

export default Index;