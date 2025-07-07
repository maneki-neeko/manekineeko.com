
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-strong rounded-b-2xl mx-4 mt-4">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="https://avatars.githubusercontent.com/u/128103388?s=400&u=5f13996f5f4a0592d609bf0091adfe3977926a97&v=4" 
              alt="Maneki Neeko Logo" 
              className="w-10 h-10 rounded-full"
            />
            <span className="text-xl font-bold text-gray-800">Maneki Neeko</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('inicio')}
              className="text-gray-700 hover:text-maneki-primary transition-colors duration-200"
            >
              Início
            </button>
            <button 
              onClick={() => scrollToSection('sobre')}
              className="text-gray-700 hover:text-maneki-primary transition-colors duration-200"
            >
              Sobre
            </button>
            <button 
              onClick={() => scrollToSection('solucoes')}
              className="text-gray-700 hover:text-maneki-primary transition-colors duration-200"
            >
              Soluções
            </button>
            <button 
              onClick={() => scrollToSection('projetos')}
              className="text-gray-700 hover:text-maneki-primary transition-colors duration-200"
            >
              Projetos
            </button>
            <button 
              onClick={() => scrollToSection('contato')}
              className="maneki-primary text-white px-6 py-2 rounded-full hover:opacity-90 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Fale Conosco
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-700"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-white/30 pt-4">
            <div className="flex flex-col space-y-3">
              <button 
                onClick={() => scrollToSection('inicio')}
                className="text-gray-700 hover:text-maneki-primary transition-colors duration-200 text-left"
              >
                Início
              </button>
              <button 
                onClick={() => scrollToSection('sobre')}
                className="text-gray-700 hover:text-maneki-primary transition-colors duration-200 text-left"
              >
                Sobre
              </button>
              <button 
                onClick={() => scrollToSection('solucoes')}
                className="text-gray-700 hover:text-maneki-primary transition-colors duration-200 text-left"
              >
                Soluções
              </button>
              <button 
                onClick={() => scrollToSection('projetos')}
                className="text-gray-700 hover:text-maneki-primary transition-colors duration-200 text-left"
              >
                Projetos
              </button>
              <button 
                onClick={() => scrollToSection('contato')}
                className="maneki-primary text-white px-6 py-2 rounded-full hover:opacity-90 transition-all duration-200 shadow-lg w-fit"
              >
                Fale Conosco
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
