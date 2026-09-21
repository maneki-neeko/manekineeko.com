import React, { useState } from 'react';
import {
  ArrowRight,
  Check,
  CheckCircle2,
  Clock,
  Globe2,
  Layout,
  MessageCircle,
  ShieldCheck,
  Sliders,
  Sparkles,
  Star,
  XCircle,
} from 'lucide-react';
import Header from '@/components/landing/Header';
import Footer from '@/components/landing/Footer';
import FloatingWhatsApp from '@/components/landing/FloatingWhatsApp';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { getWhatsappUrl } from '@/config/site';

const cases = [
  {
    company: 'Dra. Juliana Becker',
    tagline: 'Clínica de Dermatologia & Estética',
    metricNumber: '+140%',
    metricLabel: 'Agendamentos diretos no WhatsApp no 1º mês',
    quote:
      'O investimento se pagou logo nas primeiras semanas. A página transmite muita autoridade e os pacientes elogiam a facilidade para agendar.',
  },
  {
    company: 'Fontes & Associados',
    tagline: 'Advocacia & Consultoria Tributária',
    metricNumber: '3.2x',
    metricLabel: 'Mais pedidos de propostas comerciais qualificadas',
    quote:
      'Fechamos contratos de ticket mais alto porque nosso posicionamento digital agora reflete com solidez a reputação do nosso escritório.',
  },
  {
    company: 'AutoClube Peças & Serviços',
    tagline: 'Centro Automotivo Especializado',
    metricNumber: '-50%',
    metricLabel: 'Redução no tempo gasto com dúvidas repetitivas',
    quote:
      'A Maneki Neeko entregou tudo em 8 dias úteis sem burocracia. Os clientes já chegam no WhatsApp sabendo exatamente o que querem contratar.',
  },
];

const plans = [
  {
    id: 'landing-page',
    icon: Layout,
    name: 'Landing Page de Alta Conversão',
    tagline: 'Para vender rápido e rodar anúncios no Google e Instagram',
    featured: false,
    timeframe: '5 a 7 dias úteis',
    features: [
      'Página estratégica focada em conversão de visitantes em clientes',
      'Botões de WhatsApp em pontos calculados de decisão',
      'Carregamento instantâneo com nota alta no Google PageSpeed',
      'Instalação de Pixel da Meta e Tags de Conversão do Google',
      'Domínio registrado 100% no seu nome',
      'Código proprietário sem mensalidades de plataforma',
    ],
    whatsappMsg: 'Olá! Gostaria de um orçamento para uma Landing Page de Alta Conversão.',
  },
  {
    id: 'site-institucional',
    icon: Globe2,
    name: 'Site Institucional Completo',
    tagline: 'Autoridade máxima para empresas, clínicas e escritórios no Google',
    featured: true,
    badge: 'Mais Escolhido',
    timeframe: '7 a 10 dias úteis',
    features: [
      'Múltiplas páginas estruturadas: Início, Sobre, Serviços e Contato',
      'Otimização técnica de SEO para buscas orgânicas locais no Google',
      'Design exclusivo sob medida alinhado à identidade da sua marca',
      'Integração com Google Maps, WhatsApp e e-mail corporativo',
      'Experiência perfeita em celulares, tablets e computadores',
      'Entrega completa com código seu, sem taxas recorrentes de agência',
    ],
    whatsappMsg: 'Olá! Gostaria de um orçamento para um Site Institucional Completo.',
  },
  {
    id: 'sistema-sob-medida',
    icon: Sliders,
    name: 'Sistema & Painel Sob Medida',
    tagline: 'Para quem precisa de agendamento online, controle de rotina e pedidos',
    featured: false,
    timeframe: '10 a 15 dias úteis',
    features: [
      'Site institucional de alto padrão incluso no pacote',
      'Painel administrativo enxuto, rápido e protegido por senha',
      'Módulo de agendamento online de serviços, consultas ou pedidos',
      'Centralização e histórico organizado de clientes e solicitações',
      'Treinamento prático de operação para sua equipe',
      'Suporte técnico direto com quem programou sua aplicação',
    ],
    whatsappMsg: 'Olá! Gostaria de um orçamento para um Sistema Web Sob Medida.',
  },
];

const steps = [
  {
    number: '01',
    title: 'Conversa Rápida (15 min)',
    text: 'Alinhamos pelo WhatsApp o seu público, diferenciais e o que você precisa no projeto.',
  },
  {
    number: '02',
    title: 'Design & Arquitetura',
    text: 'Criamos o layout visual exclusivo e a estrutura de conversão para você aprovar.',
  },
  {
    number: '03',
    title: 'Desenvolvimento Ágil',
    text: 'Programamos com código limpo, ultrarrápido no celular e com integrações ativas.',
  },
  {
    number: '04',
    title: 'No Ar & Gerando Vendas',
    text: 'Configuramos seu domínio, publicamos e você já pode divulgar para receber clientes.',
  },
];

const faqs = [
  {
    id: 'faq-1',
    question: 'Como funciona o orçamento e as condições de pagamento?',
    answer:
      'Analisamos os objetivos da sua empresa e enviamos uma proposta clara, transparente e personalizada para o seu escopo. Facilitamos o pagamento com opções à vista via PIX com desconto ou parcelamento no cartão de crédito.',
  },
  {
    id: 'faq-2',
    question: 'Quanto tempo demora para meu site ou sistema ficar pronto?',
    answer:
      'Uma Landing Page de Alta Conversão fica pronta em média de 5 a 7 dias úteis. Um Site Institucional Completo leva de 7 a 10 dias úteis. Para sistemas web e painéis sob medida, o prazo médio é de 10 a 15 dias úteis.',
  },
  {
    id: 'faq-3',
    question: 'Eu preciso pagar alguma mensalidade para a Maneki Neeko?',
    answer:
      'Não! Você não fica preso a mensalidades de agência. Todo o código do projeto é 100% de sua propriedade. Os únicos custos contínuos são os padrões da internet: a renovação anual do seu domínio (.com.br) e a hospedagem básica.',
  },
  {
    id: 'faq-4',
    question: 'O site funciona com velocidade máxima no celular e aparece no Google?',
    answer:
      'Sim, 100%! Todas as nossas páginas são construídas com foco prioritário no mobile, abrindo em menos de 1 segundo no celular, com botões de contato de toque fácil e estrutura otimizada com as melhores práticas de SEO para o Google.',
  },
  {
    id: 'faq-5',
    question: 'Como funciona o suporte pós-entrega?',
    answer:
      'Oferecemos suporte direto com os próprios desenvolvedores no lançamento para garantir que tudo funcione com total segurança. Você fala diretamente com quem construiu sua aplicação, sem filas ou burocracia.',
  },
];

const Index: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    projectType: 'Landing Page de Alta Conversão',
    message: '',
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const msg = [
      'Olá! Vim pelo site da Maneki Neeko e gostaria de um orçamento.',
      `Nome: ${formData.name}`,
      `WhatsApp: ${formData.phone}`,
      `Tipo de Projeto: ${formData.projectType}`,
      formData.message ? `Detalhes: ${formData.message}` : '',
    ]
      .filter(Boolean)
      .join('\n');
    window.open(getWhatsappUrl(msg), '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen overflow-hidden bg-[#090909] text-[#F6EFE6] selection:bg-[#D47229]/30 selection:text-white flex flex-col">
      {/* 1. Header */}
      <Header />

      <main className="flex-1 w-full">
        {/* 2. Hero Section */}
        <section id="inicio" className="relative pt-32 pb-20 lg:pt-36 lg:pb-28 overflow-hidden">
          {/* Ambient background glows */}
          <div className="ambient-shape ambient-shape-primary" aria-hidden="true" />
          <div className="ambient-shape ambient-shape-secondary" aria-hidden="true" />

          <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:gap-12">
            {/* Left Column: Commercial Copy & CTAs */}
            <div className="animate-fade-in flex flex-col items-start lg:col-span-7">
              {/* Status Pill */}
              <div className="glass-pill mb-5 inline-flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D47229] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D47229]" />
                </span>
                <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#D47229]">
                  Criação de Sites &amp; Sistemas Sob Medida
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="font-brand text-4xl sm:text-5xl lg:text-[54px] font-extrabold leading-[1.08] text-white tracking-tight">
                O site profissional que seu negócio precisa para{' '}
                <span className="text-gradient-amber">vender todos os dias.</span>
              </h1>

              {/* Subheadline (scannable, concise, under 20 words) */}
              <p className="mt-5 max-w-xl text-base sm:text-lg leading-relaxed text-[#94A7AC]">
                Criamos páginas ultrarrápidas no celular e sistemas práticos, desenhados para transformar visitantes em clientes reais no seu WhatsApp.
              </p>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-col sm:flex-row gap-3.5 w-full sm:w-auto">
                <a
                  href={getWhatsappUrl('Olá! Vim pelo site da Maneki Neeko e gostaria de um orçamento rápido.')}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#D47229] hover:bg-[#B85E1D] text-white font-brand text-sm sm:text-base font-bold shadow-glow-amber hover:brightness-110 active:scale-[0.98] transition-all duration-200"
                >
                  <MessageCircle className="w-4 h-4 fill-white text-white" />
                  <span>Falar no WhatsApp</span>
                </a>

                <a
                  href="#servicos"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/[0.04] text-[#F6EFE6] hover:text-white font-brand text-sm sm:text-base font-semibold border border-white/[0.1] hover:border-white/[0.2] hover:bg-white/[0.08] active:scale-[0.98] transition-all duration-200"
                >
                  <span>Ver Serviços &amp; Pacotes</span>
                  <ArrowRight className="w-4 h-4 text-[#05B18B]" />
                </a>
              </div>

              {/* Guarantees / Trust Badges */}
              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-xs sm:text-sm text-[#94A7AC] pt-5 border-t border-white/[0.08] w-full">
                <span className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-[#05B18B] shrink-0" />
                  Abre em 0.4s no celular
                </span>
                <span className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-[#05B18B] shrink-0" />
                  Entrega em 7 a 10 dias úteis
                </span>
                <span className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-[#05B18B] shrink-0" />
                  Código 100% seu
                </span>
              </div>
            </div>

            {/* Right Column: Clean Logo Mascot Presentation */}
            <div className="relative flex items-center justify-center animate-fade-in lg:col-span-5 select-none">
              <div className="pointer-events-none absolute w-72 sm:w-88 h-72 sm:h-88 bg-[#D47229]/20 blur-[100px] rounded-full -z-10" />
              <div className="pointer-events-none absolute w-60 sm:w-72 h-60 sm:h-72 bg-[#05B18B]/15 blur-[90px] rounded-full translate-x-10 translate-y-10 -z-10" />

              <div className="relative group max-w-[340px] sm:max-w-[400px]">
                <img
                  src="/MANEKINEEKO.webp"
                  alt="Mascote Maneki Neeko, criação de sites e sistemas sob medida"
                  className="w-full h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.9)] transition-transform duration-500 group-hover:scale-[1.02] select-none"
                  draggable={false}
                />
              </div>
            </div>
          </div>
        </section>

        {/* 3. Seção Resultados & Prova Social (Cases) */}
        <section id="cases" className="section-space relative border-t border-white/[0.06] bg-[#090909]">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <div className="mb-14 text-center max-w-2xl mx-auto">
              <h2 className="section-title">Resultados reais de quem já contratou</h2>
              <p className="section-copy mx-auto">
                Negócios que trocaram páginas lentas por estruturas modernas focadas em conversão no WhatsApp.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {cases.map((item, idx) => (
                <article
                  key={idx}
                  className="glass-card group p-7 rounded-2xl flex flex-col justify-between"
                >
                  <div>
                    {/* Metric Number */}
                    <div className="pb-4 mb-4 border-b border-white/[0.06]">
                      <span className="font-brand text-4xl font-extrabold text-[#D47229] tracking-tight block">
                        {item.metricNumber}
                      </span>
                      <span className="text-xs font-mono text-[#05B18B] mt-1 block">
                        {item.metricLabel}
                      </span>
                    </div>

                    {/* 5 Stars */}
                    <div className="flex items-center gap-1 mb-3 text-[#D47229]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-[#D47229] text-[#D47229]" />
                      ))}
                    </div>

                    {/* Testimonial Quote */}
                    <p className="font-body text-xs sm:text-sm text-[#D8D2C9] leading-relaxed italic">
                      &ldquo;{item.quote}&rdquo;
                    </p>
                  </div>

                  {/* Client Info */}
                  <div className="pt-5 mt-5 border-t border-white/[0.06]">
                    <span className="font-brand font-bold text-sm text-white block">
                      {item.company}
                    </span>
                    <span className="text-xs font-mono text-[#94A7AC]">
                      {item.tagline}
                    </span>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-10 text-center">
              <a
                href={getWhatsappUrl('Olá! Vi os resultados no site da Maneki Neeko e quero algo parecido para minha empresa.')}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-brand font-semibold text-[#D47229] hover:text-[#B85E1D] transition-colors"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Quero resultados parecidos para a minha empresa</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </section>

        {/* 4. Seção Soluções & Vantagens Comparativas */}
        <section id="solucoes" className="section-space relative border-t border-white/[0.06]">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <div className="mb-14 text-center max-w-2xl mx-auto">
              <h2 className="section-title">Por que a Maneki Neeko é a melhor escolha?</h2>
              <p className="section-copy mx-auto">
                Sem perder semanas no improviso e sem orçamentos abusivos de agências tradicionais.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
              {/* Option 1: DIY */}
              <div className="flex flex-col justify-between p-7 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                <div>
                  <span className="text-xs font-mono text-[#94A7AC] block mb-1">
                    Opção 01
                  </span>
                  <h3 className="font-brand font-bold text-lg text-white mb-4">
                    Criar Sozinho (Wix / WordPress)
                  </h3>

                  <ul className="flex flex-col gap-3 text-xs sm:text-sm text-[#94A7AC]">
                    <li className="flex items-start gap-2.5">
                      <XCircle className="w-4 h-4 text-[#EF4444] shrink-0 mt-0.5" />
                      <span>Templates genéricos e pesados no celular</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <XCircle className="w-4 h-4 text-[#EF4444] shrink-0 mt-0.5" />
                      <span>Visual amador que afasta clientes exigentes</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <XCircle className="w-4 h-4 text-[#EF4444] shrink-0 mt-0.5" />
                      <span>Mensalidades em dólar que encarecem todo ano</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <XCircle className="w-4 h-4 text-[#EF4444] shrink-0 mt-0.5" />
                      <span>Você perde semanas tentando arrumar o layout</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-white/[0.06] text-xs font-mono text-[#6B7280]">
                  Resultado: esforço alto e poucas conversões.
                </div>
              </div>

              {/* Option 2: Traditional Agencies */}
              <div className="flex flex-col justify-between p-7 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                <div>
                  <span className="text-xs font-mono text-[#94A7AC] block mb-1">
                    Opção 02
                  </span>
                  <h3 className="font-brand font-bold text-lg text-white mb-4">
                    Agências Tradicionais
                  </h3>

                  <ul className="flex flex-col gap-3 text-xs sm:text-sm text-[#94A7AC]">
                    <li className="flex items-start gap-2.5">
                      <XCircle className="w-4 h-4 text-[#EF4444] shrink-0 mt-0.5" />
                      <span>Orçamentos inflados com custos desnecessários</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <XCircle className="w-4 h-4 text-[#EF4444] shrink-0 mt-0.5" />
                      <span>Meses de espera com processos burocráticos</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <XCircle className="w-4 h-4 text-[#EF4444] shrink-0 mt-0.5" />
                      <span>Contratos com mensalidades obrigatórias</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <XCircle className="w-4 h-4 text-[#EF4444] shrink-0 mt-0.5" />
                      <span>Atendimento impessoal por estagiários</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-white/[0.06] text-xs font-mono text-[#6B7280]">
                  Resultado: custo elevado e entrega demorada.
                </div>
              </div>

              {/* Option 3: Maneki Neeko */}
              <div className="flex flex-col justify-between p-7 rounded-2xl bg-[#0E1317] border border-[#D47229]/60 shadow-glow-amber relative">
                <div>
                  <span className="text-xs font-mono text-[#D47229] font-semibold block mb-1">
                    A Escolha Inteligente
                  </span>
                  <h3 className="font-brand font-bold text-lg text-white mb-4">
                    Maneki Neeko Sob Medida
                  </h3>

                  <ul className="flex flex-col gap-3 text-xs sm:text-sm text-[#F6EFE6]">
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#05B18B] shrink-0 mt-0.5" />
                      <span><strong>Design 100% exclusivo:</strong> criado para sua marca</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#05B18B] shrink-0 mt-0.5" />
                      <span><strong>Carregamento em 0.4s:</strong> instantâneo no celular</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#05B18B] shrink-0 mt-0.5" />
                      <span><strong>Entrega rápida:</strong> no ar em 7 a 10 dias úteis</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#05B18B] shrink-0 mt-0.5" />
                      <span><strong>Código 100% seu:</strong> sem mensalidades presas</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-white/[0.08]">
                  <a
                    href={getWhatsappUrl('Olá! Gostaria de um orçamento para o meu site com a Maneki Neeko.')}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-[#D47229] hover:bg-[#B85E1D] text-white font-brand text-xs sm:text-sm font-semibold active:scale-[0.98] transition-all"
                  >
                    <MessageCircle className="w-4 h-4 fill-white text-white" />
                    <span>Pedir Orçamento no WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Seção Serviços & Pacotes Transparentes */}
        <section id="servicos" className="section-space relative border-t border-white/[0.06] scroll-mt-12">
          <span id="pacotes" className="absolute -top-24 pointer-events-none" />

          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <div className="mb-14 text-center max-w-3xl mx-auto">
              <h2 className="section-title">Formatos e pacotes sob medida</h2>
              <p className="section-copy mx-auto">
                Propostas transparentes com prazos definidos e código proprietário para gerar retorno real no seu WhatsApp.
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

                      {/* Timeframe line */}
                      <div className="text-xs font-mono text-[#05B18B] pb-4 mb-5 border-b border-white/[0.08] flex items-center gap-2">
                        <Clock className="w-3.5 h-3.5 text-[#05B18B]" />
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
                      <a
                        href={getWhatsappUrl(plan.whatsappMsg)}
                        target="_blank"
                        rel="noreferrer"
                        className={`flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-brand text-xs sm:text-sm font-bold active:scale-[0.98] transition-all ${
                          plan.featured
                            ? 'bg-[#D47229] hover:bg-[#B85E1D] text-white shadow-glow-amber'
                            : 'bg-white/[0.05] text-white hover:bg-white/[0.1] border border-white/[0.08]'
                        }`}
                      >
                        <MessageCircle className="w-4 h-4 fill-current" />
                        <span>Pedir orçamento no WhatsApp</span>
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom Trust Note */}
            <div className="mt-12 text-center text-xs sm:text-sm text-[#94A7AC] flex flex-col sm:flex-row items-center justify-center gap-3">
              <span className="flex items-center gap-1.5 text-[#05B18B]">
                <CheckCircle2 className="w-4 h-4 text-[#05B18B] shrink-0" />
                Garantia de Satisfação: você só aprova quando estiver 100% satisfeito
              </span>
              <span className="hidden sm:inline text-white/20">•</span>
              <span>Pagamento facilitado no PIX ou parcelado no cartão</span>
            </div>
          </div>
        </section>

        {/* 6. Seção Como Funciona (Processo em 4 Passos) */}
        <section id="processo" className="section-space relative border-t border-white/[0.06]">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <div className="mb-14 text-center max-w-2xl mx-auto">
              <h2 className="section-title">Como funciona do início à entrega</h2>
              <p className="section-copy mx-auto">
                Processo transparente em 4 etapas para ter seu site no ar sem complicação.
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
                      <span className="w-2 h-2 rounded-full bg-[#05B18B]" />
                    </div>
                    <h3 className="font-brand text-base font-bold text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm leading-relaxed text-[#94A7AC]">
                      {step.text}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 7. Seção Perguntas Frequentes (FAQ) */}
        <section id="faq" className="section-space relative border-t border-white/[0.06] scroll-mt-12">
          <div className="max-w-4xl mx-auto px-5 sm:px-8">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="section-title">Perguntas Frequentes</h2>
              <p className="section-copy mx-auto">
                Tudo o que você precisa saber antes de iniciar seu projeto com a gente.
              </p>
            </div>

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
                  <span>Tirar dúvidas no WhatsApp</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 8. Seção Contato & Conversão (WhatsApp Fast-Track + Formulário) */}
        <section id="contato" className="section-space pb-28 relative border-t border-white/[0.06] scroll-mt-12">
          <span id="orcamento" className="absolute -top-24 pointer-events-none" />

          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <div className="contact-panel">
              {/* Left Column: WhatsApp Fast-Track */}
              <div className="lg:col-span-5 flex flex-col justify-between gap-6">
                <div>
                  <h2 className="section-title">Vamos colocar seu projeto no ar?</h2>
                  <p className="section-copy">
                    A forma mais rápida de receber uma estimativa de prazo e valor é falar direto pelo WhatsApp.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-[#11171E] border border-[#D47229]/50 shadow-glow-amber flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#D47229]/15 flex items-center justify-center text-[#D47229] shrink-0">
                      <MessageCircle className="w-5 h-5 fill-current" />
                    </div>
                    <div>
                      <span className="font-brand font-bold text-base text-white block">
                        Atendimento Direto no WhatsApp
                      </span>
                      <span className="text-xs text-[#94A7AC]">
                        Resposta rápida em horário comercial
                      </span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-[#D8D2C9] leading-relaxed">
                    Fale diretamente com os desenvolvedores. Entendemos o que você precisa e enviamos uma proposta objetiva.
                  </p>

                  <a
                    href={getWhatsappUrl('Olá! Gostaria de um orçamento para criar meu site com a Maneki Neeko.')}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-[#D47229] hover:bg-[#B85E1D] text-white font-brand text-xs sm:text-sm font-bold active:scale-[0.98] transition-all shadow-sm"
                  >
                    <MessageCircle className="w-4 h-4 fill-white text-white" />
                    <span>Conversar no WhatsApp Agora</span>
                  </a>
                </div>

                <div className="flex flex-col gap-2.5 text-xs text-[#94A7AC]">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#05B18B] shrink-0" />
                    <span>Resposta ágil sem burocracia</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#05B18B] shrink-0" />
                    <span>Orçamento transparente sem taxas surpresa</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Form */}
              <div className="lg:col-span-7">
                <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-xs font-mono text-[#D8D2C9]">
                      Seu Nome <span className="text-[#D47229]">*</span>
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
                    <Label htmlFor="phone" className="text-xs font-mono text-[#D8D2C9]">
                      WhatsApp com DDD <span className="text-[#D47229]">*</span>
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="(41) 99999-9999"
                      className="h-12 bg-white/[0.03] border-white/[0.1] text-white placeholder:text-[#6B7280] focus-visible:ring-[#D47229] focus-visible:border-[#D47229]"
                    />
                  </div>

                  <div className="space-y-2 sm:col-span-2">
                    <Label htmlFor="projectType" className="text-xs font-mono text-[#D8D2C9]">
                      Tipo de Projeto <span className="text-[#D47229]">*</span>
                    </Label>
                    <Select
                      value={formData.projectType}
                      onValueChange={(val) => setFormData({ ...formData, projectType: val })}
                    >
                      <SelectTrigger
                        id="projectType"
                        className="h-12 bg-white/[0.03] border-white/[0.1] text-white focus:ring-[#D47229] focus:border-[#D47229]"
                      >
                        <SelectValue placeholder="Selecione o formato desejado" />
                      </SelectTrigger>
                      <SelectContent className="bg-[#111318] border border-white/[0.1] text-white">
                        <SelectItem value="Landing Page de Alta Conversão">
                          Landing Page de Alta Conversão (Vendas rápidas &amp; anúncios)
                        </SelectItem>
                        <SelectItem value="Site Institucional Completo">
                          Site Institucional Completo (Empresas, clínicas e escritórios)
                        </SelectItem>
                        <SelectItem value="Sistema &amp; Painel Sob Medida">
                          Sistema &amp; Painel Sob Medida (Agendamentos e rotina)
                        </SelectItem>
                        <SelectItem value="Outro Projeto Sob Medida">
                          Outro projeto sob medida
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2 sm:col-span-2">
                    <Label htmlFor="message" className="text-xs font-mono text-[#D8D2C9]">
                      Conte sobre seu negócio ou necessidade (opcional)
                    </Label>
                    <Textarea
                      id="message"
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Ex: Preciso de uma página moderna para receber contatos de anúncios no Instagram..."
                      className="resize-none bg-white/[0.03] border-white/[0.1] text-white placeholder:text-[#6B7280] focus-visible:ring-[#D47229] focus-visible:border-[#D47229]"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="group relative h-14 rounded-2xl sm:col-span-2 bg-[#D47229] hover:bg-[#B85E1D] text-white font-brand text-base font-bold tracking-tight shadow-glow-amber active:scale-[0.98] transition-all flex items-center justify-center cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4 fill-white text-white mr-2" />
                    <span>Continuar conversa no WhatsApp</span>
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 9. Rodapé */}
      <Footer />

      {/* 10. Botão Flutuante de WhatsApp */}
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;