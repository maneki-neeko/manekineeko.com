import React from 'react';
import { HeroLogoShowcase } from './HeroLogoShowcase';
import { ArrowRight, ChevronRight, Clock, ShieldCheck, Smartphone, Sparkles, Check } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden">
      
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[48rem] h-[28rem] bg-amber/10 blur-[130px] rounded-full" />
      <div className="pointer-events-none absolute top-72 right-[-10rem] w-[36rem] h-[26rem] bg-teal/5 blur-[120px] rounded-full" />
      
      {/* Subtle grid pattern */}
      <div className="pointer-events-none absolute inset-0 bg-grid-pattern opacity-40" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Conversion Copy & CTAs */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            
            {/* Top Seal Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-obsidian-surface-2 border border-hairline w-fit shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber" />
              </span>
              <span className="font-mono text-xs text-amber font-semibold tracking-wide">
                Criação de Sites, Landing Pages &amp; Sistemas • Sob Medida
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-[52px] lg:leading-[1.14] text-white tracking-tight">
              Tenha um site profissional que atrai clientes —{' '}
              <span className="text-gradient-amber">sem complicação de agência.</span>
            </h1>

            {/* Subheadline */}
            <p className="font-body text-base sm:text-lg text-[#9CA3AF] max-w-2xl leading-relaxed">
              Criamos landing pages de alta conversão, sites institucionais modernos e sistemas web sob medida. Ultrarrápido no celular, otimizado para o Google e pronto para gerar vendas no seu WhatsApp.
            </p>

            {/* Two Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#orcamento"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber to-amber-hover text-white font-display text-sm sm:text-base font-semibold shadow-glow-amber hover:shadow-glow-amber-lg hover:brightness-110 active:scale-[0.98] transition-all duration-200 border border-amber/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber"
              >
                <span>Pedir Orçamento Grátis</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </a>

              <a
                href="#pacotes"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-obsidian-surface-1 text-[#F3F4F6] font-display text-sm sm:text-base font-medium border border-hairline hover:bg-obsidian-surface-2 hover:border-hairline-amber/40 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber"
              >
                <span>Ver Pacotes</span>
                <ChevronRight className="w-4 h-4 text-teal" />
              </a>
            </div>

            {/* Three Guarantees */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-hairline">
              <div className="flex items-center gap-2.5 text-xs font-mono text-[#D1D5DB]">
                <div className="w-7 h-7 rounded-lg bg-obsidian-surface-2 flex items-center justify-center text-amber shrink-0 border border-hairline">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-semibold text-white block">Entrega em 5 a 10 dias</span>
                  <span className="text-[#9CA3AF] text-[11px]">Seu projeto no ar sem demora</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5 text-xs font-mono text-[#D1D5DB]">
                <div className="w-7 h-7 rounded-lg bg-obsidian-surface-2 flex items-center justify-center text-teal shrink-0 border border-hairline">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-semibold text-white block">Sem mensalidade surpresa</span>
                  <span className="text-[#9CA3AF] text-[11px]">Orçamento transparente e sob medida</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5 text-xs font-mono text-[#D1D5DB]">
                <div className="w-7 h-7 rounded-lg bg-obsidian-surface-2 flex items-center justify-center text-amber shrink-0 border border-hairline">
                  <Smartphone className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-semibold text-white block">Site 100% Seu</span>
                  <span className="text-[#9CA3AF] text-[11px]">Domínio e código no seu nome</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Mascot Logo Showcase */}
          <div className="lg:col-span-5">
            <HeroLogoShowcase />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
