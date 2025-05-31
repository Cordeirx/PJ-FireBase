import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from '../styles/Layout.module.css';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login, error } = useAuth();
    const router = useRouter();

    async function handleSubmit(e) {
        e.preventDefault();
        const success = await login(email, password);
        if (success) {
            router.push("/dashboard");
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
            <div>
                <form 
                    onSubmit={handleSubmit} 
                    style={{
                        backgroundColor: '#1E1E1E',
                        padding: '2rem',
                        borderRadius: '8px',
                        boxShadow: '0 0 10px rgba(255, 255, 255, 0.5)', // sombra branca
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1rem',
                        width: '300px',
                        color: '#FFFFFF'
                    }}
                >
                    <h2 style={{ color: '#FFFFFF', textAlign: 'center' }}>Login</h2>

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
                        Entrar
                    </button>

                    {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}

                    <p style={{ textAlign: 'center' }}>
                        Não tem uma conta? <Link href="/Register" style={{ color: '#FFFFFF', textDecoration: 'underline' }}>Cadastre-se aqui</Link>
                    </p>
                </form>
            </div>
        </div>
    );
}
