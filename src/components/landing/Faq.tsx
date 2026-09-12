import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export const Faq: React.FC = () => {
  const faqs = [
    {
      id: 'item-1',
      question: 'Como funciona o orçamento e as condições de pagamento?',
      answer:
        'Analisamos as necessidades do seu negócio e enviamos uma proposta personalizada, transparente e sem custos escondidos. Facilitamos o pagamento com opções no cartão de crédito ou à vista via PIX.',
    },
    {
      id: 'item-2',
      question: 'Quanto tempo demora para meu site ficar pronto e no ar?',
      answer:
        'Uma Landing Page Express fica pronta em média de 5 a 7 dias úteis. Um Site Institucional Completo leva de 7 a 10 dias úteis. Para sistemas web sob medida, o prazo médio é de 10 a 15 dias.',
    },
    {
      id: 'item-3',
      question: 'Eu preciso pagar alguma mensalidade para a Maneki Neeko?',
      answer:
        'Não! Você não fica preso a mensalidades obrigatórias de agência. O site e todo o código pertencem 100% a você. Os únicos custos contínuos são os padrões da web: o registro anual do domínio (.com.br) e a hospedagem básica.',
    },
    {
      id: 'item-4',
      question: 'O site funciona perfeitamente no celular e aparece no Google?',
      answer:
        'Sim, 100%! Nossas páginas são programadas para abrir em menos de 1 segundo no 4G/5G, com botões de WhatsApp de toque fácil e estrutura otimizada com as melhores práticas de SEO para o Google.',
    },
    {
      id: 'item-5',
      question: 'E se eu precisar de um sistema ou painel sob medida?',
      answer:
        'Desenvolvemos painéis administrativos enxutos, controle de agendamentos para clínicas ou consultórios, catálogos digitais com pedido direto e formulários práticos sem a complexidade pesada de softwares engessados.',
    },
  ];

  return (
    <section id="faq" className="py-20 lg:py-28 bg-[#090A0D] relative border-t border-white/[0.06]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <span className="text-xs font-mono text-amber uppercase tracking-wider mb-2">
            Tire suas Dúvidas
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
            Perguntas Frequentes
          </h2>
          <p className="font-body text-sm sm:text-base text-[#9CA3AF] mt-2">
            Tudo o que você precisa saber antes de iniciar seu projeto com a gente.
          </p>
        </div>

        {/* Accordion Component */}
        <Accordion type="single" collapsible defaultValue="item-1" className="w-full flex flex-col gap-2.5">
          {faqs.map((faq) => (
            <AccordionItem
              key={faq.id}
              value={faq.id}
              className="border border-white/[0.06] rounded-xl px-5 bg-white/[0.02] transition-colors data-[state=open]:border-amber/40 data-[state=open]:bg-white/[0.04]"
            >
              <AccordionTrigger className="font-display font-semibold text-left text-sm sm:text-base text-white hover:no-underline py-4 hover:text-amber transition-colors">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="font-body text-xs sm:text-sm text-[#9CA3AF] leading-relaxed pt-1 pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>


      </div>
    </section>
  );
};

export default Faq;
