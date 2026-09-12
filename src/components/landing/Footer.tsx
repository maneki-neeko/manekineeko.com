import React from 'react';
import { Mail, MessageCircle } from 'lucide-react';
import { getWhatsappUrl, siteConfig } from '@/config/site';

const Footer: React.FC = () => (
  <footer className="border-t border-border/70 bg-card/40">
    <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 sm:px-8 md:grid-cols-[1.4fr_0.6fr_1fr]">
      <div>
        <a href="#inicio" className="font-brand text-xl font-extrabold">Maneki <span className="text-primary">Neeko.</span></a>
        <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">Software sob medida para transformar processos complexos em experiências simples, claras e eficientes.</p>
      </div>
      <div>
        <h2 className="font-mono text-xs font-bold uppercase text-foreground">Navegação</h2>
        <div className="mt-4 flex flex-col gap-2 text-sm text-muted-foreground">
          <a href="#solucoes" className="hover:text-primary">Soluções</a><a href="#produto" className="hover:text-primary">Produto</a><a href="#processo" className="hover:text-primary">Processo</a>
        </div>
      </div>
      <div>
        <h2 className="font-mono text-xs font-bold uppercase text-foreground">Contato</h2>
        <div className="mt-4 flex flex-col gap-3 text-sm text-muted-foreground">
          <a href={`mailto:${siteConfig.contact.email}`} className="flex items-center gap-2 hover:text-primary"><Mail className="h-4 w-4" />{siteConfig.contact.email}</a>
          <a href={getWhatsappUrl()} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-primary"><MessageCircle className="h-4 w-4" />WhatsApp</a>
        </div>
      </div>
    </div>
    <div className="border-t border-border/70 px-5 py-5 text-center font-mono text-[11px] text-muted-foreground">© 2026 Maneki Neeko. Todos os direitos reservados.</div>
  </footer>
);

export default Footer;