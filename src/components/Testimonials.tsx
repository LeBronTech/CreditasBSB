import React, { useState } from 'react';
import { TESTIMONIALS, WHATSAPP_NUMBER } from '../data';
import { Star, CheckCircle2, Users, MessageCircle } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const directWhatsAppUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá Credita BSB! Vi os depoimentos no site e gostaria de fazer uma simulação de crédito.')}`;

  return (
    <section id="depoimentos" className="py-14 lg:py-20 bg-white relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-100 text-[#D91E2A] text-xs font-bold uppercase tracking-wider mb-2">
            <Users className="w-3.5 h-3.5" /> Avaliações Reais
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight font-['Outfit']">
            Quem contratou na <span className="text-[#D91E2A]">Credita BSB</span> aprova
          </h2>
          <div className="mt-3 flex items-center justify-center gap-2 text-sm font-bold text-gray-800">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400" />
              ))}
            </div>
            <span>Nota 4.9/5 em Brasília (+17 anos de confiança)</span>
          </div>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-[#F8F9FA] rounded-2xl p-5 border border-gray-200 hover:border-[#D91E2A]/50 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] font-semibold text-gray-400">{t.date}</span>
                </div>

                <div className="inline-block bg-emerald-100 text-emerald-800 text-[11px] font-bold px-2.5 py-0.5 rounded-md mb-3">
                  Liberado: {t.loanAmount}
                </div>

                <p className="text-xs text-gray-700 leading-relaxed italic mb-4">
                  "{t.text}"
                </p>
              </div>

              {/* Author */}
              <div className="pt-3 border-t border-gray-200/80 flex items-center gap-2.5">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-9 h-9 rounded-full object-cover border border-white"
                  loading="lazy"
                />
                <div className="min-w-0">
                  <div className="flex items-center gap-1">
                    <h4 className="font-bold text-xs text-gray-900 truncate">{t.name}</h4>
                    <CheckCircle2 className="w-3 h-3 text-emerald-500 flex-shrink-0" />
                  </div>
                  <p className="text-[11px] text-gray-500 truncate">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <div className="mt-8 text-center">
          <a
            href={directWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm rounded-xl shadow-md transition-all hover:scale-105 active:scale-95"
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
