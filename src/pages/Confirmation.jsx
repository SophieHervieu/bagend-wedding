import { Link } from 'react-router-dom';
import hobbitDoor from "../assets/images/hobbitDoor.png";

export default function Confirmation() {
    return (
        <div className="confirmation">
            <h1>Merci pour votre réponse !</h1>
            <p>Nous avons bien reçu votre confirmation.</p>
            <img src={hobbitDoor}/>
            <Link to="/" className="btn">{`Retour à l'accueil`}</Link>
        </div>
    );
}