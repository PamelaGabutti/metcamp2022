import Button from "../../components/button";
import { useNavigate } from 'react-router-dom';

function Game() {
    const navigate = useNavigate();

    const onClickButton = () => {
        navigate('/');
    }
    return <section>
            <h1>Esta es la page del juego</h1>
            <span className='botonVolver' ><Button onClick={onClickButton} text={'Volver a Inicio'}/></span>
        </section>
}

export default Game;