import React from 'react';
import { Star, Zap, MessageCircle, TrendingUp, CheckCircle2 } from 'lucide-react';

export const Cases: React.FC = () => {
  const cases = [
    {
      company: 'Dra. Juliana Becker',
      tagline: 'Clínica de Dermatologia & Estética Avançada',
      challenge:
        'Concorrentes com páginas rápidas estavam captando todos os pacientes da região no Google; precisava de uma landing page refinada com agendamento em 1 clique.',
      metricNumber: '+140%',
      metricLabel: 'Aumento em agendamentos diretos pelo WhatsApp no primeiro mês',
      quote:
        'O investimento se pagou na primeira semana. A página ficou maravilhosa, passa muita autoridade e os pacientes elogiam a facilidade para agendar.',
      author: 'Dra. Juliana Becker',
      role: 'Médica & Fundadora da Clínica',
      tags: ['Landing Page de Vendas', 'WhatsApp 1-Clique', 'Google Ads', '0.4s no Celular'],
      highlightColor: 'text-amber',
      badgeBg: 'bg-amber/10 text-amber border-amber/20',
    },
    {
      company: 'Fontes & Associados',
      tagline: 'Escritório de Advocacia & Consultoria Tributária',
      challenge:
        'Site antigo feito há anos no WordPress que travava no celular e afastava clientes corporativos que pesquisavam pela reputação do escritório.',
      metricNumber: '3.2x',
      metricLabel: 'Mais pedidos de propostas qualificadas recebidas pelo formulário',
      quote:
        'A percepção de valor dos clientes mudou radicalmente. Fechamos contratos de ticket mais alto porque nosso site agora transmite a solidez do nosso trabalho.',
      author: 'Dr. Marcos Fontes',
      role: 'Sócio-Fundador',
      tags: ['Site Institucional Completo', 'SEO Local Google', 'Design Exclusivo', 'Mobile 100%'],
      highlightColor: 'text-teal',
      badgeBg: 'bg-teal/10 text-teal border-teal/20',
    },
    {
      company: 'AutoClube Peças & Serviços',
      tagline: 'Centro Automotivo Especializado & Acessórios',
      challenge:
        'Equipe sobrecarregada atendendo mensagens repetitivas sobre serviços e horários; precisavam de um catálogo online claro e agendamento de revisões.',
      metricNumber: '-50%',
      metricLabel: 'Redução no tempo gasto no balcão e +85 clientes novos/mês',
      quote:
        'A Maneki Neeko entregou tudo em 8 dias sem burocracia. O catálogo é direto ao ponto e os clientes já chegam no WhatsApp sabendo o que querem.',
      author: 'Carlos Eduardo Ramos',
      role: 'Diretor de Operações',
      tags: ['Catálogo Digital', 'Sistema de Agendamento', 'WhatsApp Integrado', 'Entrega em 8 dias'],
      highlightColor: 'text-amber',
      badgeBg: 'bg-amber/10 text-amber border-amber/20',
    },
  ];

  return (
    <section id="cases" className="py-20 lg:py-28 bg-obsidian-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="flex flex-col gap-2.5 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-obsidian-surface-2 border border-hairline w-fit">
              <Zap className="w-3.5 h-3.5 text-amber" />
              <span className="font-mono text-xs text-amber font-semibold uppercase tracking-wider">
                Resultados Reais
              </span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
              Projetos que geram mais clientes e vendas todo mês
            </h2>
          </div>
          <p className="font-body text-sm sm:text-base text-[#9CA3AF] max-w-md leading-relaxed">
            Veja como ajudamos pequenos e médios negócios a se destacarem da concorrência e atraírem contatos qualificados.
          </p>
        </div>

        {/* 3 Case Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {cases.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-obsidian-surface-1 border border-hairline hover:border-hairline-amber/40 shadow-xl transition-all duration-300 group hover:-translate-y-1"
            >
              <div>
                {/* Company & Tagline */}
                <div className="flex items-start justify-between gap-4 pb-4 border-b border-hairline">
                  <div>
                    <h3 className="font-display font-bold text-xl text-white">
                      {item.company}
                    </h3>
                    <p className="font-mono text-xs text-[#9CA3AF] mt-0.5">
                      {item.tagline}
                    </p>
                  </div>
                  <span className={`px-2.5 py-1 rounded-full text-[11px] font-mono border ${item.badgeBg}`}>
                    No Ar
                  </span>
                </div>

                {/* Challenge description */}
                <div className="py-4 text-xs sm:text-sm text-[#9CA3AF] leading-relaxed">
                  <span className="font-mono text-xs text-white font-semibold block mb-1">
                    O Desafio:
                  </span>
                  {item.challenge}
                </div>

                {/* Big Metric Box */}
                <div className="my-2 p-4 rounded-xl bg-obsidian-surface-2 border border-hairline/80 flex flex-col">
                  <span className="text-[11px] font-mono text-[#9CA3AF] uppercase tracking-wider">
                    Resultado Obtido
                  </span>
                  <div className="flex items-baseline gap-2 mt-0.5">
                    <span className={`font-display text-3xl sm:text-4xl font-extrabold tracking-tight ${item.highlightColor}`}>
                      {item.metricNumber}
                    </span>
                  </div>
                  <span className="text-xs font-body text-[#D1D5DB] mt-1">
                    {item.metricLabel}
                  </span>
                </div>

                {/* Testimonial Quote */}
                <div className="pt-4">
                  <div className="flex items-center gap-1 mb-2 text-amber">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber text-amber" />
                    ))}
                  </div>
                  <p className="font-body text-xs sm:text-sm italic text-[#E5E7EB] leading-relaxed">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                  <div className="mt-3">
                    <span className="font-display font-bold text-xs sm:text-sm text-white block">
                      {item.author}
                    </span>
                    <span className="font-mono text-[11px] text-[#9CA3AF]">
                      {item.role}
                    </span>
                  </div>
                </div>
              </div>

              {/* Technologies / Features Tag List */}
              <div className="mt-6 pt-4 border-t border-hairline">
                <span className="font-mono text-[10.5px] text-[#6B7280] uppercase tracking-wider block mb-2">
                  Entregáveis do Projeto
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {item.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded bg-obsidian-surface-2 text-[#D1D5DB] text-[11px] font-mono border border-hairline/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Cases;
