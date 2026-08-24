import React, { useState } from 'react';
import { FAQ_ITEMS, WHATSAPP_NUMBER } from '../data';
import { HelpCircle, ChevronDown, ChevronUp, MessageCircle, Search } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchTerm, setSearchTerm] = useState<string>('');

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const filteredFaqs = FAQ_ITEMS.filter(item =>
    item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const directWhatsAppUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá! Tenho uma dúvida sobre o empréstimo consignado na Credita BSB.')}`;

  return (
    <section id="duvidas" className="py-16 lg:py-24 bg-white relative scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-red-100 text-[#D91E2A] text-xs font-bold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5" /> Dúvidas Frequentes
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight font-['Outfit']">
            Perguntas e Respostas sobre o Consignado
          </h2>
          <p className="mt-3 text-base text-gray-600">
            Tire suas dúvidas antes de contratar. Se precisar de ajuda, fale diretamente com nossa equipe.
          </p>

          {/* Quick Search in FAQ */}
          <div className="mt-6 relative max-w-md mx-auto">
            <Search className="w-4 h-4 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Digite sua dúvida (ex: negativado, taxas, prazo)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-[#F8F9FA] border border-gray-300 rounded-2xl text-sm focus:outline-hidden focus:border-[#D91E2A] focus:bg-white transition-all"
            />
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? 'bg-[#F8F9FA] border-gray-300 shadow-xs'
                      : 'bg-white border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleAccordion(index)}
                    className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 font-bold text-gray-900 text-base sm:text-lg cursor-pointer font-['Outfit']"
                    id={`faq-toggle-${index}`}
                  >
                    <span>{faq.question}</span>
                    <div className="p-1 rounded-full bg-gray-100 text-gray-600 flex-shrink-0">
                      {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-1 text-sm text-gray-600 leading-relaxed border-t border-gray-200/60 animate-in fade-in duration-150">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="text-center py-8 text-gray-500 text-sm">
              Nenhuma pergunta encontrada com esse termo. Fale conosco no WhatsApp para tirar qualquer dúvida!
            </div>
          )}
        </div>

        {/* Bottom Support Callout */}
        <div className="mt-10 p-6 bg-red-50 border border-red-100 rounded-3xl text-center space-y-3">
          <h4 className="font-bold text-gray-900 text-base">Ainda tem alguma dúvida específica sobre o seu benefício?</h4>
          <p className="text-xs text-gray-600 max-w-lg mx-auto">
            Nossos consultores autorizados em Brasília atendem de forma humanizada e rápida pelo WhatsApp.
          </p>
          <div>
            <a
              href={directWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm rounded-xl shadow-xs transition-all hover:scale-105 active:scale-95"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Tirar Dúvidas com Especialista</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
