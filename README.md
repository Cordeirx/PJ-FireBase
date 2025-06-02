1- Clone ou extraia o código do projeto:

git clone [https://github.com/Cordeirx/PJ-FireBase.git]
cd seu-repositorio
No terminal, instale as dependências:

npm install

ou

yarn install
Crie um arquivo .env.local na raiz do projeto e adicione as variáveis do Firebase, exemplo:

NEXT_PUBLIC_FIREBASE_API_KEY="sua-apiKey-aqui"
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN="seu-authDomain.firebaseapp.com"
NEXT_PUBLIC_FIREBASE_PROJECT_ID="seu-projectId"
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET="seu-storageBucket.appspot.com"
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID="seu-messagingSenderId"
NEXT_PUBLIC_FIREBASE_APP_ID="seu-appId"
Atualize o arquivo firebase.js ou firebase.ts para usar as variáveis de ambiente, exemplo:

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};
Para rodar localmente:

npm run dev

ou

yarn dev
Abra no navegador:
http://localhost:3000

2- Testar
Acesse a rota /Register e cadastre um novo usuário preenchendo email, senha, nome, bio e link do portfólio.

Após o cadastro, uma mensagem de sucesso será exibida e, em seguida, o usuário será redirecionado para a página de Login.

Faça login com os dados cadastrados.

Você será redirecionado para o Dashboard, onde poderá ver o seu nome, bio e link do portfólio.

O link poderá ser clicado e abrirá em uma nova aba.

Use o botão "Sair" para realizar o logout.

3- Principais tecnologias e bibliotecas utilizadas

Next.js — Framework React para renderização SSR e rotas automáticas.

React.js — Biblioteca para construir a interface do usuário.

Firebase Authentication — Gerenciamento de autenticação por e-mail e senha.

Firestore (Firebase) — Banco de dados NoSQL para armazenar perfis dos usuários.

TailwindCSS — Framework CSS para estilização rápida e responsiva.

React Hooks — Como useState, useEffect e useContext para gerenciar estados e contexto de autenticação.

4- Funcionalidades principais

Cadastro de usuários com campos personalizados: nome, bio e link do portfólio.

Login e logout seguros.

Proteção de rotas: usuários não autenticados são redirecionados para a página de Login.

Dashboard com dados do perfil recuperados do Firestore.

Exibição de mensagens de erro e sucesso para melhor experiência do usuário.

Link de portfólio funcional, abrindo em nova aba.

