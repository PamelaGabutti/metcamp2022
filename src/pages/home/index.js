import Button from "../../components/button";
import {useNavigate} from 'react-router-dom';

function Home () {
    const navigate = useNavigate();

    const onClickButton = () => {
        navigate('/game');
    }
    return (
        <Button onClick={onClickButton} text='MetCamp Quiz'/>
    )
}
export default Home;