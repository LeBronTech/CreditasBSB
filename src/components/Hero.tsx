import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { WHATSAPP_NUMBER, COMPANY_YEARS, LOAN_CATEGORIES } from '../data';
import { LoanCategory } from '../types';
import { WhatsAppIcon } from './WhatsAppIcon';
import {
  ArrowRight,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  ChevronDown,
  Landmark,
  Building2,
  CreditCard,
  ArrowLeftRight,
  Briefcase
} from 'lucide-react';
import { motion } from 'motion/react';

interface HeroProps {
  selectedCategory: LoanCategory;
  onSelectCategory: (cat: LoanCategory) => void;
  onScrollToSimulator: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  selectedCategory,
  onSelectCategory,
  onScrollToSimulator,
}) => {
  const directWhatsApp = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    '♦️ Olá Credita BSB! Gostaria de consultar uma proposta de crédito com as melhores taxas.'
  )}`;

  // Typewriter effect for Slogan: "Seu agente financeiro" and "Seu agente de crédito"
  const phrases = [
    'seu agente financeiro.',
    'seu agente de crédito.',
    'as menores taxas de Brasília.',
    'dinheiro rápido na sua conta.',
  ];
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    const currentPhrase = phrases[textIndex];
    let timer: NodeJS.Timeout;

    if (!isDeleting && charIndex <= currentPhrase.length) {
      // Typing
      setDisplayText(currentPhrase.substring(0, charIndex));
      timer = setTimeout(() => {
        setCharIndex((prev) => prev + 1);
      }, 75);
    } else if (!isDeleting && charIndex > currentPhrase.length) {
      // Pause at full text
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, 2200);
    } else if (isDeleting && charIndex > 0) {
      // Deleting
      setDisplayText(currentPhrase.substring(0, charIndex - 1));
      timer = setTimeout(() => {
        setCharIndex((prev) => prev - 1);
      }, 35);
    } else if (isDeleting && charIndex === 0) {
      // Switch phrase
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % phrases.length);
    }

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, textIndex]);

  const quickServices: {
    id: LoanCategory | 'portabilidade_fgts' | 'clt';
    label: string;
    rate: string;
    tag: string;
    icon: React.ComponentType<{ className?: string }>;
    isWhatsAppOnly?: boolean;
  }[] = [
    { id: 'inss', label: 'Consignado INSS', rate: 'A partir de 1,39% a.m.', tag: 'Menor Taxa', icon: Landmark },
    { id: 'siape', label: 'Servidores Público', rate: 'A partir de 1,50% a.m.', tag: 'Até 120x', icon: Building2 },
    { id: 'cartao', label: 'Cartões Consignado', rate: 'A partir de 2,5% a.m.', tag: 'Consulte', icon: CreditCard },
    { id: 'portabilidade_fgts', label: 'Portabilidade de Empréstimo', rate: 'Taxas acessíveis', tag: 'Consulte', icon: ArrowLeftRight, isWhatsAppOnly: true },
    { id: 'clt', label: 'CLT e Saque FGTS', rate: 'Taxas acessíveis', tag: 'Consulte', icon: Briefcase, isWhatsAppOnly: true },
  ];

  const handleServiceClick = (svc: typeof quickServices[0]) => {
    if (svc.isWhatsAppOnly) {
      const msg = `♦️ Olá Credita BSB! Gostaria de consultar propostas e condições especiais para ${svc.label}.`;
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank');
    } else {
      onSelectCategory(svc.id as LoanCategory);
      onScrollToSimulator();
    }
  };

  return (
    <section className="relative min-h-[85vh] flex flex-col justify-center items-center py-10 sm:py-16 px-4 overflow-hidden bg-white border-b border-slate-200">
      
      {/* Dynamic Soft Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[600px] h-[340px] sm:h-[600px] bg-[#D91E2A]/5 rounded-full blur-[120px]" />
      </div>

      {/* Main Solid Minimalist Central Card */}
      <div className="relative z-10 w-full max-w-4xl mx-auto">
        
        <div className="relative rounded-3xl p-6 sm:p-10 md:p-12 overflow-hidden bg-slate-50 border border-slate-200 shadow-md text-center text-slate-900">
          
          {/* Subtle slow motion watermark logos in corners */}
          <div
            aria-hidden="true"
            className="absolute -top-12 -left-12 sm:-top-16 sm:-left-16 w-36 h-36 sm:w-52 sm:h-52 pointer-events-none opacity-15 sm:opacity-25 filter blur-[0.5px] select-none"
          >
            <div className="w-full h-full animate-[spin_40s_linear_infinite]">
              <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
                <path d="M 0 29.3 L 29.3 0 L 47 0 L 47 28.5 L 28.5 47 L 0 47 Z" fill="#9CA3AF" />
                <path d="M 0 53 L 28.5 53 L 47 71.5 L 47 100 L 29.3 100 L 0 70.7 Z" fill="#4B5563" />
                <path d="M 53 0 L 70.7 0 L 100 29.3 L 100 47 L 86.5 47 L 86.5 35 L 65 13.5 L 53 13.5 Z" fill="#D91E2A" />
                <path d="M 53 22 L 61 22 L 78 39 L 78 47 L 66 47 L 66 44 L 53 31 Z" fill="#FF4D5A" />
                <path d="M 100 53 L 100 70.7 L 70.7 100 L 53 100 L 53 86.5 L 65 86.5 L 86.5 65 L 86.5 53 Z" fill="#D91E2A" />
                <path d="M 78 53 L 78 61 L 61 78 L 53 78 L 53 66 L 66 66 L 66 53 Z" fill="#B91C1C" />
              </svg>
            </div>
          </div>

          <div
            aria-hidden="true"
            className="absolute -bottom-12 -right-12 sm:-bottom-16 sm:-right-16 w-36 h-36 sm:w-52 sm:h-52 pointer-events-none opacity-15 sm:opacity-25 filter blur-[0.5px] select-none"
          >
            <div className="w-full h-full animate-[spin_45s_linear_infinite_reverse]">
              <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
                <path d="M 0 29.3 L 29.3 0 L 47 0 L 47 28.5 L 28.5 47 L 0 47 Z" fill="#9CA3AF" />
                <path d="M 0 53 L 28.5 53 L 47 71.5 L 47 100 L 29.3 100 L 0 70.7 Z" fill="#4B5563" />
                <path d="M 53 0 L 70.7 0 L 100 29.3 L 100 47 L 86.5 47 L 86.5 35 L 65 13.5 L 53 13.5 Z" fill="#D91E2A" />
                <path d="M 53 22 L 61 22 L 78 39 L 78 47 L 66 47 L 66 44 L 53 31 Z" fill="#FF4D5A" />
                <path d="M 100 53 L 100 70.7 L 70.7 100 L 53 100 L 53 86.5 L 65 86.5 L 86.5 65 L 86.5 53 Z" fill="#D91E2A" />
                <path d="M 78 53 L 78 61 L 61 78 L 53 78 L 53 66 L 66 66 L 66 53 Z" fill="#B91C1C" />
              </svg>
            </div>
          </div>

          {/* Top Micro Badge with Approval Seal */}
          <div className="relative z-10 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-50 border border-red-200 text-[11px] font-bold text-[#D91E2A] uppercase tracking-wider mb-6 shadow-2xs">
            <ShieldCheck className="w-4 h-4 text-[#D91E2A]" />
            <span>+ de 17 anos de experiência no mercado</span>
          </div>

          {/* Centered Large Emblem & Brand Typography in Light Variant */}
          <div className="relative z-10 flex flex-col items-center justify-center mb-6">
            <Logo variant="light" layout="vertical" size="xl" />
          </div>

          {/* Typewriter Slogan Effect */}
          <div className="relative z-10 min-h-[36px] sm:min-h-[44px] flex items-center justify-center mb-5">
            <div className="text-xl sm:text-2xl md:text-3xl font-extrabold font-['Outfit'] tracking-tight text-slate-900">
              <span>A sua escolha inteligente para </span>
              <span className="text-[#D91E2A] font-black underline decoration-[#D91E2A]/40 underline-offset-4">
                {displayText}
              </span>
              <span className="inline-block w-0.5 h-6 sm:h-7 bg-[#D91E2A] ml-1 animate-pulse align-middle" />
            </div>
          </div>

          {/* Compact Objective Description */}
          <p className="relative z-10 text-xs sm:text-sm text-slate-600 max-w-lg mx-auto mb-7 font-medium leading-relaxed">
            Consignado Servidores públicos e INSS com a menor taxa do mercado, cartões consignado e benefício com aprovação rápida sem burocracia.
          </p>

          {/* Compact Direct Actions */}
          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-3 mb-8 max-w-md mx-auto">
            <button
              onClick={onScrollToSimulator}
              className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#D91E2A] hover:bg-[#B91C1C] text-white font-extrabold text-xs sm:text-sm rounded-2xl shadow-md transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              id="hero-cta-simulate"
            >
              <span>Simular Agora</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={directWhatsApp}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#25D366] hover:bg-[#20bd5a] text-white font-extrabold text-xs sm:text-sm rounded-2xl shadow-md transition-all hover:scale-[1.02] active:scale-[0.98]"
              id="hero-cta-whatsapp"
            >
              <WhatsAppIcon className="w-4 h-4 text-white" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* 5 Minimalist Service Solutions (Square Format Layout) */}
          <div className="relative z-10 pt-6 border-t border-slate-200">
            <div className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-slate-500 mb-3.5 flex items-center justify-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#D91E2A]" /> Nossas Soluções:
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 sm:gap-3 text-left">
              {quickServices.map((svc) => {
                const Icon = svc.icon;
                const isSelected = selectedCategory === svc.id;

                return (
                  <button
                    key={svc.id}
                    onClick={() => handleServiceClick(svc)}
                    className={`aspect-square p-2.5 sm:p-3.5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between items-start text-left relative group ${
                      isSelected
                        ? 'bg-red-50/90 border-[#D91E2A] ring-2 ring-[#D91E2A]/30 text-slate-900 shadow-sm'
                        : 'bg-white hover:bg-slate-100/80 border-slate-200 text-slate-900 hover:border-slate-300 shadow-2xs'
                    }`}
                    id={`hero-svc-${svc.id}`}
                  >
                    {/* Top Row: Icon + Badge */}
                    <div className="w-full flex items-center justify-between gap-1">
                      <div className={`p-1.5 rounded-lg ${isSelected ? 'bg-[#D91E2A] text-white' : 'bg-slate-100 text-slate-700 group-hover:bg-red-50 group-hover:text-[#D91E2A]'} transition-colors`}>
                        <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      </div>
                      <span className="text-[7.5px] sm:text-[8px] font-black uppercase text-[#D91E2A] bg-red-50 px-1.5 py-0.5 rounded-md truncate max-w-[65px]">
                        {svc.tag}
                      </span>
                    </div>

                    {/* Middle: Title */}
                    <div className="my-auto py-1 w-full">
                      <h4 className="text-[11px] sm:text-xs font-extrabold text-slate-900 leading-snug font-['Outfit'] line-clamp-2">
                        {svc.label}
                      </h4>
                    </div>

                    {/* Bottom: Rate */}
                    <div className="w-full pt-1 sm:pt-1.5 border-t border-slate-100/90">
                      <span className="text-[8px] sm:text-[9px] font-bold text-slate-600 group-hover:text-[#D91E2A] transition-colors block truncate">
                        {svc.rate}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

        </div>

        {/* Floating Scroll Indicator */}
        <div className="mt-5 flex items-center justify-center">
          <button
            onClick={onScrollToSimulator}
            className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-900 transition-colors cursor-pointer font-medium"
          >
            <span>Role para simular</span>
            <ChevronDown className="w-3.5 h-3.5 animate-bounce text-[#D91E2A]" />
          </button>
        </div>

      </div>

    </section>
  );
};
