import React from 'react';
import { Logo } from './Logo';
import { COMPANY_NAME, COMPANY_CNPJ, COMPANY_ADDRESS, WHATSAPP_DISPLAY, WHATSAPP_NUMBER, COMPANY_INSTAGRAM, COMPANY_INSTAGRAM_URL, COMPANY_YEARS } from '../data';
import { MessageCircle, Phone, MapPin, Instagram, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá Credita BSB! Gostaria de tirar uma dúvida sobre crédito consignado.')}`;

  return (
    <footer className="bg-[#111215] text-gray-400 text-xs border-t border-gray-800 pt-12 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-10 border-b border-gray-800">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-5 space-y-3">
            <Logo variant="dark" size="md" />
            <p className="text-gray-400 text-xs max-w-md leading-relaxed mt-2">
              <strong className="text-white">Credita BSB - Seu Agente de Crédito</strong> ({COMPANY_YEARS}). Correspondente bancário autorizado pelo Banco Central, especializado em Consignado INSS, Servidores SIAPE, Cartões e Portabilidades.
            </p>
            
            <div className="pt-2 flex flex-col gap-2 text-xs text-gray-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#D91E2A] flex-shrink-0 mt-0.5" />
                <span>{COMPANY_ADDRESS}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#D91E2A] flex-shrink-0" />
                <span>WhatsApp / Atendimento: <strong className="text-white">{WHATSAPP_DISPLAY}</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <Instagram className="w-4 h-4 text-[#D91E2A] flex-shrink-0" />
                <a
                  href={COMPANY_INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#D91E2A] font-bold transition-colors"
                >
                  Instagram: {COMPANY_INSTAGRAM}
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Fast Links */}
          <div className="lg:col-span-3 space-y-2">
            <h4 className="font-bold text-white uppercase tracking-wider text-xs font-['Outfit']">
              Serviços
            </h4>
            <ul className="space-y-1.5 text-xs">
              <li>
                <a href="#simulador" className="hover:text-white transition-colors">Crédito Consignado (INSS e SIAPE)</a>
              </li>
              <li>
                <a href="#simulador" className="hover:text-white transition-colors">Cartões Consignado e Benefício</a>
              </li>
              <li>
                <a href="#simulador" className="hover:text-white transition-colors">Portabilidade com Troco</a>
              </li>
              <li>
                <a href="#simulador" className="hover:text-white transition-colors">Saque-Aniversário FGTS</a>
              </li>
              <li>
                <a href="#comparativo" className="hover:text-white transition-colors">Comparador de Taxas dos Bancos</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Contact Card */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-bold text-white uppercase tracking-wider text-xs font-['Outfit']">
              Atendimento Direto
            </h4>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4 space-y-2.5">
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                <span>Atendimento Online e no Conic</span>
              </div>
              <p className="text-[11px] text-gray-300">
                Segunda a Sexta: 08:00 às 18:00
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold rounded-xl text-xs transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Conversar no WhatsApp</span>
              </a>
            </div>
          </div>

        </div>

        {/* Regulatory & Security Disclaimer */}
        <div className="pt-6 pb-2 text-[11px] text-gray-500 space-y-2 leading-relaxed">
          <p>
            <strong>Informações Regulatórias:</strong> A Credita BSB atua como Correspondente Bancário nos termos da Resolução nº 3.954 do Banco Central do Brasil. Taxas a partir de 1,39% a.m. (17,98% a.a.) conforme limites do CNPS e Banco Central. Não cobramos nenhum depósito antecipado.
          </p>
          <p>
            <strong>CNPJ:</strong> {COMPANY_CNPJ} • {COMPANY_NAME} • {COMPANY_ADDRESS}
          </p>
        </div>

      </div>
    </footer>
  );
};
