import { useState, useEffect } from "react";

function App() {
  const [input, setInput] = useState('');
  const [tarefas, setTarefas] = useState([
    'llll'
  ]);
    useEffect(() => {
      const tarefasStorage = localStorage.getItem('@tarefa');
    if(tarefasStorage){
      setTarefas(JSON.parse(tarefasStorage))

}},[]);
    
    useEffect(() => {
      localStorage.setItem('@tarefa', JSON.stringify(tarefas))
    }, [tarefas]);

    function handleRegister(e) {
      e.preventDefault();

      setTarefas([...tarefas, input]);
      setInput('');


    }
  
    return (
      <div>
        <h1>Cadastro de usuario</h1>
        <form onSubmit={handleRegister}>
          <label >Nome da tarefa:</label><br />
          <input type="text" placeholder="Digite uma tarefa"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <br />
          <button type="submit">registrar</button>
        </form>
        <br /><br />
        <ul>
          {tarefas.map(tarefa => (
            <li>{tarefa}</li>
          ))}

        </ul>
        <div>
        </div>


      </div>

    );
  }

export default App;
