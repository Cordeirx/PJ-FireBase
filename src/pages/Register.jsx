'use client';

import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from '../styles/Layout.module.css';

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
            setSuccess('');
        }
    }

    return (
        <div style={{
            height: '100vh',
            margin: 0,
            backgroundColor: '#121212',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <form 
                onSubmit={handleSubmit}
                style={{
                    backgroundColor: '#1E1E1E',
                    padding: '2rem',
                    borderRadius: '8px',
                    boxShadow: '0 0 10px rgba(255, 255, 255, 0.5)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem',
                    width: '320px',
                    color: '#FFFFFF'
                }}
            >
                <h2 style={{ color: '#FFFFFF', textAlign: 'center' }}>Cadastro</h2>

                <label>Nome completo</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    style={{
                        padding: '0.5rem',
                        borderRadius: '4px',
                        border: '1px solid #FFFFFF',
                        backgroundColor: '#2C2C2C',
                        color: '#FFFFFF'
                    }}
                />

                <label>Biografia (Curta)</label>
                <input
                    type="text"
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                    required
                    style={{
                        padding: '0.5rem',
                        borderRadius: '4px',
                        border: '1px solid #FFFFFF',
                        backgroundColor: '#2C2C2C',
                        color: '#FFFFFF'
                    }}
                />

                <label>Portfólio (Link)</label>
                <input
                    type="url"
                    value={link}
                    onChange={(e) => setLink(e.target.value)}
                    required
                    style={{
                        padding: '0.5rem',
                        borderRadius: '4px',
                        border: '1px solid #FFFFFF',
                        backgroundColor: '#2C2C2C',
                        color: '#FFFFFF'
                    }}
                />

                <label>E-mail</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    style={{
                        padding: '0.5rem',
                        borderRadius: '4px',
                        border: '1px solid #FFFFFF',
                        backgroundColor: '#2C2C2C',
                        color: '#FFFFFF'
                    }}
                />

                <label>Senha</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    style={{
                        padding: '0.5rem',
                        borderRadius: '4px',
                        border: '1px solid #FFFFFF',
                        backgroundColor: '#2C2C2C',
                        color: '#FFFFFF'
                    }}
                />

                <button
                    type="submit"
                    style={{
                        padding: '0.7rem',
                        borderRadius: '4px',
                        backgroundColor: '#FFFFFF',
                        color: '#121212',
                        fontWeight: 'bold',
                        border: 'none',
                        cursor: 'pointer',
                        transition: 'background 0.3s'
                    }}
                    onMouseOver={(e) => e.target.style.backgroundColor = '#E0E0E0'}
                    onMouseOut={(e) => e.target.style.backgroundColor = '#FFFFFF'}
                >
                    Cadastrar
                </button>

                {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
                {success && <p style={{ color: 'lightgreen', textAlign: 'center' }}>{success}</p>}

                <p style={{ textAlign: 'center', color: '#FFFFFF' }}>
                    Já tem uma conta?{' '}
                    <Link href="/Login" style={{ color: '#FFFFFF', textDecoration: 'underline' }}>
                        Faça login aqui
                    </Link>
                </p>
            </form>
        </div>
    );
}
