import React, { useState } from 'react';
import { FAQ_ITEMS, WHATSAPP_NUMBER } from '../data';
import { HelpCircle, ChevronDown, ChevronUp, MessageCircle, Search } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchTerm, setSearchTerm] = useState<string>('');

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const filteredFaqs = FAQ_ITEMS.filter(
    (item) =>
      item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const directWhatsAppUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    'Olá! Tenho uma dúvida sobre o empréstimo consignado na Credita BSB.'
  )}`;

  return (
    <section id="duvidas" className="py-14 lg:py-20 relative scroll-mt-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-200 text-[#D91E2A] text-xs font-bold uppercase tracking-wider mb-2">
            <HelpCircle className="w-3.5 h-3.5 text-[#D91E2A]" /> Dúvidas Frequentes
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-['Outfit']">
            Perguntas Frequentes
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-slate-600">
            Tire suas dúvidas antes de contratar com a Credita BSB.
          </p>

          {/* Quick Search in FAQ */}
          <div className="mt-4 relative max-w-md mx-auto">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Digite sua dúvida..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-3 py-2.5 bg-white border border-slate-300 rounded-xl text-xs text-slate-900 placeholder-slate-400 focus:outline-hidden focus:border-[#D91E2A] shadow-xs"
            />
          </div>
        </div>

        {/* Accordion List with Solid Minimalist Styling */}
        <div className="space-y-2.5">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? 'bg-white border-[#D91E2A] shadow-md ring-1 ring-[#D91E2A]'
                      : 'bg-white border-slate-200 hover:border-slate-300 shadow-xs'
                  }`}
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full p-4 text-left flex items-center justify-between gap-4 font-bold text-xs sm:text-sm text-slate-900 focus:outline-hidden cursor-pointer"
                  >
                    <span className="font-['Outfit']">{faq.question}</span>
                    <span className="p-1 rounded-lg bg-slate-100 text-slate-700 flex-shrink-0 border border-slate-200">
                      {isOpen ? <ChevronUp className="w-3.5 h-3.5 text-[#D91E2A]" /> : <ChevronDown className="w-3.5 h-3.5" />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-4 pb-4 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="text-center py-6 text-xs text-slate-400">
              Nenhuma pergunta encontrada para sua busca.
            </div>
          )}
        </div>

        {/* Still have questions banner */}
        <div className="mt-8 bg-white border border-slate-200 rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left shadow-md">
          <div>
            <h4 className="text-xs sm:text-sm font-bold text-slate-900">
              Ainda ficou com alguma dúvida?
            </h4>
            <p className="text-[11px] text-slate-500">
              Fale direto com a equipe Credita BSB no WhatsApp.
            </p>
          </div>
          <a
            href={directWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs rounded-xl shadow-md transition-all whitespace-nowrap"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-white" />
            <span>Falar no WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
