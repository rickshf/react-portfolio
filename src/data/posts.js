// src/data/posts.js
import primeiroPostRaw from '../posts/primeiro-post.md?raw';

// Regex que isola o frontmatter (entre os ---)
const frontmatterRegex = /^---\n([\s\S]*?)\n---/;
const match = primeiroPostRaw.match(frontmatterRegex);

let title = '';
let date = '';
let content = primeiroPostRaw;

// Se o frontmatter existir, extrai e remove do conteúdo
if (match) {
  const yaml = match[1];
  // remove a seção YAML do raw
  content = primeiroPostRaw.replace(frontmatterRegex, '').trim();
  // percorre linha a linha do YAML para popular title e date
  yaml.split('\n').forEach(line => {
    const [key, ...rest] = line.split(':');
    const value = rest.join(':').trim().replace(/^"(.*)"$/, '$1');
    if (key === 'title')  title = value;
    if (key === 'date')   date = value;
  });
}

export const posts = [
  {
    slug: 'primeiro-post',
    title,
    date,
    content,
  },
];
