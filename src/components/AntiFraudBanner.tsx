import React from 'react';
import { ShieldAlert, ShieldCheck } from 'lucide-react';
import { COMPANY_NAME } from '../data';

export const AntiFraudBanner: React.FC = () => {
  return (
    <section className="py-6 relative z-10 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-amber-50/80 rounded-2xl p-4 sm:p-5 border border-amber-200 shadow-xs flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          
          {/* Warning Icon Box */}
          <div className="w-11 h-11 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center flex-shrink-0 border border-amber-200">
            <ShieldAlert className="w-6 h-6" />
          </div>

          {/* Text message */}
          <div className="space-y-0.5 flex-1">
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-1.5">
              <span className="bg-amber-100 text-amber-800 text-[10px] font-black uppercase px-2 py-0.5 rounded-full border border-amber-300">
                Alerta de Segurança
              </span>
              <span className="text-[11px] font-bold text-slate-700">
                {COMPANY_NAME} • Transparência Total
              </span>
            </div>

            <h3 className="text-xs sm:text-sm font-black text-slate-900 font-['Outfit']">
              Nunca cobramos depósitos, taxas de avalista ou pagamentos antecipados!
            </h3>

            <p className="text-[11px] text-slate-600 leading-relaxed max-w-3xl">
              Empréstimo consignado regulamentado pelo Banco Central não exige nenhum PIX prévio. Atendimento 100% seguro.
            </p>
          </div>

          {/* Seal */}
          <div className="flex-shrink-0 bg-emerald-50 border border-emerald-300 rounded-xl px-3.5 py-2 text-center shadow-2xs">
            <div className="flex items-center justify-center gap-1 text-emerald-800 font-black text-xs">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> 100% Auditado
            </div>
            <span className="text-[9px] font-bold text-emerald-700 block">
              Regulamentado Bacen
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};
