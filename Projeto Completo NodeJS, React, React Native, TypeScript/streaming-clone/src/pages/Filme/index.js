import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import api from '../../services/api';
import './filme-info.css';
import {toast} from 'react-toastify'


function Filme() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [filme, setFilme] = useState({});
    const [loading, setloading] = useState(true);
    useEffect(() => {
        async function loadFilmes() {
            await api.get(`/movie/${id}`, {
                params: {
                    api_key: "510723cc9b58d894a142057b193b860d",
                    language: "pt-BR",

                }
            })
                .then((response) => {
                    setFilme(response.data);
                    setloading(false);
                })
                .catch(() => {
                    console.log("FILME NÃO ENCONTRADO");
                    navigate("/", { replace: true });
                    return;
                })
        }
        loadFilmes();
        return () => {
            console.log("Componente desmontado")
        }

    }, [navigate, id])

    function salvarFilme(){
 const minhaLista = localStorage.getItem("@flix");
let filmesSalvos = JSON.parse(minhaLista) ||[];

const hasFilme = filmesSalvos.some((filmesSalvo) => filmesSalvo.id ===filme.id)

if (hasFilme){
    toast.warn("Filme  já existe na lista")
    return;
}
filmesSalvos.push(filme);
localStorage.setItem("@flix", JSON.stringify(filmesSalvos))
toast.success("Filme salvo com sucesso!")
}
    if (loading) {
        return (
            <div className="filme-info">
                <h1> Carregando detalhes do filme....</h1>
            </div>
        )
    }
    return (
        <div className="filme-info">
            <h1>{filme.title}</h1>
            <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title} />
            <h3> sinopse</h3>
            <span> {filme.overview}</span>
            <strong> Avaliação: {filme.vote_average}</strong>

            <div className="area-buttons">
                <button onClick={salvarFilme} >Salvar</button>
                <button>
                    <a  target="blank" rel="external" href={`https://www.youtube.com/results?search_query=${filme.title} Trailer` }>
                        Trailer
                        </a> </button>
            </div>


        </div>
    )
}
export default Filme;