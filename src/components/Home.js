import { React, useState, useEffect, useContext } from "react";
import axios from "axios";
import styled from 'styled-components';
import { useNavigate } from "react-router";


import UserContext from "../contexts/UserContext";
import Transaction from "./Transaction";


export default function Home(){
    const [ transactionsList, setTransactionsList] = useState([]);
    const [totalSum, setTotalSum] = useState(0);
    const { user, setUser } = useContext(UserContext);
    const navigate = useNavigate();

    const config = {
        headers: {
            "Authorization": `Bearer ${user.token}`
        }
    }

    function logout(){
        setUser();
        navigate("/");
    }

    useEffect(() => {
        const promise = axios.get("http://localhost:5000/transactions", config);
        promise.then(res => {
            setTransactionsList(res.data);
            res.data.map(e => setTotalSum(parseFloat(totalSum) + parseFloat(e.amount))) 
        });
    }, []);

    

    return(
        <HomeBox>
            <Top>
                <p>Olá, {user.name.charAt(0).toUpperCase() + user.name.slice(1)}</p>
                <ion-icon name="log-out-outline" onClick={logout}></ion-icon>
            </Top>
            <Box>
                {transactionsList.length === 0 ? 
                (<p className="empty-list">Não há registros de entrada ou saída</p>) :
                (<div className="transaction-list">
                    {transactionsList.map(e => <Transaction key={e._id} transaction={e} />) }
                    <div className="sum-box">
                        <p className="saldo">SALDO</p>
                        <p className="sum">{totalSum}</p>
                    </div>
                </div>)
                
            }
            </Box>
            <ButtonBox>
                <button onClick={() => navigate("/add-credit")}>
                    <ion-icon name="add-circle-outline"></ion-icon>
                    <p>Nova entrada</p>
                </button>
                <button onClick={() => navigate("/add-debit")}>
                    <ion-icon name="remove-circle-outline"></ion-icon>
                    <p>Nova saída</p>
                </button>
            </ButtonBox>
        </HomeBox>
    );
}

const HomeBox = styled.div`
    width: 100%;
    height: 100%;
    padding: 25px 25px 16px 25px; 
    display: flex;
    flex-direction: column;
    box-sizing: border-box;

`
const Top = styled.div`
    width: 326px;
    display: flex;
    justify-content: space-between;
    font-weight: 700;
    font-size: 26px;
    line-height: 31px;
    color: #FFFFFF;
    p {
        font-weight: 700;
        font-size: 26px;
        line-height: 31px;
    }
`
const Box = styled.div`
    width: 326px;
    height: 446px;
    margin-top: 12px;
    background: #FFFFFF;
    border-radius: 5px;

    .empty-list {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
        text-align: center;
        color: #868686;
    }

    .transaction-list {
        width: 100%;
        height: 100%;
        position: relative;
        border-radius: 5px;
        
        
     }

     .sum-box {
         width: 100%;
         height: 30px;
         position: absolute;
         bottom: 0px;
         left: 0px;
         padding: 0px 12px;
         display: flex;
         align-items: center;
         justify-content: space-between;
         background-color: #FFFFFF;
         border-radius: 5px;
        
     }
`
const ButtonBox= styled.div`
     width: 326px;
     margin-top: 23px;
     display: flex;
     align-items: center;
     justify-content: space-between;

     ion-icon {
         font-size: 21px;
     }
     button {
        width: 155px;
        height: 114px;
        display: flex;
        padding: 10px;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;
        background: #3E9C35;;
        border-radius: 5px;
        border: none;
        font-style: normal;
        font-weight: 700;
        font-size: 17px;
        line-height: 20px;
        color: #FFFFFF;
     }

     button p {
        width: 44px;
     }
`


