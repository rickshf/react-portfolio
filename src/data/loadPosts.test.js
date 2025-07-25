import { describe, it, expect } from 'vitest';
import { loadPosts } from './loadPosts.js';

describe('loadPosts', () => {
  it('parses front matter correctly', () => {
    const posts = loadPosts();
    const primeiro = posts.find(p => p.slug === 'primeiro-post');
    const python = posts.find(p => p.slug === 'como-instalar-python');

    expect(primeiro.title).toBe('Por que escolhi Tailwind para meu portf\u00f3lio');
    expect(primeiro.date).toBe('2025-05-21');
    expect(primeiro.excerpt).toBe('Tailwind CSS permite um design funcional e limpo com extrema flexibilidade.');

    expect(python.title).toBe('Como instalar Python');
    expect(python.date).toBe('2025-06-07');
    expect(python.excerpt).toBe('Python \u00e9 uma linguagem de programa\u00e7\u00e3o popular e vers\u00e1til. Neste post mostro como instal\u00e1-la em diferentes sistemas operacionais.');
  });

  it('returns posts sorted from newest to oldest', () => {
    const posts = loadPosts();
    const dates = posts.map(p => p.date);
    const sorted = [...dates].sort((a,b) => new Date(b) - new Date(a));
    expect(dates).toEqual(sorted);
  });

  it('handles posts with CRLF line endings', () => {
    const posts = loadPosts();
    const crlf = posts.find(p => p.slug === 'crlf-post');
    expect(crlf).toBeDefined();
    expect(crlf.title).toBe('Post CRLF');
    expect(crlf.date).toBe('2025-07-01');
    expect(crlf.excerpt).toBe('Este post tem CRLF.');
  });

  it('places posts with invalid dates last', () => {
    const posts = loadPosts();
    const invalid = posts.find(p => p.slug === 'invalid-date-post');
    expect(invalid).toBeDefined();
    expect(invalid.date).toBe('not-a-date');
    expect(posts[posts.length - 1].slug).toBe('invalid-date-post');
  });
});
