import React, { useState } from 'react';
import { Menu, MessageCircle, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getWhatsappUrl } from '@/config/site';

const links = [
  ['Soluções', '#solucoes'],
  ['Serviços', '#servicos'],
  ['Processo', '#processo'],
  ['Diferenciais', '#diferenciais'],
  ['Dúvidas', '#faq'],
];

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.08] bg-[#08090C]/85 backdrop-blur-xl transition-colors">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#inicio" className="flex flex-col leading-none group" aria-label="Maneki Neeko — início">
          <span className="font-brand text-xl font-extrabold text-white group-hover:text-primary transition-colors">
            Maneki <span className="text-primary">Neeko.</span>
          </span>
          <span className="mt-1 font-mono text-[10px] text-[#9CA3AF] tracking-wider uppercase">
            software sob medida
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Navegação principal">
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="text-sm font-medium text-[#9CA3AF] transition-colors hover:text-white focus-visible:outline-none focus-visible:text-primary"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button
            asChild
            className="hidden rounded-xl sm:inline-flex bg-primary hover:bg-primary/90 text-white font-semibold shadow-lg shadow-primary/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <a href={getWhatsappUrl()} target="_blank" rel="noreferrer">
              <MessageCircle className="w-4 h-4 fill-white" />
              Fale conosco
            </a>
          </Button>
          <Button
            type="button"
            size="icon"
            variant="outline"
            className="lg:hidden border-white/[0.1] bg-white/[0.04] text-white hover:bg-white/[0.08] hover:text-white"
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          >
            {open ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-white/[0.08] bg-[#0F1117] px-5 py-5 lg:hidden animate-fade-in" aria-label="Navegação móvel">
          <div className="mx-auto flex max-w-6xl flex-col gap-1.5">
            {links.map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3.5 py-3 font-medium text-[#D1D5DB] hover:text-white hover:bg-white/[0.06] transition-colors"
              >
                {label}
              </a>
            ))}
            <a
              href="#contato"
              onClick={() => setOpen(false)}
              className="rounded-lg px-3.5 py-3 font-semibold text-primary hover:bg-primary/10 transition-colors"
            >
              Iniciar projeto →
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;