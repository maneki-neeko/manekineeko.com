import React from 'react';
import { Star, MessageCircle, ArrowRight } from 'lucide-react';
import { getWhatsappUrl } from '@/config/site';

export const Cases: React.FC = () => {
  const cases = [
    {
      company: 'Dra. Juliana Becker',
      tagline: 'Clínica de Dermatologia & Estética',
      metricNumber: '+140%',
      metricLabel: 'Agendamentos diretos no WhatsApp no 1º mês',
      quote:
        'O investimento se pagou na primeira semana. A página passa muita autoridade e os pacientes elogiam a facilidade para agendar.',
      role: 'Médica & Fundadora',
    },
    {
      company: 'Fontes & Associados',
      tagline: 'Advocacia & Consultoria Tributária',
      metricNumber: '3.2x',
      metricLabel: 'Mais pedidos de propostas qualificadas',
      quote:
        'Fechamos contratos de ticket mais alto porque nosso site agora transmite a solidez e a reputação do nosso trabalho.',
      role: 'Sócio-Fundador',
    },
    {
      company: 'AutoClube Peças & Serviços',
      tagline: 'Centro Automotivo Especializado',
      metricNumber: '-50%',
      metricLabel: 'Redução no tempo gasto tirando dúvidas repetitivas',
      quote:
        'A Maneki Neeko entregou tudo em 8 dias sem burocracia. Os clientes já chegam no WhatsApp sabendo o que querem comprar.',
      role: 'Diretor de Operações',
    },
  ];

  return (
    <section id="cases" className="py-20 lg:py-28 bg-[#090A0D] relative border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-mono text-amber uppercase tracking-wider mb-2">
            Resultados Comprovados
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
            Projetos que geram clientes todo mês
          </h2>
          <p className="font-body text-sm sm:text-base text-[#9CA3AF] mt-2.5">
            Negócios reais que transformaram sua presença digital em faturamento no WhatsApp.
          </p>
        </div>

        {/* 3 Clean Case Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {cases.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between p-7 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-amber/40 transition-all duration-300"
            >
              <div>
                {/* Metric Hero */}
                <div className="pb-4 mb-4 border-b border-white/[0.06]">
                  <span className="font-display text-4xl font-extrabold text-amber tracking-tight block">
                    {item.metricNumber}
                  </span>
                  <span className="text-xs font-mono text-teal mt-0.5 block">
                    {item.metricLabel}
                  </span>
                </div>

                {/* Stars & Quote */}
                <div className="flex items-center gap-1 mb-3 text-amber">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber text-amber" />
                  ))}
                </div>

                <p className="font-body text-xs sm:text-sm text-[#D1D5DB] leading-relaxed italic">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              {/* Author & Role */}
              <div className="pt-6 mt-6 border-t border-white/[0.06]">
                <span className="font-display font-bold text-sm text-white block">
                  {item.company}
                </span>
                <span className="text-xs font-mono text-[#9CA3AF]">
                  {item.tagline}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA below cases */}
        <div className="mt-12 text-center">
          <a
            href={getWhatsappUrl('Olá! Vi os cases no site da Maneki Neeko e quero saber mais para o meu negócio.')}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-display font-semibold text-amber hover:text-amber-hover transition-colors"
          >
            <MessageCircle className="w-4 h-4 fill-amber text-amber" />
            <span>Quero resultados parecidos para a minha empresa</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};

export default Cases;
