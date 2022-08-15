import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/Home';
import Filme from './pages/Filme';
import Erro from './pages/Erro';
import Favoritos from './pages/Favoritos';
 import Menu from './components/Menu';


function RoutesApp() {
    return (
        <BrowserRouter>
            <Menu/>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/filme/:id" element={<Filme />} />
                <Route path="/favoritos" element={<Favoritos />} />
                <Route path="*" element={<Erro />} />
            </Routes>
        </BrowserRouter>
    );
}
export default RoutesApp;
