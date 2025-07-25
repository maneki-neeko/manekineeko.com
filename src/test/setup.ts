import '@testing-library/jest-dom';
import { vi } from 'vitest';

// Mock window.matchMedia which is used by some components
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(), // deprecated
    removeListener: vi.fn(), // deprecated
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

// Mock scrollIntoView which is used by components
Object.defineProperty(Element.prototype, 'scrollIntoView', {
  writable: true,
  value: vi.fn(),
});