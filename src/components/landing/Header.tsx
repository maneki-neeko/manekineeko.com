import React, { useState } from 'react';
import { Menu, MessageCircle, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getWhatsappUrl } from '@/config/site';

const links = [
  ['Soluções', '#solucoes'],
  ['Produto', '#produto'],
  ['Processo', '#processo'],
  ['Diferenciais', '#diferenciais'],
];

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/75 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#inicio" className="flex flex-col leading-none" aria-label="Maneki Neeko — início">
          <span className="font-brand text-xl font-extrabold text-foreground">Maneki <span className="text-primary">Neeko.</span></span>
          <span className="mt-1 font-mono text-[9px] text-muted-foreground">software sob medida</span>
        </a>
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Navegação principal">
          {links.map(([label, href]) => <a key={href} href={href} className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">{label}</a>)}
        </nav>
        <div className="flex items-center gap-2">
          <Button asChild className="hidden rounded-xl sm:inline-flex">
            <a href={getWhatsappUrl()} target="_blank" rel="noreferrer"><MessageCircle />Fale conosco</a>
          </Button>
          <Button type="button" size="icon" variant="outline" className="lg:hidden" onClick={() => setOpen(!open)} aria-label={open ? 'Fechar menu' : 'Abrir menu'}>
            {open ? <X /> : <Menu />}
          </Button>
        </div>
      </div>
      {open && (
        <nav className="border-t border-border/60 bg-background px-5 py-5 lg:hidden" aria-label="Navegação móvel">
          <div className="mx-auto flex max-w-6xl flex-col gap-1">
            {links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)} className="rounded-lg px-3 py-3 font-medium hover:bg-muted">{label}</a>)}
            <a href="#contato" onClick={() => setOpen(false)} className="rounded-lg px-3 py-3 font-medium text-primary">Iniciar projeto</a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;