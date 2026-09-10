import React from 'react';
import {
  Layout,
  Globe2,
  ShoppingBag,
  Sliders,
  RefreshCw,
  Search,
  ChevronRight,
  MessageCircle,
} from 'lucide-react';

export const Solutions: React.FC = () => {
  const services = [
    {
      icon: Layout,
      color: 'text-amber',
      bgIcon: 'bg-amber/10',
      title: 'Landing Pages de Alta Conversão',
      description:
        'Páginas focadas em um único objetivo: vender seu serviço ou produto. Ideais para anúncios no Google Ads e Meta Ads, com botão flutuante de WhatsApp e carregamento instantâneo.',
      tag: 'Mais Pedido para Anúncios',
      anchorText: 'Quero uma Landing Page',
    },
    {
      icon: Globe2,
      color: 'text-teal',
      bgIcon: 'bg-teal/10',
      title: 'Sites Institucionais Completos',
      description:
        'A vitrine oficial da sua empresa, clínica ou escritório. Páginas de Serviços, Sobre Nós, Depoimentos e Localização, transmitindo autoridade máxima para seus clientes.',
      tag: 'Autoridade & Presença Oficial',
      anchorText: 'Quero um Site Institucional',
    },
    {
      icon: ShoppingBag,
      color: 'text-amber',
      bgIcon: 'bg-amber/10',
      title: 'Catálogos & Vitrines Digitais',
      description:
        'Apresente seus produtos de forma elegante com fotos, detalhes e especificações sem a complicação e custo pesado de um e-commerce tradicional. Pedidos direto no WhatsApp.',
      tag: 'Venda Rápida no WhatsApp',
      anchorText: 'Quero um Catálogo Digital',
    },
    {
      icon: Sliders,
      color: 'text-teal',
      bgIcon: 'bg-teal/10',
      title: 'Sistemas Web Simples Sob Medida',
      description:
        'Precisa de algo mais? Criamos painéis administrativos enxutos, sistemas de agendamento online de consultas, controle de clientes ou pedidos sob medida com excelente custo-benefício.',
      tag: 'Painel & Agendamento Enxuto',
      anchorText: 'Quero um Sistema Simples',
    },
    {
      icon: RefreshCw,
      color: 'text-amber',
      bgIcon: 'bg-amber/10',
      title: 'Reformulação de Sites Antigos',
      description:
        'Seu site atual é lento, feio ou não abre direito no celular? Redesenhamos tudo do zero para dar uma nova cara à sua empresa e recuperar clientes perdidos.',
      tag: 'Modernização Total',
      anchorText: 'Quero Reformular Meu Site',
    },
    {
      icon: Search,
      color: 'text-teal',
      bgIcon: 'bg-teal/10',
      title: 'Otimização para o Google (SEO Local)',
      description:
        'Estruturação técnica completa para o Google reconhecer seu negócio e posicionar seu site nas buscas da sua cidade e região, atraindo clientes prontos para comprar.',
      tag: 'Seja Encontrado na Sua Região',
      anchorText: 'Quero Melhorar no Google',
    },
  ];

  return (
    <section id="servicos" className="py-20 lg:py-28 bg-obsidian-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="flex flex-col gap-2.5 max-w-2xl">
            <span className="font-mono text-xs text-amber font-semibold uppercase tracking-wider">
              Soluções Sob Medida
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
              O que criamos para colocar seu negócio em outro nível
            </h2>
          </div>
          <p className="font-body text-sm sm:text-base text-[#9CA3AF] max-w-md leading-relaxed">
            Desenvolvimento personalizado, rápido e direto ao ponto. Sem jargões complicados e com foco absoluto no que dá retorno financeiro.
          </p>
        </div>

        {/* 6 Solution Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-obsidian-surface-1 border border-hairline hover:border-hairline-amber/40 hover:bg-obsidian-surface-2 transition-all duration-300 shadow-md"
              >
                <div>
                  <div className={`w-12 h-12 rounded-xl ${item.bgIcon} flex items-center justify-center ${item.color} mb-5 group-hover:scale-105 transition-transform`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-white mb-2 group-hover:text-amber transition-colors">
                    {item.title}
                  </h3>
                  <p className="font-body text-sm text-[#9CA3AF] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 mt-4 border-t border-hairline/60 flex items-center justify-between text-xs font-mono">
                  <span className="text-[#6B7280] group-hover:text-teal transition-colors">
                    {item.tag}
                  </span>
                  <a
                    href="#orcamento"
                    className="flex items-center gap-1 text-amber hover:text-amber-hover font-semibold transition-colors"
                  >
                    <span>{item.anchorText}</span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
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

export default Solutions;
