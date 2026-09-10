import React, { useState, useEffect } from 'react';
import { WHATSAPP_NUMBER } from '../data';
import { WhatsAppIcon } from './WhatsAppIcon';

const SIMULATION_FEED = [
  'Taxa a partir de 1,39% a.m.',
  'Carlos M. • simulou R$ 15.000',
  'Taxa a partir de 1,39% a.m.',
  'Maria S. • simulou R$ 22.000',
  'Taxa a partir de 1,39% a.m.',
  'João P. • simulou R$ 8.500',
  'Taxa a partir de 1,39% a.m.',
  'Ana L. • simulou R$ 5.000',
];

export const StickyWhatsAppBar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [feedIndex, setFeedIndex] = useState(0);

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

  useEffect(() => {
    const interval = setInterval(() => {
      setFeedIndex((prev) => (prev + 1) % SIMULATION_FEED.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  if (!isVisible) return null;

  const directWhatsAppUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    '♦️ Olá Credita BSB! Gostaria de consultar uma proposta de crédito consignado.'
  )}`;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200/90 py-2 px-3 sm:px-4 shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
      <div className="flex items-center gap-2 sm:gap-3 max-w-4xl mx-auto justify-between">
        
        {/* Dynamic Activity Feed / Rates */}
        <div className="flex items-center gap-2 min-w-0 flex-1">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse flex-shrink-0" />
          <div className="overflow-hidden relative h-5 flex items-center min-w-0">
            <p
              key={feedIndex}
              className="text-[11px] sm:text-xs font-bold text-slate-800 truncate transition-all duration-500 animate-fade-in"
            >
              {SIMULATION_FEED[feedIndex]}
            </p>
          </div>
        </div>

        {/* Compact WhatsApp Button */}
        <a
          href={directWhatsAppUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-shrink-0 px-2.5 sm:px-3.5 py-1.5 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-lg sm:rounded-xl text-[11px] sm:text-xs font-black flex items-center gap-1.5 shadow-md transition-transform hover:scale-105 active:scale-95 whitespace-nowrap"
          id="bar-whatsapp-cta"
        >
          <WhatsAppIcon className="w-3.5 h-3.5 text-white" />
          <span>Falar no WhatsApp</span>
        </a>
      </div>
    </div>
  );
};

