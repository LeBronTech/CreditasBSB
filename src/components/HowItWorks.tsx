import React from 'react';
import { Smartphone, FileCheck, Zap, CheckCircle2 } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  return (
    <section id="como-funciona" className="py-14 lg:py-20 relative scroll-mt-20 bg-white border-y border-slate-200 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-2">
            <Zap className="w-3.5 h-3.5 text-emerald-600" /> Atendimento ágil • 100% Digital ou no Conic
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-['Outfit']">
            Contratação em <span className="text-[#D91E2A]">3 Passos</span>
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-slate-600">
            Crédito liberado em conta com rapidez e total segurança.
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 relative">
          
          {/* Step 1 */}
          <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 hover:border-[#D91E2A] transition-all shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#D91E2A] text-white flex items-center justify-center font-black text-sm mb-3 shadow-md">
                01
              </div>
              <h3 className="text-sm sm:text-base font-black text-slate-900 mb-1 font-['Outfit']">
                1. Simule Online
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Escolha o valor aproximado e o prazo no simulador ou fale direto no WhatsApp com um atendente para uma análise mais precisa.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-200 text-[11px] font-bold text-emerald-600 flex items-center gap-1">
              <Smartphone className="w-3.5 h-3.5" /> Atendimento ágil
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 hover:border-[#D91E2A] transition-all shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-slate-800 text-white flex items-center justify-center font-black text-sm mb-3 shadow-md border border-slate-700">
                02
              </div>
              <h3 className="text-sm sm:text-base font-black text-slate-900 mb-1 font-['Outfit']">
                2. Assinatura Digital
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Validação rápida da sua margem. Assine digitalmente com total segurança no celular sem burocracia.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-200 text-[11px] font-bold text-emerald-700 flex items-center gap-1">
              <FileCheck className="w-3.5 h-3.5" /> Sem taxa antecipada
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 hover:border-[#D91E2A] transition-all shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-black text-sm mb-3 shadow-md">
                03
              </div>
              <h3 className="text-sm sm:text-base font-black text-slate-900 mb-1 font-['Outfit']">
                3. Dinheiro em Conta
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Via transferência bancária: Dinheiro liberado até no mesmo dia direto na sua conta bancária.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-200 text-[11px] font-bold text-emerald-700 flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" /> Dinheiro liberado em conta
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
