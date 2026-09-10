import React, { useState, useEffect } from 'react';
import { toast } from 'sonner';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Clock,
  ShieldCheck,
  Send,
  CheckCircle2,
  Sparkles,
  MessageCircle,
  RotateCcw,
  BadgeCheck,
} from 'lucide-react';
import { getWhatsappUrl, siteConfig } from '@/config/site';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    projectType: '',
    urgency: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Escuta seleção de planos vinda da seção de preços
  useEffect(() => {
    const handler = (e: Event) => {
      const customEvent = e as CustomEvent<string>;
      if (customEvent.detail) {
        setFormData((prev) => ({ ...prev, projectType: customEvent.detail }));
      }
    };
    window.addEventListener('maneki:select-plan', handler);
    return () => window.removeEventListener('maneki:select-plan', handler);
  }, []);

  const validate = () => {
    const errs: Record<string, string> = {};

    if (!formData.name.trim()) {
      errs.name = 'Por favor, informe seu nome completo.';
    }

    if (!formData.phone.trim() || formData.phone.trim().length < 8) {
      errs.phone = 'Informe seu WhatsApp com DDD para contato.';
    }

    if (!formData.projectType) {
      errs.projectType = 'Selecione o tipo de projeto que você precisa.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast.success('Pedido de orçamento recebido!', {
        description: 'Entraremos em contato pelo seu WhatsApp em até 24 horas.',
        duration: 5000,
      });
    }, 600);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      phone: '',
      projectType: '',
      urgency: '',
      message: '',
    });
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <section id="orcamento" className="py-20 lg:py-28 bg-obsidian-bg relative border-t border-hairline scroll-mt-12">
      {/* Anchor aliases */}
      <span id="contato" className="absolute -top-20" />
      <span id="diagnostico" className="absolute -top-20" />

      {/* Ambient background glows */}
      <div className="pointer-events-none absolute top-1/2 -right-40 -translate-y-1/2 w-96 h-96 bg-amber/10 blur-[110px] rounded-full" />
      <div className="pointer-events-none absolute bottom-0 -left-40 w-96 h-96 bg-teal/10 blur-[110px] rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Heading & Value Proposition */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-obsidian-surface-2 border border-hairline w-fit">
              <Sparkles className="w-3.5 h-3.5 text-amber" />
              <span className="font-mono text-xs text-amber font-semibold uppercase tracking-wider">
                Orçamento Sem Compromisso
              </span>
            </div>

            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-[42px] lg:leading-[1.15] text-white tracking-tight">
              Vamos tirar seu projeto do papel com qualidade e rapidez?
            </h2>

            <p className="font-body text-base text-[#9CA3AF] leading-relaxed">
              Conte o que você tem em mente para seu site ou sistema. Enviamos uma proposta personalizada com escopo detalhado e prazo em até 24 horas úteis.
            </p>

            {/* Direct WhatsApp Callout */}
            <div className="p-4 rounded-xl bg-teal/10 border border-teal/30 flex items-center justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-5 h-5 text-teal shrink-0" />
                <span className="text-xs sm:text-sm font-body text-white">
                  Prefere conversar agora mesmo no WhatsApp?
                </span>
              </div>
              <a
                href={getWhatsappUrl('Olá! Gostaria de um orçamento rápido para o meu projeto.')}
                target="_blank"
                rel="noreferrer"
                className="px-3.5 py-2 rounded-lg bg-teal text-[#090A0D] font-display text-xs font-bold hover:brightness-110 transition-all whitespace-nowrap"
              >
                Abrir WhatsApp
              </a>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-col gap-3.5 pt-4 border-t border-hairline">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-obsidian-surface-2 border border-hairline flex items-center justify-center text-teal shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-display font-semibold text-xs sm:text-sm text-white block">
                    Retorno Rápido em 24h
                  </span>
                  <span className="font-body text-xs text-[#9CA3AF]">
                    Proposta clara com opções de pagamento.
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-obsidian-surface-2 border border-hairline flex items-center justify-center text-amber shrink-0">
                  <BadgeCheck className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-display font-semibold text-xs sm:text-sm text-white block">
                    Sem Custos Escondidos
                  </span>
                  <span className="font-body text-xs text-[#9CA3AF]">
                    Proposta transparente e sem surpresas.
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-obsidian-surface-2 border border-hairline flex items-center justify-center text-teal shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-display font-semibold text-xs sm:text-sm text-white block">
                    Total Autonomia
                  </span>
                  <span className="font-body text-xs text-[#9CA3AF]">
                    O site e os arquivos pertencem integralmente a você.
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Form Container */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-9 rounded-2xl bg-obsidian-surface-1 border border-hairline shadow-2xl relative overflow-hidden">
              
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="flex items-center justify-between pb-4 border-b border-hairline">
                    <h3 className="font-display font-bold text-lg text-white">
                      Solicitar Meu Orçamento
                    </h3>
                    <span className="font-mono text-xs text-amber font-semibold">
                      Sem compromisso
                    </span>
                  </div>

                  {/* Nome Completo */}
                  <div className="flex flex-col gap-1.5">
                    <Label htmlFor="name" className="text-xs font-mono text-[#D1D5DB]">
                      Seu Nome Completo <span className="text-amber">*</span>
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Ex: Ana Paula Ribeiro"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-obsidian-surface-2 border-hairline text-white placeholder:text-[#6B7280] focus-visible:ring-amber focus-visible:border-amber h-11"
                    />
                    {errors.name && (
                      <span className="text-xs font-body text-[#EF4444] mt-0.5">{errors.name}</span>
                    )}
                  </div>

                  {/* WhatsApp / Telefone */}
                  <div className="flex flex-col gap-1.5">
                    <Label htmlFor="phone" className="text-xs font-mono text-[#D1D5DB]">
                      WhatsApp com DDD <span className="text-amber">*</span>
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="Ex: (11) 98765-4321"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="bg-obsidian-surface-2 border-hairline text-white placeholder:text-[#6B7280] focus-visible:ring-amber focus-visible:border-amber h-11"
                    />
                    {errors.phone && (
                      <span className="text-xs font-body text-[#EF4444] mt-0.5">{errors.phone}</span>
                    )}
                  </div>

                  {/* Tipo de Projeto */}
                  <div className="flex flex-col gap-1.5">
                    <Label htmlFor="projectType" className="text-xs font-mono text-[#D1D5DB]">
                      O que você precisa? <span className="text-amber">*</span>
                    </Label>
                    <Select
                      value={formData.projectType}
                      onValueChange={(val) => setFormData({ ...formData, projectType: val })}
                    >
                      <SelectTrigger
                        id="projectType"
                        className="bg-obsidian-surface-2 border-hairline text-white h-11 focus:ring-amber focus:border-amber"
                      >
                        <SelectValue placeholder="Selecione o formato desejado" />
                      </SelectTrigger>
                      <SelectContent className="bg-obsidian-surface-1 border border-hairline text-white">
                        <SelectItem value="Landing Page Express">
                          Landing Page Express (Para vender serviço/produto)
                        </SelectItem>
                        <SelectItem value="Site Institucional Completo">
                          Site Institucional Completo (Para minha empresa/clínica)
                        </SelectItem>
                        <SelectItem value="Site + Sistema Simples">
                          Site + Sistema Sob Medida (Agendamento, painel etc.)
                        </SelectItem>
                        <SelectItem value="Catálogo Digital">
                          Catálogo Digital / Vitrine para WhatsApp
                        </SelectItem>
                        <SelectItem value="Reformulação de Site">
                          Reformulação de Site Antigo
                        </SelectItem>
                        <SelectItem value="Outro Desafio">
                          Outro projeto sob medida
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.projectType && (
                      <span className="text-xs font-body text-[#EF4444] mt-0.5">{errors.projectType}</span>
                    )}
                  </div>

                  {/* Urgência / Prazo */}
                  <div className="flex flex-col gap-1.5">
                    <Label htmlFor="urgency" className="text-xs font-mono text-[#D1D5DB]">
                      Qual é a sua urgência de prazo?
                    </Label>
                    <Select
                      value={formData.urgency}
                      onValueChange={(val) => setFormData({ ...formData, urgency: val })}
                    >
                      <SelectTrigger
                        id="urgency"
                        className="bg-obsidian-surface-2 border-hairline text-white h-11 focus:ring-amber focus:border-amber"
                      >
                        <SelectValue placeholder="Selecione quando precisa do site no ar" />
                      </SelectTrigger>
                      <SelectContent className="bg-obsidian-surface-1 border border-hairline text-white">
                        <SelectItem value="O quanto antes (5 a 7 dias)">
                          O quanto antes (urgente: 5 a 7 dias)
                        </SelectItem>
                        <SelectItem value="Nas próximas semanas">
                          Prazo padrão (próximas semanas)
                        </SelectItem>
                        <SelectItem value="Estou apenas pesquisando">
                          Estou apenas orçando para me planejar
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Resumo do Desafio */}
                  <div className="flex flex-col gap-1.5">
                    <Label htmlFor="message" className="text-xs font-mono text-[#D1D5DB]">
                      Conte um pouco sobre o seu negócio (opcional)
                    </Label>
                    <Textarea
                      id="message"
                      rows={3}
                      placeholder="Ex: Sou nutricionista e quero uma página para receber pacientes no WhatsApp..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="bg-obsidian-surface-2 border-hairline text-white placeholder:text-[#6B7280] focus-visible:ring-amber focus-visible:border-amber resize-y"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="mt-2 flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-gradient-to-r from-amber to-amber-hover text-white font-display text-base font-semibold shadow-glow-amber hover:shadow-glow-amber-lg hover:brightness-110 active:scale-[0.99] disabled:opacity-50 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber"
                  >
                    {isSubmitting ? (
                      <span>Enviando pedido...</span>
                    ) : (
                      <>
                        <span>Receber Orçamento Sem Compromisso</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <p className="text-center font-mono text-[11px] text-[#6B7280] mt-1">
                    Não enviamos spam. Resposta em até 24 horas úteis.
                  </p>
                </form>
              ) : (
                /* Success Confirmation State */
                <div className="flex flex-col items-center text-center py-6 gap-5 animate-fade-in">
                  <div className="w-16 h-16 rounded-full bg-teal/15 border border-teal/30 flex items-center justify-center text-teal shadow-glow-teal">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <div className="flex flex-col gap-2">
                    <h3 className="font-display font-bold text-2xl text-white">
                      Pedido Recebido com Sucesso!
                    </h3>
                    <p className="font-body text-sm text-[#9CA3AF] max-w-md">
                      Obrigado, <strong className="text-white">{formData.name}</strong>! Nossa equipe analisará seu projeto e entrará em contato pelo WhatsApp <strong className="text-teal">{formData.phone}</strong> em até <span className="text-white font-semibold">24 horas úteis</span> com a sua proposta sob medida.
                    </p>
                  </div>

                  {/* Summary Box */}
                  <div className="w-full p-4 rounded-xl bg-obsidian-surface-2 border border-hairline text-left flex flex-col gap-2 font-mono text-xs">
                    <div className="flex justify-between text-[#9CA3AF]">
                      <span>Projeto Selecionado:</span>
                      <span className="text-amber font-semibold">{formData.projectType}</span>
                    </div>
                    <div className="flex justify-between text-[#9CA3AF]">
                      <span>Protocolo:</span>
                      <span className="text-white">MN-{(Math.random() * 90000 + 10000).toFixed(0)}</span>
                    </div>
                    <div className="flex justify-between text-[#9CA3AF]">
                      <span>Prazo de Resposta:</span>
                      <span className="text-teal">&lt; 24h úteis</span>
                    </div>
                  </div>

                  {/* Direct WhatsApp button in confirmation */}
                  <a
                    href={getWhatsappUrl(`Olá! Acabei de enviar um pedido de orçamento no site para ${formData.projectType}.`)}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-teal text-[#090A0D] font-display text-sm font-bold shadow-md hover:brightness-110 transition-all"
                  >
                    <MessageCircle className="w-4 h-4 fill-[#090A0D]" />
                    <span>Acelerar Atendimento pelo WhatsApp</span>
                  </a>

                  <button
                    type="button"
                    onClick={resetForm}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono text-[#9CA3AF] hover:text-white transition-colors"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Enviar outro pedido</span>
                  </button>
                </div>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactForm;
