import React, { useState } from 'react';
import {
  Globe,
  Zap,
  Smartphone,
  MessageCircle,
  CheckCircle2,
  Calendar,
  Users,
  Star,
  ExternalLink,
} from 'lucide-react';

export const WebsiteShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'lp' | 'site' | 'system'>('lp');

  return (
    <div className="relative rounded-2xl bg-obsidian-surface-1 p-4 sm:p-5 border border-hairline hover:border-hairline-amber/40 shadow-2xl transition-all duration-300 overflow-hidden group">
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute -top-20 -right-20 w-48 h-48 bg-amber/10 blur-[80px] rounded-full" />
      <div className="pointer-events-none absolute -bottom-20 -left-20 w-48 h-48 bg-teal/10 blur-[80px] rounded-full" />

      {/* Browser Chrome Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3.5 mb-3.5 border-b border-hairline gap-2">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-[#EF4444]/80 border border-[#EF4444]" />
          <span className="w-3 h-3 rounded-full bg-[#F59E0B]/80 border border-[#F59E0B]" />
          <span className="w-3 h-3 rounded-full bg-[#10B981]/80 border border-[#10B981]" />
          
          <div className="flex items-center gap-1.5 ml-2 px-3 py-1 rounded-md bg-obsidian-surface-2 border border-hairline/60 text-xs font-mono text-[#9CA3AF]">
            <Globe className="w-3 h-3 text-teal" />
            <span className="text-white">seunegocio.com.br</span>
            <span className="text-[#6B7280]">/</span>
            <span className="text-amber">
              {activeTab === 'lp' ? 'oferta-especial' : activeTab === 'site' ? 'institucional' : 'painel-gestao'}
            </span>
          </div>
        </div>

        {/* Live Quality Badge */}
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-teal/10 border border-teal/20 w-fit">
          <Zap className="w-3.5 h-3.5 text-teal" />
          <span className="font-mono text-[11px] text-teal font-semibold">
            Google Score 100/100 • 0.4s
          </span>
        </div>
      </div>

      {/* Interactive Tabs: Selector */}
      <div className="grid grid-cols-3 gap-1.5 p-1 rounded-xl bg-obsidian-surface-2 border border-hairline mb-3.5 text-xs font-mono">
        <button
          type="button"
          onClick={() => setActiveTab('lp')}
          className={`py-2 px-2 rounded-lg text-center transition-all ${
            activeTab === 'lp'
              ? 'bg-amber text-white font-bold shadow-sm'
              : 'text-[#9CA3AF] hover:text-white hover:bg-obsidian-surface-3'
          }`}
        >
          Landing Page
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('site')}
          className={`py-2 px-2 rounded-lg text-center transition-all ${
            activeTab === 'site'
              ? 'bg-amber text-white font-bold shadow-sm'
              : 'text-[#9CA3AF] hover:text-white hover:bg-obsidian-surface-3'
          }`}
        >
          Site Institucional
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('system')}
          className={`py-2 px-2 rounded-lg text-center transition-all ${
            activeTab === 'system'
              ? 'bg-amber text-white font-bold shadow-sm'
              : 'text-[#9CA3AF] hover:text-white hover:bg-obsidian-surface-3'
          }`}
        >
          Sistema Sob Medida
        </button>
      </div>

      {/* Dynamic Simulated Preview Window */}
      <div className="rounded-xl bg-[#090A0D] border border-hairline/80 p-4 sm:p-5 relative min-h-[260px] flex flex-col justify-between overflow-hidden">
        
        {/* Content 1: Landing Page */}
        {activeTab === 'lp' && (
          <div className="flex flex-col gap-3 animate-fade-in">
            <div className="flex items-center justify-between">
              <span className="px-2 py-0.5 rounded bg-teal/15 text-teal border border-teal/30 text-[10.5px] font-mono font-semibold">
                Foco em Vendas &amp; Google Ads
              </span>
              <span className="text-[11px] font-mono text-[#9CA3AF] flex items-center gap-1">
                <Smartphone className="w-3 h-3 text-amber" /> 100% Mobile Ready
              </span>
            </div>

            <h4 className="font-display font-bold text-lg sm:text-xl text-white tracking-tight leading-snug">
              Transforme Mais Visitantes em Clientes com Design de Alta Conversão
            </h4>

            <p className="font-body text-xs sm:text-sm text-[#9CA3AF] leading-relaxed">
              Estrutura estratégica com proposta clara, depoimentos convincentes e botão de WhatsApp em 1 clique para fechar negócio.
            </p>

            {/* Simulated Live Action in LP */}
            <div className="pt-2 flex flex-wrap items-center gap-2.5">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-teal text-[#090A0D] font-display font-bold text-xs shadow-md hover:brightness-110">
                <MessageCircle className="w-3.5 h-3.5 fill-[#090A0D]" />
                <span>Conversar no WhatsApp</span>
              </div>
              <div className="flex items-center gap-1 text-amber text-xs font-mono">
                <Star className="w-3 h-3 fill-amber text-amber" />
                <span>+35% em contatos qualificados</span>
              </div>
            </div>
          </div>
        )}

        {/* Content 2: Site Institucional */}
        {activeTab === 'site' && (
          <div className="flex flex-col gap-3 animate-fade-in">
            <div className="flex items-center justify-between">
              <span className="px-2 py-0.5 rounded bg-amber/15 text-amber border border-amber/30 text-[10.5px] font-mono font-semibold">
                Presença Oficial &amp; Autoridade
              </span>
              <span className="text-[11px] font-mono text-[#9CA3AF]">
                Google SEO Integrado
              </span>
            </div>

            <div className="flex items-center justify-between border-b border-hairline/60 pb-2 text-xs font-mono text-[#D1D5DB]">
              <span className="font-bold text-white">Sua Clínica / Escritório</span>
              <div className="flex items-center gap-2 text-[#9CA3AF]">
                <span>Serviços</span>
                <span>Sobre</span>
                <span className="text-amber">Contato</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="p-2.5 rounded-lg bg-obsidian-surface-2 border border-hairline">
                <span className="font-bold text-white block">Apresentação Impecável</span>
                <span className="text-[#9CA3AF] text-[11px]">Transmita credibilidade imediata</span>
              </div>
              <div className="p-2.5 rounded-lg bg-obsidian-surface-2 border border-hairline">
                <span className="font-bold text-white block">SEO para sua Cidade</span>
                <span className="text-[#9CA3AF] text-[11px]">Apareça nas buscas locais</span>
              </div>
            </div>

            <p className="font-body text-xs text-[#9CA3AF] leading-relaxed">
              O endereço digital definitivo para seu negócio passar confiança aos clientes que pesquisam por você na internet.
            </p>
          </div>
        )}

        {/* Content 3: Sistema Simples Sob Medida */}
        {activeTab === 'system' && (
          <div className="flex flex-col gap-3 animate-fade-in">
            <div className="flex items-center justify-between">
              <span className="px-2 py-0.5 rounded bg-teal/15 text-teal border border-teal/30 text-[10.5px] font-mono font-semibold">
                Painel Prático &amp; Sem Burocracia
              </span>
              <span className="text-[11px] font-mono text-[#9CA3AF]">
                Sob Medida para sua Rotina
              </span>
            </div>

            <div className="p-2.5 rounded-lg bg-obsidian-surface-2 border border-hairline flex items-center justify-between text-xs font-mono">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-teal" />
                <span className="text-white font-semibold">Próximos Agendamentos</span>
              </div>
              <span className="text-teal font-bold">12 hoje</span>
            </div>

            <div className="grid grid-cols-3 gap-1.5 text-center font-mono text-[11px]">
              <div className="p-2 rounded-lg bg-obsidian-surface-2/80 border border-hairline">
                <span className="text-[#9CA3AF] block text-[10px]">Clientes</span>
                <span className="font-bold text-white">340</span>
              </div>
              <div className="p-2 rounded-lg bg-obsidian-surface-2/80 border border-hairline">
                <span className="text-[#9CA3AF] block text-[10px]">Contatos</span>
                <span className="font-bold text-amber">48 novos</span>
              </div>
              <div className="p-2 rounded-lg bg-obsidian-surface-2/80 border border-hairline">
                <span className="text-[#9CA3AF] block text-[10px]">Uptime</span>
                <span className="font-bold text-teal">100%</span>
              </div>
            </div>

            <p className="font-body text-xs text-[#9CA3AF]">
              Controle agendamentos, clientes ou pedidos em um sistema feito sob medida para você, sem pagar mensalidades caras de softwares prontos.
            </p>
          </div>
        )}

        {/* Mockup Footer Highlights */}
        <div className="pt-3 mt-2 border-t border-hairline/60 flex items-center justify-between text-[11px] font-mono text-[#9CA3AF]">
          <span className="flex items-center gap-1.5 text-teal">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Entrega rápida em 5 a 10 dias</span>
          </span>
          <span className="text-white font-semibold">Orçamento transparente e sem surpresas</span>
        </div>

      </div>

      {/* Bottom Features Banner */}
      <div className="mt-3.5 pt-2.5 border-t border-hairline flex items-center justify-between text-xs font-mono text-[#9CA3AF]">
        <span>Design exclusivo • Sem templates genéricos</span>
        <a href="#orcamento" className="text-amber hover:text-amber-hover font-semibold flex items-center gap-1">
          <span>Quero um assim</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    </div>
  );
};

export default WebsiteShowcase;
