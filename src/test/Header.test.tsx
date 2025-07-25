import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Header from '../components/Header';

describe('Header', () => {
  it('renders the company logo and name', () => {
    render(<Header />);
    
    const logo = screen.getByAltText('Maneki Neeko Logo');
    const companyName = screen.getByText('Maneki Neeko');
    
    expect(logo).toBeInTheDocument();
    expect(companyName).toBeInTheDocument();
  });

  it('renders navigation menu items', () => {
    render(<Header />);
    
    expect(screen.getByText('Início')).toBeInTheDocument();
    expect(screen.getByText('Sobre')).toBeInTheDocument();
    expect(screen.getByText('Soluções')).toBeInTheDocument();
    expect(screen.getByText('Projetos')).toBeInTheDocument();
    expect(screen.getByText('Fale Conosco')).toBeInTheDocument();
  });
});