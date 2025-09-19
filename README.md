# ✅ ToDo List - React + Tailwind + TypeScript

Uma aplicação de **ToDo List** moderna feita com **React, Vite, TypeScript e TailwindCSS**, com suporte a **tema claro/escuro**, filtragem de tarefas (**All, Active, Completed**) e interface responsiva.  

---

## 📌 Tecnologias Utilizadas

- ⚛️ [React](https://react.dev/)  
- ⚡ [Vite](https://vitejs.dev/)  
- 📘 [TypeScript](https://www.typescriptlang.org/)  
- 🎨 [TailwindCSS](https://tailwindcss.com/)  
- 🌓 Context API para gerenciamento de tema (Light/Dark)  
- 🔧 [clsx](https://www.npmjs.com/package/clsx) para manipulação de classes CSS  

---

## ✨ Funcionalidades

- [x] Adicionar novas tarefas  
- [x] Marcar tarefas como concluídas  
- [x] Filtrar por **All / Active / Completed**  
- [x] Contador de tarefas restantes  
- [x] Limpar tarefas concluídas  
- [x] Suporte a **tema claro e escuro**  
- [x] Layout responsivo (desktop e mobile)  

---

## 📂 Estrutura do Projeto

```bash
.
├── public/               # Arquivos estáticos (ícones, imagens, etc.)
├── src/
│   ├── components/       # Componentes reutilizáveis (TodoList, etc.)
│   ├── contexts/         # Context API (ThemeProvider, ThemeContext)
│   ├── styles/           # Estilos globais
│   ├── App.tsx           # Componente principal
│   └── main.tsx          # Ponto de entrada do React
├── package.json
├── tailwind.config.js    # Configuração do Tailwind
└── README.md             # Este arquivo :)

⚙️ Instalação e Uso

Clone o repositório e instale as dependências:

git clone https://github.com/SEU_USUARIO/todo-list-react-tailwind.git
cd todo-list-react-tailwind
npm install

▶️ Rodando o projeto

npm run dev

O projeto ficará disponível em:
👉 http://localhost:5173
📦 Build de produção

npm run build

Para pré-visualizar o build:

npm run preview

🎨 Temas (Light/Dark)

O projeto possui um ThemeProvider que controla automaticamente o tema.

Exemplo de uso no código:

import { useContext } from "react";
import { ThemeContext } from "./contexts/ThemeContext";

function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={theme}>
      <button onClick={toggleTheme}>Mudar tema</button>
    </div>
  );
}

export default App;

✅ Scripts Disponíveis

    npm run dev → Inicia servidor de desenvolvimento

    npm run build → Gera build otimizado para produção

    npm run preview → Pré-visualiza o build localmente

🖼️ Screenshots
💻 Desktop

📱 Mobile

🤝 Contribuindo

Se quiser contribuir com melhorias:

    Faça um fork do repositório

    Crie uma branch:

git checkout -b minha-feature

Commit suas mudanças:

git commit -m "Adicionei uma nova feature"

Push para a branch:

    git push origin minha-feature

    Abra um Pull Request 🚀

📜 Licença

Este projeto está sob a licença MIT.
Sinta-se livre para usar, modificar e compartilhar.
