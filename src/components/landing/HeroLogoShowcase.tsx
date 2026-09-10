import React from 'react';
import { Sparkles, Zap, ShieldCheck } from 'lucide-react';

export const HeroLogoShowcase: React.FC = () => {
  return (
    <div className="relative flex flex-col items-center justify-center py-4 lg:py-6 select-none">
      {/* Dynamic Ambient Background Glows */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="w-72 sm:w-96 lg:w-[420px] h-72 sm:h-96 lg:h-[420px] bg-amber/20 blur-[110px] rounded-full" />
        <div className="w-56 sm:w-72 h-56 sm:h-72 bg-teal/15 blur-[90px] rounded-full translate-x-14 translate-y-14" />
      </div>

      {/* Floating Badge: Top Right */}
      <div className="absolute top-0 right-2 sm:right-6 z-20 hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-xl bg-obsidian-surface-1/90 border border-hairline/80 backdrop-blur-md shadow-2xl text-xs font-mono text-[#F3F4F6] animate-bounce [animation-duration:4s]">
        <Sparkles className="w-4 h-4 text-amber shrink-0" />
        <span>Design 100% Exclusivo</span>
      </div>

      {/* Floating Badge: Bottom Left */}
      <div className="absolute bottom-20 -left-2 sm:left-2 z-20 hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-xl bg-obsidian-surface-1/90 border border-hairline/80 backdrop-blur-md shadow-2xl text-xs font-mono text-[#F3F4F6] animate-bounce [animation-duration:5s] [animation-delay:1s]">
        <Zap className="w-4 h-4 text-teal shrink-0" />
        <span>Abre em 0.4s no Celular</span>
      </div>

      {/* Central Patch Logo */}
      <div className="relative z-10 group">
        <div className="relative transition-transform duration-500 ease-out group-hover:scale-105 group-hover:-rotate-1">
          <img
            src="/MANEKINEEKO.webp"
            alt="Mascote Maneki Neeko"
            className="w-72 sm:w-96 lg:w-[420px] xl:w-[460px] h-auto object-contain drop-shadow-[0_25px_40px_rgba(0,0,0,0.9)] drop-shadow-[0_0_50px_rgba(242,100,25,0.25)] select-none"
            draggable={false}
          />
        </div>
      </div>

      {/* Trust Caption Pill Below Logo */}
      <div className="relative z-10 mt-3 flex items-center gap-2 px-4 py-1.5 rounded-full bg-obsidian-surface-2/90 border border-hairline text-xs font-mono text-[#D1D5DB] shadow-lg backdrop-blur-sm">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-teal" />
        </span>
        <span>Sites &amp; Sistemas Feitos Sob Medida</span>
      </div>
    </div>
  );
};

export default HeroLogoShowcase;
