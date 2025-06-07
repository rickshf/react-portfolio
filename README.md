# Portfolio

## Português

### Licença
Este projeto está licenciado sob os termos da [Licença MIT](LICENSE).

### Desenvolvimento

1. Instale as dependências:

   ```bash
   npm install
   ```

2. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

3. Gere a versão de produção:

   ```bash
   npm run build
   ```

4. Execute o linter:

   ```bash
   npm run lint
   ```

5. Visualize a build gerada:

   ```bash
   npm run preview
   ```

### Criar novos posts

Para adicionar um novo post, basta colocar um arquivo Markdown em `src/posts/`
com `title` e `date` no cabeçalho. Os arquivos são lidos automaticamente pelo
site, portanto não é necessário editar outros arquivos.

### Idioma e tema

O idioma padrão é configurado em `src/context/ThemeContext.jsx`. Altere o
valor da variável `lang` para `pt` ou `en` conforme necessário. Para habilitar o
modo escuro do Tailwind, adicione a classe `dark` ao elemento `<html>` em
`index.html`.

O conteúdo deste site está disponível em português e inglês.

## English

### License
This project is licensed under the [MIT License](LICENSE).

### Development

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the development server:

   ```bash
   npm run dev
   ```

3. Build for production:

   ```bash
   npm run build
   ```

4. Run the linter:

   ```bash
   npm run lint
   ```

5. Preview the generated site:

   ```bash
   npm run preview
   ```

### Creating new posts

1. Add a Markdown file in `src/posts/` with a `title` and `date` front matter.
   The site will pick it up automatically; no other files need to be changed.

### Language and theme

The default language is set in `src/context/ThemeContext.jsx`. Change the
`lang` variable to `en` or `pt`. To enable dark mode, add the `dark` class to the
`<html>` element in `index.html`.
