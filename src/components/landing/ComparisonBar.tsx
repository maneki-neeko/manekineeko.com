import React from 'react';
import { XCircle, CheckCircle2, ArrowRight, MessageCircle } from 'lucide-react';
import { getWhatsappUrl } from '@/config/site';

export const ComparisonBar: React.FC = () => {
  return (
    <section id="vantagens" className="py-20 lg:py-24 bg-[#090A0D] relative border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-mono text-amber uppercase tracking-wider mb-2">
            Comparativo Direto
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
            Por que a Maneki Neeko é a melhor escolha?
          </h2>
          <p className="font-body text-sm sm:text-base text-[#9CA3AF] mt-2.5">
            Sem perder semanas no improviso e sem orçamentos abusivos de agência tradicional.
          </p>
        </div>

        {/* 3 Columns Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          
          {/* Option 1: DIY / Wix */}
          <div className="flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
            <div>
              <span className="text-xs font-mono text-[#9CA3AF] block mb-1">
                Opção 01
              </span>
              <h3 className="font-display font-bold text-lg text-white mb-4">
                Criar Sozinho (Wix / WP)
              </h3>

              <ul className="flex flex-col gap-3 font-body text-xs sm:text-sm text-[#9CA3AF]">
                <li className="flex items-start gap-2.5">
                  <XCircle className="w-4 h-4 text-[#EF4444] shrink-0 mt-0.5" />
                  <span>Templates lentos e pesados no celular</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <XCircle className="w-4 h-4 text-[#EF4444] shrink-0 mt-0.5" />
                  <span>Visual amador que afasta clientes exigentes</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <XCircle className="w-4 h-4 text-[#EF4444] shrink-0 mt-0.5" />
                  <span>Mensalidades em dólar que encarecem todo ano</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <XCircle className="w-4 h-4 text-[#EF4444] shrink-0 mt-0.5" />
                  <span>Você gasta semanas do seu tempo tentando ajustar</span>
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-white/[0.06] text-xs font-mono text-[#6B7280]">
              Resultado: dor de cabeça e poucas vendas.
            </div>
          </div>

          {/* Option 2: Agências Tradicionais */}
          <div className="flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
            <div>
              <span className="text-xs font-mono text-[#9CA3AF] block mb-1">
                Opção 02
              </span>
              <h3 className="font-display font-bold text-lg text-white mb-4">
                Agências Tradicionais
              </h3>

              <ul className="flex flex-col gap-3 font-body text-xs sm:text-sm text-[#9CA3AF]">
                <li className="flex items-start gap-2.5">
                  <XCircle className="w-4 h-4 text-[#EF4444] shrink-0 mt-0.5" />
                  <span>Orçamentos exorbitantes com custos inflados</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <XCircle className="w-4 h-4 text-[#EF4444] shrink-0 mt-0.5" />
                  <span>Meses de espera e burocracia interminável</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <XCircle className="w-4 h-4 text-[#EF4444] shrink-0 mt-0.5" />
                  <span>Mensalidades obrigatórias de manutenção</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <XCircle className="w-4 h-4 text-[#EF4444] shrink-0 mt-0.5" />
                  <span>Atendimento impessoal por intermediários</span>
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-white/[0.06] text-xs font-mono text-[#6B7280]">
              Resultado: custo alto e entrega demorada.
            </div>
          </div>

          {/* Option 3: Maneki Neeko (Destaque) */}
          <div className="flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-[#111318] border border-amber/50 shadow-glow-amber relative">
            <div>
              <span className="text-xs font-mono text-amber font-semibold block mb-1">
                A Escolha Inteligente
              </span>
              <h3 className="font-display font-bold text-lg text-white mb-4">
                Maneki Neeko Sob Medida
              </h3>

              <ul className="flex flex-col gap-3 font-body text-xs sm:text-sm text-[#F3F4F6]">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-amber shrink-0 mt-0.5" />
                  <span><strong>Design 100% exclusivo:</strong> sem templates prontos</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-amber shrink-0 mt-0.5" />
                  <span><strong>Ultrarrápido:</strong> abre em 0.4s no celular</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-amber shrink-0 mt-0.5" />
                  <span><strong>Entrega rápida:</strong> no ar em 7 a 10 dias úteis</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-amber shrink-0 mt-0.5" />
                  <span><strong>Site 100% seu:</strong> sem mensalidades presas</span>
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-white/[0.08]">
              <a
                href={getWhatsappUrl('Olá! Gostaria de um orçamento para o meu site com a Maneki Neeko.')}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-amber text-white font-display text-xs sm:text-sm font-semibold hover:brightness-110 transition-all shadow-sm"
              >
                <MessageCircle className="w-4 h-4 fill-white text-white" />
                <span>Pedir Orçamento no WhatsApp</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ComparisonBar;
