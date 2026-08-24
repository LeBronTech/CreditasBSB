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
    additionalNotes: cpf ? `CPF: ${cpf}` : undefined
  });

  return (
    <section className="py-14 lg:py-20 bg-[#18181B] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Direct & Objective Trust */}
          <div className="lg:col-span-5 space-y-5">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-500/20 text-red-300 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#D91E2A]" /> Atendimento Rápido
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold font-['Outfit'] leading-tight">
              Solicite sua proposta com a menor taxa de Brasília.
            </h2>

            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Sem burocracia, sem consulta ao SPC/Serasa e sem taxas antecipadas. Receba sua análise em minutos.
            </p>

            {/* Direct Checklist */}
            <div className="space-y-2.5 pt-1 text-xs sm:text-sm text-gray-200">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#D91E2A] flex-shrink-0" />
                <span><strong>Zero depósito prévio</strong> (100% seguro)</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#D91E2A] flex-shrink-0" />
                <span><strong>Dinheiro na conta via Pix</strong> no mesmo dia</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#D91E2A] flex-shrink-0" />
                <span><strong>Negativados são aprovados</strong></span>
              </div>
            </div>

            <div className="p-3.5 bg-white/5 border border-white/10 rounded-2xl flex items-center gap-2.5 text-xs text-gray-400">
              <ShieldCheck className="w-6 h-6 text-emerald-400 flex-shrink-0" />
              <span>Correspondente Bancário Autorizado pelo Banco Central. Dados protegidos pela LGPD.</span>
            </div>
          </div>

          {/* Right Column: High Conversion Form */}
          <div className="lg:col-span-7">
            <div className="bg-white text-gray-900 rounded-3xl p-6 sm:p-8 shadow-2xl border border-gray-100">
              
              <div className="mb-5 border-b border-gray-100 pb-3">
                <h3 className="text-xl sm:text-2xl font-black text-gray-900 font-['Outfit']">
                  Simulação Rápida
                </h3>
                <p className="text-xs text-gray-500 mt-0.5">
                  Receba a proposta calculada no seu WhatsApp sem compromisso.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-3.5">
                
                {/* Full Name */}
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-700 mb-1">
                    Nome Completo <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ex: Maria Ferreira dos Santos"
                    className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-300 rounded-xl text-xs sm:text-sm font-medium focus:bg-white focus:outline-hidden focus:border-[#D91E2A]"
                    id="form-input-name"
                  />
                </div>

                {/* WhatsApp & CPF */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-700 mb-1">
                      WhatsApp com DDD <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(maskPhone(e.target.value))}
                      placeholder="(61) 99999-9999"
                      className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-300 rounded-xl text-xs sm:text-sm font-medium focus:bg-white focus:outline-hidden focus:border-[#D91E2A]"
                      id="form-input-phone"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-700 mb-1">
                      CPF (Opcional)
                    </label>
                    <input
                      type="text"
                      value={cpf}
                      onChange={(e) => setCpf(maskCPF(e.target.value))}
                      placeholder="000.000.000-00"
                      className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-300 rounded-xl text-xs sm:text-sm font-medium focus:bg-white focus:outline-hidden focus:border-[#D91E2A]"
                      id="form-input-cpf"
                    />
                  </div>
                </div>

                {/* Category Selection */}
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-700 mb-1">
                    Modalidade Desejada:
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5">
                    {(['inss', 'cartao', 'portabilidade', 'fgts'] as LoanCategory[]).map((catKey) => {
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
                          className={`py-2 px-2 rounded-xl font-bold text-[11px] border transition-all text-center ${
                            category === catKey
                              ? 'bg-[#D91E2A] text-white border-[#D91E2A] shadow-xs'
                              : 'bg-gray-50 text-gray-700 border-gray-200 hover:border-gray-300'
                          }`}
                          id={`form-btn-cat-${catKey}`}
                        >
                          {item.name.replace('Crédito ', '').replace('Saque-Aniversário ', '')}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Amount & Installments */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-700 mb-1">
                      Valor Aproximado
                    </label>
                    <select
                      value={amount}
                      onChange={(e) => setAmount(Number(e.target.value))}
                      className="w-full px-3 py-2.5 bg-gray-50 border border-gray-300 rounded-xl text-xs sm:text-sm font-semibold focus:outline-hidden focus:border-[#D91E2A]"
                    >
                      <option value={3000}>R$ 3.000,00</option>
                      <option value={5000}>R$ 5.000,00</option>
                      <option value={10000}>R$ 10.000,00</option>
                      <option value={15000}>R$ 15.000,00</option>
                      <option value={25000}>R$ 25.000,00</option>
                      <option value={50000}>R$ 50.000,00</option>
                      <option value={100000}>R$ 100.000,00+</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-700 mb-1">
                      Prazo
                    </label>
                    <select
                      value={installments}
                      onChange={(e) => setInstallments(Number(e.target.value))}
                      className="w-full px-3 py-2.5 bg-gray-50 border border-gray-300 rounded-xl text-xs sm:text-sm font-semibold focus:outline-hidden focus:border-[#D91E2A]"
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
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 px-5 bg-[#D91E2A] hover:bg-[#B91C1C] text-white font-extrabold text-xs sm:text-sm rounded-xl shadow-lg transition-all hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer"
                    id="form-submit-button"
                  >
                    <span>Receber Proposta no WhatsApp</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                <p className="text-[10px] text-center text-gray-500 pt-0.5">
                  🔒 Não cobramos depósito prévio. Atendimento oficial Credita BSB.
                </p>

              </form>

            </div>
          </div>

        </div>

      </div>

      {/* Success Modal */}
      {isSuccessModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs">
          <div className="bg-white text-gray-900 rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl border border-gray-200 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="text-xl sm:text-2xl font-black text-gray-900 font-['Outfit']">
              Simulação Pronta!
            </h3>

            <p className="text-xs sm:text-sm text-gray-600">
              Proposta calculada para <strong>{formatCurrency(amount)}</strong> em <strong>{installments}x</strong> no <strong>{selectedCategoryConfig.name}</strong>.
            </p>

            <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 text-xs text-emerald-900">
              Clique abaixo para conversar diretamente com o consultor no WhatsApp:
            </div>

            <div className="space-y-2 pt-1">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsSuccessModalOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm rounded-xl shadow-md"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>Abrir Conversa no WhatsApp</span>
              </a>

              <button
                type="button"
                onClick={() => setIsSuccessModalOpen(false)}
                className="w-full py-2 text-xs text-gray-500 hover:text-gray-800 font-semibold cursor-pointer"
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
