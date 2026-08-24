import React, { useState } from 'react';
import { COMPARISON_RATES, WHATSAPP_NUMBER } from '../data';
import { calculateMonthlyInstallment, calculateTotalPayment, calculateTotalInterest, formatCurrency } from '../utils/calculator';
import { BarChart3, Sparkles, MessageCircle, ArrowUpRight, TrendingUp, CheckCircle2, AlertTriangle } from 'lucide-react';

export const RateComparisonChart: React.FC = () => {
  const [compAmount, setCompAmount] = useState<number>(10000);
  const [compMonths, setCompMonths] = useState<number>(36);

  const creditaRate = COMPARISON_RATES[0].monthlyRate;
  const creditaTotal = calculateTotalPayment(compAmount, compMonths, creditaRate);
  const creditaPmt = calculateMonthlyInstallment(compAmount, compMonths, creditaRate);

  const maxRate = Math.max(...COMPARISON_RATES.map((r) => r.monthlyRate));
  const minBarHeightPx = 60;
  const maxBarHeightPx = 260;

  const directWhatsAppUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Olá Credita BSB! Vi o gráfico comparativo de taxas no site e quero economizar no meu consignado de ${formatCurrency(compAmount)} em ${compMonths}x com a taxa de 1,39% a.m.`
  )}`;

  return (
    <section id="comparativo" className="py-16 lg:py-24 bg-[#F8F9FA] relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-red-100 text-[#D91E2A] text-xs font-bold uppercase tracking-wider mb-3">
            <BarChart3 className="w-3.5 h-3.5" /> Comparador Vertical de Taxas Bancárias
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight font-['Outfit']">
            Compare as taxas dos bancos com a <span className="text-[#D91E2A]">Credita BSB</span>
          </h2>
          <p className="mt-3 text-base text-gray-600">
            Veja em formato vertical como as taxas dos grandes bancos e cartões de crédito são muito superiores à taxa consignada da Credita BSB.
          </p>
        </div>

        {/* Interactive Controls Box */}
        <div className="bg-white p-6 rounded-3xl border border-gray-200 shadow-xs mb-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            
            {/* Amount Presets */}
            <div className="w-full lg:w-auto">
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
                1. Escolha o Valor do Empréstimo:
              </label>
              <div className="flex flex-wrap gap-2">
                {[5000, 10000, 20000, 50000].map((val) => (
                  <button
                    key={val}
                    type="button"
                    onClick={() => setCompAmount(val)}
                    className={`px-4 py-2 text-xs font-bold rounded-xl border transition-all ${
                      compAmount === val
                        ? 'bg-[#D91E2A] text-white border-[#D91E2A] shadow-xs'
                        : 'bg-gray-50 text-gray-700 border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    {formatCurrency(val)}
                  </button>
                ))}
              </div>
            </div>

            {/* Months Presets */}
            <div className="w-full lg:w-auto">
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
                2. Prazo em Meses:
              </label>
              <div className="flex flex-wrap gap-2">
                {[12, 24, 36, 48, 72].map((m) => (
                  <button
                    key={m}
                    type="button"
                    onClick={() => setCompMonths(m)}
                    className={`px-4 py-2 text-xs font-bold rounded-xl border transition-all ${
                      compMonths === m
                        ? 'bg-gray-900 text-white border-gray-900 shadow-xs'
                        : 'bg-gray-50 text-gray-700 border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    {m} meses
                  </button>
                ))}
              </div>
            </div>

            {/* Savings Highlight */}
            <div className="w-full lg:w-auto bg-emerald-50 border border-emerald-200 rounded-2xl p-4 text-center lg:text-right">
              <span className="text-xs font-bold text-emerald-800 block uppercase">
                Sua Economia com a Credita BSB:
              </span>
              <div className="text-2xl font-black text-emerald-600 font-['Outfit']">
                até {formatCurrency(calculateTotalPayment(compAmount, compMonths, 6.45) - creditaTotal)}
              </div>
              <span className="text-[11px] text-emerald-700">em relação ao crédito dos bancos</span>
            </div>

          </div>
        </div>

        {/* Vertical Bar Chart Container */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-200 shadow-sm overflow-x-auto">
          
          <div className="min-w-[760px] pb-4">
            
            {/* Chart Area: Vertical Bars on a Unified Baseline */}
            <div className="h-[340px] flex items-end justify-between gap-3 sm:gap-4 border-b-2 border-gray-200 px-2 sm:px-4 pb-0 relative">
              
              {/* Background Reference Grid Lines */}
              <div className="absolute inset-0 pointer-events-none flex flex-col justify-between opacity-15 border-dashed">
                <div className="border-b border-gray-900 w-full text-[10px] text-gray-500 pt-0.5">Taxas Altas (14%+)</div>
                <div className="border-b border-gray-900 w-full text-[10px] text-gray-500">Taxas Médias (6% - 8%)</div>
                <div className="border-b border-gray-900 w-full text-[10px] text-gray-500">Taxas Baixas (2% - 3%)</div>
                <div className="border-b border-emerald-600 w-full text-[10px] text-emerald-700 font-bold">Faixa Credita BSB (1,39%)</div>
              </div>

              {COMPARISON_RATES.map((item, idx) => {
                const itemPmt = calculateMonthlyInstallment(compAmount, compMonths, item.monthlyRate);
                const itemTotal = calculateTotalPayment(compAmount, compMonths, item.monthlyRate);
                const diffWithCredita = itemTotal - creditaTotal;

                // Calculate vertical height proportionally
                const heightRatio = item.monthlyRate / maxRate;
                const barHeightPx = minBarHeightPx + heightRatio * (maxBarHeightPx - minBarHeightPx);

                return (
                  <div
                    key={idx}
                    className="flex-1 flex flex-col items-center justify-end h-full z-10 group relative"
                  >
                    {/* Floating Rate & Status Badge above column */}
                    <div className="mb-2 text-center flex flex-col items-center gap-1">
                      {item.isBest ? (
                        <span className="inline-flex items-center gap-1 bg-[#D91E2A] text-white text-[10px] font-black uppercase px-2 py-0.5 rounded-full shadow-xs animate-bounce">
                          <Sparkles className="w-2.5 h-2.5" /> Menor Taxa
                        </span>
                      ) : (
                        <span className="bg-red-100 text-red-700 text-[10px] font-bold px-1.5 py-0.5 rounded-md">
                          {item.badge}
                        </span>
                      )}

                      <span
                        className={`text-sm sm:text-base font-black font-['Outfit'] ${
                          item.isBest ? 'text-[#D91E2A]' : 'text-gray-900'
                        }`}
                      >
                        {item.monthlyRate.toString().replace('.', ',')}% <span className="text-[10px] font-normal text-gray-500">a.m.</span>
                      </span>
                    </div>

                    {/* The Vertical Bar */}
                    <div
                      style={{ height: `${barHeightPx}px` }}
                      className={`w-full max-w-[85px] rounded-t-2xl transition-all duration-500 flex flex-col justify-between items-center p-2 relative shadow-xs ${
                        item.isBest
                          ? 'bg-gradient-to-t from-[#B91C1C] via-[#D91E2A] to-red-500 ring-2 ring-[#D91E2A]/30 text-white'
                          : item.monthlyRate > 7
                          ? 'bg-gradient-to-t from-gray-700 to-gray-500 text-white'
                          : 'bg-gradient-to-t from-gray-300 via-gray-200 to-gray-100 text-gray-800'
                      }`}
                    >
                      {/* Top micro shine / indicator */}
                      <div className="w-6 h-1 rounded-full bg-white/40 mb-1" />

                      {/* Monthly Installment inside column */}
                      <div className="text-center">
                        <span className="text-[9px] uppercase opacity-75 block font-bold">Parcela</span>
                        <span className="text-xs sm:text-sm font-black whitespace-nowrap">
                          {formatCurrency(itemPmt)}
                        </span>
                        <span className="text-[9px] opacity-75 block">/mês</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom Details Grid: Institution Names and Differences */}
            <div className="flex justify-between gap-3 sm:gap-4 mt-4 px-2 sm:px-4">
              {COMPARISON_RATES.map((item, idx) => {
                const itemTotal = calculateTotalPayment(compAmount, compMonths, item.monthlyRate);
                const diffWithCredita = itemTotal - creditaTotal;

                return (
                  <div
                    key={idx}
                    className={`flex-1 text-center p-2.5 rounded-2xl transition-all ${
                      item.isBest
                        ? 'bg-red-50/80 border border-red-200 shadow-xs'
                        : 'bg-gray-50/80 border border-gray-100'
                    }`}
                  >
                    {/* Bank / Institution Name */}
                    <h4
                      className={`font-black text-xs sm:text-sm font-['Outfit'] leading-tight ${
                        item.isBest ? 'text-[#D91E2A]' : 'text-gray-900'
                      }`}
                    >
                      {item.institution}
                    </h4>

                    {/* Subtitle / Modality */}
                    <span className="text-[10px] text-gray-500 block mt-0.5 leading-tight">
                      {item.categoryName}
                    </span>

                    {/* Total cost & comparison outcome */}
                    <div className="mt-2 pt-2 border-t border-gray-200/70">
                      <span className="text-[9px] text-gray-400 block uppercase">Total ao Final</span>
                      <span
                        className={`text-xs font-extrabold block ${
                          item.isBest ? 'text-gray-900' : 'text-gray-700'
                        }`}
                      >
                        {formatCurrency(itemTotal)}
                      </span>

                      {item.isBest ? (
                        <span className="text-[10px] font-bold text-emerald-600 block mt-1 flex items-center justify-center gap-0.5">
                          <CheckCircle2 className="w-3 h-3 text-emerald-500" /> Mais barato
                        </span>
                      ) : (
                        <span className="text-[10px] font-bold text-red-600 block mt-1">
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

        {/* Action Callout below the vertical chart */}
        <div className="mt-8 bg-[#18181B] text-white p-6 sm:p-8 rounded-3xl shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6 border border-gray-800">
          <div className="space-y-1 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-4 h-4" /> Vantagem Garantida Credita BSB
            </div>
            <h4 className="text-xl sm:text-2xl font-bold font-['Outfit']">
              Troque as taxas altas dos grandes bancos pela menor taxa de Brasília.
            </h4>
            <p className="text-sm text-gray-400 max-w-xl">
              Fale agora com nosso consultor no WhatsApp e solicite sua análise gratuita de margem ou portabilidade com troco.
            </p>
          </div>

          <a
            href={directWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-4 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm rounded-xl shadow-lg transition-all hover:scale-105 active:scale-95 whitespace-nowrap"
            id="comparativo-cta-whatsapp"
          >
            <MessageCircle className="w-5 h-5 fill-white" />
            <span>Simular com Taxa de 1,39% no WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
