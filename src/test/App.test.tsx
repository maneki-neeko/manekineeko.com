import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />);
    
    // Check if the main navigation elements are present
    expect(screen.getAllByText('Maneki Neeko')).toHaveLength(3); // Header, Hero, Footer
  });

  it('renders the hero section with main heading', () => {
    render(<App />);
    
    expect(screen.getByText('Soluções Tecnológicas')).toBeInTheDocument();
    expect(screen.getByText('Sob Medida')).toBeInTheDocument();
  });
});