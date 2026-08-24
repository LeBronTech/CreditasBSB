import React, { useState } from 'react';
import { LOAN_CATEGORIES } from '../data';
import { LoanCategory } from '../types';
import {
  calculateMonthlyInstallment,
  calculateTotalInterest,
  calculateSavingsComparedToBank,
  formatCurrency,
  generateWhatsAppLink,
  maskPhone,
  maskCPF
} from '../utils/calculator';
import {
  Calculator,
  MessageCircle,
  Sparkles,
  ShieldCheck,
  Zap,
  CheckCircle2,
  Lock,
  ArrowRight,
  Landmark,
  CreditCard,
  RefreshCw
} from 'lucide-react';

interface SimulatorProps {
  selectedCategory: LoanCategory;
  onSelectCategory: (cat: LoanCategory) => void;
}

export const Simulator: React.FC<SimulatorProps> = ({ selectedCategory, onSelectCategory }) => {
  const currentCategoryKey = LOAN_CATEGORIES[selectedCategory] ? selectedCategory : 'inss';
  const config = LOAN_CATEGORIES[currentCategoryKey];

  const [amount, setAmount] = useState<number>(config.defaultAmount);
  const [months, setMonths] = useState<number>(config.defaultMonths);
  const [customerName, setCustomerName] = useState<string>('');
  const [customerPhone, setCustomerPhone] = useState<string>('');
  const [customerCPF, setCustomerCPF] = useState<string>('');
  const [showFastLeadForm, setShowFastLeadForm] = useState<boolean>(false);

  // Sync defaults when category changes
  const handleCategoryChange = (cat: LoanCategory) => {
    onSelectCategory(cat);
    const newConfig = LOAN_CATEGORIES[cat] || LOAN_CATEGORIES['inss'];
    setAmount(newConfig.defaultAmount);
    setMonths(newConfig.defaultMonths);
  };

  // Calculations
  const installment = calculateMonthlyInstallment(amount, months, config.monthlyRate);
  const totalSavings = calculateSavingsComparedToBank(amount, months, config.monthlyRate);

  const whatsappUrl = generateWhatsAppLink({
    name: customerName,
    categoryName: config.name,
    amount,
    months,
    installmentValue: installment,
    additionalNotes: customerCPF ? `CPF: ${customerCPF}` : undefined
  });

  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="simulador" className="py-14 lg:py-20 bg-white relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header - Objective & Direct */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 text-[#D91E2A] text-xs font-bold uppercase tracking-wider mb-2">
            <Calculator className="w-3.5 h-3.5" /> Simulador de Crédito
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight font-['Outfit']">
            Simule seu crédito em <span className="text-[#D91E2A]">segundos</span>
          </h2>
          <p className="mt-2 text-sm sm:text-base text-gray-600">
            Escolha o valor e o prazo para ver a estimativa da parcela. Sem compromisso e sem taxas antecipadas.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1 bg-gray-100 rounded-2xl max-w-full overflow-x-auto gap-1">
            {(Object.keys(LOAN_CATEGORIES) as LoanCategory[]).map((catKey) => {
              const item = LOAN_CATEGORIES[catKey];
              const isSelected = selectedCategory === catKey;
              return (
                <button
                  key={catKey}
                  onClick={() => handleCategoryChange(catKey)}
                  className={`px-3.5 sm:px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm whitespace-nowrap transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? 'bg-[#D91E2A] text-white shadow-sm'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-white/60'
                  }`}
                  id={`tab-category-${catKey}`}
                >
                  <div className="flex items-center gap-1.5">
                    {catKey === 'inss' && <Landmark className="w-3.5 h-3.5" />}
                    {catKey === 'cartao' && <CreditCard className="w-3.5 h-3.5" />}
                    {catKey === 'portabilidade' && <RefreshCw className="w-3.5 h-3.5" />}
                    {catKey === 'fgts' && <Zap className="w-3.5 h-3.5" />}
                    <span>{item.name}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Interactive Simulator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left / Main Controls Card */}
          <div className="lg:col-span-7 bg-[#F8F9FA] border border-gray-200/80 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xs">
            
            {/* Category summary header */}
            <div className="flex items-center justify-between gap-3 pb-5 border-b border-gray-200">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#D91E2A]">{config.tagline}</span>
                <h3 className="text-lg sm:text-xl font-extrabold text-gray-900">{config.name}</h3>
              </div>
              <div className="text-right">
                <span className="text-[11px] text-gray-500 block">Taxa</span>
                <span className="text-base sm:text-lg font-black text-emerald-600">{config.monthlyRate.toString().replace('.', ',')}% a.m.</span>
              </div>
            </div>

            {/* Input 1: Loan Amount Slider & Input */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label htmlFor="loan-amount-input" className="text-xs font-bold text-gray-800 uppercase tracking-wider">
                  Valor Desejado:
                </label>
                <div className="flex items-center gap-1 bg-white border border-gray-300 px-3 py-1 rounded-xl shadow-xs">
                  <span className="text-xs font-bold text-gray-400">R$</span>
                  <input
                    id="loan-amount-input"
                    type="number"
                    value={amount}
                    min={config.minAmount}
                    max={config.maxAmount}
                    step={500}
                    onChange={(e) => setAmount(Math.max(config.minAmount, Math.min(config.maxAmount, Number(e.target.value) || config.minAmount)))}
                    className="w-24 sm:w-28 text-right font-black text-gray-900 focus:outline-hidden text-sm sm:text-base"
                  />
                </div>
              </div>

              {/* Slider */}
              <input
                type="range"
                min={config.minAmount}
                max={config.maxAmount}
                step={500}
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                className="w-full h-2.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#D91E2A]"
                id="loan-amount-slider"
              />

              <div className="flex justify-between text-[11px] text-gray-500 font-medium">
                <span>Mín: {formatCurrency(config.minAmount)}</span>
                <span className="font-bold text-[#D91E2A] text-xs">{formatCurrency(amount)}</span>
                <span>Máx: {formatCurrency(config.maxAmount)}</span>
              </div>

              {/* Quick Amount Chips */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {[3000, 5000, 10000, 20000, 50000].filter(val => val >= config.minAmount && val <= config.maxAmount).map((val) => (
                  <button
                    key={val}
                    type="button"
                    onClick={() => setAmount(val)}
                    className={`px-3 py-1 text-xs font-bold rounded-lg border transition-all ${
                      amount === val
                        ? 'bg-gray-900 text-white border-gray-900'
                        : 'bg-white text-gray-700 border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    {formatCurrency(val)}
                  </button>
                ))}
              </div>
            </div>

            {/* Input 2: Months / Installments */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold text-gray-800 uppercase tracking-wider">
                  Prazo de Pagamento:
                </label>
                <span className="text-sm font-black text-gray-900 bg-white border border-gray-300 px-3 py-1 rounded-xl">
                  {months} {months === 1 ? 'mês' : 'meses'}
                </span>
              </div>

              {/* Popular Months Chips */}
              <div className="flex flex-wrap gap-2">
                {config.popularMonths.map((m) => (
                  <button
                    key={m}
                    type="button"
                    onClick={() => setMonths(m)}
                    className={`flex-1 min-w-[60px] py-2 px-2 text-xs font-bold rounded-xl border transition-all text-center ${
                      months === m
                        ? 'bg-[#D91E2A] text-white border-[#D91E2A] shadow-xs'
                        : 'bg-white text-gray-700 border-gray-200 hover:border-gray-400'
                    }`}
                  >
                    {m}x
                  </button>
                ))}
              </div>
            </div>

            {/* Requirements Box */}
            <div className="p-3.5 bg-white rounded-2xl border border-gray-200 text-xs text-gray-600 space-y-1.5">
              <span className="font-bold text-gray-900 block text-[11px] uppercase tracking-wider">Requisitos:</span>
              {config.requirements.map((req, idx) => (
                <div key={idx} className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                  <span>{req}</span>
                </div>
              ))}
            </div>

          </div>

          {/* Right / Result & Direct CTA Card */}
          <div className="lg:col-span-5 bg-[#18181B] text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-gray-800 space-y-6">
            
            <div className="flex items-center justify-between border-b border-gray-800 pb-4">
              <div>
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5" /> Proposta Estimada
                </span>
                <h4 className="text-base font-extrabold text-white">Resultado da Simulação</h4>
              </div>
              <span className="bg-white/10 text-gray-300 text-[10px] font-bold px-2 py-0.5 rounded-full">
                100% Gratuito
              </span>
            </div>

            {/* Main Result Numbers */}
            <div className="space-y-4">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center">
                <span className="text-xs text-gray-400 block mb-0.5 uppercase tracking-wider">
                  Valor da Parcela Estimada
                </span>
                <div className="text-3xl sm:text-4xl font-black text-white tracking-tight font-['Outfit']">
                  {formatCurrency(installment)}
                  <span className="text-sm font-normal text-gray-400 ml-1">/mês</span>
                </div>
                <span className="text-[11px] text-emerald-400 font-semibold mt-1 block">
                  {months} parcelas fixas descontadas em folha
                </span>
              </div>

              {/* Summary Stats */}
              <div className="grid grid-cols-2 gap-2.5 text-xs">
                <div className="bg-white/5 p-3 rounded-xl border border-white/5">
                  <span className="text-gray-400 block text-[10px] uppercase">Valor Liberado:</span>
                  <span className="font-bold text-white text-sm">{formatCurrency(amount)}</span>
                </div>
                <div className="bg-white/5 p-3 rounded-xl border border-white/5">
                  <span className="text-gray-400 block text-[10px] uppercase">Economia estimada:</span>
                  <span className="font-bold text-emerald-400 text-sm">{formatCurrency(totalSavings)}</span>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Call or Fast Form */}
            {!showFastLeadForm ? (
              <div className="space-y-3 pt-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2.5 py-4 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold rounded-2xl text-sm sm:text-base shadow-lg transition-all hover:scale-[1.02] active:scale-[0.98]"
                  id="simulator-cta-whatsapp"
                >
                  <MessageCircle className="w-5 h-5 fill-white" />
                  <span>Contratar via WhatsApp</span>
                </a>

                <button
                  onClick={() => setShowFastLeadForm(true)}
                  className="w-full py-2.5 text-xs text-gray-400 hover:text-white font-semibold underline text-center block cursor-pointer"
                >
                  Ou preencher dados rápidos antes
                </button>
              </div>
            ) : (
              <form onSubmit={handleLeadSubmit} className="space-y-3 pt-1">
                <div>
                  <label className="text-[11px] text-gray-300 font-bold block mb-1">Seu Nome:</label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Maria da Silva"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-3 py-2 text-xs text-white placeholder-gray-500 focus:outline-hidden focus:border-[#D91E2A]"
                  />
                </div>
                <div>
                  <label className="text-[11px] text-gray-300 font-bold block mb-1">WhatsApp / Telefone:</label>
                  <input
                    type="tel"
                    required
                    placeholder="(61) 99999-9999"
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(maskPhone(e.target.value))}
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-3 py-2 text-xs text-white placeholder-gray-500 focus:outline-hidden focus:border-[#D91E2A]"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Enviar e Conversar no WhatsApp</span>
                </button>
              </form>
            )}

            <div className="flex items-center justify-center gap-2 text-[10px] text-gray-400 pt-1">
              <Lock className="w-3 h-3 text-emerald-400" />
              <span>Sem cobrança antecipada • Atendimento seguro</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
