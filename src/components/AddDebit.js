import { React, useState, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router";

import  UserContext from "../contexts/UserContext"
import Container from "../styles/ContainerForm";

export default function AddDebit(){
    const [amount, setAmount] = useState();
	const [description, setDescription] = useState("");
    const [disable, setDisable] = useState("");
    const navigate = useNavigate();

    const { user } = useContext(UserContext);

    const config = {
        headers: {
            "Authorization": `Bearer ${user.token}`
        }
    }
    

    function postTransaction(event){
        event.preventDefault();
        setDisable("disable");
        const promise = axios.post(`http://localhost:5000/transactions`, {
            amount: amount*(-1),
            description
        }, config);
        
        promise.then(response => {
            console.log("Transação cadastrada")
            navigate("/home");

        });
        
        promise.catch(() => {
        alert("Não conseguimos enviar sua requisição");
            setDisable("");
        })
    }

    return(
        <Container>
            <p>MyWallet</p>
            <form onSubmit={postTransaction}>
                <input 
                    type="number" 
                    placeholder="Valor" 
                    value={amount} onChange={e => setAmount(e.target.value)}
                    disabled = {disable}
                />
		        <input 
                    type="text" 
                    placeholder="Descrição" 
                    value={description} onChange={e => setDescription(e.target.value)}
                    disabled = {disable} 
                />
                {disable === "" ? 
                    (<button type="submit">Salvar entrada</button>) : 
                    (<button type="submit" className="button-disable" disabled = {disable}>wait...</button>)
                }
		        
            </form>
            <Link className="link" to="/home">Voltar para página principal</Link>
        </Container>
    );
}