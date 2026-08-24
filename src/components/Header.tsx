import React, { useState } from 'react';
import { Logo } from './Logo';
import { MessageCircle, Menu, X } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../data';
import { LiveSimulationAlert } from './LiveSimulationAlert';

interface HeaderProps {
  onOpenSimulator?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenSimulator }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const directWhatsAppUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá Credita BSB! Gostaria de fazer uma simulação de Crédito Consignado com a menor taxa do mercado.')}`;

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-xs">
      {/* Top slim bar dedicated exclusively to live simulation alerts */}
      <LiveSimulationAlert />

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <a href="#" className="focus:outline-hidden" id="header-brand-logo">
            <Logo size="md" />
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold text-gray-700">
            <a href="#simulador" className="hover:text-[#D91E2A] transition-colors py-2">
              Simulador
            </a>
            <a href="#comparativo" className="hover:text-[#D91E2A] transition-colors py-2 flex items-center gap-1">
              Comparador de Taxas
              <span className="bg-red-50 text-[#D91E2A] text-[10px] font-bold px-1.5 py-0.5 rounded-sm">Menor Taxa</span>
            </a>
            <a href="#modalidades" className="hover:text-[#D91E2A] transition-colors py-2">
              Modalidades
            </a>
            <a href="#como-funciona" className="hover:text-[#D91E2A] transition-colors py-2">
              Como Funciona
            </a>
            <a href="#depoimentos" className="hover:text-[#D91E2A] transition-colors py-2">
              Depoimentos
            </a>
            <a href="#duvidas" className="hover:text-[#D91E2A] transition-colors py-2">
              Dúvidas
            </a>
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#simulador"
              onClick={onOpenSimulator}
              className="px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-gray-800 bg-gray-100 hover:bg-gray-200 rounded-lg transition-all"
              id="header-cta-simular"
            >
              Simular Agora
            </a>
            <a
              href={directWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white text-sm font-bold rounded-lg shadow-sm hover:shadow-md transition-all active:scale-98"
              id="header-cta-whatsapp"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Chamar no WhatsApp</span>
            </a>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href={directWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 bg-[#25D366] text-white rounded-lg"
              title="WhatsApp"
              id="header-mobile-whatsapp"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg text-gray-700 hover:bg-gray-100 focus:outline-hidden"
              aria-label="Abrir menu"
              id="header-mobile-toggle"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white px-4 pt-3 pb-6 space-y-3 shadow-lg animate-in slide-in-from-top duration-200">
          <a
            href="#simulador"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2.5 text-base font-semibold text-gray-800 border-b border-gray-50"
          >
            🎯 Simulador de Crédito
          </a>
          <a
            href="#comparativo"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2.5 text-base font-semibold text-[#D91E2A] border-b border-gray-50"
          >
            📊 Comparador de Taxas (Nossa economia)
          </a>
          <a
            href="#modalidades"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2.5 text-base font-semibold text-gray-800 border-b border-gray-50"
          >
            💼 Modalidades (INSS, CLT, FGTS, SIAPE)
          </a>
          <a
            href="#como-funciona"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2.5 text-base font-semibold text-gray-800 border-b border-gray-50"
          >
            ⚡ Como Funciona em 3 Passos
          </a>
          <a
            href="#depoimentos"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2.5 text-base font-semibold text-gray-800 border-b border-gray-50"
          >
            ⭐ Depoimentos de Clientes
          </a>
          <a
            href="#duvidas"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2.5 text-base font-semibold text-gray-800"
          >
            ❓ Perguntas Frequentes
          </a>

          <div className="pt-2 space-y-2">
            <a
              href={directWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 bg-[#25D366] text-white font-bold rounded-xl shadow-md text-sm"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
              Falar com Especialista no WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
