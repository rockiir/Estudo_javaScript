import userEvent from "@testing-library/user-event";
import { useState } from "react";

function App() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [idade, setIdade] = useState('');

  const [user, setUser] = useState({});
  
  function handleRegister(e) {
    e.preventDefault();

  alert("Registrado com sucesso!");
  setUser({
    nome: nome,
    idade: idade,
    email: email, 
  })
  }
  return (
    <div>
      <h1>Cadastro de usuario</h1>
      <form onSubmit={handleRegister}>
        <label >Nome:</label><br/>
        <input type="text" placeholder="Diugite seu nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        /> 
        <br/> 
        <label >Email:</label><br/>
        <input type="text" placeholder="Diugite seu email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        /> <br/> 
        <label >Idade</label><br/>
        <input type="text" placeholder="Diugite sua idade"
        value={idade}
        onChange={(e) => setIdade(e.target.value)}
        /> <br/> 
        <button type="submit">registrar</button>
      </form>
      <br/><br/>
      <div>
      <span>Bem vindo {user.nome}</span><br/>
      <span>idade {user.idade}</span><br/>
      <span>email {user.email}</span><br/>
      </div>


    </div>

  );
}

export default App;


