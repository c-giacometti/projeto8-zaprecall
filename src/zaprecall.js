import { BrowserRouter, Routes, Route } from "react-router-dom";
import FirstPage from "./firstpage";
import Recall from "./recall";

export default function ZapRecall(){

    return (
        <>
            <FirstPage />
            <Recall />
        </>
    );
    
}