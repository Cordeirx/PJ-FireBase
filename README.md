*Sistema de Autenticação com Next.js e Firebase*

<<<<<<< HEAD
Instruções para configurar e rodar o projeto localmente
=======
git clone [https://github.com/Cordeirx/PJ-FireBase.git]
cd seu-repositorio
No terminal, instale as dependências:
>>>>>>> ed6039d345369d7c35efaf29206c0ec5046bd67d

Pré-requisitos:

 -Node.js instalado (versão recomendada: 16 ou superior)

 -Conta no Firebase e um projeto criado

*Configurar o Firebase:*

1. Acesse o Firebase Console e crie um novo projeto (ou use um existente).

2. No projeto Firebase, ative o método de autenticação:

 -Vá em Authentication > Método de login

 -Ative a opção Email/senha

3. Configure o Firestore:

 -Vá em Firestore Database e crie um banco de dados no modo produção ou teste.

 -Na aba Regras, cole as regras abaixo e publique para permitir acesso aos perfis:

rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  }
}

4. Obtenha as credenciais do seu app:

 -Vá em Configurações do projeto > Aplicativos

 -Adicione um app web (caso ainda não tenha)

 -Copie o objeto de configuração do Firebase (apiKey, authDomain, projectId, etc.)

*Configurar o projeto localmente:*

1. Clone ou extraia o código do projeto.

2. No terminal, navegue até a pasta do projeto e rode:
npm install

3. Crie um arquivo .env.local na raiz do projeto e adicione as variáveis do Firebase, exemplo:

NEXT_PUBLIC_FIREBASE_API_KEY="sua-apiKey-aqui"
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN="seu-authDomain.firebaseapp.com"
NEXT_PUBLIC_FIREBASE_PROJECT_ID="seu-projectId"
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET="seu-storageBucket.appspot.com"
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID="seu-messagingSenderId"
NEXT_PUBLIC_FIREBASE_APP_ID="seu-appId"

4. Atualize o arquivo firebase.js para usar as variáveis de ambiente, exemplo:

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

5. Para rodar localmente:

npm run dev

6. Abra o navegador em:

http://localhost:3000

*Testar:*

 -Cadastre um novo usuário preenchendo email, senha, nome, bio e link no formulário de cadastro.

 -Após o cadastro, o usuário será direcionado para a página de dashboard que mostra os dados salvos.

 -Faça login com usuários existentes e veja o perfil.

 -Use o botão logout para sair.

*Principais tecnologias e bibliotecas utilizadas:*
 -Next.js — Framework para desenvolvimento de aplicações React com renderização híbrida.

 -Firebase Authentication — Gerenciamento de autenticação por email e senha.

 -Firestore (Firebase) — Banco de dados NoSQL para salvar e ler perfis dos usuários.

 -CSS Customizado — Estilização moderna com tema dark e detalhes em roxo.

 -JavaScript ES6+ — Sintaxe moderna e concisa.

 *Fluxo do usuário:*

1. Cadastro: usuário se registra informando nome, bio, link, email e senha.

2. Login: autentica-se na aplicação.

3. Dashboard: visualiza nome, bio e link clicável do portfólio.

4. Logout: encerra a sessão.

*Autor:*

Eric Cordeiro Santos
TSI - 5° Sem