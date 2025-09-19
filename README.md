# 🎵 Code Beats (TrybeTunes)

Aplicação desenvolvida em **React + TypeScript + Vite**, que consome a API do iTunes para pesquisar artistas, listar álbuns, ouvir prévias de músicas, favoritar/desfavoritar faixas e gerenciar o perfil da pessoa usuária.  

Este projeto foi construído com foco em **boas práticas, testes automatizados e experiência de usuário**, simulando um player musical moderno.

---

## 🚀 Tecnologias Utilizadas

- ⚛️ [React](https://react.dev/)  
- ⚡ [Vite](https://vitejs.dev/)  
- 📘 [TypeScript](https://www.typescriptlang.org/)  
- 🎨 [TailwindCSS](https://tailwindcss.com/) (estilização responsiva)  
- 🛣️ [React Router DOM](https://reactrouter.com/)  
- 🎧 API pública do [iTunes](https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/iTuneSearchAPI/)  
- 🧪 [React Testing Library (RTL)](https://testing-library.com/docs/react-testing-library/intro/) + [Jest](https://jestjs.io/)  
- 🎯 Context API para gerenciamento de estado  

---

## ✨ Funcionalidades

- [x] **Login** com persistência local do usuário  
- [x] **Pesquisar** por artista ou banda  
- [x] **Listar álbuns** disponíveis de cada artista  
- [x] **Visualizar músicas** de um álbum selecionado  
- [x] **Reproduzir prévia** das faixas (30 segundos)  
- [x] **Favoritar e desfavoritar** músicas  
- [x] **Visualizar lista de favoritas**  
- [x] **Perfil do usuário** (com edição de nome, email e descrição)  
- [x] Interface **responsiva** (desktop e mobile)  
- [ ] Testes unitários e de integração com **RTL + Jest** (em desenvolvimento)  

---

## 📂 Estrutura do Projeto

```bash
.
├── public/               # Arquivos estáticos
├── src/
│   ├── assets/           # Imagens e ícones
│   ├── components/       # Componentes reutilizáveis (Header, MusicCard, etc.)
│   ├── context/          # MusicContext + Provider
│   ├── pages/            # Páginas (Login, Search, Album, Favorites, Profile)
│   ├── services/         # Funções para consumo da API do iTunes
│   ├── styles/           # Estilos globais (TailwindCSS)
│   ├── types/            # Tipagens TypeScript (UserType, AlbumType, SongType)
│   ├── App.tsx           # Rotas principais
│   └── main.tsx          # Ponto de entrada
├── package.json
├── tailwind.config.js    # Configuração do Tailwind
└── README.md             # Este arquivo :)

⚙️ Instalação e Uso

Clone o repositório e instale as dependências:

git clone https://github.com/SEU_USUARIO/code-beats.git
cd code-beats
npm install

▶️ Rodando o projeto

npm run dev

Acesse em: 👉 http://localhost:5173
📦 Build de produção

npm run build
npm run preview

🧪 Testes

Este projeto utiliza React Testing Library para testes de componentes e integração.

Rodar todos os testes:

npm run test

🎨 Screenshots
🔑 Login

🎧 Pesquisa de artista

🎶 Player de músicas

✅ Scripts Disponíveis

    npm run dev → Inicia servidor de desenvolvimento

    npm run build → Gera build otimizado

    npm run preview → Pré-visualiza o build local

    npm run test → Executa testes com RTL

🤝 Contribuindo

Contribuições são bem-vindas!

    Faça um fork do projeto

    Crie uma branch para sua feature:

git checkout -b minha-feature

Commit suas mudanças:

git commit -m "Adicionei nova feature"

Push para a branch:

    git push origin minha-feature

    Abra um Pull Request 🚀

📜 Licença

Este projeto está sob a licença MIT.
Sinta-se livre para usar, modificar e compartilhar.
