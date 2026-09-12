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
import FloatingWhatsApp from '@/components/landing/FloatingWhatsApp';
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
    <div className="min-h-screen overflow-hidden bg-[#090909] text-[#F6EFE6] selection:bg-[#D47229]/30 selection:text-white flex flex-col">
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
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D47229] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D47229]" />
                </span>
                <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#D47229]">
                  Software &amp; Sistemas Sob Medida
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="font-brand text-5xl font-extrabold leading-[1.02] text-white sm:text-6xl lg:text-7xl tracking-tight">
                Maneki<br />
                <span className="text-gradient-amber">Neeko.</span>
              </h1>

              {/* Subheadline */}
              <p className="mt-6 max-w-xl text-base sm:text-lg lg:text-xl leading-relaxed text-[#94A7AC]">
                Transformamos processos complexos em sistemas simples de usar — construídos sob medida para a realidade da sua operação.
              </p>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <Button
                  asChild
                  className="group relative h-14 rounded-2xl px-8 bg-gradient-to-r from-[#C42A10] via-[#D47229] to-[#E68A3B] hover:brightness-110 text-white font-brand text-sm sm:text-base font-bold tracking-tight shadow-[0_12px_28px_-6px_rgba(212,114,41,0.45),_inset_0_1px_0_rgba(255,255,255,0.3)] hover:shadow-[0_16px_36px_-6px_rgba(212,114,41,0.65),_inset_0_1px_0_rgba(255,255,255,0.4)] border border-white/20 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
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
                  className="group h-14 rounded-2xl px-7 bg-[#0E1317]/90 hover:bg-[#141C22] border border-white/[0.12] hover:border-white/[0.24] text-[#F6EFE6] hover:text-white font-brand text-sm sm:text-base font-semibold backdrop-blur-xl shadow-[0_8px_24px_-6px_rgba(0,0,0,0.5),_inset_0_1px_0_rgba(255,255,255,0.08)] hover:shadow-[0_12px_28px_-6px_rgba(5,177,139,0.18)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                >
                  <a href="#servicos" className="flex items-center justify-center">
                    <span>Ver serviços &amp; pacotes</span>
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#05B18B]/15 text-[#05B18B] ml-2.5 transition-transform group-hover:translate-x-1 group-hover:bg-[#05B18B]/25">
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </a>
                </Button>
              </div>

              {/* Guarantees / Trust Badges */}
              <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-xs sm:text-sm text-[#94A7AC] pt-5 border-t border-white/[0.08] w-full">
                <span className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-[#05B18B] shrink-0" />
                  Escopo transparente
                </span>
                <span className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-[#05B18B] shrink-0" />
                  Contato direto com engenharia
                </span>
                <span className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-[#05B18B] shrink-0" />
                  Tecnologia 100% proprietária
                </span>
              </div>
            </div>

            {/* Right Column: High-End Logo Mascot Showcase */}
            <div className="relative flex items-center justify-center animate-fade-in lg:pl-4 select-none">
              {/* Dynamic Ambient Background Glows */}
              <div className="pointer-events-none absolute w-72 sm:w-96 lg:w-[420px] h-72 sm:h-96 lg:h-[420px] bg-[#D47229]/22 blur-[110px] rounded-full -z-10" />
              <div className="pointer-events-none absolute w-60 sm:w-72 h-60 sm:h-72 bg-[#05B18B]/18 blur-[90px] rounded-full translate-x-12 translate-y-12 -z-10" />

              {/* Central Mascot Patch Emblem */}
              <div className="relative z-10 flex flex-col items-center group">
                <div className="relative inline-block transition-all duration-500 ease-out group-hover:scale-105 group-hover:-rotate-1">
                  {/* Floating Badge: Top Right */}
                  <div className="absolute -top-3 sm:-top-4 -right-1 sm:-right-3 z-20 hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#0E1317]/90 border border-white/[0.1] backdrop-blur-md shadow-2xl text-xs font-mono text-[#F6EFE6] animate-float-slow">
                    <Sparkles className="w-4 h-4 text-[#E6CBA6] shrink-0" />
                    <span>Design &amp; Código Exclusivos</span>
                  </div>

                  {/* Mascot Emblem Image */}
                  <img
                    src="/MANEKINEEKO.webp"
                    alt="Mascote Maneki Neeko — Software & Sistemas Sob Medida"
                    className="w-64 sm:w-80 md:w-96 lg:w-[410px] xl:w-[450px] h-auto object-contain drop-shadow-[0_25px_50px_rgba(0,0,0,0.95)] drop-shadow-[0_0_60px_rgba(212,114,41,0.25)] select-none"
                    draggable={false}
                  />

                  {/* Floating Badge: Bottom Left */}
                  <div className="absolute -bottom-3 sm:-bottom-4 -left-1 sm:-left-3 z-20 hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#0E1317]/90 border border-white/[0.1] backdrop-blur-md shadow-2xl text-xs font-mono text-[#F6EFE6] animate-float-slow [animation-delay:2s]">
                    <ShieldCheck className="w-4 h-4 text-[#05B18B] shrink-0" />
                    <span>Segurança &amp; Performance</span>
                  </div>
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
                    <div className="icon-box group-hover:scale-110 transition-transform bg-[#D47229]/10 text-[#D47229] border-[#D47229]/20">
                      <Icon />
                    </div>
                    <h3 className="mt-6 font-brand text-xl font-bold text-white tracking-tight">
                      {title}
                    </h3>
                    <p className="mt-3 text-sm sm:text-base leading-relaxed text-[#94A7AC]">
                      {text}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center gap-2 text-xs font-mono text-[#05B18B]">
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
                    className={`relative flex flex-col justify-between p-7 sm:p-8 rounded-2xl transition-all duration-300 ${plan.featured
                      ? 'bg-[#11171E] border border-[#D47229]/60 shadow-lg shadow-[#D47229]/15 scale-[1.02] z-10'
                      : 'bg-[#0E1317]/85 border border-white/[0.08] hover:border-white/[0.15]'
                      }`}
                  >
                    {/* Featured Badge */}
                    {plan.featured && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3.5 py-0.5 rounded-full bg-gradient-to-r from-[#C42A10] to-[#D47229] text-white text-[11px] font-mono font-semibold uppercase tracking-wider flex items-center gap-1 shadow-md">
                        <Sparkles className="w-3 h-3 text-[#E6CBA6]" />
                        <span>{plan.badge}</span>
                      </div>
                    )}

                    <div>
                      {/* Icon */}
                      <div className="w-11 h-11 rounded-xl bg-[#D47229]/10 border border-[#D47229]/20 flex items-center justify-center text-[#D47229] mb-5">
                        <Icon className="w-5 h-5" />
                      </div>

                      {/* Plan Title & Tagline */}
                      <h3 className="font-brand font-bold text-xl text-white mb-2">
                        {plan.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#94A7AC] mb-5 leading-relaxed">
                        {plan.tagline}
                      </p>

                      {/* Timeframe pill */}
                      <div className="text-xs font-mono text-[#05B18B] pb-4 mb-5 border-b border-white/[0.08] flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#05B18B]" />
                        <span>Entrega em {plan.timeframe}</span>
                      </div>

                      {/* Features List */}
                      <ul className="flex flex-col gap-3 text-xs sm:text-sm text-[#D8D2C9]">
                        {plan.features.map((feature, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-2.5">
                            <Check className="w-4 h-4 text-[#05B18B] shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* WhatsApp Action Button */}
                    <div className="mt-8 pt-5 border-t border-white/[0.08]">
                      <Button
                        asChild
                        className={`w-full h-12 rounded-xl text-sm font-semibold transition-all duration-300 ${plan.featured
                          ? 'bg-gradient-to-r from-[#C42A10] via-[#D47229] to-[#E68A3B] hover:brightness-110 text-white shadow-[0_8px_20px_-4px_rgba(212,114,41,0.45),_inset_0_1px_0_rgba(255,255,255,0.25)] border border-white/20 hover:scale-[1.01]'
                          : 'bg-white/[0.05] text-white hover:bg-white/[0.1] border border-white/[0.08] hover:border-white/[0.2]'
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
            <div className="mt-12 text-center text-xs sm:text-sm text-[#94A7AC] flex flex-col sm:flex-row items-center justify-center gap-3">
              <span className="flex items-center gap-1.5 text-[#05B18B]">
                <CheckCircle2 className="w-4 h-4 text-[#05B18B] shrink-0" />
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
                  className="relative p-6 rounded-2xl bg-[#0E1317]/80 border border-white/[0.08] hover:border-[#D47229]/40 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/[0.06]">
                      <span className="font-mono text-2xl font-bold text-[#D47229]">
                        {step.number}
                      </span>
                      <span className="w-2 h-2 rounded-full bg-[#D47229]/40" />
                    </div>
                    <h3 className="font-brand text-lg font-bold text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-[#94A7AC]">
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

              <div className="mt-8 flex flex-col gap-3 text-xs sm:text-sm text-[#94A7AC]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#05B18B] shrink-0" />
                  <span>Sem intermediários: fale diretamente com os desenvolvedores</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#05B18B] shrink-0" />
                  <span>Código 100% proprietário sem mensalidades de plataforma</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#05B18B] shrink-0" />
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
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#05B18B]" />
                  <div>
                    <h3 className="font-brand text-base font-bold text-white">{title}</h3>
                    <p className="mt-1 text-sm text-[#94A7AC] leading-relaxed">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. Seção Perguntas Frequentes (FAQ) */}
        <section id="faq" className="section-space relative border-t border-white/[0.06] scroll-mt-12">
          <div className="max-w-4xl mx-auto px-5 sm:px-8">
            <div className="flex flex-col items-center text-center mb-12">
              <p className="section-kicker">Tire suas dúvidas</p>
              <h2 className="section-title">Perguntas Frequentes</h2>
              <p className="section-copy mx-auto">
                Tudo o que você precisa saber antes de iniciar seu projeto com a gente.
              </p>
            </div>

            {/* Unified FAQ Card Panel */}
            <div className="rounded-3xl border border-white/[0.08] bg-[#0E1317]/90 p-4 sm:p-8 backdrop-blur-xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)]">
              <Accordion type="single" collapsible className="w-full divide-y divide-white/[0.08]">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={faq.id}
                    value={faq.id}
                    className="border-b-0 transition-colors rounded-2xl hover:bg-white/[0.02] data-[state=open]:bg-white/[0.02] px-2 sm:px-4"
                  >
                    <AccordionTrigger className="font-brand font-bold text-left text-base sm:text-lg text-white hover:no-underline py-5 sm:py-6 hover:text-[#D47229] transition-colors [&>svg]:h-8 [&>svg]:w-8 [&>svg]:p-2 [&>svg]:rounded-xl [&>svg]:bg-white/[0.04] [&>svg]:border [&>svg]:border-white/[0.08] [&>svg]:text-[#94A7AC] [&>svg]:transition-all [&>svg]:duration-200 [&[data-state=open]>svg]:bg-[#D47229]/15 [&[data-state=open]>svg]:border-[#D47229]/40 [&[data-state=open]>svg]:text-[#D47229]">
                      <div className="flex items-center gap-3 sm:gap-4 pr-4">
                        <span className="font-mono text-xs sm:text-sm font-semibold text-[#05B18B] bg-[#05B18B]/10 border border-[#05B18B]/20 w-8 h-8 rounded-lg flex items-center justify-center shrink-0">
                          {`0${index + 1}`}
                        </span>
                        <span className="leading-snug">{faq.question}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-sm sm:text-base text-[#94A7AC] leading-relaxed pl-11 sm:pl-12 pr-4 pt-1 pb-6">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>

              {/* Fast FAQ WhatsApp Link */}
              <div className="mt-6 pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-[#94A7AC] px-2 sm:px-4">
                <span>Ainda tem alguma dúvida específica sobre o seu projeto?</span>
                <a
                  href={getWhatsappUrl('Olá! Tenho uma dúvida específica sobre um projeto com a Maneki Neeko.')}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 font-semibold text-[#05B18B] hover:text-[#05B18B]/80 transition-colors"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Tirar dúvidas no WhatsApp →</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 8. Seção Contato & Formulário ("Vamos construir?") */}
        <section id="contato" className="section-space pb-28 relative border-t border-white/[0.06]">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <div className="contact-panel">
              {/* Left Column */}
              <div className="lg:col-span-5 flex flex-col justify-between">
                <div>
                  <p className="section-kicker">Vamos construir?</p>
                  <h2 className="section-title">Conte seu desafio. Desenhamos o próximo passo.</h2>
                  <p className="section-copy">
                    Preencha o formulário e continue a conversa pelo WhatsApp com as informações já organizadas.
                  </p>
                </div>
              </div>

              {/* Right Column: Form */}
              <form onSubmit={handleSubmit} className="grid gap-5 lg:col-span-7 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-xs font-mono text-[#D8D2C9]">
                    Seu nome <span className="text-[#D47229]">*</span>
                  </Label>
                  <Input
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Como podemos chamar você?"
                    className="h-12 bg-white/[0.03] border-white/[0.1] text-white placeholder:text-[#6B7280] focus-visible:ring-[#D47229] focus-visible:border-[#D47229]"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company" className="text-xs font-mono text-[#D8D2C9]">
                    Empresa ou órgão
                  </Label>
                  <Input
                    id="company"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Nome da organização (opcional)"
                    className="h-12 bg-white/[0.03] border-white/[0.1] text-white placeholder:text-[#6B7280] focus-visible:ring-[#D47229] focus-visible:border-[#D47229]"
                  />
                </div>

                <div className="space-y-2 sm:col-span-2">
                  <Label htmlFor="need" className="text-xs font-mono text-[#D8D2C9]">
                    Qual desafio você quer resolver? <span className="text-[#D47229]">*</span>
                  </Label>
                  <Textarea
                    id="need"
                    required
                    value={formData.need}
                    onChange={(e) => setFormData({ ...formData, need: e.target.value })}
                    placeholder="Conte brevemente sobre o processo, sistema ou ideia que você deseja desenvolver..."
                    className="min-h-32 resize-none bg-white/[0.03] border-white/[0.1] text-white placeholder:text-[#6B7280] focus-visible:ring-[#D47229] focus-visible:border-[#D47229]"
                  />
                </div>

                <Button
                  type="submit"
                  className="group relative h-14 rounded-2xl sm:col-span-2 bg-gradient-to-r from-[#C42A10] via-[#D47229] to-[#E68A3B] hover:brightness-110 text-white font-brand text-base font-bold tracking-tight shadow-[0_12px_28px_-6px_rgba(212,114,41,0.45),_inset_0_1px_0_rgba(255,255,255,0.3)] hover:shadow-[0_16px_36px_-6px_rgba(212,114,41,0.65),_inset_0_1px_0_rgba(255,255,255,0.4)] border border-white/20 transition-all duration-300 hover:scale-[1.01] active:scale-[0.98] flex items-center justify-center cursor-pointer"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-black/15 mr-2.5 transition-transform group-hover:scale-110">
                    <MessageCircle className="w-4 h-4 fill-white text-white" />
                  </span>
                  <span>Continuar conversa no WhatsApp</span>
                  <span className="ml-2 text-white/80 transition-transform duration-300 group-hover:translate-x-1 font-mono">
                    →
                  </span>
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* 9. Rodapé com links e contatos */}
      <Footer />

      {/* 10. Botão Flutuante de WhatsApp com Balão Interativo */}
      <FloatingWhatsApp />
    </div>

  );
};

export default Index;