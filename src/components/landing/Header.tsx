import React, { useState } from 'react';
import { Menu, Sparkles, X, ArrowRight, MessageCircle } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import { getWhatsappUrl } from '@/config/site';

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'O Que Criamos', href: '#servicos' },
    { label: 'Por Que Nós', href: '#vantagens' },
    { label: 'Pacotes', href: '#pacotes' },
    { label: 'Como Funciona', href: '#como-funciona' },
    { label: 'Cases', href: '#cases' },
    { label: 'Dúvidas', href: '#faq' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-obsidian-bg/90 backdrop-blur-md border-b border-hairline">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand */}
        <a 
          href="#inicio" 
          className="flex items-center group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber rounded-lg py-1 px-1.5 transition-all"
        >
          <span className="font-display font-bold text-xl text-[#F3F4F6] tracking-tight group-hover:text-amber transition-colors">
            Maneki Neeko
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav 
          aria-label="Navegação Principal"
          className="hidden lg:flex items-center gap-1 bg-obsidian-surface-1/90 px-3 py-1.5 rounded-full border border-hairline shadow-inner"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-xs xl:text-sm text-[#9CA3AF] hover:text-[#F3F4F6] px-3 py-1.5 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber hover:bg-obsidian-surface-2"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right CTA Button & Mobile Trigger */}
        <div className="flex items-center gap-3">
          <a
            href="#orcamento"
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber to-amber-hover text-white font-display text-sm font-semibold shadow-glow-amber hover:brightness-110 hover:shadow-glow-amber-lg active:scale-[0.98] transition-all duration-200 border border-amber/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber"
          >
            <Sparkles className="w-4 h-4 text-white" />
            <span>Pedir Orçamento</span>
          </a>

          {/* Mobile Menu Drawer */}
          <div className="lg:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <button
                  type="button"
                  aria-label="Abrir menu de navegação"
                  className="p-2.5 rounded-xl bg-obsidian-surface-1 border border-hairline text-[#9CA3AF] hover:text-[#F3F4F6] hover:bg-obsidian-surface-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber transition-all"
                >
                  <Menu className="w-5 h-5" />
                </button>
              </SheetTrigger>

              <SheetContent
                side="right"
                className="bg-obsidian-bg border-l border-hairline text-[#F3F4F6] w-[85vw] sm:w-80 p-6 flex flex-col justify-between"
              >
                <div className="flex flex-col gap-6 mt-4">
                  {/* Drawer Brand */}
                  <div className="flex items-center pb-4 border-b border-hairline">
                    <div className="font-display font-bold text-lg text-white">
                      Maneki Neeko
                    </div>
                  </div>

                  {/* Nav List */}
                  <nav className="flex flex-col gap-1.5">
                    {navLinks.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-body text-[#9CA3AF] hover:text-white hover:bg-obsidian-surface-1 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber"
                      >
                        <span>{link.label}</span>
                        <ArrowRight className="w-4 h-4 text-amber/60" />
                      </a>
                    ))}
                  </nav>
                </div>

                {/* Drawer Footer CTA */}
                <div className="pt-6 border-t border-hairline flex flex-col gap-3">
                  <a
                    href={getWhatsappUrl()}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-teal/20 text-teal border border-teal/40 font-display text-sm font-semibold hover:bg-teal/30 transition-all"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Falar no WhatsApp</span>
                  </a>

                  <a
                    href="#orcamento"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-amber text-white font-display text-sm font-semibold shadow-glow-amber hover:brightness-110 active:scale-[0.98] transition-all"
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>Simular Orçamento</span>
                  </a>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
