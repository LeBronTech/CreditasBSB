import React, { useState, useEffect } from 'react';
import { MessageCircle, ArrowUpRight, Sparkles, X } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../data';

export const StickyWhatsAppBar: React.FC = () => {
  const [showPrompt, setShowPrompt] = useState<boolean>(true);

  const directWhatsAppUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá! Gostaria de consultar a melhor taxa de crédito consignado para o meu caso.')}`;

  return (
    <>
      {/* Floating Action Button (Always in Bottom Right) */}
      <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-2">
        
        {/* Floating Bubble Prompt */}
        {showPrompt && (
          <div className="bg-white text-gray-900 border border-gray-200/90 rounded-2xl p-3 shadow-xl max-w-[240px] text-xs relative animate-in fade-in slide-in-from-bottom-2 duration-300">
            <button
              onClick={() => setShowPrompt(false)}
              className="absolute -top-1.5 -right-1.5 bg-gray-100 hover:bg-gray-200 text-gray-500 rounded-full p-0.5"
            >
              <X className="w-3 h-3" />
            </button>
            <div className="flex items-center gap-1.5 font-bold text-gray-900 mb-0.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Consultor Credita BSB
            </div>
            <p className="text-gray-600 text-[11px] leading-snug">
              Precisa de ajuda com a sua margem? Fale conosco direto no WhatsApp!
            </p>
          </div>
        )}

        {/* WhatsApp Round Button with Pulse Animation */}
        <a
          href={directWhatsAppUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="relative group flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95"
          id="floating-whatsapp-btn"
          title="Falar no WhatsApp com a Credita BSB"
        >
          {/* Subtle green pulse ring */}
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-30"></span>

          <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 fill-white relative z-10" />

          {/* Desktop Hover Label */}
          <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-xs font-bold py-1.5 px-3 rounded-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg">
            Simular no WhatsApp
          </span>
        </a>

      </div>
    </>
  );
};
