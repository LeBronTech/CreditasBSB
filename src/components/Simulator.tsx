import React, { useState } from 'react';
import { LOAN_CATEGORIES } from '../data';
import { LoanCategory } from '../types';
import { WhatsAppIcon } from './WhatsAppIcon';
import {
  calculateMonthlyInstallment,
  calculateSavingsComparedToBank,
  formatCurrency,
  generateWhatsAppLink,
  maskPhone,
  maskCPF,
} from '../utils/calculator';
import {
  Calculator,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Lock,
  ArrowRight,
  Landmark,
  CreditCard,
  Building2,
  DollarSign,
} from 'lucide-react';

interface SimulatorProps {
  selectedCategory: LoanCategory;
  onSelectCategory: (cat: LoanCategory) => void;
}

export const Simulator: React.FC<SimulatorProps> = ({ selectedCategory, onSelectCategory }) => {
  const currentCategoryKey = LOAN_CATEGORIES[selectedCategory] ? selectedCategory : 'inss';
  const config = LOAN_CATEGORIES[currentCategoryKey];

  const [amount, setAmount] = useState<number>(config.defaultAmount);
  const [typedAmount, setTypedAmount] = useState<string>(config.defaultAmount.toLocaleString('pt-BR'));
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
    setTypedAmount(newConfig.defaultAmount.toLocaleString('pt-BR'));
    setMonths(newConfig.defaultMonths);
  };

  // Handle raw typing in the digitável field
  const handleTypedAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawVal = e.target.value.replace(/\D/g, '');
    if (!rawVal) {
      setTypedAmount('');
      setAmount(0);
      return;
    }
    const num = parseInt(rawVal, 10);
    setTypedAmount(num.toLocaleString('pt-BR'));
    setAmount(num);
  };

  const handleAmountChipClick = (val: number) => {
    setAmount(val);
    setTypedAmount(val.toLocaleString('pt-BR'));
  };

  const handleSliderChange = (val: number) => {
    setAmount(val);
    setTypedAmount(val.toLocaleString('pt-BR'));
  };

  // Effective amount for calculation (ensure at least minAmount or fallback)
  const effectiveAmount = amount > 0 ? amount : config.minAmount;

  // Calculations
  const installment = calculateMonthlyInstallment(effectiveAmount, months, config.monthlyRate);
  const totalSavings = calculateSavingsComparedToBank(effectiveAmount, months, config.monthlyRate);

  const whatsappUrl = generateWhatsAppLink({
    name: customerName,
    categoryName: config.name,
    amount: effectiveAmount,
    months,
    installmentValue: installment,
    additionalNotes: customerCPF ? `CPF: ${customerCPF}` : undefined,
  });

  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="simulador" className="py-14 lg:py-20 relative scroll-mt-20 bg-white border-y border-slate-200 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header - Objective & Direct in Clean Light Block */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-200 text-[#D91E2A] text-xs font-bold uppercase tracking-wider mb-2">
            <Calculator className="w-3.5 h-3.5" /> Simulador de Crédito
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-['Outfit']">
            Simule seu crédito em <span className="text-[#D91E2A]">segundos</span>
          </h2>
          <div className="mt-2 text-xs sm:text-sm text-slate-600 space-y-1">
            <p>Digite o valor desejado e escolha o prazo. Sem consulta ao SPC/Serasa e sem taxas prévias.</p>
            <p className="font-semibold text-emerald-700">Taxas flexíveis para negativado.</p>
            <p className="text-[11px] text-slate-500 italic">
              Valores sujeito análise pessoal de crédito e disponibilidade dos bancos. (Segue alterações bancárias)
            </p>
          </div>
        </div>

        {/* Category Tabs Minimalist (INSS, SIAPE, Cartões) */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex p-1.5 bg-slate-100 border border-slate-200 rounded-2xl max-w-full overflow-x-auto gap-1 shadow-sm">
            {(Object.keys(LOAN_CATEGORIES) as LoanCategory[]).map((catKey) => {
              const item = LOAN_CATEGORIES[catKey];
              const isSelected = selectedCategory === catKey;
              return (
                <button
                  key={catKey}
                  onClick={() => handleCategoryChange(catKey)}
                  className={`px-3.5 sm:px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm whitespace-nowrap transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? 'bg-[#D91E2A] text-white shadow-md'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/70'
                  }`}
                  id={`tab-category-${catKey}`}
                >
                  <div className="flex items-center gap-2">
                    {catKey === 'inss' && <Landmark className="w-4 h-4" />}
                    {catKey === 'siape' && <Building2 className="w-4 h-4" />}
                    {catKey === 'cartao' && <CreditCard className="w-4 h-4" />}
                    <span>{item.name}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Interactive Simulator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Left / Main Controls Card (Clean Light Slate) */}
          <div className="lg:col-span-7 bg-slate-50 border border-slate-200 rounded-3xl p-5 sm:p-7 space-y-6 shadow-sm text-slate-900">
            
            {/* Category summary header */}
            <div className="flex items-center justify-between gap-3 pb-4 border-b border-slate-200">
              <div>
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#D91E2A]">{config.tagline}</span>
                <h3 className="text-base sm:text-lg font-extrabold text-slate-900 font-['Outfit']">{config.name}</h3>
              </div>
              <div className="text-right">
                <span className="text-[10px] text-slate-500 block uppercase font-bold">Taxa Especial</span>
                <span className="text-sm sm:text-base font-black text-emerald-600">{config.monthlyRate.toString().replace('.', ',')}% a.m.</span>
              </div>
            </div>

            {/* Input 1: Digitável Loan Amount */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label htmlFor="loan-amount-digitavel" className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
                  <DollarSign className="w-4 h-4 text-[#D91E2A]" />
                  <span>Valor do Empréstimo (digite o valor):</span>
                </label>
                <span className="text-[11px] font-semibold text-slate-500">
                  Mín: {formatCurrency(config.minAmount)}
                </span>
              </div>

              {/* Large Typed Input Field */}
              <div className="relative flex items-center rounded-2xl bg-white border-2 border-slate-300 focus-within:border-[#D91E2A] focus-within:ring-3 focus-within:ring-[#D91E2A]/20 transition-all shadow-xs p-2 sm:p-3">
                <div className="pl-2 pr-3 text-base sm:text-xl font-extrabold text-slate-500 select-none">
                  R$
                </div>
                <input
                  id="loan-amount-digitavel"
                  type="text"
                  inputMode="numeric"
                  value={typedAmount}
                  onChange={handleTypedAmountChange}
                  placeholder="0,00"
                  className="w-full text-xl sm:text-2xl font-black text-slate-900 focus:outline-hidden bg-transparent tracking-tight font-['Outfit']"
                />
                <button
                  type="button"
                  onClick={() => handleAmountChipClick(config.defaultAmount)}
                  className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-[11px] font-bold rounded-xl border border-slate-200 transition-colors cursor-pointer whitespace-nowrap ml-2"
                >
                  Padrão
                </button>
              </div>

              {/* Slider Controller */}
              <div className="space-y-1 pt-1">
                <input
                  type="range"
                  min={config.minAmount}
                  max={config.maxAmount}
                  step={500}
                  value={Math.max(config.minAmount, Math.min(config.maxAmount, amount))}
                  onChange={(e) => handleSliderChange(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#D91E2A]"
                  id="loan-amount-slider"
                />
                <div className="flex justify-between text-[10px] text-slate-500 font-medium">
                  <span>{formatCurrency(config.minAmount)}</span>
                  <span className="font-bold text-[#D91E2A]">Arraste ou digite acima</span>
                  <span>{formatCurrency(config.maxAmount)}</span>
                </div>
              </div>

              {/* Quick Amount Chips */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {[3000, 5000, 10000, 20000, 35000, 50000, 100000]
                  .filter((val) => val >= config.minAmount && val <= config.maxAmount)
                  .map((val) => (
                    <button
                      key={val}
                      type="button"
                      onClick={() => handleAmountChipClick(val)}
                      className={`px-3 py-1.5 text-xs font-bold rounded-xl border transition-all cursor-pointer ${
                        amount === val
                          ? 'bg-[#D91E2A] text-white border-[#D91E2A] shadow-xs'
                          : 'bg-white text-slate-700 border-slate-200 hover:border-slate-400'
                      }`}
                    >
                      {formatCurrency(val)}
                    </button>
                  ))}
              </div>
            </div>

            {/* Input 2: Months / Installments */}
            <div className="space-y-2.5 pt-2 border-t border-slate-200">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                  Prazo de Pagamento:
                </label>
                <span className="text-xs font-black text-slate-900 bg-white border border-slate-300 px-3 py-1 rounded-xl shadow-xs">
                  {months} {months === 1 ? 'mês' : 'meses'}
                </span>
              </div>

              {/* Popular Months Chips */}
              <div className="flex flex-wrap gap-1.5">
                {config.popularMonths.map((m) => (
                  <button
                    key={m}
                    type="button"
                    onClick={() => setMonths(m)}
                    className={`flex-1 min-w-[50px] py-2 px-2 text-xs font-bold rounded-xl border transition-all text-center cursor-pointer ${
                      months === m
                        ? 'bg-[#D91E2A] text-white border-[#D91E2A] shadow-xs'
                        : 'bg-white text-slate-700 border-slate-200 hover:border-slate-400'
                    }`}
                  >
                    {m}x
                  </button>
                ))}
              </div>
            </div>

            {/* Requirements Box */}
            <div className="p-3.5 bg-white rounded-2xl border border-slate-200 text-xs text-slate-700 space-y-1.5 shadow-xs">
              <span className="font-bold text-slate-900 block text-[10px] uppercase tracking-wider">Vantagens & Requisitos:</span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                {config.requirements.map((req, idx) => (
                  <div key={idx} className="flex items-center gap-1.5 text-[11px]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                    <span className="truncate">{req}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right / Result & Direct CTA Card (Solid High-Contrast Obsidian) */}
          <div className="lg:col-span-5 bg-[#12141C] text-white rounded-3xl p-5 sm:p-7 shadow-2xl border border-[#232736] space-y-5">
            
            <div className="flex items-center justify-between border-b border-[#232736] pb-3">
              <div>
                <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1">
                  <Sparkles className="w-3 h-3" /> Proposta Estimada
                </span>
                <h4 className="text-sm sm:text-base font-extrabold text-white font-['Outfit']">Resultado do Cálculo</h4>
              </div>
              <span className="bg-[#1C1F2B] text-gray-300 text-[10px] font-bold px-2.5 py-1 rounded-full border border-[#2D3346]">
                100% Gratuito
              </span>
            </div>

            {/* Main Result Numbers */}
            <div className="bg-[#181B24] rounded-2xl p-4 sm:p-5 border border-[#282D3D] space-y-2.5">
              <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">
                Parcela Estimada ({months}x):
              </div>
              <div className="text-2xl sm:text-3xl font-black text-white font-['Outfit'] flex items-baseline gap-1">
                <span className="text-[#FF4D5A]">{formatCurrency(installment)}</span>
                <span className="text-xs font-medium text-gray-400">/mês</span>
              </div>
              
              <div className="pt-2 border-t border-[#282D3D] flex items-center justify-between text-xs text-gray-300">
                <span>Valor Solicitado:</span>
                <strong className="text-white">{formatCurrency(effectiveAmount)}</strong>
              </div>
              <div className="flex items-center justify-between text-xs text-gray-300">
                <span>Economia Estimada:</span>
                <strong className="text-emerald-400">até {formatCurrency(totalSavings)}</strong>
              </div>
            </div>

            {/* Direct CTA or Optional Form Toggle */}
            {!showFastLeadForm ? (
              <div className="space-y-2.5">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 bg-[#25D366] hover:bg-[#20bd5a] text-white font-extrabold text-xs sm:text-sm rounded-2xl shadow-lg transition-all hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2"
                  id="simulator-cta-whatsapp"
                >
                  <WhatsAppIcon className="w-4 h-4 text-white" />
                  <span>Contratar no WhatsApp</span>
                </a>

                <button
                  type="button"
                  onClick={() => setShowFastLeadForm(true)}
                  className="w-full py-2.5 text-[11px] text-gray-300 hover:text-white font-semibold flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Ou preencher dados rápidos antes</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#FF4D5A]" />
                </button>
              </div>
            ) : (
              <form onSubmit={handleLeadSubmit} className="space-y-2.5 animate-in fade-in duration-200">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1">
                    Seu Nome:
                  </label>
                  <input
                    type="text"
                    required
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="Ex: Ana Silva"
                    className="w-full px-3 py-2 bg-[#181B24] border border-[#282D3D] rounded-xl text-xs text-white placeholder-gray-500 focus:outline-hidden focus:border-[#D91E2A]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1">
                      WhatsApp:
                    </label>
                    <input
                      type="tel"
                      required
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(maskPhone(e.target.value))}
                      placeholder="(61) 99999-9999"
                      className="w-full px-3 py-2 bg-[#181B24] border border-[#282D3D] rounded-xl text-xs text-white placeholder-gray-500 focus:outline-hidden focus:border-[#D91E2A]"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1">
                      CPF (Opcional):
                    </label>
                    <input
                      type="text"
                      value={customerCPF}
                      onChange={(e) => setCustomerCPF(maskCPF(e.target.value))}
                      placeholder="000.000.000-00"
                      className="w-full px-3 py-2 bg-[#181B24] border border-[#282D3D] rounded-xl text-xs text-white placeholder-gray-500 focus:outline-hidden focus:border-[#D91E2A]"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-[#D91E2A] hover:bg-[#B91C1C] text-white font-extrabold text-xs sm:text-sm rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer mt-1"
                >
                  <WhatsAppIcon className="w-4 h-4 text-white" />
                  <span>Enviar para Atendente</span>
                </button>
              </form>
            )}

            <div className="pt-2 flex items-center justify-center gap-2 text-[10px] text-gray-400 text-center">
              <Lock className="w-3 h-3 text-[#FF4D5A]" />
              <span>Sem cobrança prévia • Autorizado Banco Central</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
