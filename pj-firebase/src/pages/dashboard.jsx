// Importa o hook personalizado useAuth para acessar informações de autenticação.
import { useAuth } from "../hooks/useAuth";
// Importa o roteador do Next.js para redirecionamentos.
import { useRouter } from 'next/router';
// Importa hooks do React: useEffect para efeitos colaterais e useState para estados.
import { useEffect, useState } from "react";
// Importa funções do Firebase Firestore para ler documentos.
import { doc, getDoc } from "firebase/firestore";
// Importa a instância do banco de dados Firebase configurada no projeto.
import { db } from "../api/firebase";

// Define e exporta o componente Dashboard.
export default function Dashboard() {
    // Obtém informações do usuário, estado de carregamento e função de logout do hook de autenticação.
    const { user, loading, logout } = useAuth();

    // Inicializa o roteador do Next.js para redirecionamentos.
    const router = useRouter();

    // Estado para armazenar os dados do perfil do usuário.
    const [profile, setProfile] = useState(null);

    // Efeito colateral que roda quando o componente monta ou quando user/ loading / router mudam.
    useEffect(() => {
        // Se não estiver carregando e não houver usuário, redireciona para a página inicial (login).
        if (!loading && !user) {
            router.push('/');  // Se não estiver logado, volta pro Login
        }

        // Função assíncrona para buscar os dados do perfil no Firestore.
        async function fetchProfile() {
            if (user) {
                // Cria uma referência para o documento do usuário no Firestore.
                const docRef = doc(db, "users", user.uid);
                // Obtém uma snapshot do documento.
                const docSnap = await getDoc(docRef);
                // Se o documento existir, atualiza o estado com os dados do perfil.
                if (docSnap.exists()) {
                    setProfile(docSnap.data());
                }
            }
        }

        // Chama a função que busca o perfil.
        fetchProfile();
    }, [user, loading, router]);  // Dependências do efeito: atualiza se qualquer uma mudar.

    // Se ainda estiver carregando ou o perfil ainda não foi buscado, exibe "Carregando...".
    if (loading || !profile) {
        return <p>Carregando...</p>;
    }

    // Função que faz logout e redireciona para a página inicial.
    async function handleLogout() {
        await logout();
        router.push('/');
    }

    // Renderiza a interface do Dashboard, mostrando informações do perfil e botão de logout.
    return (
        <div>
            <h1>Bem-vindo, {profile.name}!</h1>
            <p>Bio: {profile.bio}</p>
            <p>
                Portfólio: 
                <a href={profile.link} target="_blank">
                    Ver Agora
                </a>
            </p>
            <button onClick={handleLogout}>Sair</button>
        </div>
    );
}
