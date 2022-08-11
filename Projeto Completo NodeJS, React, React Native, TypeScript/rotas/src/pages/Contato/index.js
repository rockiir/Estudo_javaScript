import { Link}from 'react-router-dom'

function Contato() {
    return (
      <div className="Contato">
        <h1>Contato da empresa</h1>
        <span>Tel: (xx)xxxxx-xxxx</span>
        <Link to='/'>Home</Link>
      </div>
    );
  }
  
  export default Contato;
  