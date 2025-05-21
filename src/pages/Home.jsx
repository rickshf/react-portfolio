export function Home() {
  return (
    <section className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
          Olá, eu sou [Seu Nome]
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
          Desenvolvedor focado em web minimalista, performance, e acessibilidade.  
          Crio soluções simples e eficientes com código limpo e propósito.
        </p>
      </div>

      <div className="flex justify-center space-x-4">
        <a
          href="/projects"
          className="px-4 py-2 border rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition"
        >
          Ver Projetos
        </a>
        <a
          href="/blog"
          className="px-4 py-2 border rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition"
        >
          Blog Técnico
        </a>
      </div>

      <div className="text-center text-sm text-gray-500 dark:text-gray-400 pt-8">
        <p>
          Código open-source. Minimalismo é clareza.
        </p>
      </div>
    </section>
  );
}
