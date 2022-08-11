import { BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Contato from './pages/Contato';
import Header from "./components/Header";
import Erro from "./pages/Erro/index";
import Produto from "./pages/Produto";



function RoutesApp() { return(
    <BrowserRouter>
    <Header/>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/Contato" element={<Contato />} />
        <Route path="*" element={<Erro />} />
        <Route path="/produto/:id" element={<Produto />} />
        
    </Routes>
    
    </BrowserRouter>
)
}
export default RoutesApp;