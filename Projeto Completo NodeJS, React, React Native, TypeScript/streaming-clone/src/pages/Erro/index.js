import { Link} from 'react-router-dom';
import './erro.css'

function Erro (){
    return (
<diV className="not-found">
    <h1>
        404 
    </h1>
    <h2>Not Found</h2>
    <h2>Página não encontrada</h2>
    <Link to="/">Veja todos os filmes</Link>
</diV>
    )
}
export default Erro;
