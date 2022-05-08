import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import UserContext from "../contexts/UserContext";
import GlobalStyle from "../styles/GlobalStyle";
import Login from "./Login";
import SingUp from "./SingUp";



export default function App(){
    const [user, setUser] = useState(null);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            <BrowserRouter>
                <GlobalStyle />
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/sing-up" element={<SingUp />} />
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    );
}

