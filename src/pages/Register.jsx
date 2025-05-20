import { useState } from "react";
import { useAuth } from "../hooks/useAuth";

export default function Register(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { register, error} = useAuth();

    async function handleSubmit(e){
        e.preventDefault();
        await register(email, password);

    }

    return (
        <div>
            <form onSubmit={handleSubmit} >
                <label>E-mail</label>
                <input
                    type="email"
                    value={email}
                    onChange={ (e)=> setEmail(e.target.value) } 
                />
                <label>Senha</label>
                <input
                    type="password"
                    value={password}
                    onChange={ (e)=> setPassword(e.target.value) } 
                />
                <button type="submit" >Cadastrar</button>
            </form>
        </div>
    )
}