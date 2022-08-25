import Button from "../../components/button";
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();

    const onClickButton = () => {
        navigate('/game');
    }
    const onClickAbout = () => {
        navigate('/aboutme');
    }
    return (
        <section>
            <h1>MetCamp Quiz</h1>
            <Button onClick={onClickButton} text='Comenzar a jugar' />
            <Button onClick={onClickAbout} text='Acerca de mí' />
        </section>
    )
}
export default Home;