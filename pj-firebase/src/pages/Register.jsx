'use client';
import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { useRouter } from 'next/router';
import Link from 'next/link';

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

        const success = await register(email, password, name, bio, link);

        if (success) {
            setSuccess('Cadastro realizado com sucesso!');
            setTimeout(() => {
                router.push('/Login');
            }, 2000);
        } else {
            setSuccess(''); // limpa sucesso se falhou
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

                <label>Portfólio (Link)</label>
                <input
                    type="url"
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

            <p>Já tem uma conta? <Link href="/Login">Faça login aqui</Link></p>
        </div>
    );
}
