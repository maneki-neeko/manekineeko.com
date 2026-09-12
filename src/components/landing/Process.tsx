import React from 'react';
import { MessageSquare, Palette, Code2, Rocket } from 'lucide-react';

export const Process: React.FC = () => {
  const steps = [
    {
      step: '01',
      icon: MessageSquare,
      title: 'Conversa Rápida (15 min)',
      description: 'Alinhamos pelo WhatsApp seus serviços, público e o que você precisa no site.',
    },
    {
      step: '02',
      icon: Palette,
      title: 'Design Exclusivo',
      description: 'Criamos o layout visual e os textos de conversão para você revisar e aprovar.',
    },
    {
      step: '03',
      icon: Code2,
      title: 'Desenvolvimento Ágil',
      description: 'Programamos com código limpo, ultrarrápido no celular e com WhatsApp integrado.',
    },
    {
      step: '04',
      icon: Rocket,
      title: 'No Ar & Pronto para Vender',
      description: 'Configuramos seu domínio e publicamos. Você já pode divulgar e receber contatos.',
    },
  ];

  return (
    <section id="como-funciona" className="py-20 lg:py-28 bg-[#090A0D] relative border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-mono text-amber uppercase tracking-wider mb-2">
            Etapas Simples
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
            Como funciona do início à entrega
          </h2>
          <p className="font-body text-sm sm:text-base text-[#9CA3AF] mt-2.5">
            Processo transparente em 4 passos para ter seu site no ar sem complicação.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex flex-col justify-between p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.12] transition-all duration-200"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/[0.06]">
                    <span className="font-mono text-2xl font-bold text-amber">
                      {item.step}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-white/[0.04] flex items-center justify-center text-[#9CA3AF]">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="font-display font-bold text-base text-white mb-2">
                    {item.title}
                  </h3>

                  <p className="font-body text-xs sm:text-sm text-[#9CA3AF] leading-relaxed">
                    {item.description}
                  </p>
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
