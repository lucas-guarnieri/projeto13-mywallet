import { React } from "react";
import styled from 'styled-components';


export default function Transaction(props) {
    const { transaction } = props;

    const id = transaction._id;

    return(
        <TransactionBox color = {transaction.amount >= 0 ? ("#03AC00"):("#C70000")}>
            <div className="description">
                <p className="date">{transaction.date}</p>
                <p className="text">{transaction.description.charAt(0).toUpperCase() + transaction.description.slice(1)}</p>
            </div>
            <div className="amount">
                {parseFloat(Math.abs(transaction.amount)).toFixed(2)}
            </div>
        </TransactionBox>
    )
}

const TransactionBox = styled.div`
    
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 12px;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    

    .description {
        width: 75%;
        display: flex;
    }

    .date {
        color: #C6C6C6;
        margin-right: 10px;
    }
    
    .text {
        color: #000000;
    }

    .amount {
        color: ${props => props.color}
    }
`