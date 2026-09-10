import React from 'react';
import { Package, Users, ShieldCheck, Check, ArrowRight, Sparkles } from 'lucide-react';

export const EngagementModels: React.FC = () => {
  const models = [
    {
      icon: Package,
      title: 'Turnkey (Projeto Fechado)',
      subtitle: 'Para escopos bem definidos e produtos novos',
      featured: false,
      benefits: [
        'Escopo, prazos e investimentos previamente acordados',
        'Cronograma em marcos com validação a cada sprint',
        'Garantia técnica pós-entrega e homologação assistida',
        'Passagem completa de conhecimento e documentação',
      ],
      idealFor: 'Novos produtos digitais (MVPs), plataformas específicas ou refatorações delimitadas.',
      ctaText: 'Solicitar Proposta Turnkey',
    },
    {
      icon: Users,
      title: 'Squad Dedicado',
      subtitle: 'Capacidade técnica contínua e time sênior integrado',
      featured: true,
      badge: 'Mais procurado',
      benefits: [
        'Engenheiros sênior dedicados full-time à sua operação',
        'Rituais ágeis integrados às ferramentas da sua empresa',
        'Velocidade máxima de desenvolvimento sem custo de contratação',
        'Código 100% proprietário sob governança direta do seu time',
      ],
      idealFor: 'Startups em crescimento e empresas que precisam acelerar roadmap sem perder o rigor.',
      ctaText: 'Montar Meu Squad Sênior',
    },
    {
      icon: ShieldCheck,
      title: 'Consultoria & Auditoria',
      subtitle: 'Diagnóstico profundo de arquitetura e segurança',
      featured: false,
      benefits: [
        'Auditoria rigorosa de código-fonte, infraestrutura e banco',
        'Mapeamento detalhado de vulnerabilidades e dívida técnica',
        'Relatório executivo para captação ou due diligence',
        'Mentoria técnica estratégica para lideranças e CTOs',
      ],
      idealFor: 'Sistemas que enfrentam gargalos de escala ou empresas em preparação para rodadas.',
      ctaText: 'Agendar Diagnóstico Técnico',
    },
  ];

  return (
    <section id="servicos" className="py-20 lg:py-28 bg-obsidian-bg relative border-t border-hairline">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-obsidian-surface-2 border border-hairline mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-teal" />
            <span className="font-mono text-xs text-teal font-semibold uppercase tracking-wider">
              Formatos de Parceria
            </span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
            Flexibilidade operacional adaptada à maturidade do seu desafio
          </h2>
          <p className="font-body text-sm sm:text-base text-[#9CA3AF] mt-3 leading-relaxed">
            Seja para entregar um sistema completo ou integrar engenheiros de alto nível ao seu squad, temos o modelo perfeito para sua necessidade.
          </p>
        </div>

        {/* 3 Models Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {models.map((model, idx) => {
            const Icon = model.icon;
            return (
              <div
                key={idx}
                className={`relative flex flex-col justify-between p-7 sm:p-8 rounded-2xl transition-all duration-300 ${
                  model.featured
                    ? 'bg-obsidian-surface-2 border-2 border-amber shadow-glow-amber scale-[1.02] z-10'
                    : 'bg-obsidian-surface-1 border border-hairline hover:border-hairline-amber/40 hover:bg-obsidian-surface-2 shadow-lg'
                }`}
              >
                {/* Featured Badge */}
                {model.featured && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-amber to-amber-hover text-white text-xs font-mono font-bold uppercase tracking-wider shadow-md flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-white" />
                    <span>{model.badge}</span>
                  </div>
                )}

                <div>
                  {/* Card Header */}
                  <div className="flex items-center gap-3.5 mb-4">
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${model.featured ? 'bg-amber/20 text-amber' : 'bg-obsidian-surface-2 text-teal border border-hairline'}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-xl text-white">
                        {model.title}
                      </h3>
                    </div>
                  </div>

                  <p className="font-body text-xs sm:text-sm text-[#9CA3AF] mb-6 min-h-[36px]">
                    {model.subtitle}
                  </p>

                  {/* Benefit list */}
                  <div className="pt-4 border-t border-hairline/70">
                    <span className="font-mono text-[11px] text-[#6B7280] uppercase tracking-wider block mb-3">
                      O que está incluído
                    </span>
                    <ul className="flex flex-col gap-2.5">
                      {model.benefits.map((benefit, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#E5E7EB]">
                          <div className={`mt-0.5 rounded-full p-0.5 ${model.featured ? 'text-amber bg-amber/10' : 'text-teal bg-teal/10'}`}>
                            <Check className="w-3.5 h-3.5" />
                          </div>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Ideal for note */}
                  <div className="mt-6 p-3 rounded-xl bg-obsidian-bg/80 border border-hairline text-xs font-body text-[#9CA3AF]">
                    <span className="font-mono text-[11px] text-white font-semibold block mb-0.5">
                      Recomendado para:
                    </span>
                    {model.idealFor}
                  </div>
                </div>

                {/* CTA Button */}
                <div className="mt-8 pt-4">
                  <a
                    href="#diagnostico"
                    className={`flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-display text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber ${
                      model.featured
                        ? 'bg-amber text-white shadow-glow-amber hover:brightness-110'
                        : 'bg-obsidian-surface-2 text-[#F3F4F6] border border-hairline hover:bg-obsidian-surface-3 hover:text-white'
                    }`}
                  >
                    <span>{model.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default EngagementModels;
