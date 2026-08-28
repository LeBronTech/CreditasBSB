import React, { useState, useEffect } from 'react';
import { WHATSAPP_NUMBER } from '../data';
import { MessageCircle, X } from 'lucide-react';

export const StickyWhatsAppBar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (isDismissed || !isVisible) return null;

  const directWhatsAppUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    'Olá Credita BSB! Gostaria de consultar uma proposta de crédito consignado.'
  )}`;

  return (
    <>
      {/* Floating Action Button (FAB) Bottom Right with pulse */}
      <div className="fixed bottom-5 right-5 z-50 flex items-center gap-2">
        <a
          href={directWhatsAppUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-3 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full shadow-2xl shadow-green-900/50 hover:scale-105 active:scale-95 transition-all group backdrop-blur-md border border-white/20"
          id="fab-whatsapp"
        >
          <div className="relative">
            <MessageCircle className="w-5 h-5 fill-white" />
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-white rounded-full animate-ping" />
          </div>
          <span className="text-xs font-black tracking-wide hidden sm:inline font-['Outfit']">
            Simular no WhatsApp
          </span>
        </a>
      </div>

      {/* Slim Mobile Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 sm:hidden bg-[#0D0E12] border-t border-[#222634] p-2.5 flex items-center justify-between gap-3 shadow-2xl">
        <div className="flex items-center gap-2 min-w-0">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
          <p className="text-[11px] font-bold text-gray-200 truncate">
            Taxa 1,39% • Pix no mesmo dia
          </p>
        </div>

        <a
          href={directWhatsAppUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-shrink-0 px-3.5 py-1.5 bg-[#25D366] text-white rounded-xl text-xs font-extrabold flex items-center gap-1.5 shadow-md"
        >
          <MessageCircle className="w-3.5 h-3.5 fill-white" />
          <span>Simular</span>
        </a>
      </div>
    </>
  );
};
