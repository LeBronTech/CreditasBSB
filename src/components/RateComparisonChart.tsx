import React, { useState } from 'react';
import { COMPARISON_RATES, WHATSAPP_NUMBER } from '../data';
import { calculateMonthlyInstallment, calculateTotalPayment, formatCurrency } from '../utils/calculator';
import { BarChart3, Sparkles, MessageCircle, CheckCircle2 } from 'lucide-react';

export const RateComparisonChart: React.FC = () => {
  const [compAmount, setCompAmount] = useState<number>(10000);
  const [compMonths, setCompMonths] = useState<number>(36);

  const creditaRate = COMPARISON_RATES[0].monthlyRate;
  const creditaTotal = calculateTotalPayment(compAmount, compMonths, creditaRate);
  const creditaPmt = calculateMonthlyInstallment(compAmount, compMonths, creditaRate);

  const maxRate = Math.max(...COMPARISON_RATES.map((r) => r.monthlyRate));
  const minBarHeightPx = 50;
  const maxBarHeightPx = 220;

  const directWhatsAppUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Olá Credita BSB! Vi o gráfico comparativo de taxas no site e quero economizar no meu consignado de ${formatCurrency(compAmount)} em ${compMonths}x com a taxa de 1,39% a.m.`
  )}`;

  return (
    <section id="comparativo" className="py-14 lg:py-20 relative scroll-mt-20 bg-[#F4F6F9] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header - Clean & Compact */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-200 text-[#D91E2A] text-xs font-bold uppercase tracking-wider mb-2">
            <BarChart3 className="w-3.5 h-3.5" /> Comparativo de Juros Bancários
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-['Outfit']">
            Compare e veja o quanto você <span className="text-[#D91E2A]">economiza</span>
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-600">
            Juros reais do mercado comparados com a taxa consignada especial da Credita BSB.
          </p>
        </div>

        {/* Interactive Controls Box (Clean Light Slate) */}
        <div className="bg-white p-5 sm:p-6 rounded-3xl border border-slate-200 shadow-sm mb-6 text-slate-900">
          <div className="flex flex-col md:flex-row items-center justify-between gap-5">
            
            {/* Amount Digitável & Presets */}
            <div className="w-full md:w-auto space-y-2">
              <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700">
                1. Valor do Empréstimo (digite ou selecione):
              </label>
              
              <div className="flex items-center gap-2">
                <div className="flex items-center rounded-xl bg-slate-50 border border-slate-300 focus-within:border-[#D91E2A] px-3 py-1.5 shadow-2xs">
                  <span className="text-xs font-bold text-slate-500 mr-1.5">R$</span>
                  <input
                    type="text"
                    inputMode="numeric"
                    value={compAmount.toLocaleString('pt-BR')}
                    onChange={(e) => {
                      const val = parseInt(e.target.value.replace(/\D/g, ''), 10) || 1000;
                      setCompAmount(val);
                    }}
                    className="w-24 sm:w-28 text-left font-black text-slate-900 focus:outline-hidden text-sm bg-transparent"
                  />
                </div>

                <div className="flex flex-wrap gap-1">
                  {[5000, 10000, 20000, 50000].map((val) => (
                    <button
                      key={val}
                      type="button"
                      onClick={() => setCompAmount(val)}
                      className={`px-2.5 py-1.5 text-xs font-bold rounded-xl border transition-all cursor-pointer ${
                        compAmount === val
                          ? 'bg-[#D91E2A] text-white border-[#D91E2A] shadow-xs'
                          : 'bg-slate-50 text-slate-700 border-slate-200 hover:border-slate-400'
                      }`}
                    >
                      {formatCurrency(val)}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Months Presets */}
            <div className="w-full md:w-auto">
              <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-2">
                2. Prazo em Meses:
              </label>
              <div className="flex flex-wrap gap-1.5">
                {[12, 24, 36, 48, 72, 84].map((m) => (
                  <button
                    key={m}
                    type="button"
                    onClick={() => setCompMonths(m)}
                    className={`px-3 py-1.5 text-xs font-bold rounded-xl border transition-all cursor-pointer ${
                      compMonths === m
                        ? 'bg-[#D91E2A] text-white border-[#D91E2A] shadow-xs'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:border-slate-400'
                    }`}
                  >
                    {m}x
                  </button>
                ))}
              </div>
            </div>

            {/* Savings Highlight */}
            <div className="w-full md:w-auto bg-emerald-50 border border-emerald-300 rounded-2xl p-3.5 text-center md:text-right">
              <span className="text-[11px] font-bold text-emerald-800 block uppercase">
                Sua Economia com a Credita BSB:
              </span>
              <div className="text-xl sm:text-2xl font-black text-emerald-700 font-['Outfit']">
                até {formatCurrency(calculateTotalPayment(compAmount, compMonths, 6.45) - creditaTotal)}
              </div>
              <span className="text-[10px] text-emerald-600">em relação ao crédito pessoal bancário</span>
            </div>

          </div>
        </div>

        {/* Vertical Bar Chart Container with Solid Clean Effect */}
        <div className="bg-white p-4 sm:p-6 rounded-3xl border border-slate-200 shadow-sm overflow-x-auto text-slate-900">
          
          <div className="min-w-[680px] pb-2">
            
            {/* Chart Area */}
            <div className="h-[280px] flex items-end justify-between gap-2.5 sm:gap-4 border-b border-slate-200 px-2 pb-0 relative">
              
              {/* Background Reference Lines */}
              <div className="absolute inset-0 pointer-events-none flex flex-col justify-between opacity-30 border-dashed">
                <div className="border-b border-slate-300 w-full text-[9px] text-slate-500 pt-0.5">Rotativo (14%+)</div>
                <div className="border-b border-slate-300 w-full text-[9px] text-slate-500">Crédito Pessoal (5% - 8%)</div>
                <div className="border-b border-slate-300 w-full text-[9px] text-slate-500">Bancos Tradicionais (2% - 3%)</div>
                <div className="border-b border-emerald-600 w-full text-[9px] text-emerald-700 font-bold">Faixa Credita BSB (1,39%)</div>
              </div>

              {COMPARISON_RATES.map((item, idx) => {
                const itemPmt = calculateMonthlyInstallment(compAmount, compMonths, item.monthlyRate);
                const heightRatio = item.monthlyRate / maxRate;
                const barHeightPx = minBarHeightPx + heightRatio * (maxBarHeightPx - minBarHeightPx);

                return (
                  <div
                    key={idx}
                    className="flex-1 flex flex-col items-center justify-end h-full z-10 group relative"
                  >
                    {/* Floating Rate & Status Badge */}
                    <div className="mb-1.5 text-center flex flex-col items-center gap-0.5">
                      {item.isBest ? (
                        <span className="inline-flex items-center gap-1 bg-[#D91E2A] text-white text-[9px] font-black uppercase px-2 py-0.5 rounded-full shadow-xs">
                          <Sparkles className="w-2 h-2" /> Menor Taxa
                        </span>
                      ) : (
                        <span className="bg-slate-100 text-slate-600 text-[9px] font-bold px-1.5 py-0.5 rounded-md border border-slate-200">
                          {item.badge}
                        </span>
                      )}

                      <span
                        className={`text-xs sm:text-sm font-black font-['Outfit'] ${
                          item.isBest ? 'text-[#D91E2A]' : 'text-slate-700'
                        }`}
                      >
                        {item.monthlyRate.toString().replace('.', ',')}% <span className="text-[9px] font-normal text-slate-400">a.m.</span>
                      </span>
                    </div>

                    {/* The Vertical Bar */}
                    <div
                      style={{ height: `${barHeightPx}px` }}
                      className={`w-full max-w-[75px] rounded-t-xl transition-all duration-500 flex flex-col justify-between items-center p-1.5 relative shadow-xs ${
                        item.isBest
                          ? 'bg-[#D91E2A] ring-2 ring-[#D91E2A]/50 text-white'
                          : item.monthlyRate > 7
                          ? 'bg-slate-700 text-white'
                          : 'bg-slate-400 text-white'
                      }`}
                    >
                      <div className="w-4 h-0.5 rounded-full bg-white/40 mb-0.5" />

                      <div className="text-center">
                        <span className="text-[8px] uppercase opacity-85 block font-bold">Parcela</span>
                        <span className="text-[11px] sm:text-xs font-black whitespace-nowrap">
                          {formatCurrency(itemPmt)}
                        </span>
                        <span className="text-[8px] opacity-85 block">/mês</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom Labels */}
            <div className="flex justify-between gap-2.5 sm:gap-4 mt-3 px-2">
              {COMPARISON_RATES.map((item, idx) => {
                const itemTotal = calculateTotalPayment(compAmount, compMonths, item.monthlyRate);
                const diffWithCredita = itemTotal - creditaTotal;

                return (
                  <div
                    key={idx}
                    className={`flex-1 text-center p-2 rounded-xl transition-all ${
                      item.isBest
                        ? 'bg-red-50 border border-red-200'
                        : 'bg-slate-50 border border-slate-200'
                    }`}
                  >
                    <h4
                      className={`font-black text-[11px] sm:text-xs font-['Outfit'] leading-tight ${
                        item.isBest ? 'text-[#D91E2A]' : 'text-slate-900'
                      }`}
                    >
                      {item.institution}
                    </h4>

                    <span className="text-[9px] text-slate-500 block mt-0.5 leading-tight truncate">
                      {item.categoryName}
                    </span>

                    <div className="mt-1.5 pt-1.5 border-t border-slate-200">
                      <span className="text-[8px] text-slate-500 block uppercase">Total Final</span>
                      <span
                        className={`text-[11px] font-extrabold block ${
                          item.isBest ? 'text-slate-900' : 'text-slate-700'
                        }`}
                      >
                        {formatCurrency(itemTotal)}
                      </span>

                      {item.isBest ? (
                        <span className="text-[9px] font-bold text-emerald-700 block mt-0.5 flex items-center justify-center gap-0.5">
                          <CheckCircle2 className="w-2.5 h-2.5 text-emerald-600" /> Mais barato
                        </span>
                      ) : (
                        <span className="text-[9px] font-bold text-red-600 block mt-0.5">
                          + {formatCurrency(diffWithCredita)}
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>

        {/* Action Callout below the chart */}
        <div className="mt-6 bg-[#12141C] text-white p-5 sm:p-6 rounded-3xl shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4 border border-[#232736]">
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
            className="inline-flex items-center gap-2 px-5 py-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs sm:text-sm rounded-xl shadow-md transition-all hover:scale-105 active:scale-95 whitespace-nowrap"
            id="comparativo-cta-whatsapp"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Simular Taxa 1,39% no WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
