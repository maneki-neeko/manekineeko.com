import React from 'react';
import { Check, Sparkles, ArrowRight, ShieldCheck, Layers, MessageCircle, BadgeCheck } from 'lucide-react';
import { getWhatsappUrl } from '@/config/site';

export const PricingPlans: React.FC = () => {
  const plans = [
    {
      id: 'Landing Page Express',
      name: 'Landing Page Express',
      tagline: 'Para vender rápido e rodar anúncios no Google/Instagram',
      featured: false,
      idealFor: 'Profissionais autônomos, lançamentos de serviços, captação rápida de leads e produtos específicos.',
      timeframe: 'Entrega em 5 a 7 dias úteis',
      features: [
        'Página única estratégica focada 100% em conversão',
        'Botão flutuante de WhatsApp integrado',
        'Estrutura persuasiva (dor, solução, depoimentos, garantia)',
        'Carregamento ultrarrápido (sub-1s no celular)',
        'Configuração de Pixel (Meta) e Tags do Google Ads',
        'Domínio registrado diretamente no seu nome',
        'Sem mensalidades presas à nossa agência',
      ],
      ctaText: 'Escolher Landing Page',
    },
    {
      id: 'Site Institucional Completo',
      name: 'Site Institucional Completo',
      tagline: 'Autoridade máxima para sua empresa ser encontrada no Google',
      featured: true,
      badge: 'Mais Escolhido',
      idealFor: 'Clínicas, escritórios de advocacia, consultorias, prestadores de serviços e empresas em expansão.',
      timeframe: 'Entrega em 7 a 10 dias úteis',
      features: [
        'Múltiplas seções estruturadas (Início, Quem Somos, Serviços, Depoimentos, Localização)',
        'Otimização completa para o Google (SEO Local e tags semânticas)',
        'Integração com Google Maps, WhatsApp e e-mail corporativo',
        'Formulário inteligente de orçamento para captação de contatos',
        'Design 100% exclusivo criado para sua identidade visual',
        'Totalmente responsivo em computadores, tablets e celulares',
        'Sem mensalidades obrigatórias de manutenção',
      ],
      ctaText: 'Escolher Site Completo',
    },
    {
      id: 'Site + Sistema Simples',
      name: 'Site + Sistema Sob Medida',
      tagline: 'Para quem precisa de agendamento online, painel ou catálogo',
      featured: false,
      idealFor: 'Negócios que precisam de controle de clientes, agenda online, pedidos ou área administrativa simples.',
      timeframe: 'Entrega em 10 a 15 dias úteis',
      features: [
        'Site institucional de alto padrão incluso',
        'Painel administrativo enxuto, seguro e fácil de usar',
        'Módulo de agendamento online ou catálogo dinâmico',
        'Gestão básica de clientes e histórico de contatos',
        'Banco de dados protegido e relatórios práticos',
        'Treinamento em vídeo para sua equipe operar sem complicação',
        'Suporte técnico dedicado na fase de go-live',
      ],
      ctaText: 'Escolher Sistema Sob Medida',
    },
  ];

  const handleSelectPlan = (planId: string) => {
    window.dispatchEvent(new CustomEvent('maneki:select-plan', { detail: planId }));
    const formElement = document.getElementById('orcamento');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="pacotes" className="py-20 lg:py-28 bg-obsidian-bg relative border-t border-hairline">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-obsidian-surface-2 border border-hairline mb-3">
            <Layers className="w-3.5 h-3.5 text-amber" />
            <span className="font-mono text-xs text-amber font-semibold uppercase tracking-wider">
              Pacotes Sob Medida
            </span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
            Pacotes pensados para o momento do seu negócio
          </h2>
          <p className="font-body text-sm sm:text-base text-[#9CA3AF] mt-3 leading-relaxed">
            Sem custos surpresa, sem cobranças de mensalidade para manter seu site no ar e com proposta transparente para o que você realmente precisa.
          </p>
        </div>

        {/* 3 Plans Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`relative flex flex-col justify-between p-7 sm:p-8 rounded-2xl transition-all duration-300 ${
                plan.featured
                  ? 'bg-obsidian-surface-2 border-2 border-amber shadow-glow-amber scale-[1.02] z-10'
                  : 'bg-obsidian-surface-1 border border-hairline hover:border-hairline-amber/40 hover:bg-obsidian-surface-2 shadow-lg'
              }`}
            >
              {/* Featured Badge */}
              {plan.featured && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-amber to-amber-hover text-white text-xs font-mono font-bold uppercase tracking-wider shadow-md flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-white" />
                  <span>{plan.badge}</span>
                </div>
              )}

              <div>
                {/* Plan Header */}
                <h3 className="font-display font-bold text-2xl text-white mb-2">
                  {plan.name}
                </h3>
                <p className="font-body text-xs sm:text-sm text-[#9CA3AF] mb-4 min-h-[38px]">
                  {plan.tagline}
                </p>

                {/* Investment Tag */}
                <div className="p-3.5 rounded-xl bg-obsidian-bg/80 border border-hairline/80 mb-4 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono text-[#9CA3AF] uppercase block">Investimento</span>
                    <span className="font-display text-base font-bold text-white">Sob Medida</span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-mono text-teal font-medium">Orçamento Personalizado</span>
                  </div>
                </div>

                {/* Timeframe Tag */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-obsidian-surface-2 border border-hairline text-xs font-mono text-teal mb-5">
                  <span>⏱️ {plan.timeframe}</span>
                </div>

                {/* Features List */}
                <div className="pt-4 border-t border-hairline/70">
                  <span className="font-mono text-[11px] text-[#6B7280] uppercase tracking-wider block mb-3">
                    O que está incluso
                  </span>
                  <ul className="flex flex-col gap-3">
                    {plan.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#E5E7EB]">
                        <div className={`mt-0.5 rounded-full p-0.5 ${plan.featured ? 'text-amber bg-amber/10' : 'text-teal bg-teal/10'}`}>
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Ideal for card */}
                <div className="mt-6 p-3 rounded-xl bg-obsidian-bg/80 border border-hairline text-xs font-body text-[#9CA3AF]">
                  <span className="font-mono text-[11px] text-white font-semibold block mb-0.5">
                    Ideal para:
                  </span>
                  {plan.idealFor}
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-8 pt-4">
                <button
                  type="button"
                  onClick={() => handleSelectPlan(plan.id)}
                  className={`flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-display text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber ${
                    plan.featured
                      ? 'bg-amber text-white shadow-glow-amber hover:brightness-110'
                      : 'bg-obsidian-surface-2 text-[#F3F4F6] border border-hairline hover:bg-obsidian-surface-3 hover:text-white'
                  }`}
                >
                  <span>{plan.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* 100% Satisfaction Guarantee Stamp */}
        <div className="mt-10 p-4 rounded-xl bg-amber/10 border border-amber/25 flex items-center justify-center gap-3 text-center">
          <BadgeCheck className="w-5 h-5 text-amber shrink-0" />
          <p className="font-body text-xs sm:text-sm text-[#F3F4F6]">
            <strong className="text-white">Garantia de Satisfação:</strong> Você revisa e só publicamos quando aprovar 100% do design e dos textos.
          </p>
        </div>

        {/* Payment & Conditions Banner */}
        <div className="mt-4 p-6 rounded-2xl bg-obsidian-surface-1 border border-hairline flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-teal/10 border border-teal/20 flex items-center justify-center text-teal shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <span className="font-display font-bold text-sm text-white block">
                Condições Facilitadas e Transparentes
              </span>
              <span className="font-body text-xs text-[#9CA3AF]">
                Opções no cartão de crédito ou à vista no PIX, com proposta sob medida e sem mensalidades presas.
              </span>
            </div>
          </div>

          <a
            href={getWhatsappUrl('Olá! Gostaria de saber mais sobre os pacotes da Maneki Neeko.')}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-teal/15 text-teal border border-teal/30 hover:bg-teal/25 font-display text-xs sm:text-sm font-semibold transition-all whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Pedir Orçamento no WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};

export default PricingPlans;
