import { Link}from 'react-router-dom'
import './style.css';
function Header() {
    return (
        <header>
            <h2>Teste</h2>

            <div className="menu">
                <Link to='/'>Home</Link>
                <Link to='/sobre'>sobre</Link>
                <Link to='/contatos'>contatos</Link>
            </div>
        </header>
    );
}

export default Header;
