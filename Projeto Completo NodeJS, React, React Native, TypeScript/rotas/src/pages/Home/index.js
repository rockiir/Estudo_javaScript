import { Link}from 'react-router-dom'

function Home() {
    return (
      <div className="Home">
        <h1>Bem vindo</h1>
        <Link to='/sobre'>Sobre</Link> <br/>
        <Link to='/Contato'>Contato</Link>
      </div>
    );
  }
  
  export default Home;
  