import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import UserContext from "../contexts/UserContext";
import GlobalStyle from "../styles/GlobalStyle";
import Login from "./Login";
import SingUp from "./SingUp";
import Home from "./Home";
import AddCredit from "./AddCredit";
import AddDebit from "./AddDebit";



export default function App(){
    const [user, setUser] = useState();

    return (
        <UserContext.Provider value={{ user, setUser }}>
            <BrowserRouter>
                <GlobalStyle />
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/sing-up" element={<SingUp />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/add-credit" element={<AddCredit />} />
                    <Route path="/add-debit" element={<AddDebit />} />
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    );
}

