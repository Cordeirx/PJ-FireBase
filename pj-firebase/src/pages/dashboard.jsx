import { useAuth } from "../hooks/useAuth";
import { useRouter } from 'next/router';
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../api/firebase";

export default function Dashboard() {
    const { user, loading, logout } = useAuth();
    const router = useRouter();
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        if (!loading && !user) {
            router.push('/');  // Se não estiver logado, volta pro Login
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
        return <p>Carregando...</p>;
    }

    async function handleLogout() {
        await logout();
        router.push('/');
    }

  return (
  <div>
    <h1>Bem-vindo, {profile.name}!</h1>
    <p>Bio: {profile.bio}</p>
    <p>
      Portfólio: {profile.portfolio ? (
        <a
          href={profile.portfolio.startsWith('http') ? profile.portfolio : `https://${profile.portfolio}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Ver Agora
        </a>
      ) : (
        <span>Portfólio não disponível</span>
      )}
    </p>
    <button onClick={handleLogout}>Sair</button>
  </div>
);

}
