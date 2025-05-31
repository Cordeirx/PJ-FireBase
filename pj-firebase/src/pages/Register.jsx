// Diretiva obrigatória quando usando Next.js App Router no modo client-side.
'use client';

// Importa o hook useState para gerenciar estados locais no componente.
import { useState } from "react";
// Importa o hook personalizado useAuth, que contém a lógica de autenticação.
import { useAuth } from "../hooks/useAuth";
// Importa o hook useRouter do Next.js para fazer redirecionamentos programáticos.
import { useRouter } from 'next/router';
// Importa o componente Link do Next.js para criar navegação entre páginas sem recarregar.
import Link from 'next/link';

// Define e exporta o componente Register.
export default function Register() {
    // Estados para armazenar os dados do formulário de cadastro.
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [bio, setBio] = useState('');
    const [link, setLink] = useState('');
    const [password, setPassword] = useState('');
    const [success, setSuccess] = useState(''); // Mensagem de sucesso do cadastro.

    // Obtém a função register e a variável de erro do hook de autenticação.
    const { register, error } = useAuth();

    // Inicializa o roteador para redirecionamentos.
    const router = useRouter();

    // Função que trata o envio do formulário de cadastro.
    async function handleSubmit(e) {
        e.preventDefault(); // Previne o comportamento padrão de recarregar a página.

        // Chama a função de registro com os dados preenchidos.
        const success = await register(email, password, name, bio, link);

        // Se o cadastro for bem-sucedido:
        if (success) {
            // Define a mensagem de sucesso.
            setSuccess('Cadastro realizado com sucesso!');
            // Aguarda 2 segundos e redireciona para a página de login.
            setTimeout(() => {
                router.push('/Login');
            }, 2000);
        } else {
            // Se falhar, limpa a mensagem de sucesso.
            setSuccess('');
        }
    }

    // Renderiza o formulário de cadastro.
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Nome completo</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)} // Atualiza o estado 'name'.
                    required
                />

                <label>Biografia (Curta)</label>
                <input
                    type="text"
                    value={bio}
                    onChange={(e) => setBio(e.target.value)} // Atualiza o estado 'bio'.
                    required
                />

                <label>Portfólio (Link)</label>
                <input
                    type="url"
                    value={link}
                    onChange={(e) => setLink(e.target.value)} // Atualiza o estado 'link'.
                    required
                />

                <label>E-mail</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} // Atualiza o estado 'email'.
                    required
                />

                <label>Senha</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} // Atualiza o estado 'password'.
                    required
                />

                <button type="submit">Cadastrar</button>

                {/* Exibe a mensagem de erro, se houver, em vermelho. */}
                {error && <p style={{ color: 'red' }}>{error}</p>}

                {/* Exibe a mensagem de sucesso, se houver, em verde. */}
                {success && <p style={{ color: 'green' }}>{success}</p>}
            </form>

            {/* Link para a página de login. */}
            <p>Já tem uma conta? <Link href="/Login">Faça login aqui</Link></p>
        </div>
    );
}
