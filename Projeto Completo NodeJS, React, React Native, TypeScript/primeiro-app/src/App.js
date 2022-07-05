import Nome from "./components/Nome";
import { useState } from "react";

function App() {
  const [aluno, setAluno] = useState('Sujeito programador');

  function handleChangeName(name) {
    setAluno(name); 
    }
  
  return (
    <div className="App">
      <h1>React</h1>  
      <br/>
      <h2> olá: {aluno} </h2>  
      <button onClick={ () => handleChangeName('Lucas Olive')}>
        Mudar nome
        </button> 
      <h1>Hello its me</h1>
      <Nome aluno="Lucas" idade={30}/>
      <br />
      <br />
    </div>

  );
}

export default App;


