import React from 'react';
import { ShieldAlert, ShieldCheck, Lock, AlertTriangle, CheckCircle } from 'lucide-react';
import { COMPANY_NAME } from '../data';

export const AntiFraudBanner: React.FC = () => {
  return (
    <section className="py-12 bg-gradient-to-r from-amber-500/10 via-red-500/10 to-amber-500/10 border-y border-amber-300/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-amber-200 shadow-md flex flex-col lg:flex-row items-center gap-6">
          
          {/* Warning Icon Box */}
          <div className="w-16 h-16 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center flex-shrink-0 shadow-inner">
            <ShieldAlert className="w-9 h-9 text-amber-700" />
          </div>

          {/* Text message */}
          <div className="space-y-1.5 flex-1 text-center lg:text-left">
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
              <span className="bg-amber-100 text-amber-800 text-[11px] font-black uppercase px-2.5 py-0.5 rounded-full">
                ⚠️ Alerta de Segurança e Antifraude
              </span>
              <span className="text-xs font-bold text-gray-900">
                A {COMPANY_NAME} preza pela transparência total
              </span>
            </div>

            <h3 className="text-lg sm:text-xl font-extrabold text-gray-900 font-['Outfit']">
              Nunca cobramos depósitos, taxas de avalista ou pagamentos antecipados!
            </h3>

            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              De acordo com as normas do Banco Central do Brasil, a contratação de empréstimo consignado é 100% gratuita para o cliente. 
              Desconfie de golpistas que exigem pix prévio. Nossos consultores oficiais atendem apenas pelos números e canais verificados da Credita BSB.
            </p>
          </div>

          {/* Seal */}
          <div className="flex-shrink-0 bg-emerald-50 border border-emerald-200 rounded-2xl px-5 py-3 text-center">
            <div className="flex items-center justify-center gap-1 text-emerald-700 font-black text-sm">
              <ShieldCheck className="w-4 h-4" /> 100% Auditado
            </div>
            <span className="text-[10px] font-semibold text-emerald-800 block">
              Regulamentado pelo Bacen
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};
