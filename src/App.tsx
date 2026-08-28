import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { HowItWorks } from './components/HowItWorks';
import { Simulator } from './components/Simulator';
import { RateComparisonChart } from './components/RateComparisonChart';
import { QuickLeadForm } from './components/QuickLeadForm';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { StickyWhatsAppBar } from './components/StickyWhatsAppBar';
import { FloatingScrollLogoPieces } from './components/FloatingScrollLogoPieces';
import { ScrollReveal } from './components/ScrollReveal';
import { LoanCategory } from './types';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<LoanCategory>('inss');

  const scrollToSimulator = () => {
    const el = document.getElementById('simulador');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen text-[#1E2024] flex flex-col font-['Plus_Jakarta_Sans'] antialiased selection:bg-[#D91E2A] selection:text-white overflow-x-hidden">
      
      {/* =========================================================================
          CLEAN SOLID MINIMALIST BACKGROUND
         ========================================================================= */}
      <div
        aria-hidden="true"
        className="fixed inset-0 pointer-events-none -z-10 bg-[#F8FAFC]"
      />

      {/* Floating 3 Pieces of Credita BSB Logo responding to scroll */}
      <FloatingScrollLogoPieces />

      {/* Navigation Header */}
      <Header onOpenSimulator={scrollToSimulator} />

      {/* Main Content Sections */}
      <main className="flex-1 relative z-10">
        
        {/* 1. Hero Section */}
        <Hero
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          onScrollToSimulator={scrollToSimulator}
        />

        {/* 2. 3-Step Simple Process (Contratação em 3 Passos) */}
        <ScrollReveal variant="slide-left" delay={0.1}>
          <HowItWorks />
        </ScrollReveal>

        {/* 3. Rate & Cost Comparison Chart */}
        <ScrollReveal variant="scale-blur" delay={0.1}>
          <RateComparisonChart />
        </ScrollReveal>

        {/* 4. High Conversion Quick Lead Form */}
        <ScrollReveal variant="scale-blur" delay={0.1}>
          <QuickLeadForm />
        </ScrollReveal>

        {/* 5. Testimonials */}
        <ScrollReveal variant="slide-right" delay={0.1}>
          <Testimonials />
        </ScrollReveal>

        {/* 6. Interactive Loan Simulator (Digitável & Direct - Moved to end of page) */}
        <ScrollReveal variant="glass-pop" delay={0.1}>
          <Simulator
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />
        </ScrollReveal>

        {/* 7. FAQ with Search */}
        <ScrollReveal variant="fade-up" delay={0.1}>
          <FAQ />
        </ScrollReveal>
      </main>

      {/* Regulatory Footer */}
      <Footer />

      {/* Sticky & Floating WhatsApp Support Bar */}
      <StickyWhatsAppBar />
    </div>
  );
}
