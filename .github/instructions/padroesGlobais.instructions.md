index.html na raiz do projéto é o arquivo principal

index.css é o arquivo de estilos globais

sempre responda os prompts em português brasil

sempre crie as páginas tendo em mente que é um site de portifólio / currículo. Mas ao mesmo tempo precisa ser bem profissional, bonito e chamativo

Todos os códigos devem ter comentários

sempre comente os códigos em portugues brasil conforme a orientação PEP8

não faça comentrários no meio do script, sempre trabalhe com clean code

sempre use variaveis e funções com nomes em ingles

sempre utilize o terminal padrão "command prompt"

Tudo deve ser responsivo tanto para versão web quanto para smartphone

sempre respeite a arquitetura da pastas

assets

- deverá conter todas as imagens utilizadas

pages

- deverá ter as paginas utilizadas
- Regra 1: as paginas deverão ser criados da seguinte forma (Pasta com o nome da pagina començando com a letra maiúscula e dentro dela haverão dois arquivos. index.html para o código da pagina e style.css para estilização da pagina)
- Regra 2: a exportação do styles.css deverá ter o nome "styles"
- Regra 3: a exportação do index.html deverá ter o nome igual ao da pasta da pagina
- Regra 4: A importação das paginas nos arquivos principais deverão usar os caminhos relativos até a pasta, ou seja, nao chamar o arquivo index.html.
- - Todos os estilos devem respeitar a padronização configurada em frontend\src\styles\global

não crie pastas sem fazer a varredura antes para evitar de criar pastas com funções iguais, por exemplo: Se existir a pasta page, não crie uma pastas chamas pages, paginas, paginas_home etc...

- Utilizar **CSS custom properties** com `:root` e `[data-theme=dark]`
- Evitar repetição de `transition:` usando `--transition`:
- Layout sempre **responsivo** com breakpoint primário em `480px`
- Componentes como `.header`, `.footer` e `.navigation` devem:

  - Usar `max-width` e `margin: 0 auto` para centralização
  - Ajustar `flex-direction` de `row` para `column` em telas pequenas
  - Respeitar padding interno (ex: `padding: 1rem 2rem`)

-
- **Funções nomeadas como PascalCase** : `function Header() { ... }`
- **Exportar no final** com `export default NomeDoComponente;`
- Usar `useEffect` para persistência de dados em `localStorage`
- Evitar múltiplos `useState` desnecessários; agrupar se fizer sentido
- Usar `data-theme` no `html` para aplicar tema global:
- document.documentElement.setAttribute('data-theme', 'dark');
