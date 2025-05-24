'use client';  // Se estiver usando app router no Next.js 13+
import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { useRouter } from 'next/router';

export default function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [bio, setBio] = useState('');
    const [link, setLink] = useState('');
    const [password, setPassword] = useState('');
    const [success, setSuccess] = useState('');
    
    const { register, error } = useAuth();
    const router = useRouter();

    async function handleSubmit(e) {
        e.preventDefault();
        await register(email, password, name, bio, link);

        if (!error) {
            setSuccess('Cadastro realizado com sucesso!');
            
            // Aguarda 2 segundos e redireciona
            setTimeout(() => {
                router.push('/Login');
            }, 2000);
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Nome completo</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />

                <label>Biografia (Curta)</label>
                <input
                    type="text"
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                    required
                />

                <label>Portifólio (Link)</label>
                <input
                    type="link"
                    value={link}
                    onChange={(e) => setLink(e.target.value)}
                    required
                />

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

                <button type="submit">Cadastrar</button>

                {error && <p style={{ color: 'red' }}>{error}</p>}
                {success && <p style={{ color: 'green' }}>{success}</p>}
            </form>
        </div>
    );
}
