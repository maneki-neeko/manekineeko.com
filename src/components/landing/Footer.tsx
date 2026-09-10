import React from 'react';
import { LogoMonogram } from './LogoMonogram';
import { Mail, MapPin, MessageCircle, ArrowUp, Sparkles } from 'lucide-react';
import { siteConfig, getWhatsappUrl } from '@/config/site';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-obsidian-bg border-t border-hairline pt-16 pb-12 relative text-[#9CA3AF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-14">

          {/* Institutional / Brand Column */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <a href="#inicio" className="flex items-center gap-3 w-fit group">
              <LogoMonogram size="md" />
              <div className="flex flex-col">
                <span className="font-display font-bold text-lg text-white group-hover:text-amber transition-colors">
                  {siteConfig.name}
                </span>
                <span className="font-mono text-xs text-amber font-medium -mt-1">
                  {siteConfig.tagline}
                </span>
              </div>
            </a>

            <p className="font-body text-xs sm:text-sm text-[#9CA3AF] max-w-sm leading-relaxed mt-1">
              Desenvolvemos landing pages de alta conversão, sites institucionais modernos e sistemas enxutos sob medida, com entrega rápida e sem mensalidades presas.
            </p>

            <div className="flex items-center gap-2 pt-2 text-xs font-mono text-[#D1D5DB]">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-teal" />
              </span>
              <span>Disponível para novos projetos neste mês</span>
            </div>
          </div>

          {/* Services Links */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider">
              O Que Criamos
            </h4>
            <ul className="flex flex-col gap-2 font-body text-xs sm:text-sm">
              <li>
                <a href="#servicos" className="hover:text-amber transition-colors">
                  Landing Pages Express
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-amber transition-colors">
                  Sites Institucionais
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-amber transition-colors">
                  Catálogos Digitais
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-amber transition-colors">
                  Sistemas Sob Medida
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-amber transition-colors">
                  Reformulação de Sites
                </a>
              </li>
            </ul>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider">
              Navegação
            </h4>
            <ul className="flex flex-col gap-2 font-body text-xs sm:text-sm">
              <li>
                <a href="#inicio" className="hover:text-amber transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#vantagens" className="hover:text-amber transition-colors">
                  Por Que Nós
                </a>
              </li>
              <li>
                <a href="#pacotes" className="hover:text-amber transition-colors">
                  Pacotes
                </a>
              </li>
              <li>
                <a href="#como-funciona" className="hover:text-amber transition-colors">
                  Como Funciona
                </a>
              </li>
              <li>
                <a href="#cases" className="hover:text-amber transition-colors">
                  Cases de Clientes
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-amber transition-colors">
                  Dúvidas Frequentes
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & WhatsApp */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider">
              Contato Rápido
            </h4>
            <ul className="flex flex-col gap-2.5 font-body text-xs sm:text-sm">
              <li className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-teal shrink-0" />
                <a
                  href={getWhatsappUrl()}
                  target="_blank"
                  rel="noreferrer"
                  className="font-mono text-xs text-white hover:text-teal transition-colors"
                >
                  WhatsApp: {siteConfig.contact.whatsappDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber shrink-0" />
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

            <div className="pt-2">
              <a
                href="#orcamento"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-obsidian-surface-2 border border-hairline text-xs font-mono text-amber hover:border-hairline-amber/50 hover:bg-obsidian-surface-3 transition-all w-fit"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber" />
                <span>Simular orçamento sem compromisso</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-hairline flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#6B7280]">
          <p>© 2025-2026 Maneki Neeko. Todos os direitos reservados.</p>

          <div className="flex items-center gap-6">
            <span className="hover:text-[#9CA3AF] transition-colors cursor-pointer">Termos de Serviço</span>
            <span className="hover:text-[#9CA3AF] transition-colors cursor-pointer">Privacidade</span>
            <span className="hover:text-[#9CA3AF] transition-colors cursor-pointer">Segurança</span>

            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Voltar ao topo"
              className="p-2 rounded-lg bg-obsidian-surface-1 border border-hairline hover:bg-obsidian-surface-2 hover:text-white transition-all ml-2"
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
