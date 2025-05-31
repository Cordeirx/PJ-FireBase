// Importa o hook useState para gerenciar estados locais no componente.
import { useState } from "react";
// Importa o hook personalizado useAuth que provavelmente contém a lógica de autenticação.
import { useAuth } from "../hooks/useAuth";
// Importa o hook useRouter do Next.js para navegação programática.
import { useRouter } from 'next/router';
// Importa o componente Link do Next.js para navegação entre páginas sem recarregar.
import Link from 'next/link';

// Define e exporta o componente Login
export default function Login() {
    // Define os estados para armazenar o e-mail e a senha digitados pelo usuário.
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    // Obtém as funções login e error do contexto de autenticação.
    const { login, error } = useAuth();

    // Inicializa o roteador para permitir redirecionamentos.
    const router = useRouter();

    // Função chamada ao submeter o formulário de login.
    async function handleSubmit(e) {
        e.preventDefault(); // Previne o comportamento padrão de recarregar a página.
        
        // Chama a função login passando o e-mail e a senha.
        const success = await login(email, password);
        
        // Se o login for bem-sucedido, redireciona para a página de dashboard.
        if (success) {
            router.push("/dashboard");
        }
        // Se não for bem-sucedido, o erro será exibido abaixo através de {error}
    }

    // Renderiza o formulário de login.
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>E-mail</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} // Atualiza o estado de email.
                    required // Campo obrigatório.
                />

                <label>Senha</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} // Atualiza o estado de senha.
                    required // Campo obrigatório.
                />

                <button type="submit">Entrar</button>

                {/* Exibe a mensagem de erro, se houver, em vermelho. */}
                {error && <p style={{ color: 'red' }}>{error}</p>}
            </form>

            {/* Link para a página de cadastro. */}
            <p>Não tem uma conta? <Link href="/Register">Cadastre-se aqui</Link></p>
        </div>
    );
}
