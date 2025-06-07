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

### Personalizando links de contato

Defina as variáveis `VITE_LINKEDIN_URL` e `VITE_CONTACT_EMAIL` em um arquivo `.env` na raiz do projeto para alterar os links exibidos na página de contato. Essas configurações serão usadas ao rodar `npm run dev` ou `npm run build`.
Você pode usar o arquivo `.env.example` como base, copiando-o para `.env` e ajustando os valores desejados.


### Criar novos posts

Para adicionar um novo post, basta colocar um arquivo Markdown em `src/posts/`
com `title` e `date` no cabeçalho. Os arquivos são lidos automaticamente pelo
site, portanto não é necessário editar outros arquivos.

### Idioma e tema

O gerenciamento de tema é feito pelos arquivos `src/context/ThemeContext.js` e
`src/context/ThemeProvider.jsx`, que controlam apenas o modo claro ou escuro.
Não há variável de idioma definida nesses arquivos. Para habilitar o modo
escuro do Tailwind, adicione a classe `dark` ao elemento `<html>` em
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

### Customizing contact links

Setting the `VITE_LINKEDIN_URL` and `VITE_CONTACT_EMAIL` environment variables changes the links shown on the Contact page. Create a `.env` file at the project root with the desired values. They will be used when running `npm run dev` or `npm run build`.
An example file called `.env.example` is provided; copy it to `.env` and adjust the values as needed.


### Creating new posts

1. Add a Markdown file in `src/posts/` with a `title` and `date` front matter.
   The site will pick it up automatically; no other files need to be changed.

### Language and theme

Theme management lives in `src/context/ThemeContext.js` and `src/context/ThemeProvider.jsx` and only handles the
light/dark mode. There is no
language variable defined in that context. To enable dark mode, add the `dark`
class to the `<html>` element in `index.html`.
