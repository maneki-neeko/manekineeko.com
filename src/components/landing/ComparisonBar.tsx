import React from 'react';
import { XCircle, CheckCircle2, AlertTriangle, Sparkles, ArrowRight } from 'lucide-react';

export const ComparisonBar: React.FC = () => {
  return (
    <section id="vantagens" className="py-20 lg:py-24 bg-obsidian-bg relative border-y border-hairline">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-obsidian-surface-2 border border-hairline mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber" />
            <span className="font-mono text-xs text-amber font-semibold uppercase tracking-wider">
              Comparativo Honesto
            </span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
            Por que escolher a Maneki Neeko para criar seu site?
          </h2>
          <p className="font-body text-sm sm:text-base text-[#9CA3AF] mt-3 leading-relaxed">
            Você não precisa escolher entre um site amador feito no improviso ou pagar uma fortuna abusiva para agências tradicionais.
          </p>
        </div>

        {/* 3 Columns Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          
          {/* Option 1: Templates do Wix / WordPress */}
          <div className="flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-obsidian-surface-1 border border-hairline/60">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-[#9CA3AF] mb-2">
                <AlertTriangle className="w-4 h-4 text-[#F59E0B]" />
                <span>Opção DIY / Construtores</span>
              </div>
              <h3 className="font-display font-bold text-xl text-white mb-2">
                Templates Wix ou WordPress
              </h3>
              <p className="font-body text-xs sm:text-sm text-[#9CA3AF] mb-6">
                Parece barato no início, mas consome seu tempo e não passa credibilidade.
              </p>

              <ul className="flex flex-col gap-3 font-body text-xs sm:text-sm text-[#9CA3AF]">
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-[#EF4444] shrink-0 mt-0.5" />
                  <span>Sites lentos e pesados no 4G/5G de celular.</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-[#EF4444] shrink-0 mt-0.5" />
                  <span>Visual engessado que concorrentes também usam.</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-[#EF4444] shrink-0 mt-0.5" />
                  <span>Você perde semanas tentando arrumar e desiste.</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-[#EF4444] shrink-0 mt-0.5" />
                  <span>Mensalidades em dólar que sobem todo ano.</span>
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-hairline/60 text-xs font-mono text-[#6B7280]">
              Resultado: site genérico e dor de cabeça.
            </div>
          </div>

          {/* Option 2: Agências Tradicionais */}
          <div className="flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-obsidian-surface-1 border border-hairline/60">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-[#9CA3AF] mb-2">
                <XCircle className="w-4 h-4 text-[#EF4444]" />
                <span>Agências Tradicionais</span>
              </div>
              <h3 className="font-display font-bold text-xl text-white mb-2">
                Agências de Publicidade
              </h3>
              <p className="font-body text-xs sm:text-sm text-[#9CA3AF] mb-6">
                Cobram caro demais para pequenas e médias empresas e demoram meses.
              </p>

              <ul className="flex flex-col gap-3 font-body text-xs sm:text-sm text-[#9CA3AF]">
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-[#EF4444] shrink-0 mt-0.5" />
                  <span>Orçamentos exorbitantes e taxas extras de agência tradicional.</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-[#EF4444] shrink-0 mt-0.5" />
                  <span>Meses de espera e burocracia interminável.</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-[#EF4444] shrink-0 mt-0.5" />
                  <span>Taxas mensais obrigatórias de manutenção.</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-[#EF4444] shrink-0 mt-0.5" />
                  <span>Atendimento lento por intermediários.</span>
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-hairline/60 text-xs font-mono text-[#6B7280]">
              Resultado: custo alto demais e entrega demorada.
            </div>
          </div>

          {/* Option 3: Maneki Neeko (Destaque) */}
          <div className="flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-obsidian-surface-2 border-2 border-amber shadow-glow-amber scale-[1.02] relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3.5 py-0.5 rounded-full bg-amber text-white font-mono text-xs font-bold uppercase tracking-wider">
              A Escolha Inteligente
            </div>

            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-teal mb-2">
                <CheckCircle2 className="w-4 h-4 text-teal" />
                <span>Maneki Neeko</span>
              </div>
              <h3 className="font-display font-bold text-xl text-white mb-2">
                Sites Sob Medida Sem Burocracia
              </h3>
              <p className="font-body text-xs sm:text-sm text-[#D1D5DB] mb-6">
                Design de alto nível, velocidade máxima e excelente custo-benefício.
              </p>

              <ul className="flex flex-col gap-3 font-body text-xs sm:text-sm text-white">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber shrink-0 mt-0.5" />
                  <span><strong>Orçamento sob medida:</strong> proposta transparente sem custos ocultos.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber shrink-0 mt-0.5" />
                  <span><strong>Entrega rápida:</strong> no ar em 5 a 10 dias úteis.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber shrink-0 mt-0.5" />
                  <span><strong>Ultrarrápido:</strong> abre em 0.4s no celular e converte mais.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber shrink-0 mt-0.5" />
                  <span><strong>100% Seu:</strong> sem taxas mensais presas à nossa equipe.</span>
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-hairline/80">
              <a
                href="#pacotes"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-amber text-white font-display text-sm font-semibold hover:brightness-110 transition-all shadow-sm"
              >
                <span>Conhecer Nossos Pacotes</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ComparisonBar;
