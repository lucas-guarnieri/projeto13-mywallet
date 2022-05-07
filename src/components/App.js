import { BrowserRouter, Routes, Route } from "react-router-dom";

import GlobalStyle from "../styles/GlobalStyle";
import SingUp from "./SingUp";



export default function App(){
    return (
        <BrowserRouter>
            <GlobalStyle />
            <Routes>
                <Route path="/sing-up" element={<SingUp />} />
            </Routes>
        </BrowserRouter>
    );
}

