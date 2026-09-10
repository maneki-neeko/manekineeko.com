import React from 'react';
import { MessageSquare, Palette, Code2, Rocket, CheckCircle2 } from 'lucide-react';

export const Process: React.FC = () => {
  const steps = [
    {
      step: '01',
      icon: MessageSquare,
      color: 'text-amber',
      title: 'Conversa Rápida (15 min)',
      description:
        'Alinhamos pelo WhatsApp ou chamada rápida os serviços que você oferece, seu público-alvo e o que você precisa no site.',
    },
    {
      step: '02',
      icon: Palette,
      color: 'text-teal',
      title: 'Design & Textos Persuasivos',
      description:
        'Criamos o layout visual exclusivo e a redação focada em conversão para você revisar e aprovar antes de programar.',
    },
    {
      step: '03',
      icon: Code2,
      color: 'text-amber',
      title: 'Desenvolvimento & Testes',
      description:
        'Programamos seu site com código leve, otimizado para celulares, com botão de WhatsApp e carregamento instantâneo.',
    },
    {
      step: '04',
      icon: Rocket,
      color: 'text-teal',
      title: 'Lançamento & Pronto para Vender',
      description:
        'Configuramos seu domínio oficial (.com.br) e colocamos no ar. Você já pode divulgar nas redes e receber novos clientes.',
    },
  ];

  return (
    <section id="como-funciona" className="py-20 lg:py-28 bg-obsidian-bg relative border-t border-hairline">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs text-teal font-semibold uppercase tracking-wider mb-2">
            Processo Simples &amp; Sem Burocracia
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
            Como funciona do primeiro contato ao site no ar
          </h2>
          <p className="font-body text-sm sm:text-base text-[#9CA3AF] mt-3 leading-relaxed">
            Processo ágil e transparente em 4 etapas para você ter seu site pronto em até 10 dias úteis sem complicação.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 relative">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex flex-col justify-between p-6 rounded-2xl bg-obsidian-surface-1 border border-hairline hover:border-hairline-amber/40 hover:bg-obsidian-surface-2 transition-all duration-300 group"
              >
                <div>
                  {/* Top: Step Number & Icon */}
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-hairline/60">
                    <span className={`font-mono text-2xl font-bold ${item.color}`}>
                      {item.step}
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-obsidian-surface-2 flex items-center justify-center text-[#9CA3AF] group-hover:text-white transition-colors border border-hairline/60">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="font-display font-bold text-base sm:text-lg text-white mb-2 group-hover:text-amber transition-colors">
                    {item.title}
                  </h3>

                  <p className="font-body text-xs sm:text-sm text-[#9CA3AF] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-hairline/40 flex items-center gap-1.5 text-[11px] font-mono text-[#6B7280]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-teal" />
                  <span>Acompanhamento direto</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Process;
