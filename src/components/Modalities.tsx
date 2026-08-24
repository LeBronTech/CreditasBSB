import React from 'react';
import { LOAN_CATEGORIES } from '../data';
import { LoanCategory } from '../types';
import { Landmark, CreditCard, RefreshCw, Zap, ArrowRight } from 'lucide-react';
import { formatCurrency } from '../utils/calculator';

interface ModalitiesProps {
  onSelectCategory: (cat: LoanCategory) => void;
  onScrollToSimulator: () => void;
}

export const Modalities: React.FC<ModalitiesProps> = ({ onSelectCategory, onScrollToSimulator }) => {
  const categories: LoanCategory[] = ['inss', 'cartao', 'portabilidade', 'fgts'];

  const getIcon = (cat: LoanCategory) => {
    switch (cat) {
      case 'inss': return <Landmark className="w-5 h-5 text-[#D91E2A]" />;
      case 'cartao': return <CreditCard className="w-5 h-5 text-[#D91E2A]" />;
      case 'portabilidade': return <RefreshCw className="w-5 h-5 text-emerald-600" />;
      case 'fgts': return <Zap className="w-5 h-5 text-[#D91E2A]" />;
      default: return <Landmark className="w-5 h-5 text-[#D91E2A]" />;
    }
  };

  return (
    <section id="modalidades" className="py-14 lg:py-20 bg-[#F8F9FA] relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-100 text-[#D91E2A] text-xs font-bold uppercase tracking-wider mb-2">
            Nossas Especialidades
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight font-['Outfit']">
            Serviços de Empréstimo <span className="text-[#D91E2A]">Credita BSB</span>
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Mais de 17 anos de experiência no Conic garantindo as menores taxas e liberação sem burocracia.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {categories.map((catKey) => {
            const config = LOAN_CATEGORIES[catKey];
            if (!config) return null;
            return (
              <div
                key={catKey}
                className="bg-white rounded-2xl p-5 sm:p-6 border border-gray-200 hover:border-[#D91E2A] hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Top Badge & Icon */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-2.5 bg-red-50 rounded-xl group-hover:bg-[#D91E2A]/10 transition-colors">
                      {getIcon(catKey)}
                    </div>
                    <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-md bg-gray-100 text-gray-700">
                      {config.badge}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 font-['Outfit'] mb-1">
                    {config.name}
                  </h3>
                  <p className="text-[11px] font-semibold text-[#D91E2A] mb-2">
                    {config.tagline}
                  </p>

                  <p className="text-xs text-gray-600 leading-relaxed mb-4">
                    {config.description}
                  </p>

                  {/* Fast Specs Box */}
                  <div className="bg-gray-50 rounded-xl p-3 space-y-1.5 mb-5 border border-gray-100 text-xs">
                    <div className="flex justify-between">
                      <span className="text-gray-500 text-[11px]">Taxa:</span>
                      <strong className="text-emerald-600 font-bold">{config.monthlyRate.toString().replace('.', ',')}% a.m.</strong>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500 text-[11px]">Prazo:</span>
                      <strong className="text-gray-900 font-bold">Até {config.maxMonths}x</strong>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500 text-[11px]">Limite até:</span>
                      <strong className="text-gray-900 font-bold">{formatCurrency(config.maxAmount)}</strong>
                    </div>
                  </div>
                </div>

                {/* Card Button */}
                <button
                  onClick={() => {
                    onSelectCategory(catKey);
                    onScrollToSimulator();
                  }}
                  className="w-full py-2.5 px-3 bg-gray-900 group-hover:bg-[#D91E2A] text-white text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Simular Agora</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
