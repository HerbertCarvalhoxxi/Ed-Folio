import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Form from "./pages/Form";
import Links from "./pages/Links";

export default function RoutesApp(){
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={ <Home/> }></Route>
                    <Route path="/formulario" element={ <Form/> }></Route>
                    <Route path="/links" element={ <Links/> }></Route>
                </Routes> 
            </BrowserRouter>
        </>
    )
}