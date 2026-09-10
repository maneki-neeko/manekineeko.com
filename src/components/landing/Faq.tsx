import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { HelpCircle, MessageCircle } from 'lucide-react';

export const Faq: React.FC = () => {
  const faqs = [
    {
      id: 'item-1',
      question: 'Como funciona o orçamento e as condições de pagamento?',
      answer:
        'Analisamos as necessidades específicas do seu negócio e enviamos uma proposta personalizada, transparente e sem custos escondidos. Facilitamos o pagamento com opções no cartão de crédito ou à vista via PIX, com total flexibilidade.',
    },
    {
      id: 'item-2',
      question: 'Quanto tempo demora para meu site ficar pronto e no ar?',
      answer:
        'Uma Landing Page Express fica pronta em média de 5 a 7 dias úteis. Um Site Institucional Completo leva de 7 a 10 dias úteis. Para sistemas web simples sob medida, o prazo médio é de 10 a 15 dias. Cumprimos o prazo rigorosamente.',
    },
    {
      id: 'item-3',
      question: 'Eu preciso pagar alguma mensalidade para a Maneki Neeko?',
      answer:
        'Não! Você não fica preso a mensalidades obrigatórias de agência. O site e todo o código pertencem 100% a você. Os únicos custos contínuos são os da internet tradicional: o registro anual do seu domínio (.com.br) e a hospedagem básica. Te ajudamos a escolher a opção mais econômica, segura e confiável.',
    },
    {
      id: 'item-4',
      question: 'O site funciona perfeitamente no celular e aparece no Google?',
      answer:
        'Sim, 100%! Mais de 80% dos clientes acessam sites pelo celular. Por isso, nossas páginas são programadas para abrir em menos de 1 segundo no 4G/5G, com botões de WhatsApp de toque fácil e estrutura otimizada com as melhores práticas de SEO para o Google.',
    },
    {
      id: 'item-5',
      question: 'E se eu precisar de um sistema sob medida não muito complexo?',
      answer:
        'Nós adoramos esse tipo de projeto! Desenvolvemos painéis administrativos enxutos, controle de agendamentos para clínicas ou consultórios, catálogos digitais com pedido direto e formulários de cadastro sem a complexidade pesada e cara de softwares enterprise.',
    },
  ];

  return (
    <section id="faq" className="py-20 lg:py-28 bg-obsidian-bg relative border-t border-hairline">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-obsidian-surface-2 border border-hairline mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-amber" />
            <span className="font-mono text-xs text-amber font-semibold uppercase tracking-wider">
              Tire suas Dúvidas
            </span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
            Perguntas Frequentes
          </h2>
          <p className="font-body text-sm sm:text-base text-[#9CA3AF] mt-2">
            Tudo o que você precisa saber antes de criar seu site com a gente.
          </p>
        </div>

        {/* Accordion Component */}
        <div className="p-6 sm:p-8 rounded-2xl bg-obsidian-surface-1 border border-hairline shadow-xl">
          <Accordion type="single" collapsible defaultValue="item-1" className="w-full flex flex-col gap-3">
            {faqs.map((faq) => (
              <AccordionItem
                key={faq.id}
                value={faq.id}
                className="border border-hairline rounded-xl px-5 bg-obsidian-surface-2/60 transition-colors data-[state=open]:border-hairline-amber/50 data-[state=open]:bg-obsidian-surface-2"
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

        {/* Quick WhatsApp helper */}
        <div className="mt-8 text-center flex flex-col sm:flex-row items-center justify-center gap-2 font-body text-xs sm:text-sm text-[#9CA3AF]">
          <span>Tem alguma dúvida específica sobre o seu projeto?</span>
          <a
            href="https://wa.me/5511999999999?text=Olá!%20Tenho%20uma%20dúvida%20sobre%20a%20criação%20de%20um%20site."
            target="_blank"
            rel="noreferrer"
            className="text-amber hover:text-amber-hover font-semibold inline-flex items-center gap-1 underline underline-offset-4"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Fale direto conosco pelo WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};

export default Faq;
