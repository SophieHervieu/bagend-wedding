import { Link } from "react-router-dom"

export default function Navbar () {
    return (
    <div className="nav">
        <div className="navDesktop">
            <ul>
                <Link to="/">
                    <li>Accueil</li>
                </Link>
                <Link to="About">
                    <li>Notre histoire</li>
                </Link>
                <Link to="Ceremony">
                    <li>La ceremonie</li>
                </Link>
                <Link to="Gallery">
                    <li>Galerie</li>
                </Link>
                <Link to="Contact">
                    <li>RSVP</li>
                </Link>
            </ul>
        </div>
    </div>
    )
}