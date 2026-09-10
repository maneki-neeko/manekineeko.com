import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { getWhatsappUrl } from '@/config/site';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Tooltip speech bubble */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-xl bg-obsidian-surface-1 border border-hairline text-xs font-body text-white shadow-2xl animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-teal shrink-0 animate-ping" />
          <span>Fale direto no WhatsApp</span>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setShowTooltip(false);
            }}
            aria-label="Fechar balão"
            className="text-[#9CA3AF] hover:text-white ml-1"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Floating Button */}
      <a
        href={getWhatsappUrl()}
        target="_blank"
        rel="noreferrer"
        aria-label="Conversar pelo WhatsApp da Maneki Neeko"
        className="relative group w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-[0_4px_20px_rgba(37,211,102,0.45)] hover:shadow-[0_6px_26px_rgba(37,211,102,0.65)] hover:scale-105 active:scale-95 transition-all duration-200"
      >
        {/* Pulsing ring */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-30 group-hover:opacity-50 animate-ping pointer-events-none" />
        
        <MessageCircle className="w-7 h-7 fill-white text-white relative z-10" />
      </a>
    </div>
  );
};

export default FloatingWhatsApp;
