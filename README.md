# carl-santos.github.io

Portfólio profissional de Carlos Alberto Santos. Site estático: HTML, CSS e um pouco de JavaScript, sem build.

## Publicar no GitHub Pages

1. No GitHub, crie um repositório **público** chamado exatamente `carl-santos.github.io`.
2. Envie o conteúdo desta pasta para a raiz dele (arraste os arquivos em "Add file → Upload files", ou pelo terminal):

   ```bash
   git init
   git add .
   git commit -m "Portfólio"
   git branch -M main
   git remote add origin https://github.com/carl-santos/carl-santos.github.io.git
   git push -u origin main
   ```

3. Em **Settings → Pages**, confira que a origem é a branch `main`, pasta `/ (root)`.
4. Em um ou dois minutos o site estará em `https://carl-santos.github.io/`.

O arquivo `.nojekyll` avisa o GitHub para servir os arquivos como estão.

## Trocar a foto

A foto está em `assets/foto.jpg`, recortada em retrato 4:5. Para trocar, substitua o arquivo mantendo o nome e a proporção. Se ele faltar, o site mostra o monograma "CS".

`assets/og.png` é a imagem que aparece quando o link é compartilhado no LinkedIn e no WhatsApp. Se trocar a foto, gere de novo uma captura de 1200 × 630 px do topo da página.

## Onde editar

| O quê | Onde |
| --- | --- |
| Textos, projetos, formação | `index.html` |
| Cores, fontes, espaçamentos | `assets/site.css` (variáveis no topo) |
| Tema claro/escuro, animação do diagrama | `assets/site.js` |
| Imagens dos projetos | `assets/img/` |

As fontes (Newsreader e Geist, licença SIL Open Font) estão em `assets/fonts/`, servidas pelo próprio site.

## Domínio próprio (opcional)

Crie um arquivo `CNAME` na raiz com o domínio (por exemplo `carlossantos.dev`), aponte o DNS para o GitHub Pages e atualize as URLs de `og:url`, `og:image` e `canonical` no `index.html`.
