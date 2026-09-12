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
  MessageCircle,
  RotateCcw,
} from 'lucide-react';
import { getWhatsappUrl } from '@/config/site';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    projectType: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

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
      errs.phone = 'Informe seu WhatsApp com DDD.';
    }

    if (!formData.projectType) {
      errs.projectType = 'Selecione o tipo de projeto.';
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
      toast.success('Pedido recebido!', {
        description: 'Entraremos em contato pelo WhatsApp em até 24 horas úteis.',
        duration: 5000,
      });
    }, 500);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      phone: '',
      projectType: '',
      message: '',
    });
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <section id="orcamento" className="py-20 lg:py-28 bg-[#090A0D] relative border-t border-white/[0.06] scroll-mt-12">
      <span id="contato" className="absolute -top-20" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: WhatsApp Fast-Track & Value */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div>
              <span className="text-xs font-mono text-amber uppercase tracking-wider mb-2 block">
                Vamos Conversar?
              </span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
                Tire seu projeto do papel com rapidez
              </h2>
              <p className="font-body text-sm sm:text-base text-[#9CA3AF] mt-3 leading-relaxed">
                Escolha a forma mais confortável para você. A maioria dos nossos clientes prefere falar direto no WhatsApp para tirar dúvidas na hora.
              </p>
            </div>

            {/* WhatsApp Fast-Track Card */}
            <div className="p-6 rounded-2xl bg-[#111318] border border-amber/50 shadow-glow-amber flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber/15 flex items-center justify-center text-amber shrink-0">
                  <MessageCircle className="w-5 h-5 fill-amber text-amber" />
                </div>
                <div>
                  <span className="font-display font-bold text-base text-white block">
                    Atendimento Rápido no WhatsApp
                  </span>
                  <span className="text-xs text-[#9CA3AF]">
                    Resposta em menos de 15 minutos
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#D1D5DB] leading-relaxed">
                Clique abaixo e fale diretamente com nosso especialista. Enviamos estimativas de prazo e orçamento sem enrolação.
              </p>

              <a
                href={getWhatsappUrl('Olá! Gostaria de um orçamento para criar meu site com a Maneki Neeko.')}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-amber text-white font-display text-xs sm:text-sm font-semibold hover:brightness-110 active:scale-[0.98] transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-white text-white" />
                <span>Conversar no WhatsApp Agora</span>
              </a>
            </div>

            {/* Minimalist Guarantees */}
            <div className="flex flex-col gap-3 pt-2 text-xs text-[#9CA3AF]">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-teal shrink-0" />
                <span>Retorno em menos de 24 horas úteis</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-amber shrink-0" />
                <span>Proposta transparente sem custos escondidos</span>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Form Container */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
              
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="pb-3 border-b border-white/[0.06]">
                    <h3 className="font-display font-bold text-lg text-white">
                      Ou simule por formulário
                    </h3>
                    <p className="text-xs text-[#9CA3AF]">
                      Preencha os campos abaixo e entraremos em contato com a proposta.
                    </p>
                  </div>

                  {/* Nome Completo */}
                  <div className="flex flex-col gap-1.5">
                    <Label htmlFor="name" className="text-xs font-mono text-[#D1D5DB]">
                      Seu Nome Completo <span className="text-amber">*</span>
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Ex: Ana Paula"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-white/[0.03] border-white/[0.08] text-white placeholder:text-[#6B7280] focus-visible:ring-amber focus-visible:border-amber h-10 text-sm"
                    />
                    {errors.name && (
                      <span className="text-xs text-[#EF4444] mt-0.5">{errors.name}</span>
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
                      className="bg-white/[0.03] border-white/[0.08] text-white placeholder:text-[#6B7280] focus-visible:ring-amber focus-visible:border-amber h-10 text-sm"
                    />
                    {errors.phone && (
                      <span className="text-xs text-[#EF4444] mt-0.5">{errors.phone}</span>
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
                        className="bg-white/[0.03] border-white/[0.08] text-white h-10 text-sm focus:ring-amber focus:border-amber"
                      >
                        <SelectValue placeholder="Selecione o formato desejado" />
                      </SelectTrigger>
                      <SelectContent className="bg-[#111318] border border-white/[0.08] text-white">
                        <SelectItem value="Landing Page Express">
                          Landing Page Express (Para vender rápido)
                        </SelectItem>
                        <SelectItem value="Site Institucional Completo">
                          Site Institucional Completo (Para empresa/clínica)
                        </SelectItem>
                        <SelectItem value="Site + Sistema Sob Medida">
                          Site + Sistema Sob Medida (Agendamento, painel etc.)
                        </SelectItem>
                        <SelectItem value="Outro Desafio">
                          Outro projeto personalizado
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.projectType && (
                      <span className="text-xs text-[#EF4444] mt-0.5">{errors.projectType}</span>
                    )}
                  </div>

                  {/* Mensagem Opcional */}
                  <div className="flex flex-col gap-1.5">
                    <Label htmlFor="message" className="text-xs font-mono text-[#D1D5DB]">
                      Detalhes adicionais (opcional)
                    </Label>
                    <Textarea
                      id="message"
                      rows={2}
                      placeholder="Ex: Gostaria de saber prazos e formas de pagamento..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="bg-white/[0.03] border-white/[0.08] text-white placeholder:text-[#6B7280] focus-visible:ring-amber focus-visible:border-amber resize-y text-sm"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="mt-1 flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-white/[0.08] text-white hover:bg-white/[0.14] font-display text-sm font-semibold disabled:opacity-50 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber"
                  >
                    {isSubmitting ? (
                      <span>Enviando pedido...</span>
                    ) : (
                      <>
                        <span>Enviar Pedido de Orçamento</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </form>
              ) : (
                /* Success Confirmation State */
                <div className="flex flex-col items-center text-center py-6 gap-4 animate-fade-in">
                  <div className="w-14 h-14 rounded-full bg-teal/15 border border-teal/30 flex items-center justify-center text-teal">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>

                  <div>
                    <h3 className="font-display font-bold text-xl text-white">
                      Pedido Recebido!
                    </h3>
                    <p className="font-body text-xs sm:text-sm text-[#9CA3AF] max-w-sm mt-1">
                      Obrigado, <strong className="text-white">{formData.name}</strong>! Entraremos em contato pelo WhatsApp <strong className="text-teal">{formData.phone}</strong> em até 24h úteis.
                    </p>
                  </div>

                  <a
                    href={getWhatsappUrl(`Olá! Acabei de enviar um pedido no site para ${formData.projectType}.`)}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-amber text-white font-display text-xs sm:text-sm font-semibold hover:brightness-110 transition-all shadow-glow-amber"
                  >
                    <MessageCircle className="w-4 h-4 fill-white text-white" />
                    <span>Acelerar Atendimento no WhatsApp</span>
                  </a>

                  <button
                    type="button"
                    onClick={resetForm}
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-[#9CA3AF] hover:text-white transition-colors"
                  >
                    <RotateCcw className="w-3 h-3" />
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
