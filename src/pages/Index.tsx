import React, { useState } from 'react';
import {
  ArrowRight,
  BarChart3,
  Check,
  CheckCircle2,
  Code2,
  Headphones,
  Layers3,
  MessageCircle,
  Network,
  Phone,
  Route,
  Send,
  ShieldCheck,
  Sparkles,
  Workflow,
} from 'lucide-react';
import Header from '@/components/landing/Header';
import Footer from '@/components/landing/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { getWhatsappUrl } from '@/config/site';

const capabilities = [
  {
    icon: Code2,
    title: 'Sistemas web',
    text: 'Aplicações seguras e responsivas, criadas para simplificar rotinas e centralizar informações.',
  },
  {
    icon: Workflow,
    title: 'Automação de processos',
    text: 'Fluxos digitais que reduzem tarefas repetitivas e ajudam sua equipe a trabalhar com mais clareza.',
  },
  {
    icon: Layers3,
    title: 'Integrações',
    text: 'Conexões entre ferramentas, dados e serviços para evitar retrabalho e informações dispersas.',
  },
];

const steps = [
  ['01', 'Entendimento', 'Mapeamos o desafio, as pessoas envolvidas e o resultado esperado.'],
  ['02', 'Projeto', 'Definimos a experiência, o escopo e o caminho técnico da solução.'],
  ['03', 'Desenvolvimento', 'Construímos em ciclos curtos, com acompanhamento e validação.'],
  ['04', 'Entrega e suporte', 'Colocamos a solução em operação e acompanhamos sua evolução.'],
];

const Index: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', company: '', need: '' });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const message = [
      'Olá! Vim pelo site da Maneki Neeko e gostaria de conversar sobre um projeto.',
      `Nome: ${formData.name}`,
      formData.company ? `Empresa/órgão: ${formData.company}` : '',
      `Necessidade: ${formData.need}`,
    ].filter(Boolean).join('\n');
    window.open(getWhatsappUrl(message), '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen overflow-hidden bg-background text-foreground">
      <Header />

      <main>
        <section id="inicio" className="relative pt-32 pb-20 lg:pt-40 lg:pb-28">
          <div className="ambient-shape ambient-shape-primary" aria-hidden="true" />
          <div className="ambient-shape ambient-shape-secondary" aria-hidden="true" />
          <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <div className="animate-fade-in">
              <div className="glass-pill mb-6 inline-flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-secondary" />
                <span className="font-mono text-xs font-semibold uppercase text-deep-teal">Software sob medida</span>
              </div>

              <h1 className="font-brand text-5xl font-extrabold leading-[0.98] text-foreground sm:text-6xl lg:text-7xl">
                Maneki<br /><span className="text-primary">Neeko.</span>
              </h1>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
                Transformamos processos complexos em sistemas simples de usar — construídos para a realidade da sua operação.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg" className="h-13 rounded-xl px-7 shadow-primary">
                  <a href={getWhatsappUrl('Olá! Gostaria de conversar sobre um sistema sob medida.')} target="_blank" rel="noreferrer">
                    Conversar sobre um projeto <MessageCircle />
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="h-13 rounded-xl border-deep-teal/15 bg-card/70 px-7 backdrop-blur-xl">
                  <a href="#produto">Conhecer nosso produto <ArrowRight /></a>
                </Button>
              </div>
              <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted-foreground">
                {['Escopo transparente', 'Contato direto', 'Tecnologia sob medida'].map((item) => (
                  <span key={item} className="flex items-center gap-2"><Check className="h-4 w-4 text-deep-teal" />{item}</span>
                ))}
              </div>
            </div>

            <div className="relative animate-fade-in lg:pl-6">
              <div className="hero-visual">
                <div className="product-window">
                  <div className="flex items-center justify-between border-b border-border/70 pb-4">
                    <div className="flex gap-2" aria-hidden="true">
                      <span className="h-2.5 w-2.5 rounded-full bg-primary/40" />
                      <span className="h-2.5 w-2.5 rounded-full bg-secondary/50" />
                      <span className="h-2.5 w-2.5 rounded-full bg-deep-teal/35" />
                    </div>
                    <span className="font-mono text-[10px] uppercase text-muted-foreground">Central de telefonia</span>
                  </div>
                  <div className="mt-5 grid gap-4 sm:grid-cols-3">
                    {[
                      [Phone, 'Ramais', 'Organizados'],
                      [Route, 'Fluxos', 'Visíveis'],
                      [BarChart3, 'Gestão', 'Centralizada'],
                    ].map(([Icon, title, label]) => {
                      const ProductIcon = Icon as React.ElementType;
                      return (
                        <div key={String(title)} className="rounded-xl border border-border/70 bg-card/70 p-4">
                          <ProductIcon className="mb-4 h-5 w-5 text-primary" />
                          <strong className="block font-mono text-xs text-foreground">{String(title)}</strong>
                          <span className="text-xs text-muted-foreground">{String(label)}</span>
                        </div>
                      );
                    })}
                  </div>
                  <div className="mt-4 rounded-xl border border-border/70 bg-card/80 p-5">
                    <div className="mb-5 flex items-center justify-between">
                      <span className="font-mono text-xs font-semibold text-foreground">Visão geral das ligações</span>
                      <span className="rounded-full bg-deep-teal/10 px-2.5 py-1 text-[10px] font-semibold text-deep-teal">Em operação</span>
                    </div>
                    <div className="flex h-24 items-end gap-2" aria-label="Representação visual de atividade de ligações">
                      {[38, 62, 48, 78, 55, 88, 68, 82, 58, 74].map((height, index) => (
                        <span key={index} className="flex-1 rounded-t bg-primary/20" style={{ height: `${height}%` }} />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="floating-status">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-secondary/15 text-secondary"><ShieldCheck /></span>
                  <div><span className="font-mono text-[10px] uppercase text-muted-foreground">Projeto real</span><strong className="block text-sm">Gestão pública</strong></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="solucoes" className="section-space">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <div className="mb-10 max-w-2xl">
              <p className="section-kicker">O que construímos</p>
              <h2 className="section-title">Tecnologia que acompanha o seu jeito de trabalhar.</h2>
              <p className="section-copy">Do primeiro desenho à operação, criamos soluções digitais que resolvem problemas concretos e podem evoluir com o negócio.</p>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {capabilities.map(({ icon: Icon, title, text }) => (
                <article key={title} className="glass-card group p-7">
                  <span className="icon-box"><Icon /></span>
                  <h3 className="mt-7 font-mono text-xl font-bold text-foreground">{title}</h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="produto" className="section-space relative">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <div className="product-feature">
              <div className="lg:col-span-5">
                <p className="section-kicker text-secondary">Produto em operação</p>
                <h2 className="section-title text-primary-foreground">Gestão de ligações e ramais para o setor público.</h2>
                <p className="mt-5 text-lg leading-relaxed text-primary-foreground/75">
                  Desenvolvemos uma solução para uma prefeitura organizar a estrutura telefônica, facilitar consultas e tornar a gestão dos ramais mais clara para as equipes.
                </p>
                <Button asChild size="lg" className="mt-8 bg-card text-foreground hover:bg-card/90">
                  <a href={getWhatsappUrl('Olá! Gostaria de conhecer a solução de gestão de ligações e ramais.')} target="_blank" rel="noreferrer">
                    Solicitar uma apresentação <ArrowRight />
                  </a>
                </Button>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
                {[
                  [Network, 'Ramais centralizados', 'Informações organizadas em um só ambiente para consulta rápida.'],
                  [Route, 'Fluxos mais claros', 'Visibilidade para compreender e administrar a estrutura telefônica.'],
                  [BarChart3, 'Gestão facilitada', 'Uma visão objetiva para apoiar decisões e rotinas administrativas.'],
                  [Headphones, 'Uso acessível', 'Experiência pensada para diferentes perfis de usuários da prefeitura.'],
                ].map(([Icon, title, text]) => {
                  const FeatureIcon = Icon as React.ElementType;
                  return (
                    <div key={String(title)} className="rounded-2xl border border-primary-foreground/15 bg-primary-foreground/10 p-5 backdrop-blur-xl">
                      <FeatureIcon className="h-6 w-6 text-secondary" />
                      <h3 className="mt-5 font-mono text-base font-bold text-primary-foreground">{String(title)}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-primary-foreground/70">{String(text)}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section id="processo" className="section-space">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <div className="mb-12 text-center">
              <p className="section-kicker">Como trabalhamos</p>
              <h2 className="section-title mx-auto max-w-3xl">Clareza em cada etapa, do problema à solução.</h2>
            </div>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {steps.map(([number, title, text]) => (
                <article key={number} className="relative border-t border-deep-teal/15 pt-6">
                  <span className="font-mono text-sm font-bold text-primary">{number}</span>
                  <h3 className="mt-5 font-mono text-lg font-bold">{title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="diferenciais" className="section-space">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="section-kicker">Por que a Maneki Neeko</p>
              <h2 className="section-title">Software sério, parceria próxima.</h2>
              <p className="section-copy">Tecnologia só gera valor quando as pessoas conseguem usá-la com confiança. Por isso, equilibramos engenharia, comunicação e entendimento do contexto.</p>
            </div>
            <div className="glass-card divide-y divide-border/70 px-7">
              {[
                ['Solução realmente sob medida', 'A tecnologia se adapta ao processo — não o contrário.'],
                ['Decisões transparentes', 'Escopo, prioridades e evolução apresentados com clareza.'],
                ['Acompanhamento próximo', 'Contato direto durante a construção e depois da entrega.'],
              ].map(([title, text]) => (
                <div key={title} className="flex gap-4 py-6">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-deep-teal" />
                  <div><h3 className="font-mono text-sm font-bold">{title}</h3><p className="mt-1 text-sm text-muted-foreground">{text}</p></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contato" className="section-space pb-28">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <div className="contact-panel">
              <div className="lg:col-span-5">
                <span className="icon-box"><Sparkles /></span>
                <p className="section-kicker mt-7">Vamos construir?</p>
                <h2 className="section-title">Conte o desafio. Nós ajudamos a desenhar o próximo passo.</h2>
                <p className="section-copy">Preencha os campos e continue a conversa pelo WhatsApp com as informações já organizadas.</p>
              </div>
              <form onSubmit={handleSubmit} className="grid gap-5 lg:col-span-7 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Seu nome</Label>
                  <Input id="name" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="Como podemos chamar você?" className="h-12 bg-card/70" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">Empresa ou órgão</Label>
                  <Input id="company" value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} placeholder="Nome da organização" className="h-12 bg-card/70" />
                </div>
                <div className="space-y-2 sm:col-span-2">
                  <Label htmlFor="need">Qual desafio você quer resolver?</Label>
                  <Textarea id="need" required value={formData.need} onChange={(e) => setFormData({ ...formData, need: e.target.value })} placeholder="Conte brevemente sobre o processo, sistema ou ideia." className="min-h-32 resize-none bg-card/70" />
                </div>
                <Button type="submit" size="lg" className="h-12 rounded-xl sm:col-span-2">
                  Continuar no WhatsApp <Send />
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <Button asChild size="icon" className="fixed bottom-5 right-5 z-40 h-14 w-14 rounded-full shadow-primary" aria-label="Falar no WhatsApp">
        <a href={getWhatsappUrl()} target="_blank" rel="noreferrer"><MessageCircle className="h-6 w-6" /></a>
      </Button>
    </div>
  );
};

export default Index;