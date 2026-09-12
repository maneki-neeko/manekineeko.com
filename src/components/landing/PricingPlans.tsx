import React from 'react';
import { Check, Sparkles, MessageCircle, Layout, Globe2, Sliders } from 'lucide-react';
import { getWhatsappUrl } from '@/config/site';

export const PricingPlans: React.FC = () => {
  const plans = [
    {
      id: 'Landing Page de Alta Conversão',
      icon: Layout,
      name: 'Landing Page de Alta Conversão',
      tagline: 'Para vender rápido e rodar anúncios no Google & Instagram',
      featured: false,
      timeframe: '5 a 7 dias úteis',
      features: [
        'Página estratégica com foco total em conversão',
        'Botão flutuante e chamadas diretas para o WhatsApp',
        'Carregamento instantâneo (sub-1s no celular)',
        'Configuração de Pixel da Meta e Tags do Google',
        'Domínio registrado 100% no seu nome',
        'Código proprietário sem mensalidades de plataforma',
      ],
      whatsappMsg: 'Olá! Gostaria de um orçamento para uma Landing Page de Alta Conversão.',
    },
    {
      id: 'Site Institucional Completo',
      icon: Globe2,
      name: 'Site Institucional Completo',
      tagline: 'Autoridade máxima para empresas, clínicas e escritórios',
      featured: true,
      badge: 'Mais Escolhido',
      timeframe: '7 a 10 dias úteis',
      features: [
        'Múltiplas páginas (Início, Sobre, Serviços, Contato)',
        'Otimização técnica de SEO para buscas do Google',
        'Design 100% exclusivo alinhado à sua marca',
        'Integração com Google Maps, WhatsApp e e-mail',
        'Totalmente responsivo em celulares e computadores',
        'Entrega completa sem mensalidades de agência',
      ],
      whatsappMsg: 'Olá! Gostaria de um orçamento para um Site Institucional Completo.',
    },
    {
      id: 'Sistema & Agendamento Sob Medida',
      icon: Sliders,
      name: 'Sistema & Agendamento Sob Medida',
      tagline: 'Para quem precisa de controle de rotina, clientes e pedidos',
      featured: false,
      timeframe: '10 a 15 dias úteis',
      features: [
        'Site institucional de alto padrão incluso',
        'Módulo prático de agendamento online de consultas ou pedidos',
        'Painel administrativo enxuto, rápido e seguro',
        'Histórico organizado de clientes e contatos',
        'Treinamento prático de uso para sua equipe',
        'Suporte técnico direto no lançamento',
      ],
      whatsappMsg: 'Olá! Gostaria de um orçamento para um Sistema Sob Medida.',
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
    <section id="servicos" className="py-20 lg:py-28 bg-[#090A0D] relative border-t border-white/[0.06]">
      {/* Anchor alias for #pacotes */}
      <div id="pacotes" className="absolute -top-24 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-mono text-amber uppercase tracking-wider mb-2">
            Nossos Serviços &amp; Pacotes
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
            O que desenvolvemos para a sua empresa
          </h2>
          <p className="font-body text-sm sm:text-base text-[#9CA3AF] mt-2.5">
            Soluções digitais práticas, sem mensalidades escondidas e prontas para gerar resultados no seu WhatsApp.
          </p>
        </div>

        {/* 3 Plans Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan, idx) => {
            const Icon = plan.icon;
            return (
              <div
                key={idx}
                className={`relative flex flex-col justify-between p-7 sm:p-8 rounded-2xl transition-all duration-300 ${
                  plan.featured
                    ? 'bg-[#111318] border border-amber/60 shadow-glow-amber scale-[1.02] z-10'
                    : 'bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.12]'
                }`}
              >
                {/* Featured Badge */}
                {plan.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3.5 py-0.5 rounded-full bg-amber text-white text-[11px] font-mono font-semibold uppercase tracking-wider flex items-center gap-1 shadow-sm">
                    <Sparkles className="w-3 h-3 text-white" />
                    <span>{plan.badge}</span>
                  </div>
                )}

                <div>
                  {/* Icon */}
                  <div className="w-10 h-10 rounded-xl bg-amber/10 flex items-center justify-center text-amber mb-4">
                    <Icon className="w-5 h-5" />
                  </div>

                  {/* Plan Title & Tagline */}
                  <h3 className="font-display font-bold text-xl text-white mb-1">
                    {plan.name}
                  </h3>
                  <p className="font-body text-xs text-[#9CA3AF] mb-4 leading-relaxed">
                    {plan.tagline}
                  </p>

                  {/* Timeframe line */}
                  <div className="text-xs font-mono text-teal pb-4 mb-4 border-b border-white/[0.06]">
                    ⏱️ Entrega em {plan.timeframe}
                  </div>

                {/* Features List */}
                <ul className="flex flex-col gap-3 font-body text-xs sm:text-sm text-[#D1D5DB]">
                  {plan.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-amber shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 pt-5 border-t border-white/[0.06] flex flex-col gap-2.5">
                <a
                  href={getWhatsappUrl(plan.whatsappMsg)}
                  target="_blank"
                  rel="noreferrer"
                  className={`flex items-center justify-center gap-2 w-full py-3 rounded-xl font-display text-xs sm:text-sm font-semibold transition-all ${
                    plan.featured
                      ? 'bg-amber text-white shadow-glow-amber hover:brightness-110'
                      : 'bg-white/[0.05] text-white border border-white/[0.08] hover:bg-white/[0.1]'
                  }`}
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Pedir Orçamento no WhatsApp</span>
                </a>

                <button
                  type="button"
                  onClick={() => handleSelectPlan(plan.id)}
                  className="text-center text-[11px] font-mono text-[#9CA3AF] hover:text-white transition-colors py-1"
                >
                  ou simular orçamento por formulário
                </button>
              </div>
            </div>
          );
        })}
        </div>

        {/* Minimalist Bottom Trust Note */}
        <div className="mt-10 text-center text-xs text-[#9CA3AF] flex flex-col sm:flex-row items-center justify-center gap-4">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-teal" />
            Garantia de Satisfação: só publicamos quando você aprovar 100%
          </span>
          <span className="hidden sm:inline text-white/20">•</span>
          <span>Pagamento facilitado no PIX ou cartão de crédito</span>
        </div>

      </div>
    </section>
  );
};

export default PricingPlans;
