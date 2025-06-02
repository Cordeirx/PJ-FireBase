import { useEffect, useState } from "react";
import { db } from "../api/firebase";
import { doc, getDoc } from "firebase/firestore";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

export default function Profile() {
    const { user, logout } = useAuth();
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchProfile() {
            if (user) {
                const docRef = doc(db, "userProfiles", user.uid);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    setProfile(docSnap.data());
                } else {
                    setProfile(null);
                }
                setLoading(false);
            }
        }
        fetchProfile();
    }, [user]);

    async function handleLogout() {
        await logout();
        navigate("/login");
    }

    if (loading) return <p>Carregando...</p>;

    return (
        <div>
            <h2>Meu Perfil</h2>
            {profile ? (
                <>
                    <p><strong>Nome:</strong> {profile.nomeCompleto}</p>
                    <p><strong>Bio:</strong> {profile.bioCurta}</p>
                    <p><a href={profile.linkPortfolio} target="_blank" rel="noreferrer">Ver Portfólio</a></p>
                </>
            ) : (
                <p>Perfil ainda não configurado.</p>
            )}
            <button onClick={handleLogout}>Sair</button>
        </div>
    );
}
