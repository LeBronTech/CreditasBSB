import React from 'react';
import { COMPARISON_RATES, WHATSAPP_NUMBER } from '../data';
import { WhatsAppIcon } from './WhatsAppIcon';
import { BarChart3, Sparkles, CheckCircle2 } from 'lucide-react';

export const RateComparisonChart: React.FC = () => {
  const maxRate = Math.max(...COMPARISON_RATES.map((r) => r.monthlyRate));
  const maxBarHeightPx = 155;

  const directWhatsAppUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    '♦️ Olá Credita BSB! Vi o gráfico comparativo de taxas no site e quero economizar no meu crédito com as menores taxas do mercado.'
  )}`;

  return (
    <section id="comparativo" className="py-12 lg:py-16 relative scroll-mt-20 bg-[#F4F6F9] border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header - Clean & Compact */}
        <div className="text-center max-w-2xl mx-auto mb-7">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-200 text-[#D91E2A] text-xs font-bold uppercase tracking-wider mb-2">
            <BarChart3 className="w-3.5 h-3.5" /> Comparativo de Juros Mensais
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-['Outfit']">
            Compare as taxas e veja onde você <span className="text-[#D91E2A]">economiza</span>
          </h2>
          <p className="mt-1.5 text-xs sm:text-sm text-slate-600">
            Juros reais do mercado comparados com as taxas exclusivas da Credita BSB.
          </p>
        </div>

        {/* Unified Slim Columns Container with Tight Contour */}
        <div className="bg-white p-3 sm:p-4 rounded-2xl border border-slate-200 shadow-sm overflow-x-auto text-slate-900 mb-6 max-w-3xl mx-auto">
          
          <div className="min-w-[560px]">
            
            {/* Background Benchmark Guide */}
            <div className="grid grid-cols-5 gap-2 sm:gap-3 items-end">
              {COMPARISON_RATES.map((item, idx) => {
                // Height progression: Credita stays minimal (16px), Outros Bancos & Veículo visibly larger
                let barHeightPx = 16;
                if (item.isBest) {
                  barHeightPx = 16;
                } else if (item.monthlyRate <= 2.0) {
                  // Outros Bancos
                  barHeightPx = 38;
                } else if (item.monthlyRate <= 3.0) {
                  // Financiamento Veículo
                  barHeightPx = 58;
                } else if (item.monthlyRate <= 10.0) {
                  // Cheque Especial
                  barHeightPx = 105;
                } else {
                  // Cartão de Crédito
                  barHeightPx = 155;
                }

                return (
                  <div
                    key={idx}
                    className={`flex flex-col items-center justify-between rounded-xl p-2 sm:p-2.5 transition-all ${
                      item.isBest
                        ? 'bg-red-50/70 border border-red-200 shadow-xs'
                        : 'bg-slate-50/80 border border-slate-200/80 hover:bg-slate-100/70'
                    }`}
                  >
                    {/* Top Rate & Badge */}
                    <div className="w-full text-center flex flex-col items-center gap-0.5 mb-1.5">
                      {item.isBest ? (
                        <span className="inline-flex items-center gap-1 bg-[#D91E2A] text-white text-[8px] font-black uppercase px-2 py-0.5 rounded-full shadow-xs">
                          <Sparkles className="w-2 h-2" /> {item.badge}
                        </span>
                      ) : (
                        <span className="bg-slate-200 text-slate-700 text-[8px] font-bold px-1.5 py-0.5 rounded-md">
                          {item.badge}
                        </span>
                      )}

                      <span
                        className={`text-xs sm:text-sm font-black font-['Outfit'] mt-0.5 ${
                          item.isBest ? 'text-[#D91E2A]' : 'text-slate-800'
                        }`}
                      >
                        {item.monthlyRate.toString().replace('.', ',')}%
                        <span className="text-[8px] font-normal text-slate-400 block">a.m.</span>
                      </span>
                    </div>

                    {/* Vertical Slim Bar - Only Semi-Circle / Pill at top */}
                    <div className="w-full flex items-end justify-center h-[160px] my-1">
                      <div
                        style={{ height: `${barHeightPx}px` }}
                        className={`w-8 sm:w-10 rounded-t-full transition-all duration-500 flex flex-col justify-start items-center pt-1 relative shadow-xs ${
                          item.isBest
                            ? 'bg-[#D91E2A] ring-2 ring-[#D91E2A]/40'
                            : item.monthlyRate > 7
                            ? 'bg-slate-700'
                            : 'bg-slate-400'
                        }`}
                      >
                        {/* Semi-circle pill cap only */}
                        <div className="w-3 h-0.5 rounded-full bg-white/75" />
                      </div>
                    </div>

                    {/* Integrated Bottom Text Block with Institution and Category cleanly stacked */}
                    <div className="w-full pt-1.5 mt-1 border-t border-slate-200 text-center">
                      <h4
                        className={`font-black text-[11px] sm:text-xs font-['Outfit'] leading-tight ${
                          item.isBest ? 'text-[#D91E2A]' : 'text-slate-900'
                        }`}
                      >
                        {item.institution}
                      </h4>
                      <span className="text-[9.5px] font-medium text-slate-500 block leading-tight mt-0.5">
                        {item.categoryName}
                      </span>
                      
                      <div className="mt-1 pt-1 border-t border-slate-200/60">
                        {item.isBest ? (
                          <span className="text-[8.5px] font-bold text-emerald-700 flex items-center justify-center gap-0.5">
                            <CheckCircle2 className="w-2.5 h-2.5 text-emerald-600" /> Menor Taxa
                          </span>
                        ) : (
                          <span className="text-[8.5px] font-semibold text-slate-600 block">
                            {item.monthlyRate.toString().replace('.', ',')}% a.m.
                          </span>
                        )}
                      </div>
                    </div>

                  </div>
                );
              })}
            </div>

          </div>

        </div>

        {/* Action Callout below the chart */}
        <div className="bg-[#12141C] text-white p-4 sm:p-5 rounded-2xl shadow-xl flex flex-col sm:flex-row items-center justify-between gap-3 border border-[#232736] max-w-3xl mx-auto">
          <div className="space-y-0.5 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-1.5 text-emerald-400 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" /> Garantia da Menor Taxa
            </div>
            <h4 className="text-base sm:text-lg font-bold font-['Outfit'] text-white">
              Troque as taxas caras pela menor taxa de Brasília.
            </h4>
          </div>

          <a
            href={directWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#25D366] hover:bg-[#20bd5a] text-white font-extrabold text-xs sm:text-sm rounded-2xl shadow-lg transition-all hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap cursor-pointer"
            id="chart-cta-whatsapp"
          >
            <WhatsAppIcon className="w-4 h-4 text-white" />
            <span>Consultar Minha Taxa</span>
          </a>
        </div>

      </div>
    </section>
  );
};
