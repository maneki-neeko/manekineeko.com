import React from 'react';
import { MessageCircle, ArrowRight, Clock, ShieldCheck, Smartphone } from 'lucide-react';
import { getWhatsappUrl } from '@/config/site';

export const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">

      {/* Ambient background glows */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[44rem] h-[24rem] bg-amber/10 blur-[130px] rounded-full" />
      <div className="pointer-events-none absolute top-72 right-[-10rem] w-[32rem] h-[24rem] bg-teal/5 blur-[120px] rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-10 items-center">

          {/* Left Column: Conversion Copy & CTAs */}
          <div className="lg:col-span-6 flex flex-col gap-6">

            {/* Clean, subtle status line */}
            <div className="flex items-center gap-2 text-xs font-mono text-amber">
              <span className="w-2 h-2 rounded-full bg-amber animate-pulse" />
              <span>Criação de Sites &amp; Landing Pages Sob Medida</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-[50px] lg:leading-[1.12] text-white tracking-tight">
              O site profissional que seu negócio precisa.
            </h1>

            {/* Subheadline */}
            <p className="font-body text-base sm:text-lg text-[#9CA3AF] max-w-xl leading-relaxed">
              Criamos páginas modernas de alta conversão, ultrarrápidas no celular e preparadas para transformar visitantes em clientes no seu WhatsApp.
            </p>

            {/* Two Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-1">
              <a
                href={getWhatsappUrl('Olá! Vim pelo site da Maneki Neeko e gostaria de um orçamento rápido.')}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-amber text-white font-display text-sm sm:text-base font-semibold shadow-glow-amber hover:brightness-110 active:scale-[0.98] transition-all duration-200"
              >
                <MessageCircle className="w-5 h-5 fill-white text-white" />
                <span>Falar no WhatsApp</span>
              </a>

              <a
                href="#servicos"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white/[0.03] text-[#D1D5DB] font-display text-sm sm:text-base font-medium border border-white/[0.08] hover:bg-white/[0.08] hover:text-white transition-all duration-200"
              >
                <span>Ver Serviços</span>
                <ArrowRight className="w-4 h-4 text-teal" />
              </a>
            </div>

            {/* Three Minimalist Guarantees */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-white/[0.06] text-xs text-[#9CA3AF]">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-amber shrink-0" />
                <span>No ar em <strong>7 a 10 dias</strong></span>
              </div>

              <div className="flex items-center gap-2">
                <Smartphone className="w-4 h-4 text-teal shrink-0" />
                <span>Abre em <strong>0.4s no celular</strong></span>
              </div>

              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-amber shrink-0" />
                <span>Código <strong>100% seu</strong></span>
              </div>
            </div>

          </div>

          {/* Right Column: Logo Container indicado no print (lg:col-span-6, 588x420) */}
          <div className="lg:col-span-6 flex items-center justify-center min-h-[420px] h-[420px] relative">
            <div className="pointer-events-none absolute w-80 h-80 bg-amber/15 rounded-full blur-[100px] -z-10" />
            <div className="pointer-events-none absolute w-60 h-60 bg-teal/10 rounded-full blur-[90px] translate-x-12 translate-y-12 -z-10" />

            <div className="relative flex items-center justify-center w-full h-full">
              <img
                src="/MANEKINEEKO.webp"
                alt="Maneki Neeko Logo"
                className="max-w-full max-h-[420px] w-auto h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.85)] transition-transform duration-500 hover:scale-105 select-none"
                draggable={false}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
