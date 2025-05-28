import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login, error } = useAuth();
    const router = useRouter();

    async function handleSubmit(e) {
        e.preventDefault();
        await login(email, password);
        router.push("/dashboard");  // Redireciona para o Dashboard
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>E-mail</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <label>Senha</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />

                <button type="submit">Entrar</button>

                {error && <p>{error}</p>}
            </form>

            <p>Não tem uma conta? <Link href="/Register">Cadastre-se aqui</Link></p>
        </div>
    );
}
