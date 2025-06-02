import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from "firebase/auth";

import { doc, setDoc } from 'firebase/firestore';

import { auth, db } from "../api/firebase";
import { useEffect, useState } from "react";

export function useAuth() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
        return unsubscribe;
    }, []);

    async function register(email, password, name, bio, link) {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            await setDoc(doc(db, "users", user.uid), {
                name,
                bio,
                portfolio: link
            });

            setError(null);  // limpa erro
            return true;     // indica sucesso
        } catch (err) {
            setError(err.message);
            return false;    // indica falha
        }
    }


    async function login(email, password) {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            setError(null); // limpa o erro, se houver
            return true;    // indica sucesso
        } catch (err) {
            setError(err.message);
            return false;   // indica falha
        }
    }


    async function logout() {
        setError(null);
        try {
            await signOut(auth);
        } catch (err) {
            setError(err.message);
        }
    }

    return { user, loading, error, register, login, logout };
}
