import '../assets/css/index.css'
import {useNavigate} from "react-router-dom";


export default function Error() {
    const navigate = useNavigate();

    return(
        <div className="container-fluid error-page">
            <h1>Cette page n'existe pas</h1>
            <button onClick={() => navigate('/')} className="btn btn-primary btn-lg" type="submit">Revenir a la page d'accueil</button>
        </div>
    )
}
