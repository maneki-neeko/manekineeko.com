import React from 'react';
import Header from '@/components/landing/Header';
import Hero from '@/components/landing/Hero';
import ComparisonBar from '@/components/landing/ComparisonBar';
import PricingPlans from '@/components/landing/PricingPlans';
import Cases from '@/components/landing/Cases';
import Process from '@/components/landing/Process';
import Faq from '@/components/landing/Faq';
import ContactForm from '@/components/landing/ContactForm';
import Footer from '@/components/landing/Footer';
import FloatingWhatsApp from '@/components/landing/FloatingWhatsApp';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-obsidian-bg text-[#F3F4F6] selection:bg-amber selection:text-white flex flex-col">
      {/* 1. Topo Fixo com Monograma, Menu e CTA */}
      <Header />

      {/* Conteúdo Principal */}
      <main className="flex-1 w-full">
        {/* 2. Abertura (Hero) + Showcase Interativo de Sites */}
        <Hero />

        {/* 3. Comparativo: Maneki Neeko vs Templates Wix vs Agências Caras */}
        <ComparisonBar />

        {/* 4. Serviços & Pacotes Transparentes (Unificado) */}
        <PricingPlans />

        {/* 6. Cases de Clientes com Resultados Reais */}
        <Cases />

        {/* 7. Como Funciona (Processo Simples em 4 Passos) */}
        <Process />

        {/* 8. Perguntas Frequentes (FAQ Accordion) */}
        <Faq />

        {/* 9. Formulário de Orçamento Rápido & WhatsApp */}
        <ContactForm />
      </main>

      {/* 10. Rodapé Institucional */}
      <Footer />

      {/* 11. Botão Flutuante de WhatsApp para Conversão Imediata */}
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
