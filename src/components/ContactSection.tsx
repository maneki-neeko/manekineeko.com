
import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive",
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Mensagem enviada!",
      description: "Obrigado pelo seu contato. Retornaremos em breve!",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section id="contato" className="py-20 bg-gradient-to-b from-transparent to-blue-50/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Entre em <span className="text-maneki-primary">Contato</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Pronto para transformar sua ideia em realidade? Entre em contato conosco 
            e descubra como podemos ajudar seu negócio.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="glass-strong rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Envie sua Mensagem</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                      Nome *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-white/30 bg-white/50 focus:bg-white/70 focus:border-maneki-primary/50 focus:outline-none transition-all duration-200"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                      E-mail *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-white/30 bg-white/50 focus:bg-white/70 focus:border-maneki-primary/50 focus:outline-none transition-all duration-200"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                    Assunto
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-white/30 bg-white/50 focus:bg-white/70 focus:border-maneki-primary/50 focus:outline-none transition-all duration-200"
                    placeholder="Assunto da sua mensagem"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                    Mensagem *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border border-white/30 bg-white/50 focus:bg-white/70 focus:border-maneki-primary/50 focus:outline-none transition-all duration-200 resize-none"
                    placeholder="Conte-nos sobre seu projeto..."
                  />
                </div>

                <button
                  type="submit"
                  className="group w-full maneki-primary text-white py-4 rounded-xl hover:opacity-90 transition-all duration-300 flex items-center justify-center space-x-2 hover-lift shadow-lg hover:shadow-xl font-semibold"
                >
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  <span>Enviar Mensagem</span>
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="glass rounded-2xl p-6 hover-lift">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 maneki-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">E-mail</h4>
                    <p className="text-gray-600">contato@manekineeko.com</p>
                    <p className="text-gray-600">comercial@manekineeko.com</p>
                  </div>
                </div>
              </div>

              <div className="glass rounded-2xl p-6 hover-lift">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 maneki-secondary rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">Telefone</h4>
                    <p className="text-gray-600">+55 (41) 92008-5746</p>
                    <p className="text-gray-600">WhatsApp disponível</p>
                  </div>
                </div>
              </div>

              <div className="glass rounded-2xl p-6 hover-lift">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">Localização</h4>
                    <p className="text-gray-600">São Paulo, SP - Brasil</p>
                    <p className="text-gray-600">Atendimento remoto e presencial</p>
                  </div>
                </div>
              </div>

              <div className="glass-strong rounded-2xl p-6">
                <h4 className="text-xl font-bold text-gray-800 mb-4 text-center">Conecte-se Conosco</h4>
                <div className="flex justify-center space-x-4">
                  <a
                    href="https://github.com/manekineeko"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 maneki-primary rounded-full flex items-center justify-center hover-lift hover:opacity-90 transition-all duration-200"
                  >
                    <Github className="w-6 h-6 text-white" />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 maneki-secondary rounded-full flex items-center justify-center hover-lift hover:opacity-90 transition-all duration-200"
                  >
                    <Linkedin className="w-6 h-6 text-white" />
                  </a>
                </div>
                <p className="text-center text-gray-600 mt-4 text-sm">
                  Siga-nos para acompanhar nossas novidades e projetos!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
