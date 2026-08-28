import React from 'react';
import { Smartphone, FileCheck, Zap, ArrowRight, CheckCircle2 } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../data';

export const HowItWorks: React.FC = () => {
  const directWhatsAppUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    'Olá Credita BSB! Gostaria de entender o processo de contratação.'
  )}`;

  return (
    <section id="como-funciona" className="py-14 lg:py-20 relative scroll-mt-20 bg-white border-y border-slate-200 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-200 text-[#D91E2A] text-xs font-bold uppercase tracking-wider mb-2">
            <Zap className="w-3.5 h-3.5 text-[#D91E2A]" /> 100% Digital ou Presencial no Conic
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-['Outfit']">
            Contratação em <span className="text-[#D91E2A]">3 Passos</span>
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-slate-600">
            Rápido, seguro e sem sair de casa.
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
                Escolha o valor e o prazo no simulador ou fale direto no WhatsApp com um atendente.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-200 text-[11px] font-bold text-[#D91E2A] flex items-center gap-1">
              <Smartphone className="w-3.5 h-3.5" /> Menos de 1 minuto
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
                Validação rápida da sua margem. Assine digitalmente com total segurança no celular.
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
                3. Dinheiro via Pix
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Valor creditado direto na sua conta bancária para você usar como preferir.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-200 text-[11px] font-bold text-emerald-700 flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" /> Liberação expressa
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
