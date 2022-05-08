import styled from 'styled-components';

const Container = styled.div`
    width: 100vw;
    height: 100vh;
	display: flex;
    flex-direction: column;
    align-items: center;
    
    
    p {
        font-size:30px;
        color: #126BA5;
        margin-top: 95px;
        margin-bottom: 30px;
        font-family: 'Press Start 2P', cursive;
    }
    form{
        display: flex;
        flex-direction: column;
    } 
    input {
        width: 303px;
        height: 45px;
        margin-top: 5px;
        padding: 0 11px;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        box-sizing: border-box;
        border-radius: 5px;
        font-size: 19.976px;
        line-height: 25px;
        color:  #DBDBDB;
        font-family: 'Raleway', sans-serif;
    }
    button {
        width: 303px;
        height: 45px;
        margin: 5px 0 25px 0;
        background: #52B6FF;
        display: flex;
        justify-content: center;
        align-items: center;
        border: none;
        border-radius: 5px;
        font-size: 21px;
        color: #FFFFFF;
        font-family: 'Raleway', sans-serif;
    }

    .button-disable {
        opacity: 0.7;
    }
    
    .link {
        font-size: 14px;
        line-height: 17px;
        text-align: center;
        text-decoration-line: underline;
        color: #52B6FF;
        font-family: 'Raleway', sans-serif;
    }
`;

export default Container;