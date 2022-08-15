import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import './corpo.css';
import { Button, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import CardGroup from 'react-bootstrap/CardGroup';




function Corpo() {
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
            <div className="Container">

                <div className="lista-filmes">

                    {filmes.map((filme) => {

                        return (
                                <Row className="justify-content-md-center">
                                <Col >
                                <CardGroup>
                                <Link to={`/filme/${filme.id}`}>
                                    <Card>
                                        <Card.Img variant="top" src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title} />
                                        <Card.Body>
                                            <Card.Title>{filme.title}</Card.Title>
                                            <Button variant="secondary">Go somewhere</Button>
                                        </Card.Body>
                                        <Card.Footer>
                                            <small className="text-muted">Voto {filme.vote_average}</small>
                                            <small className="text-muted">quantidade  {filme.vote_count}</small>
                                        </Card.Footer>
                                    </Card>
                                    </Link>
                                </CardGroup>
                                </Col>
                                </Row>

                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Corpo