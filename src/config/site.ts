/**
 * Configurações globais e dados de contato da Maneki Neeko.
 * Altere aqui para atualizar em todo o site automaticamente.
 */
export const siteConfig = {
  name: 'Maneki Neeko',
  tagline: 'software sob medida',
  description:
    'Sistemas web, automações e soluções digitais sob medida para transformar processos complexos em experiências simples.',
  url: 'https://manekineeko.com',
  
  // Contatos de Atendimento
  contact: {
    email: 'contato@manekineeko.com',
    whatsappNumber: '5541920085746', // Apenas números: DDI + DDD + Telefone
    whatsappDisplay: '(41) 92008-5746',
    city: 'São Paulo',
    state: 'SP',
    country: 'Brasil',
    defaultWhatsappMessage: 'Olá! Vim pelo site da Maneki Neeko e gostaria de um orçamento para o meu projeto.',
  },

  // Pacotes e Orçamentos Sob Medida (Sem preços fixos)
  pricing: {
    showStartingPrices: false,
  },

  // Redes e Links
  links: {
    github: 'https://github.com/maneki-neeko',
    linkedin: 'https://linkedin.com',
    instagram: 'https://instagram.com',
  },
};

export const getWhatsappUrl = (customMessage?: string) => {
  const text = encodeURIComponent(customMessage || siteConfig.contact.defaultWhatsappMessage);
  return `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${text}`;
};
