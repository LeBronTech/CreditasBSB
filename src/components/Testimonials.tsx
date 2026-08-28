import React from 'react';
import { TESTIMONIALS, WHATSAPP_NUMBER } from '../data';
import { Star, CheckCircle2, Users, MessageCircle } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const directWhatsAppUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    'Olá Credita BSB! Vi os depoimentos no site e gostaria de fazer uma simulação de crédito.'
  )}`;

  return (
    <section id="depoimentos" className="py-14 lg:py-20 relative scroll-mt-20 bg-white border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-200 text-[#D91E2A] text-xs font-bold uppercase tracking-wider mb-2">
            <Users className="w-3.5 h-3.5 text-[#D91E2A]" /> Avaliações Reais
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-['Outfit']">
            Quem contratou na <span className="text-[#D91E2A]">Credita BSB</span> aprova
          </h2>
          <div className="mt-2 flex items-center justify-center gap-2 text-xs font-bold text-slate-600">
            <div className="flex text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span>Nota 4.9/5 em Brasília (+17 anos de confiança)</span>
          </div>
        </div>

        {/* Testimonial Cards Grid with Solid Clean Styling */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-slate-50 rounded-2xl p-4 sm:p-5 border border-slate-200 hover:border-[#D91E2A] transition-all flex flex-col justify-between shadow-xs"
            >
              <div>
                <div className="flex items-center justify-between mb-2.5">
                  <div className="flex text-amber-500">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[9px] font-semibold text-slate-400">{t.date}</span>
                </div>

                <div className="inline-block bg-emerald-50 text-emerald-700 text-[10px] font-bold px-2 py-0.5 rounded-md mb-2.5 border border-emerald-200">
                  Liberado: {t.loanAmount}
                </div>

                <p className="text-[11px] text-slate-700 leading-relaxed italic mb-3">
                  "{t.text}"
                </p>
              </div>

              {/* Author */}
              <div className="pt-2.5 border-t border-slate-200 flex items-center gap-2">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-8 h-8 rounded-full object-cover border border-slate-200"
                  loading="lazy"
                />
                <div className="min-w-0">
                  <div className="flex items-center gap-1">
                    <h4 className="font-bold text-xs text-slate-900 truncate">{t.name}</h4>
                    <CheckCircle2 className="w-3 h-3 text-emerald-600 flex-shrink-0" />
                  </div>
                  <p className="text-[10px] text-slate-500 truncate">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <div className="mt-6 text-center">
          <a
            href={directWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs sm:text-sm rounded-xl shadow-md transition-all hover:scale-105 active:scale-95"
            id="depoimentos-cta-whatsapp"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Fazer Simulação pelo WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
