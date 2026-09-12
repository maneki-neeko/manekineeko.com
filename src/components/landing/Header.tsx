import React, { useState } from 'react';
import { Menu, ArrowRight, MessageCircle } from 'lucide-react';
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
    { label: 'Vantagens', href: '#vantagens' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Cases', href: '#cases' },
    { label: 'Como Funciona', href: '#como-funciona' },
    { label: 'Dúvidas', href: '#faq' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#090A0D]/85 backdrop-blur-md border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand */}
        <a 
          href="#inicio" 
          className="flex items-center gap-2 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber rounded-lg py-1 transition-all"
        >
          <div className="flex flex-col">
            <span className="font-display font-bold text-xl sm:text-2xl text-white tracking-tight group-hover:text-amber transition-colors">
              Maneki Neeko<span className="text-amber">.</span>
            </span>
            <span className="text-[11px] font-mono text-[#9CA3AF] -mt-1 hidden sm:block">
              sites sob medida
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav 
          aria-label="Navegação Principal"
          className="hidden lg:flex items-center gap-6 xl:gap-8"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-sm text-[#9CA3AF] hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right CTA Button & Mobile Trigger */}
        <div className="flex items-center gap-3">
          <a
            href={getWhatsappUrl('Olá! Gostaria de falar sobre um projeto de site com a Maneki Neeko.')}
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-amber text-white font-display text-xs sm:text-sm font-semibold shadow-glow-amber hover:brightness-110 active:scale-[0.98] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber"
          >
            <MessageCircle className="w-4 h-4 fill-white text-white" />
            <span>Falar no WhatsApp</span>
          </a>

          {/* Mobile Menu Drawer */}
          <div className="lg:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <button
                  type="button"
                  aria-label="Abrir menu de navegação"
                  className="p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-[#9CA3AF] hover:text-white hover:bg-white/[0.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber transition-all"
                >
                  <Menu className="w-5 h-5" />
                </button>
              </SheetTrigger>

              <SheetContent
                side="right"
                className="bg-[#090A0D] border-l border-white/[0.08] text-white w-[85vw] sm:w-80 p-6 flex flex-col justify-between"
              >
                <div className="flex flex-col gap-6 mt-4">
                  {/* Drawer Brand */}
                  <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
                    <div className="font-display font-bold text-xl text-white">
                      Maneki Neeko<span className="text-amber">.</span>
                    </div>
                    <span className="text-[11px] font-mono text-amber bg-amber/10 px-2 py-0.5 rounded">
                      sites sob medida
                    </span>
                  </div>

                  {/* Nav List */}
                  <nav className="flex flex-col gap-1">
                    {navLinks.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-body text-[#9CA3AF] hover:text-white hover:bg-white/[0.05] transition-all"
                      >
                        <span>{link.label}</span>
                        <ArrowRight className="w-4 h-4 text-amber/60" />
                      </a>
                    ))}
                  </nav>
                </div>

                {/* Drawer Footer CTA */}
                <div className="pt-6 border-t border-white/[0.08] flex flex-col gap-3">
                  <a
                    href={getWhatsappUrl('Olá! Gostaria de um orçamento rápido pelo WhatsApp.')}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-amber text-white font-display text-sm font-semibold shadow-glow-amber hover:brightness-110 active:scale-[0.98] transition-all"
                  >
                    <MessageCircle className="w-4 h-4 fill-white text-white" />
                    <span>Falar no WhatsApp</span>
                  </a>

                  <a
                    href="#orcamento"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-white/[0.05] text-[#D1D5DB] border border-white/[0.08] font-display text-sm font-medium hover:text-white hover:bg-white/[0.1] transition-all"
                  >
                    <span>Simular pelo Site</span>
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
