# Perfil Profissional

Um portfólio profissional desenvolvido com React e Vite, apresentando experiências em automação industrial, métodos ágeis e desenvolvimento de software.

## 🚀 Tecnologias

- React 19
- Vite 6
- React Router DOM 7
- React Icons
- EmailJS
- Swiper
- CSS Modules

## 📋 Funcionalidades

- **Tema Claro/Escuro**: Sistema completo de temas com persistência local
- **Navegação Responsiva**: Menu adaptável para mobile e desktop
- **Busca Integrada**: Pesquisa em tempo real no conteúdo
- **Carrossel de Imagens**: Apresentação profissional de projetos
- **Formulário de Contato**: Integração com EmailJS para envio de mensagens
- **Redes Sociais**: Links diretos para perfis profissionais
- **Artigos Expansíveis**: Sistema de "ver mais" para melhor organização do conteúdo

## 🏗️ Estrutura do Projeto

```
src/
├── assets/         # Imagens e recursos
├── components/     # Componentes reutilizáveis
├── constants/      # Constantes e configurações
├── pages/         # Páginas da aplicação
├── routes/        # Configuração de rotas
└── utils/         # Funções utilitárias
```

## 🎨 Design System

- Sistema de cores variáveis via CSS Custom Properties
- Tipografia responsiva com clamp()
- Animações suaves e transições
- Layout totalmente responsivo
- Componentes consistentes

## 🚀 Como Executar

1. Clone o repositório:

```bash
git clone [url-do-repositório]
```

2. Instale as dependências:

```bash
npm install
```

3. Configure as variáveis de ambiente:

```bash
cp .env.example .env
```

4. Execute o projeto:

```bash
npm run dev
```

## 📄 Scripts Disponíveis

- `npm run dev`: Inicia o servidor de desenvolvimento
- `npm run build`: Gera versão de produção
- `npm run preview`: Preview da versão de produção
- `npm run deploy`: Deploy para GitHub Pages
- `npm run clean`: Limpa cache e build
- `npm run webp`: converte as imagens da pasta assets para a pasta a_webp

## 🌐 Deploy

O projeto está configurado para deploy no GitHub Pages através do comando:

```bash
npm run deploy
```

## 📱 Responsividade

- Mobile First
- Breakpoint principal: 480px
- Menu adaptativo
- Imagens responsivas
- Tipografia fluida

## 🔒 Variáveis de Ambiente

```env
VITE_EMAILJS_PUBLIC_KEY=seu_public_key
VITE_EMAILJS_SERVICE_ID=seu_service_id
VITE_EMAILJS_TEMPLATE_ID=seu_template_id
```

## 👤 Autor

- **Maurício Freire Rosa**
- LinkedIn: [mauriciofreirerosa](https://www.linkedin.com/in/mauriciofreirerosa/)
- GitHub: [Mauricio-Rosa](https://github.com/Mauricio-Rosa)

## 📝 Licença

Este projeto está sob a licença MIT.

# 🌐 LFR Demolition – Site institucional

Este repositório contém o código-fonte do site da LFR Demolition, desenvolvido em **React + Vite** e hospedado via **GitHub Pages**.

## 🚀 Tecnologias

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [TailwindCSS](https://tailwindcss.com/)
- [React Router DOM](https://reactrouter.com/)

## 📦 Publicação

O site está disponível em:
👉 [https://mauricio-rosa.github.io/lfr-demolition/](https://mauricio-rosa.github.io/lfr-demolition/)

## ✅ Otimização para Motores de Busca (SEO)

Para facilitar a indexação do site no Google e outros buscadores, foram incluídos os seguintes arquivos na pasta `/public`:

### 🔍 `robots.txt`

Informa aos robôs de busca que o conteúdo pode ser indexado, e aponta para o sitemap:

```txt
User-agent: *
Allow: /
Sitemap: https://mauricio-rosa.github.io/lfr-demolition/sitemap.xml
```
