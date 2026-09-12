import React from 'react';
import { Mail, MessageCircle, ArrowUp } from 'lucide-react';
import { getWhatsappUrl, siteConfig } from '@/config/site';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/[0.08] bg-[#060708] text-[#94A7AC]">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-[1.4fr_0.6fr_1fr]">
        <div className="flex flex-col gap-3">
          <a href="#inicio" className="font-brand text-xl font-extrabold text-white">
            Maneki <span className="text-[#D47229]">Neeko.</span>
          </a>
          <p className="max-w-sm text-sm leading-relaxed text-[#94A7AC]">
            Software e sistemas sob medida para transformar processos complexos em experiências simples, claras e eficientes.
          </p>
          <div className="flex items-center gap-2 pt-2 text-xs text-[#D8D2C9]">
            <span className="h-2 w-2 rounded-full bg-[#05B18B]" />
            <span>Disponível para novos projetos</span>
          </div>
        </div>

        <div>
          <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-white">
            Navegação
          </h3>
          <div className="mt-4 flex flex-col gap-2.5 text-sm text-[#94A7AC]">
            <a href="#solucoes" className="hover:text-white transition-colors">Soluções</a>
            <a href="#servicos" className="hover:text-white transition-colors">Serviços &amp; Pacotes</a>
            <a href="#processo" className="hover:text-white transition-colors">Como Trabalhamos</a>
            <a href="#diferenciais" className="hover:text-white transition-colors">Diferenciais</a>
            <a href="#faq" className="hover:text-white transition-colors">Dúvidas Frequentes</a>
          </div>
        </div>

        <div>
          <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-white">
            Atendimento Direto
          </h3>
          <div className="mt-4 flex flex-col gap-3 text-sm text-[#94A7AC]">
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="flex items-center gap-2.5 hover:text-white transition-colors"
            >
              <Mail className="h-4 w-4 text-[#D47229] shrink-0" />
              <span>{siteConfig.contact.email}</span>
            </a>
            <a
              href={getWhatsappUrl()}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2.5 hover:text-white transition-colors"
            >
              <MessageCircle className="h-4 w-4 text-[#05B18B] shrink-0" />
              <span>WhatsApp: {siteConfig.contact.whatsappDisplay || '(11) 99999-9999'}</span>
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/[0.06] px-5 py-5">
        <div className="mx-auto flex max-w-6xl items-center justify-between font-mono text-[11px] text-[#6B7280]">
          <p>© 2026 Maneki Neeko. Todos os direitos reservados.</p>
          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-[#9CA3AF] hover:text-white transition-colors"
            aria-label="Voltar ao topo"
          >
            <span>Topo</span>
            <ArrowUp className="h-3 w-3" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;