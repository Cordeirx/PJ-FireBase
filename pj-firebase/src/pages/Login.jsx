import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { useRouter } from 'next/router';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login, error } = useAuth();
    const router = useRouter();

    async function handleSubmit(e) {
        e.preventDefault();
        await login(email, password);
        router.push("/profile");
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>E-mail</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label>Senha</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Entrar</button>
                {error && <p>{error}</p>}
            </form>
        </div>
    );
}
