import React, { useState } from 'react';
import { Logo } from './Logo';
import { WhatsAppIcon } from './WhatsAppIcon';
import { Menu, X } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../data';
import { LiveSimulationAlert } from './LiveSimulationAlert';

interface HeaderProps {
  onOpenSimulator?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenSimulator }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const directWhatsAppUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    '♦️ Olá Credita BSB! Gostaria de consultar uma simulação de crédito.'
  )}`;

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-xs">
      {/* Top slim bar dedicated exclusively to live simulation alerts (3s each) */}
      <LiveSimulationAlert />

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          {/* Brand Logo */}
          <a href="#" className="focus:outline-hidden" id="header-brand-logo">
            <Logo variant="light" size="sm" />
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-6 text-xs font-bold text-slate-700 uppercase tracking-wider">
            <a href="#como-funciona" className="hover:text-[#D91E2A] transition-colors py-1">
              Como Funciona
            </a>
            <a href="#comparativo" className="hover:text-[#D91E2A] transition-colors py-1 flex items-center gap-1">
              Comparativo
              <span className="bg-[#D91E2A] text-white text-[9px] font-black px-1.5 py-0.5 rounded-sm">1,39%</span>
            </a>
            <a href="#contato" className="hover:text-[#D91E2A] transition-colors py-1">
              Contato
            </a>
            <a href="#depoimentos" className="hover:text-[#D91E2A] transition-colors py-1">
              Depoimentos
            </a>
            <a href="#simulador" className="hover:text-[#D91E2A] transition-colors py-1">
              Simulador
            </a>
            <a href="#duvidas" className="hover:text-[#D91E2A] transition-colors py-1">
              Dúvidas
            </a>
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-2.5">
            <a
              href="#simulador"
              onClick={onOpenSimulator}
              className="px-3.5 py-2 text-xs font-bold uppercase tracking-wider text-slate-800 bg-slate-100 hover:bg-slate-200 border border-slate-300 rounded-xl transition-all shadow-xs"
              id="header-cta-simular"
            >
              Simular
            </a>
            <a
              href={directWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold rounded-xl shadow-md transition-all active:scale-98"
              id="header-cta-whatsapp"
            >
              <WhatsAppIcon className="w-3.5 h-3.5 text-white" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href={directWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-[#25D366] text-white rounded-xl shadow-sm flex items-center justify-center"
              title="WhatsApp"
              id="header-mobile-whatsapp"
            >
              <WhatsAppIcon className="w-4 h-4 text-white" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus:outline-hidden"
              aria-label="Abrir menu"
              id="header-mobile-toggle"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu with Clean Solid Light style */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-2 shadow-2xl animate-in slide-in-from-top duration-200">
          <a
            href="#simulador"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-semibold text-slate-800 border-b border-slate-100"
          >
            🎯 Simulador de Crédito
          </a>
          <a
            href="#comparativo"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-semibold text-[#D91E2A] border-b border-slate-100"
          >
            📊 Comparador de Taxas (Economia)
          </a>
          <a
            href="#como-funciona"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-semibold text-slate-800 border-b border-slate-100"
          >
            ⚡ Como Funciona
          </a>
          <a
            href="#depoimentos"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-semibold text-slate-800 border-b border-slate-100"
          >
            ⭐ Depoimentos
          </a>
          <a
            href="#duvidas"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-semibold text-slate-800"
          >
            ❓ Perguntas Frequentes
          </a>

          <div className="pt-2">
            <a
              href={directWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 bg-[#25D366] text-white font-bold rounded-xl shadow-md text-xs"
            >
              <WhatsAppIcon className="w-4 h-4 text-white" />
              <span>Falar no WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
