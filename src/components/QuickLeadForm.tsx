import React, { useState } from 'react';
import { LOAN_CATEGORIES, WHATSAPP_NUMBER } from '../data';
import { LoanCategory } from '../types';
import { formatCurrency, maskPhone, maskCPF, generateWhatsAppLink } from '../utils/calculator';
import { ShieldCheck, CheckCircle2, MessageCircle, Sparkles, ArrowRight } from 'lucide-react';

export const QuickLeadForm: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [cpf, setCpf] = useState('');
  const [category, setCategory] = useState<LoanCategory>('inss');
  const [amount, setAmount] = useState<number>(15000);
  const [installments, setInstallments] = useState<number>(84);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  const selectedCategoryConfig = LOAN_CATEGORIES[category] || LOAN_CATEGORIES['inss'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccessModalOpen(true);
  };

  const whatsappUrl = generateWhatsAppLink({
    name,
    categoryName: selectedCategoryConfig.name,
    amount,
    months: installments,
    additionalNotes: cpf ? `CPF: ${cpf}` : undefined,
  });

  return (
    <section id="contato" className="py-14 lg:py-20 relative bg-gradient-to-br from-[#8B0000] via-[#A8131D] to-[#5C060B] border-y border-[#D91E2A]/40 shadow-2xl text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Direct & Objective Trust on Solid Red */}
          <div className="lg:col-span-5 space-y-4 text-white">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-xs border border-white/30 text-white text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-yellow-300" /> Atendimento Rápido
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold font-['Outfit'] leading-tight text-white">
              Solicite sua proposta com a menor taxa de Brasília.
            </h2>

            <p className="text-red-100 text-xs sm:text-sm leading-relaxed">
              Sem burocracia, sem consulta ao SPC/Serasa e sem taxas antecipadas. Receba sua análise em minutos diretamente no WhatsApp.
            </p>

            {/* Direct Checklist */}
            <div className="space-y-2 pt-1 text-xs text-white">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-300 flex-shrink-0" />
                <span><strong>Zero depósito prévio</strong> (100% seguro)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-300 flex-shrink-0" />
                <span><strong>Dinheiro na conta via Pix</strong> no mesmo dia</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-300 flex-shrink-0" />
                <span><strong>Negativados são aprovados</strong></span>
              </div>
            </div>

            <div className="p-3.5 bg-black/20 border border-white/20 rounded-2xl flex items-center gap-2.5 text-xs text-red-100">
              <ShieldCheck className="w-5 h-5 text-emerald-300 flex-shrink-0" />
              <span>Correspondente Bancário Autorizado pelo Banco Central. LGPD protegida.</span>
            </div>
          </div>

          {/* Right Column: High Contrast Solid White Form Card */}
          <div className="lg:col-span-7">
            <div className="bg-white text-slate-900 rounded-3xl p-5 sm:p-7 shadow-2xl border border-slate-100">
              
              <div className="mb-4 border-b border-slate-200 pb-2.5">
                <h3 className="text-lg sm:text-xl font-black text-slate-900 font-['Outfit']">
                  Simulação Rápida
                </h3>
                <p className="text-[11px] text-slate-500">
                  Receba a proposta calculada no seu WhatsApp sem compromisso.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-3">
                
                {/* Full Name */}
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Nome Completo <span className="text-[#D91E2A]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ex: Maria Ferreira dos Santos"
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-xl text-xs sm:text-sm font-medium text-slate-900 placeholder-slate-400 focus:outline-hidden focus:border-[#D91E2A]"
                    id="form-input-name"
                  />
                </div>

                {/* WhatsApp & CPF */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                      WhatsApp com DDD <span className="text-[#D91E2A]">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(maskPhone(e.target.value))}
                      placeholder="(61) 99999-9999"
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-xl text-xs sm:text-sm font-medium text-slate-900 placeholder-slate-400 focus:outline-hidden focus:border-[#D91E2A]"
                      id="form-input-phone"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                      CPF (Opcional)
                    </label>
                    <input
                      type="text"
                      value={cpf}
                      onChange={(e) => setCpf(maskCPF(e.target.value))}
                      placeholder="000.000.000-00"
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-xl text-xs sm:text-sm font-medium text-slate-900 placeholder-slate-400 focus:outline-hidden focus:border-[#D91E2A]"
                      id="form-input-cpf"
                    />
                  </div>
                </div>

                {/* Category Selection */}
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Modalidade Desejada:
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-1.5">
                    {(['inss', 'siape', 'cartao'] as LoanCategory[]).map((catKey) => {
                      const item = LOAN_CATEGORIES[catKey];
                      if (!item) return null;
                      return (
                        <button
                          key={catKey}
                          type="button"
                          onClick={() => {
                            setCategory(catKey);
                            setAmount(item.defaultAmount);
                            setInstallments(item.defaultMonths);
                          }}
                          className={`py-2 px-2 rounded-xl font-bold text-xs border transition-all text-center cursor-pointer ${
                            category === catKey
                              ? 'bg-[#D91E2A] text-white border-[#D91E2A] shadow-xs'
                              : 'bg-slate-50 text-slate-700 border-slate-200 hover:border-slate-400'
                          }`}
                          id={`form-btn-cat-${catKey}`}
                        >
                          {item.name}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Amount & Installments */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Valor Desejado (digite o valor) <span className="text-[#D91E2A]">*</span>
                    </label>
                    <div className="flex items-center rounded-xl bg-slate-50 border border-slate-300 focus-within:border-[#D91E2A] px-3 py-2">
                      <span className="text-xs font-bold text-slate-500 mr-1.5">R$</span>
                      <input
                        type="text"
                        inputMode="numeric"
                        value={amount ? amount.toLocaleString('pt-BR') : ''}
                        onChange={(e) => {
                          const val = parseInt(e.target.value.replace(/\D/g, ''), 10) || 0;
                          setAmount(val);
                        }}
                        placeholder="Ex: 15.000"
                        className="w-full text-xs sm:text-sm font-bold text-slate-900 focus:outline-hidden bg-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Prazo Desejado
                    </label>
                    <select
                      value={installments}
                      onChange={(e) => setInstallments(Number(e.target.value))}
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-xl text-xs font-semibold text-slate-900 focus:outline-hidden focus:border-[#D91E2A]"
                    >
                      <option value={24}>24 parcelas</option>
                      <option value={36}>36 parcelas</option>
                      <option value={48}>48 parcelas</option>
                      <option value={60}>60 parcelas</option>
                      <option value={72}>72 parcelas</option>
                      <option value={84}>84 parcelas</option>
                      <option value={96}>96 parcelas</option>
                    </select>
                  </div>
                </div>

                {/* Submit Action Button */}
                <div className="pt-1">
                  <button
                    type="submit"
                    className="w-full py-3 px-4 bg-[#D91E2A] hover:bg-[#B91C1C] text-white font-extrabold text-xs sm:text-sm rounded-xl shadow-lg transition-all hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer"
                    id="form-submit-button"
                  >
                    <span>Receber Proposta no WhatsApp</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                <p className="text-[9px] text-center text-slate-500 pt-0.5">
                  🔒 Não cobramos depósito prévio. Atendimento oficial Credita BSB.
                </p>

              </form>

            </div>
          </div>

        </div>

      </div>

      {/* Success Modal */}
      {isSuccessModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="bg-white text-gray-900 rounded-3xl p-6 max-w-sm w-full shadow-2xl border border-gray-200 text-center space-y-3">
            <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-6 h-6" />
            </div>

            <h3 className="text-lg font-black text-gray-900 font-['Outfit']">
              Simulação Pronta!
            </h3>

            <p className="text-xs text-gray-600">
              Proposta calculada para <strong>{formatCurrency(amount)}</strong> em <strong>{installments}x</strong> no <strong>{selectedCategoryConfig.name}</strong>.
            </p>

            <div className="p-2.5 bg-emerald-50 rounded-xl border border-emerald-200 text-xs text-emerald-900 font-medium">
              Clique abaixo para conversar diretamente com o consultor:
            </div>

            <div className="space-y-2 pt-1">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsSuccessModalOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs rounded-xl shadow-md"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Abrir no WhatsApp</span>
              </a>

              <button
                type="button"
                onClick={() => setIsSuccessModalOpen(false)}
                className="w-full py-1.5 text-xs text-gray-500 hover:text-gray-800 font-semibold cursor-pointer"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
