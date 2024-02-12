import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Form from "./pages/Form";

export default function RoutesApp(){
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={ <Home/> }></Route>
                    <Route path="/Formulario" element={ <Form/> }></Route>
                </Routes> 
            </BrowserRouter>
        </>
    )
}