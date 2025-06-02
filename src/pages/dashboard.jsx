import { useAuth } from "../hooks/useAuth";
import { useRouter } from 'next/router';
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../api/firebase";
import styles from '../styles/Layout.module.css';

export default function Dashboard() {
    const { user, loading, logout } = useAuth();
    const router = useRouter();
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        if (!loading && !user) {
            router.push('/');
        }

        async function fetchProfile() {
            if (user) {
                const docRef = doc(db, "users", user.uid);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    setProfile(docSnap.data());
                }
            }
        }

        fetchProfile();
    }, [user, loading, router]);

    if (loading || !profile) {
        return (
            <div style={{
                minHeight: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#121212',
                color: '#FFFFFF',
            }}>
                <p style={{ color: '#9F7AEA' /* roxo claro */, fontWeight: 'bold' }}>Carregando...</p>
            </div>
        );
    }

    async function handleLogout() {
        await logout();
        router.push('/');
    }

    return (
        <div style={{
            minHeight: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#121212',
            margin: 0,
        }}>
            <div style={{
                backgroundColor: '#1E1E1E',
                padding: '2rem',
                borderRadius: '8px',
                boxShadow: '0 0 10px rgba(255, 255, 255, 0.5)', // sombra branca
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                width: '320px',
                color: '#FFFFFF',
                textAlign: 'center',
            }}>
                <h1 style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: '1.8rem', marginBottom: '1rem' }}>
                    {profile.name}
                </h1>
                <p style={{ marginBottom: '0.5rem' }}>
                    <strong>Bio:</strong> {profile.bio}
                </p>
                <p style={{ marginBottom: '1rem' }}>
                    <strong>Portfólio:</strong>{' '}
                    <a
                        href={profile.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: '#9F7AEA', textDecoration: 'underline' }}
                    >
                        Ver Agora
                    </a>
                </p>
                <button
                    onClick={handleLogout}
                    style={{
                        padding: '0.7rem',
                        borderRadius: '4px',
                        backgroundColor: '#E53E3E',
                        color: '#FFFFFF',
                        fontWeight: 'bold',
                        border: 'none',
                        cursor: 'pointer',
                        transition: 'background 0.3s',
                    }}
                    onMouseOver={e => e.currentTarget.style.backgroundColor = '#C53030'}
                    onMouseOut={e => e.currentTarget.style.backgroundColor = '#E53E3E'}
                >
                    Sair
                </button>
            </div>
        </div>
    );
}
