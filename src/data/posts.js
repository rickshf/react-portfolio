// src/data/posts.js
import matter from 'gray-matter'
import primeiroPostRaw from '../posts/primeiro-post.md?raw'

const { data, content } = matter(primeiroPostRaw)

export const posts = [
  {
    slug: 'primeiro-post',
    title: data.title,
    date: data.date,
    content,           // só o corpo, sem o YAML
  },
  // daqui para frente, adicione outros posts da mesma forma
]
