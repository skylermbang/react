import { BrowserRouter, Routes,Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "../screens/Home"
import About from "../screens/About"


function Router(){

    return (
    <BrowserRouter>
        <Header/>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/about" element={<About/>}></Route>
        </Routes>
    </BrowserRouter>
    );
}

export default Router;