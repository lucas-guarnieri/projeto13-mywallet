import { React, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import Container from "../styles/ContainerForm";
import money from "../assets/money2.gif"

export default function SingUp(){
    const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [name, setName] = useState("");
   

    function registerUser(event){
        event.preventDefault();
        const promise = axios.post(`http://localhost:5000/sign-up`, {
            name: name,
            email: email,
            password: password,
            passwordConfirm: passwordConfirm
        });

        promise.then((response) => {
            console.log(response.data);
            window.location = "/";
        });

        promise.catch(error => {
            console.log(error.response);
        });
    }
    return(
        <Container>
            <img src={money} alt="money" />
            <p>MyWallet</p>
            <form onSubmit={registerUser}>
                <input 
                    type="text" 
                    placeholder="Nome" 
                    value={name} 
                    onChange={e => setName(e.target.value)}
                />
                <input 
                    type="email" 
                    placeholder="Email" 
                    value={email}  
                    onChange={e => setEmail(e.target.value)}
                />
		        <input 
                    type="password" 
                    placeholder="Senha" 
                    value={password} 
                    onChange={e => setPassword(e.target.value)}
                />
                <input 
                    type="password" 
                    placeholder="Confirme a senha" 
                    value={passwordConfirm} 
                    onChange={e => setPasswordConfirm(e.target.value)}
                />
                
                
		        <button type="submit">Cadastrar</button>
            </form>
            <Link className="link" to="/">Já tem uma conta? Faça login!</Link>
        </Container>
    )
}