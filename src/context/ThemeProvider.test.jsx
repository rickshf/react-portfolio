/* @vitest-environment jsdom */
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import ThemeProvider from './ThemeProvider.jsx';
import useTheme from './useTheme.js';

function Consumer() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div>
      <span data-testid="theme">{theme}</span>
      <button onClick={toggleTheme}>toggle</button>
    </div>
  );
}

function setupMatchMedia(matches) {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: vi.fn().mockImplementation(() => ({
      matches,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
    })),
  });
}

describe('ThemeProvider', () => {
  beforeEach(() => {
    localStorage.clear();
    vi.restoreAllMocks();
  });

  afterEach(() => {
    cleanup();
  });

  it('detects initial theme from localStorage', () => {
    localStorage.setItem('theme', 'dark');
    setupMatchMedia(false);
    render(
      <ThemeProvider>
        <Consumer />
      </ThemeProvider>
    );
    expect(screen.getByTestId('theme').textContent).toBe('dark');
  });

  it('falls back to system preference when no stored theme', () => {
    setupMatchMedia(true);
    render(
      <ThemeProvider>
        <Consumer />
      </ThemeProvider>
    );
    expect(screen.getByTestId('theme').textContent).toBe('dark');
  });

  it('updates localStorage when toggling theme', () => {
    localStorage.setItem('theme', 'light');
    setupMatchMedia(false);
    render(
      <ThemeProvider>
        <Consumer />
      </ThemeProvider>
    );
    const button = screen.getByText('toggle');
    fireEvent.click(button);
    expect(localStorage.getItem('theme')).toBe('dark');
    expect(screen.getByTestId('theme').textContent).toBe('dark');
  });
});
