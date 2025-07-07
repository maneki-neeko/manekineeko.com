
import { ExternalLink, Users, Clock, Award } from 'lucide-react';

const ProjectsSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="projetos" className="py-20 bg-gradient-to-b from-blue-50/30 to-transparent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Nosso <span className="text-maneki-primary">Case de Sucesso</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Conheça nosso principal projeto: um sistema completo de gestão de ligações 
            e ramais desenvolvido especialmente para prefeituras.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="glass-strong rounded-3xl p-8 md:p-12 mb-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="mb-6">
                  <span className="maneki-secondary text-white px-4 py-2 rounded-full text-sm font-medium">
                    Setor Público
                  </span>
                </div>
                
                <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                  Sistema de Gestão de Ligações para Prefeitura
                </h3>
                
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Desenvolvemos uma solução completa para controle e monitoramento de ligações telefônicas, 
                  permitindo à prefeitura ter controle total sobre custos, uso de ramais e relatórios detalhados.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 maneki-primary rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Controle Total de Ramais</h4>
                      <p className="text-gray-600">Gestão centralizada de todos os ramais da prefeitura com permissões personalizadas.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 maneki-primary rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Relatórios Inteligentes</h4>
                      <p className="text-gray-600">Dashboards e relatórios detalhados para análise de custos e uso.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 maneki-primary rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Interface Intuitiva</h4>
                      <p className="text-gray-600">Design pensado para facilitar o uso pelos funcionários públicos.</p>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => scrollToSection('contato')}
                  className="group maneki-secondary text-white px-8 py-4 rounded-full hover:opacity-90 transition-all duration-300 flex items-center space-x-2 hover-lift shadow-lg hover:shadow-xl font-semibold"
                >
                  <span>Ver Mais Detalhes</span>
                  <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              <div className="relative">
                <div className="glass rounded-2xl p-6 mb-4">
                  <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl h-48 flex items-center justify-center mb-4">
                    <div className="text-center">
                      <div className="w-16 h-16 maneki-primary rounded-full flex items-center justify-center mx-auto mb-3">
                        <Users className="w-8 h-8 text-white" />
                      </div>
                      <span className="text-gray-600 font-medium">Dashboard Principal</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 bg-gray-200 rounded w-3/4"></div>
                    <div className="h-2 bg-gray-200 rounded w-1/2"></div>
                    <div className="h-2 bg-gray-200 rounded w-2/3"></div>
                  </div>
                </div>
                
                <div className="glass rounded-2xl p-4">
                  <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg h-32 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-12 h-12 maneki-secondary rounded-full flex items-center justify-center mx-auto mb-2">
                        <Clock className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-gray-600 text-sm font-medium">Relatórios</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Metrics */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="glass rounded-2xl p-6 text-center hover-lift">
              <div className="w-12 h-12 maneki-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-800 mb-2">100%</div>
              <div className="text-gray-600">Controle de Custos</div>
            </div>
            
            <div className="glass rounded-2xl p-6 text-center hover-lift">
              <div className="w-12 h-12 maneki-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-800 mb-2">50+</div>
              <div className="text-gray-600">Ramais Gerenciados</div>
            </div>
            
            <div className="glass rounded-2xl p-6 text-center hover-lift">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-800 mb-2">24/7</div>
              <div className="text-gray-600">Monitoramento</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
