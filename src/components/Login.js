import { React, useState, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router";

import UserContext from "../contexts/UserContext";
import Container from "../styles/ContainerForm";
import money from "../assets/money2.gif"

export default function Login(){
    const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
    const [disable, setDisable] = useState("");
    const navigate = useNavigate();

    const { setUser } = useContext(UserContext);

    function userLogin(event){
        event.preventDefault();
        setDisable("disable");
        const promise = axios.post(`http://localhost:5000/login`,{
            email,
            password
        });
        
        promise.then(response => {
            setUser(response.data);
            navigate("/home");

        });
        
        promise.catch(() => {
            alert("Login Error");
            setDisable("");
        })
    }

    return(
        <Container>
            <img src={money} alt="money" />
            <p>MyWallet</p>
            <form onSubmit={userLogin}>
                <input 
                    type="email" 
                    placeholder="email" 
                    value={email} onChange={e => setEmail(e.target.value)}
                    disabled = {disable}
                />
		        <input 
                    type="password" 
                    placeholder="senha" 
                    value={password} onChange={e => setPassword(e.target.value)}
                    disabled = {disable} 
                />
                {disable === "" ? 
                    (<button type="submit">Login</button>) : 
                    (<button type="submit" className="button-disable" disabled = {disable}>wait...</button>)
                    //(<button type="submit" className="button-disable" disabled = {disable}><ThreeDots color="#FFFFFF" heigth="60" width="60" /></button>)
                }
		        
            </form>
            <Link className="link" to="/sing-up">N??o tem uma conta? Cadastre-se!</Link>
        </Container>
    );




}