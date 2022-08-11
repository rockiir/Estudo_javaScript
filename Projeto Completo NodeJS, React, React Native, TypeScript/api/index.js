//Query params  = ?nome=nodeJS 
//Route params  =/curso/2
//request Body = { nome: 'Nodejs', tipo: 'backend' }

//crud > create, read, update, delete

//middleware 

const express = require('express');


const server = express();
server.use(express.json());


const  cursos = ['Nodejs', 'javascript_', 'react'];

//middleware global
server.use((req, res, next) => {
    console.log(`url chamada: ${req.url}`);
    return next();
});

//midleware informação necessaria
function checkCurso(req, res, next) {
    if(!req.body.name){
        return res.status(400).json({ error:"Nome do curso é obrigatorio"});
    }
    return next();
}

function checkIndexCurso (req, res, next){
    const curso = cursos[req.params.index];

    if(!curso){
        return res.status(400).json({ error:"o curso não existe"});
    }
    return next();
}

server.get('/cursos', (req, res) => {
    return res.json(cursos); 
});
//localhost:3000/curso
server.get('/cursos/:index' , checkIndexCurso, (req, res) => {
    const {index} = req.params;

    return res.json(cursos[index]);
})

//criando curso
server.post('/cursos', checkCurso,(req, res) =>{
const {name} = req.body;
cursos.push(name);

return res.json(cursos);
});



//atualizando curso

server.put('/cursos/:index', checkCurso, checkIndexCurso,(req, res) =>{
    const {index} = req.params;
    const{name} = req.body;

    cursos[index] = name;
    return res.json(cursos);
})


//delete curso
server.delete('/cursos/:index', (req, res) =>{
    const {index} = req.params;

    cursos.splice(index, 1);
    return res.json({menssagem: "cursos deletado"});
})

server.listen(3000);