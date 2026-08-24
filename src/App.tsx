import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AntiFraudBanner } from './components/AntiFraudBanner';
import { Simulator } from './components/Simulator';
import { RateComparisonChart } from './components/RateComparisonChart';
import { Modalities } from './components/Modalities';
import { HowItWorks } from './components/HowItWorks';
import { Testimonials } from './components/Testimonials';
import { QuickLeadForm } from './components/QuickLeadForm';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { StickyWhatsAppBar } from './components/StickyWhatsAppBar';
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
    <div className="min-h-screen bg-[#F8F9FA] text-[#1E2024] flex flex-col font-['Plus_Jakarta_Sans'] antialiased selection:bg-[#D91E2A] selection:text-white">
      {/* Navigation Header */}
      <Header onOpenSimulator={scrollToSimulator} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section with Live CTA & Audience Switcher */}
        <Hero
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          onScrollToSimulator={scrollToSimulator}
        />

        {/* Security & Anti-Fraud Disclaimer */}
        <AntiFraudBanner />

        {/* Interactive Loan Simulator */}
        <Simulator
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />

        {/* Rate & Cost Comparison Chart */}
        <RateComparisonChart />

        {/* Modalities Detail Section */}
        <Modalities
          onSelectCategory={setSelectedCategory}
          onScrollToSimulator={scrollToSimulator}
        />

        {/* 3-Step Simple Process */}
        <HowItWorks />

        {/* Testimonials with Category Filtering */}
        <Testimonials />

        {/* High Conversion Lead Form */}
        <QuickLeadForm />

        {/* FAQ with Search */}
        <FAQ />
      </main>

      {/* Regulatory Footer */}
      <Footer />

      {/* Sticky & Floating WhatsApp Support Bar */}
      <StickyWhatsAppBar />
    </div>
  );
}
