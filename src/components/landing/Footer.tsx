import React from 'react';
import { Mail, MapPin, MessageCircle, ArrowUp } from 'lucide-react';
import { siteConfig, getWhatsappUrl } from '@/config/site';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#090A0D] border-t border-white/[0.06] pt-16 pb-12 relative text-[#9CA3AF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-12">

          {/* Institutional / Brand Column */}
          <div className="lg:col-span-5 flex flex-col gap-3.5">
            <a href="#inicio" className="flex items-center gap-2.5 w-fit group">
              <div className="flex flex-col">
                <span className="font-display font-bold text-xl text-white group-hover:text-amber transition-colors">
                  {siteConfig.name}<span className="text-amber">.</span>
                </span>
                <span className="text-[11px] font-mono text-[#9CA3AF] -mt-0.5">
                  {siteConfig.tagline}
                </span>
              </div>
            </a>

            <p className="font-body text-xs sm:text-sm text-[#9CA3AF] max-w-sm leading-relaxed">
              Desenvolvemos landing pages de alta conversão, sites institucionais modernos e sistemas sob medida com foco em conversão e entrega rápida.
            </p>

            <div className="flex items-center gap-2 pt-1 text-xs text-[#D1D5DB]">
              <span className="w-2 h-2 rounded-full bg-teal" />
              <span>Disponível para novos projetos neste mês</span>
            </div>
          </div>

          {/* Services Links */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <h4 className="font-display font-bold text-xs uppercase tracking-wider text-white">
              Serviços
            </h4>
            <ul className="flex flex-col gap-2 font-body text-xs sm:text-sm">
              <li>
                <a href="#servicos" className="hover:text-white transition-colors">
                  Landing Pages Express
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-white transition-colors">
                  Sites Institucionais
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-white transition-colors">
                  Sistemas Sob Medida
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-white transition-colors">
                  Reformulação de Sites
                </a>
              </li>
            </ul>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <h4 className="font-display font-bold text-xs uppercase tracking-wider text-white">
              Navegação
            </h4>
            <ul className="flex flex-col gap-2 font-body text-xs sm:text-sm">
              <li>
                <a href="#inicio" className="hover:text-white transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#vantagens" className="hover:text-white transition-colors">
                  Vantagens
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-white transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#cases" className="hover:text-white transition-colors">
                  Cases de Sucesso
                </a>
              </li>
              <li>
                <a href="#como-funciona" className="hover:text-white transition-colors">
                  Como Funciona
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Dúvidas Frequentes
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & WhatsApp */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <h4 className="font-display font-bold text-xs uppercase tracking-wider text-white">
              Atendimento Direto
            </h4>
            <ul className="flex flex-col gap-2.5 font-body text-xs sm:text-sm">
              <li className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-amber shrink-0" />
                <a
                  href={getWhatsappUrl()}
                  target="_blank"
                  rel="noreferrer"
                  className="font-mono text-xs text-white hover:text-amber transition-colors"
                >
                  WhatsApp: {siteConfig.contact.whatsappDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#9CA3AF] shrink-0" />
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="font-mono text-xs hover:text-white transition-colors"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#9CA3AF] shrink-0" />
                <span className="text-xs">{siteConfig.contact.city}, {siteConfig.contact.state} — Atendimento Brasil</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#6B7280]">
          <p>© 2025-2026 Maneki Neeko. Todos os direitos reservados.</p>

          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Voltar ao topo"
              className="p-2 rounded-lg bg-white/[0.04] border border-white/[0.08] hover:bg-white/[0.08] hover:text-white transition-all ml-2"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
