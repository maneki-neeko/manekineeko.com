
import { Heart, Code } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative overflow-hidden">
      <div className="glass-strong py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Logo and Description */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <img 
                  src="https://avatars.githubusercontent.com/u/128103388?s=400&u=5f13996f5f4a0592d609bf0091adfe3977926a97&v=4" 
                  alt="Maneki Neeko Logo" 
                  className="w-10 h-10 rounded-full"
                />
                <span className="text-2xl font-bold text-gray-800">Maneki Neeko</span>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4 max-w-md">
                Fábrica de software especializada em soluções tecnológicas sob medida. 
                Transformamos ideias em realidade digital.
              </p>
              <div className="flex items-center space-x-2 text-gray-600">
                <span>Feito com</span>
                <Heart className="w-4 h-4 text-maneki-primary" />
                <span>e</span>
                <Code className="w-4 h-4 text-maneki-secondary" />
                <span>em São Paulo</span>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-4">Links Rápidos</h4>
              <ul className="space-y-2">
                <li>
                  <button 
                    onClick={() => scrollToSection('inicio')}
                    className="text-gray-600 hover:text-maneki-primary transition-colors duration-200"
                  >
                    Início
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('sobre')}
                    className="text-gray-600 hover:text-maneki-primary transition-colors duration-200"
                  >
                    Sobre Nós
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('solucoes')}
                    className="text-gray-600 hover:text-maneki-primary transition-colors duration-200"
                  >
                    Soluções
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('projetos')}
                    className="text-gray-600 hover:text-maneki-primary transition-colors duration-200"
                  >
                    Projetos
                  </button>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-4">Serviços</h4>
              <ul className="space-y-2">
                <li className="text-gray-600">Desenvolvimento Web</li>
                <li className="text-gray-600">Aplicações Mobile</li>
                <li className="text-gray-600">Sistemas de Gestão</li>
                <li className="text-gray-600">Consultoria Tech</li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/30 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-gray-600 text-sm">
                © {new Date().getFullYear()} Maneki Neeko. Todos os direitos reservados.
              </div>
              
              <div className="flex space-x-6 text-sm">
                <a href="#" className="text-gray-600 hover:text-maneki-primary transition-colors duration-200">
                  Política de Privacidade
                </a>
                <a href="#" className="text-gray-600 hover:text-maneki-primary transition-colors duration-200">
                  Termos de Uso
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-4 left-4 w-20 h-20 bg-gradient-to-br from-maneki-primary/10 to-transparent rounded-full blur-xl"></div>
      <div className="absolute bottom-4 right-4 w-32 h-32 bg-gradient-to-tl from-maneki-secondary/10 to-transparent rounded-full blur-xl"></div>
    </footer>
  );
};

export default Footer;
