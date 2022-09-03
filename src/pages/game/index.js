import Button from "../../components/button";
import { createPath, useNavigate } from 'react-router-dom';
import { useEffect } from "react";
import { useState } from "react";
import QuestionCard from "../../components/questionCard";

const API_URL = 'https://62bb6e36573ca8f83298fbef.mockapi.io/metcampweb22/v1/questions/harry-potter'

function Game() {
    const navigate = useNavigate();

    const [loading, setLoading] = useState(true);
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        fetch(API_URL)
            .then(response => response.json())
            .then(data => setQuestions(data))
            .finally(() => setLoading(false))
    }, [])

    const onClickButton = () => {
        navigate('/');
    }
    
    return <section>
        <h1>¡Demostrá cuánto sabés!</h1>
        <span className='botonVolver' ><Button onClick={onClickButton} text={'Volver a Inicio'} /></span>
        {loading && <div> Cargando... </div>}
        {
            !loading && (
                <form>
                    {
                        questions.map((pregunta) => {
                            return <QuestionCard preguntaActual={pregunta} />
                        })
                    }

                </form>
            )
        }

    </section>
}

export default Game;