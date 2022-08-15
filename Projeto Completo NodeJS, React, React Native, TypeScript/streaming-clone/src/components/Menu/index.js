import './menu.css';
import {Link} from 'react-router-dom';

function Menu (){
    return (
        <header>
          <Link className="logo" to="/"> FLIX</Link>
          <Link className="favoritos" to="/favoritos"> Meus filmes </Link>
        </header>
        )
}

export default Menu;