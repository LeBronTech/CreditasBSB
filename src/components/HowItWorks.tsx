import React from 'react';
import { Smartphone, FileCheck, CheckCircle2, Zap, ArrowRight, ShieldCheck } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../data';

export const HowItWorks: React.FC = () => {
  const directWhatsAppUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá Credita BSB! Gostaria de saber mais sobre como funciona o empréstimo consignado.')}`;

  return (
    <section id="como-funciona" className="py-16 lg:py-24 bg-white relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-red-100 text-[#D91E2A] text-xs font-bold uppercase tracking-wider mb-3">
            <Zap className="w-3.5 h-3.5" /> 100% Digital e Sem Sair de Casa
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight font-['Outfit']">
            Como funciona a contratação na Credita BSB em 3 passos
          </h2>
          <p className="mt-3 text-base text-gray-600">
            Esqueça filas de bancos, papelada desnecessária e burocracia. O processo é simples, rápido e seguro.
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          
          {/* Step 1 */}
          <div className="bg-[#F8F9FA] rounded-3xl p-8 border border-gray-200 hover:border-[#D91E2A]/50 transition-all shadow-xs relative group">
            <div className="w-14 h-14 rounded-2xl bg-[#D91E2A] text-white flex items-center justify-center font-black text-xl mb-6 shadow-md shadow-red-900/20 group-hover:scale-110 transition-transform">
              01
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2 font-['Outfit']">
              1. Simule Online
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Escolha o valor que precisa e a quantidade de parcelas no nosso simulador inteligente ou envie uma mensagem no WhatsApp.
            </p>
            <div className="mt-6 pt-4 border-t border-gray-200 text-xs font-bold text-[#D91E2A] flex items-center gap-1">
              <Smartphone className="w-4 h-4" /> Em menos de 1 minuto
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-[#F8F9FA] rounded-3xl p-8 border border-gray-200 hover:border-[#D91E2A]/50 transition-all shadow-xs relative group">
            <div className="w-14 h-14 rounded-2xl bg-gray-900 text-white flex items-center justify-center font-black text-xl mb-6 shadow-md group-hover:scale-110 transition-transform">
              02
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2 font-['Outfit']">
              2. Aprovação & Assinatura
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Nosso consultor local em Brasília valida sua margem consignável. Você assina a proposta digitalmente com segurança no seu celular.
            </p>
            <div className="mt-6 pt-4 border-t border-gray-200 text-xs font-bold text-gray-800 flex items-center gap-1">
              <FileCheck className="w-4 h-4 text-emerald-600" /> Sem taxas ou despesas prévias
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-[#F8F9FA] rounded-3xl p-8 border border-gray-200 hover:border-emerald-500/50 transition-all shadow-xs relative group">
            <div className="w-14 h-14 rounded-2xl bg-emerald-600 text-white flex items-center justify-center font-black text-xl mb-6 shadow-md shadow-emerald-900/20 group-hover:scale-110 transition-transform">
              03
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2 font-['Outfit']">
              3. Pix na sua Conta
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              O dinheiro é depositado diretamente na sua conta corrente ou poupança via PIX em até 30 minutos após a averbação do contrato.
            </p>
            <div className="mt-6 pt-4 border-t border-gray-200 text-xs font-bold text-emerald-700 flex items-center gap-1">
              <Zap className="w-4 h-4" /> Dinheiro disponível para usar como quiser
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
