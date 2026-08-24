import React from 'react';
import { ShieldCheck, ArrowRight, CheckCircle2, MessageCircle, Star, Sparkles, CreditCard, RefreshCw, Landmark, Zap } from 'lucide-react';
import { WHATSAPP_NUMBER, COMPANY_YEARS, COMPANY_ADDRESS } from '../data';
import { LoanCategory } from '../types';

interface HeroProps {
  selectedCategory: LoanCategory;
  onSelectCategory: (cat: LoanCategory) => void;
  onScrollToSimulator: () => void;
}

export const Hero: React.FC<HeroProps> = ({ selectedCategory, onSelectCategory, onScrollToSimulator }) => {
  const directWhatsApp = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá Credita BSB! Gostaria de consultar crédito consignado / portabilidade com a melhor taxa.')}`;

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#18181B] via-[#202025] to-[#18181B] text-white pt-8 pb-16 lg:pt-14 lg:pb-22">
      {/* Background Ambient Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#D91E2A]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#D91E2A]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Direct & Objective Value Proposition */}
          <div className="lg:col-span-7 space-y-5">
            
            {/* Top pill badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 px-3.5 py-1.5 rounded-full backdrop-blur-md">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D91E2A] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D91E2A]"></span>
              </span>
              <span className="text-xs font-bold text-gray-200 tracking-wide uppercase">
                {COMPANY_YEARS} • Conic Brasília
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.12] font-['Outfit']">
              Crédito com a menor taxa e <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF4D5A] via-[#D91E2A] to-[#FF6B6B]">dinheiro rápido</span> na sua conta.
            </h1>

            {/* Direct & Objective Subtitle */}
            <p className="text-base sm:text-lg text-gray-300 max-w-2xl font-normal leading-relaxed">
              Especialistas em <strong className="text-white">Consignado INSS & SIAPE</strong>, <strong className="text-white">Cartões Consignado/Benefício</strong> e <strong className="text-white">Portabilidade com Troco</strong>. Sem burocracia e aprovado para negativados.
            </p>

            {/* 4 Objective Quick Benefits */}
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-2.5 pt-1 text-xs sm:text-sm text-gray-200">
              <div className="flex items-center gap-2 bg-white/5 p-2 rounded-xl border border-white/5">
                <CheckCircle2 className="w-4 h-4 text-[#D91E2A] flex-shrink-0" />
                <span>Taxas a partir de <strong>1,39% a.m.</strong></span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 p-2 rounded-xl border border-white/5">
                <CheckCircle2 className="w-4 h-4 text-[#D91E2A] flex-shrink-0" />
                <span><strong>Zero depósito</strong> prévio (100% seguro)</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 p-2 rounded-xl border border-white/5">
                <CheckCircle2 className="w-4 h-4 text-[#D91E2A] flex-shrink-0" />
                <span>Liberação rápida via <strong>PIX</strong></span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 p-2 rounded-xl border border-white/5">
                <CheckCircle2 className="w-4 h-4 text-[#D91E2A] flex-shrink-0" />
                <span>Atendimento no <strong>Conic ou WhatsApp</strong></span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-3">
              <button
                onClick={onScrollToSimulator}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-[#D91E2A] hover:bg-[#B91C1C] text-white font-bold text-sm sm:text-base rounded-xl shadow-lg shadow-red-900/30 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                id="hero-cta-simulate"
              >
                <span>Simular Empréstimo</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={directWhatsApp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm sm:text-base rounded-xl shadow-lg shadow-green-900/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
                id="hero-cta-whatsapp"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>Chamar no WhatsApp</span>
              </a>
            </div>

            {/* Trust Badges */}
            <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-4 text-xs text-gray-400">
              <div className="flex items-center gap-1.5">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-amber-400" />
                  ))}
                </div>
                <span className="font-bold text-white">4.9/5</span>
                <span>no Google</span>
              </div>

              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Correspondente Autorizado Banco Central</span>
              </div>
            </div>

          </div>

          {/* Right Column: 4 Main Core Services (Direct from Bio) */}
          <div className="lg:col-span-5 space-y-3">
            
            <div className="text-xs font-bold uppercase tracking-wider text-gray-400 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#D91E2A]" /> Nossos Principais Serviços:
            </div>

            {/* 4 Cards Grid */}
            <div className="grid grid-cols-2 gap-3">
              
              {/* Consignado INSS & SIAPE */}
              <div
                onClick={() => {
                  onSelectCategory('inss');
                  onScrollToSimulator();
                }}
                className={`p-4 rounded-2xl cursor-pointer transition-all border text-left ${
                  selectedCategory === 'inss'
                    ? 'bg-[#D91E2A]/20 border-[#D91E2A] ring-1 ring-[#D91E2A]'
                    : 'bg-white/5 hover:bg-white/10 border-white/10'
                }`}
                id="hero-card-inss"
              >
                <div className="flex justify-between items-start mb-2">
                  <div className="p-2 rounded-lg bg-[#D91E2A]/20 text-[#FF4D5A]">
                    <Landmark className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-extrabold uppercase px-1.5 py-0.5 rounded-md bg-[#D91E2A] text-white">
                    1,39% a.m.
                  </span>
                </div>
                <h3 className="font-bold text-xs sm:text-sm text-white leading-tight">Consignado INSS & SIAPE</h3>
                <p className="text-[11px] text-gray-400 mt-1 leading-tight">Aposentados, Pensionistas e Servidores</p>
              </div>

              {/* Cartões Consignado e Benefício */}
              <div
                onClick={() => {
                  onSelectCategory('cartao');
                  onScrollToSimulator();
                }}
                className={`p-4 rounded-2xl cursor-pointer transition-all border text-left ${
                  selectedCategory === 'cartao'
                    ? 'bg-[#D91E2A]/20 border-[#D91E2A] ring-1 ring-[#D91E2A]'
                    : 'bg-white/5 hover:bg-white/10 border-white/10'
                }`}
                id="hero-card-cartao"
              >
                <div className="flex justify-between items-start mb-2">
                  <div className="p-2 rounded-lg bg-[#D91E2A]/20 text-[#FF4D5A]">
                    <CreditCard className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-extrabold uppercase px-1.5 py-0.5 rounded-md bg-white/20 text-gray-200">
                    Sem anuidade
                  </span>
                </div>
                <h3 className="font-bold text-xs sm:text-sm text-white leading-tight">Cartões e Benefício</h3>
                <p className="text-[11px] text-gray-400 mt-1 leading-tight">Margem extra e saque em dinheiro</p>
              </div>

              {/* Portabilidades */}
              <div
                onClick={() => {
                  onSelectCategory('portabilidade');
                  onScrollToSimulator();
                }}
                className={`p-4 rounded-2xl cursor-pointer transition-all border text-left ${
                  selectedCategory === 'portabilidade'
                    ? 'bg-[#D91E2A]/20 border-[#D91E2A] ring-1 ring-[#D91E2A]'
                    : 'bg-white/5 hover:bg-white/10 border-white/10'
                }`}
                id="hero-card-portabilidade"
              >
                <div className="flex justify-between items-start mb-2">
                  <div className="p-2 rounded-lg bg-emerald-500/20 text-emerald-400">
                    <RefreshCw className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-extrabold uppercase px-1.5 py-0.5 rounded-md bg-emerald-600 text-white">
                    Troco na conta
                  </span>
                </div>
                <h3 className="font-bold text-xs sm:text-sm text-white leading-tight">Portabilidade c/ Troco</h3>
                <p className="text-[11px] text-gray-400 mt-1 leading-tight">Reduza parcelas de outros bancos</p>
              </div>

              {/* Saque-Aniversário FGTS */}
              <div
                onClick={() => {
                  onSelectCategory('fgts');
                  onScrollToSimulator();
                }}
                className={`p-4 rounded-2xl cursor-pointer transition-all border text-left ${
                  selectedCategory === 'fgts'
                    ? 'bg-[#D91E2A]/20 border-[#D91E2A] ring-1 ring-[#D91E2A]'
                    : 'bg-white/5 hover:bg-white/10 border-white/10'
                }`}
                id="hero-card-fgts"
              >
                <div className="flex justify-between items-start mb-2">
                  <div className="p-2 rounded-lg bg-emerald-500/20 text-emerald-400">
                    <Zap className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-extrabold uppercase px-1.5 py-0.5 rounded-md bg-emerald-600 text-white">
                    Sem boleto
                  </span>
                </div>
                <h3 className="font-bold text-xs sm:text-sm text-white leading-tight">Antecipação FGTS</h3>
                <p className="text-[11px] text-gray-400 mt-1 leading-tight">Até 10 anos de Saque-Aniversário</p>
              </div>

            </div>

            {/* Quick Conic Office Address Highlight */}
            <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 text-xs text-gray-300 flex items-center justify-between gap-2">
              <div className="truncate">
                <span className="font-bold text-white block">📍 Atendimento Presencial:</span>
                <span className="text-[11px] text-gray-400 truncate block">Ed. Eldorado, Sala 613, Conic - Brasília</span>
              </div>
              <a
                href={directWhatsApp}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 bg-[#25D366] text-white font-bold rounded-lg text-[11px] whitespace-nowrap"
              >
                Agendar
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
