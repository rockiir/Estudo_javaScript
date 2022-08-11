import { useEffect, useState } from 'react';
import Banner from '../Banner';

import { Link } from 'react-router-dom';
import api from '../../services/api';
import './home.css';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';




function Home() {
    const [filmes, setFilmes] = useState([]);

    const [loading, setLoading] = useState(true);

    useEffect(() => {

        async function loadFilmes() {
            const response = await api.get("movie/now_playing", {
                params: {
                    api_key: "510723cc9b58d894a142057b193b860d",
                    language: "pt-BR",
                    page: 1,
                }
            });
            setFilmes(response.data.results.slice(0, 20));
            setLoading(false);
        }

        loadFilmes();
    }, [])

    if (loading) {
        return (
            <div className="loading">
                <h2>carregando pagina....</h2>

            </div>
        )
    }

    return (

<div className="page">
<Banner />
        <div className="container">

            <div className="lista-filmes">
                
                {filmes.map((filme) => {

                    return (<Link to={`/filme/${filme.id}`}>
                        <article key={filme.id}>
                        <p>  {filme.vote_count}</p>
                        

                            <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title} />
                            <div>
                                <Link to={`/filme/${filme.id}`} className="filmes"> {filme.title}</Link>
                                <p>  {filme.vote_average}</p>
                                <Button variant="primary">Primary</Button>{' '}
                            </div>

                        </article>  </Link>
                    )
                })}
            </div>
        </div>
        </div>
    )
}

export default Home