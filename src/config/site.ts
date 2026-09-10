/**
 * Configurações globais e dados de contato da Maneki Neeko.
 * Altere aqui para atualizar em todo o site automaticamente.
 */
export const siteConfig = {
  name: 'Maneki Neeko',
  tagline: 'sites & landing pages sob medida',
  description:
    'Landing pages de alta conversão, sites institucionais modernos e sistemas web sob medida com foco em conversão e entrega rápida.',
  url: 'https://manekineeko.com',
  
  // Contatos de Atendimento
  contact: {
    email: 'contato@manekineeko.com',
    whatsappNumber: '5511999999999', // Apenas números: DDI + DDD + Telefone
    whatsappDisplay: '(11) 99999-9999',
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
