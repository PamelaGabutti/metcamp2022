import { useNavigate } from 'react-router-dom';
import Button from '../../components/button';


function AboutMe() {
    const navigate = useNavigate();

    const onClickButton = () => {
        navigate('/');
    }
    return <section className='home'>
        <h1>Acerca de Mí</h1>
        <div className='box'>
        <ul>
            <li>
            Mi nombre es Pamela, tengo 29 años y soy de Río Grande, Tierra del Fuego ❄️
            </li>
            <li>
            Soy Traductora Pública pero trabajo como Profe de Inglés 👩🏻‍🏫 
            </li>
            <li>
            Vivo 24/7 frente a la compu y/o el celu, por lo cual estudio desarrollo web y diseño UX/UI para lograr insertarme en el mundo laboral de la tecnología 👩🏻‍💻
            </li>
        </ul>
        </div>
        <span className='botonVolver' ><Button onClick={onClickButton} text={'Volver a Inicio'}/></span>
    </section>

}

export default AboutMe;
