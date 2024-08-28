import village from "../assets/images/Village.jpg"
import map from "../assets/images/middleEarth.jpg"
import hobbiton from "../assets/images/Hobbiton.jpg"

import { Link } from "react-router-dom"

export default function Ceremony() {
    return (
        <div className="ceremony">
            <div className="location">
                <div className="description">
                    <span>Le lieu</span>
                    <p>{`La cérémonie se déroulera au Village Fantastique du Domaine de la Pierre Ronde (Lac de Chamboux 21210 Saint-Martin-de-la-Mer). Tout le domaine sera loué pour l'événement. Cela inclut les salles de réception, les chambres pour le couchage, ainsi que le terrain en extérieur. La célébration se fera en extérieur si le temps le permet.`}</p>
                </div>
                <img className="village" src={village} alt="maison de Hobbit au milieu de la nature"/>
            </div>
            <div className="theme">
                <div className="description">
                    <span>Le thème</span>
                    <p>{`Nous avons choisi ce lieu principalement en raison de sa thématique qui se prête à merveille à celle que vous voulions pour notre cérémonie. Étant tous deux passionnés par l'univers fantatstique de Tolkien, nous souhaitions célébrer ce moment charnière dans notre vie dans une ambiance similaire. N'hésitez pas à y ajouter en adoptant une tenue proche du thème !`}</p>
                </div>
                <img className="map" src={map} alt="carte de la Terre du Milieu"/>
            </div>
            <div className="clothesIdeas">
                <div className="description">
                    <span>Dress Code</span>
                    <p>{`Pas de dress code contraignant, nous ne demandons que la présence, par petites touches ou en couleur dominante, de vert olive. Pour celles et ceux qui souhaiteraient un peu d'inspiration au niveau vestimentaire, voici une liste non exhaustive de sites et de vêtements et accessoires adaptés au thème `}</p>
                    <Link to={"/clothingIdeas"}>en cliquant ici</Link>
                </div>
                <img className="village" src={hobbiton} alt="maison de Hobbit au milieu de la nature"/>
            </div>
        </div>
    )
}