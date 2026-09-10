import React from 'react';
import { LogoMonogram } from './LogoMonogram';
import { Fingerprint, Code2, CloudCog, Gauge, Compass, Cable, BarChart3, CheckCircle2 } from 'lucide-react';

export const AboutDiferenciais: React.FC = () => {
  const differentiators = [
    {
      icon: Fingerprint,
      title: 'Soluções Personalizadas',
      description: 'Sem soluções genéricas de prateleira: cada módulo é desenhado especificamente para a lógica do seu negócio.',
      color: 'text-amber',
    },
    {
      icon: Code2,
      title: 'Qualidade Estrita de Código',
      description: 'Clean code, tipagem estrita com TypeScript, cobertura de testes automatizados e revisões por pares.',
      color: 'text-teal',
    },
    {
      icon: CloudCog,
      title: 'Arquitetura Escalável',
      description: 'Estruturas resilientes preparadas para alto volume com baixo custo operacional e estabilidade.',
      color: 'text-amber',
    },
    {
      icon: Gauge,
      title: 'Performance Obsessiva',
      description: 'Otimização profunda de queries, caching distribuído e tempos de resposta médios na casa dos milissegundos.',
      color: 'text-teal',
    },
    {
      icon: Compass,
      title: 'UX/UI Ergonômica',
      description: 'Interfaces limpas e objetivas focadas em usabilidade e redução drástica do tempo de execução das tarefas.',
      color: 'text-amber',
    },
    {
      icon: Cable,
      title: 'Integração Flexível',
      description: 'Conectores seguros com sistemas legados, ERPs (SAP, Totvs), gateways de pagamento e webhooks de parceiros.',
      color: 'text-teal',
    },
    {
      icon: BarChart3,
      title: 'Visão Pragmática de Negócio',
      description: 'Não programamos apenas funcionalidades: traduzimos indicadores operacionais e financeiros em engenharia sólida.',
      color: 'text-amber',
      highlight: true,
    },
  ];

  return (
    <div className="bg-obsidian-bg">
      {/* 1. SOBRE NÓS */}
      <section id="sobre" className="py-20 lg:py-24 border-t border-hairline relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Quote and Headquarters */}
            <div className="lg:col-span-6 flex flex-col gap-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-obsidian-surface-2 border border-hairline w-fit">
                <span className="w-2 h-2 rounded-full bg-amber" />
                <span className="font-mono text-xs text-amber font-semibold uppercase tracking-wider">
                  Sobre a Maneki Neeko
                </span>
              </div>

              <blockquote className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-white leading-tight">
                &ldquo;A Maneki Neeko nasceu para transformar problemas complexos em experiências digitais simples, eficientes e escaláveis.&rdquo;
              </blockquote>

              <div className="flex items-center gap-3 pt-2">
                <div className="w-10 h-10 rounded-full bg-obsidian-surface-2 border border-hairline flex items-center justify-center text-teal">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-display font-semibold text-sm text-white">
                    Engenharia de Software Sob Medida
                  </div>
                  <div className="font-mono text-xs text-[#9CA3AF]">
                    São Paulo, SP — Atendendo clientes globais
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Technical Manifesto Card */}
            <div className="lg:col-span-6">
              <div className="p-7 sm:p-9 rounded-2xl bg-obsidian-surface-1 border border-hairline shadow-xl flex flex-col gap-5 relative overflow-hidden">
                <div className="flex items-center justify-between pb-4 border-b border-hairline">
                  <div className="flex items-center gap-3">
                    <LogoMonogram size="md" />
                    <div>
                      <h3 className="font-display font-bold text-base text-white">
                        Maneki Neeko
                      </h3>
                      <span className="font-mono text-xs text-teal">
                        software labs &amp; crafts
                      </span>
                    </div>
                  </div>
                  <span className="font-mono text-xs text-[#9CA3AF] bg-obsidian-surface-2 px-2.5 py-1 rounded border border-hairline">
                    est. 2025
                  </span>
                </div>

                <p className="font-body text-sm sm:text-base text-[#D1D5DB] leading-relaxed">
                  Inspirada na tradição de prosperidade e na obstinação dos artesãos do código, a Maneki Neeko une rigor de engenharia à estética moderna. Acreditamos que um software de alto nível não é fruto do acaso, mas de processos intencionais, arquitetura ponderada e clareza pragmática de negócios.
                </p>

                <p className="font-body text-xs sm:text-sm text-[#9CA3AF] leading-relaxed">
                  Nossos squads atuam de forma colaborativa com lideranças de tecnologia, garantindo entregas que resolvem os gargalos imediatos e sedimentam uma base tecnológica preparada para os próximos anos.
                </p>

                {/* Cultural Pillars */}
                <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-mono text-[#D1D5DB]">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-teal" />
                    <span>Pragmatismo</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-amber" />
                    <span>Rigor Técnico</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#FFB783]" />
                    <span>Foco em Negócio</span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. DIFERENCIAIS TÉCNICOS */}
      <section id="diferenciais" className="py-20 lg:py-24 border-t border-hairline bg-obsidian-surface-1/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-14">
            <span className="font-mono text-xs text-amber font-semibold uppercase tracking-wider block mb-2">
              Vantagem Competitiva
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
              Diferenciais técnicos &amp; padrão de execução
            </h2>
            <p className="font-body text-sm sm:text-base text-[#9CA3AF] mt-2">
              Critérios rigorosos aplicados em cada linha de código e decisão de arquitetura.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {differentiators.map((diff, index) => {
              const Icon = diff.icon;
              return (
                <div
                  key={index}
                  className={`p-6 rounded-2xl bg-obsidian-surface-1 border border-hairline hover:border-hairline-amber/40 hover:bg-obsidian-surface-2 transition-all duration-300 flex flex-col justify-between ${
                    diff.highlight ? 'md:col-span-2 lg:col-span-3 border-amber/30 bg-obsidian-surface-2/60' : ''
                  }`}
                >
                  <div className="flex items-start gap-3.5 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-obsidian-surface-2 flex items-center justify-center shrink-0 border border-hairline">
                      <Icon className={`w-5 h-5 ${diff.color}`} />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-base sm:text-lg text-white">
                        {diff.title}
                      </h3>
                      <p className="font-body text-xs sm:text-sm text-[#9CA3AF] mt-1 leading-relaxed">
                        {diff.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>
    </div>
  );
};

export default AboutDiferenciais;
