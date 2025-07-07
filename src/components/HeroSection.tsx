
import { ArrowRight, Code, Zap } from 'lucide-react';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center pt-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          {/* Hero Content */}
          <div className="mb-8 fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6 leading-tight">
              Soluções Tecnológicas{' '}
              <span className="text-maneki-primary">Sob Medida</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              Transformamos ideias em software de qualidade. Somos uma fábrica de soluções digitais 
              que conecta tecnologia e inovação para impulsionar seu negócio.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 fade-in">
            <button
              onClick={() => scrollToSection('projetos')}
              className="group px-8 py-4 border-2 border-maneki-secondary text-maneki-secondary rounded-full hover:bg-maneki-secondary hover:text-white transition-all duration-300 flex items-center space-x-2 hover-lift font-semibold"
            >
              <span>Nossos Projetos</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => scrollToSection('contato')}
              className="group maneki-primary text-white px-8 py-4 rounded-full hover:opacity-90 transition-all duration-300 flex items-center space-x-2 hover-lift shadow-lg hover:shadow-xl font-semibold"
            >
              <span>Entre em Contato</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Decorative Elements */}
          <div className="relative">
            <div className="glass rounded-3xl p-8 max-w-2xl mx-auto animate-float">
              <div className="flex items-center justify-center space-x-8">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 maneki-primary rounded-full flex items-center justify-center mb-2">
                    <Code className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-gray-600 font-medium">Desenvolvimento</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 maneki-secondary rounded-full flex items-center justify-center mb-2">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-gray-600 font-medium">Inovação</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mb-2">
                    <img 
                      src="https://avatars.githubusercontent.com/u/128103388?s=400&u=5f13996f5f4a0592d609bf0091adfe3977926a97&v=4" 
                      alt="Logo" 
                      className="w-8 h-8 rounded-full"
                    />
                  </div>
                  <span className="text-gray-600 font-medium">Qualidade</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
