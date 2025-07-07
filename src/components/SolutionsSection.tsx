
import { Phone, Settings, Cloud, Shield, Smartphone, Database } from 'lucide-react';

const SolutionsSection = () => {
  const solutions = [
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Sistema de Gestão de Ligações",
      description: "Solução completa para gerenciamento de ligações e ramais, desenvolvida especialmente para prefeituras e órgãos públicos.",
      features: ["Controle de ramais", "Relatórios detalhados", "Interface intuitiva", "Integração completa"],
      highlighted: true
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Sistemas de Gestão",
      description: "Desenvolvimento de sistemas personalizados para gestão empresarial, controle de processos e automação.",
      features: ["CRM personalizado", "ERP sob medida", "Dashboards inteligentes", "Automação de processos"],
      highlighted: false
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Soluções em Nuvem",
      description: "Migração e desenvolvimento de aplicações na nuvem com alta disponibilidade e escalabilidade.",
      features: ["AWS/Azure", "Microserviços", "APIs robustas", "Monitoramento 24/7"],
      highlighted: false
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Aplicações Mobile",
      description: "Desenvolvimento de aplicativos nativos e híbridos para iOS e Android.",
      features: ["React Native", "Flutter", "PWA", "App Store Deploy"],
      highlighted: false
    }
  ];

  return (
    <section id="solucoes" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Nossas <span className="text-maneki-primary">Soluções</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Oferecemos um portfólio completo de soluções tecnológicas, desde sistemas de gestão 
            até aplicações mobile, sempre focados na qualidade e inovação.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className={`glass-strong rounded-3xl p-8 hover-lift group cursor-pointer relative overflow-hidden ${
                solution.highlighted ? 'ring-2 ring-maneki-primary/30' : ''
              }`}
            >
              {solution.highlighted && (
                <div className="absolute top-4 right-4 maneki-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                  Destaque
                </div>
              )}
              
              <div className={`${solution.highlighted ? 'text-maneki-primary' : 'text-maneki-secondary'} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {solution.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                {solution.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {solution.description}
              </p>
              
              <div className="space-y-2">
                {solution.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-3">
                    <div className={`w-2 h-2 rounded-full ${solution.highlighted ? 'maneki-primary' : 'maneki-secondary'}`}></div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="glass rounded-2xl p-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <Shield className="w-8 h-8 text-maneki-primary" />
              <Database className="w-8 h-8 text-maneki-secondary" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">
              Tecnologias de Ponta
            </h3>
            <p className="text-gray-600">
              Utilizamos as melhores práticas de desenvolvimento e as tecnologias mais modernas 
              para entregar soluções robustas, seguras e escaláveis.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
