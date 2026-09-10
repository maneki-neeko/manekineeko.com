import React from 'react';
import { BookOpenCheck, Activity, CalendarSync, ShieldAlert } from 'lucide-react';

export const TrustBar: React.FC = () => {
  const pillars = [
    {
      icon: BookOpenCheck,
      color: 'text-amber',
      bgIcon: 'bg-amber/10',
      title: '100% Documentado',
      description: 'Modelagem C4, especificações OpenAPI e guias de infraestrutura desde o primeiro commit.',
    },
    {
      icon: Activity,
      color: 'text-teal',
      bgIcon: 'bg-teal/10',
      title: '+99.98% Estabilidade',
      description: 'Arquiteturas resilientes com tolerância a falhas, testes automatizados e métricas em tempo real.',
    },
    {
      icon: CalendarSync,
      color: 'text-amber',
      bgIcon: 'bg-amber/10',
      title: 'Sprints Quinzenais',
      description: 'Ciclos curtos de entrega com gravações de demonstração, changelogs detalhados e evolução contínua.',
    },
    {
      icon: ShieldAlert,
      color: 'text-teal',
      bgIcon: 'bg-teal/10',
      title: 'Zero Surpresas',
      description: 'Canal direto com engenheiros de software, previsibilidade de escopo e transparência operacional irrestrita.',
    },
  ];

  return (
    <section className="w-full bg-obsidian-bg py-12 border-y border-hairline relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div
                key={index}
                className="flex flex-col gap-2.5 p-5 rounded-xl bg-obsidian-surface-1 border border-hairline hover:border-hairline-amber/40 hover:bg-obsidian-surface-2 transition-all duration-300 group"
              >
                <div className={`w-10 h-10 rounded-lg ${pillar.bgIcon} flex items-center justify-center ${pillar.color} mb-1 transition-transform group-hover:scale-105`}>
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-display text-base font-bold text-white tracking-tight">
                  {pillar.title}
                </h3>
                <p className="font-body text-xs sm:text-sm text-[#9CA3AF] leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
