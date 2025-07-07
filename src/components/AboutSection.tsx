
import { Users, Target, Award, Lightbulb } from 'lucide-react';

const AboutSection = () => {
  const features = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Equipe Especializada",
      description: "Desenvolvedores experientes focados em entregar soluções de alta qualidade."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Foco em Resultados",
      description: "Cada projeto é desenvolvido com foco em resolver problemas reais dos nossos clientes."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Qualidade Garantida",
      description: "Processos rigorosos de desenvolvimento e testes para garantir a excelência."
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Inovação Constante",
      description: "Sempre em busca das melhores tecnologias e práticas do mercado."
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-gradient-to-b from-transparent to-blue-50/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Sobre a <span className="text-maneki-primary">Maneki Neeko</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Somos uma fábrica de software especializada em criar soluções tecnológicas personalizadas. 
            Nossa missão é transformar desafios complexos em sistemas simples e eficientes, 
            conectando tecnologia de ponta com as necessidades reais dos nossos clientes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="glass rounded-2xl p-6 hover-lift group cursor-pointer"
            >
              <div className="text-maneki-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="glass-strong rounded-3xl p-8 md:p-12 text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              Nossa Expertise
            </h3>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Especializados em desenvolvimento de sistemas web, aplicações mobile e soluções de gestão. 
              Utilizamos as tecnologias mais modernas do mercado, incluindo React, Node.js, Python, 
              e cloud computing para criar produtos robustos e escaláveis.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {['React', 'Node.js', 'Python', 'TypeScript', 'AWS', 'PostgreSQL'].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-white/50 rounded-full text-gray-700 font-medium border border-white/30"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
