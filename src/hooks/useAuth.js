import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    signOut, 
    onAuthStateChanged } 
    from "firebase/auth";
    
import { auth } from "../api/firebase";
import { useEffect, useState } from "react";

export function useAuth(){
    const [ user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=> {
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser);
            setLoading(false);
        });
        return unsubscribe();    
    }, []);

    async function register(email, password){
        setError(null) 
        try {
            await createUserWithEmailAndPassword(auth, email, password)
        } catch (error) {
           setError(error.message) 
        }
    }
    async function login(email, password){
        setError(null);
        try {
            await signInWithEmailAndPassword(auth, email, password);
        } catch (error) {
            setError(error.message)   
        }
    }
    async function logout(){
        setError(null);
        try {
            await signOut(auth)
        } catch (error) {
            setError(error.message) 
        }
    }
    return { user, loading, error, register, login, logout }
}