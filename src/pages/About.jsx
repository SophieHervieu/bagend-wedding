import coupleDisney from "../assets/images/coupleDisney.jpg"
import coupleKissingCheek from "../assets/images/coupleKissingCheek.jpg"
import bouquetFive from "../assets/images/Bouquet5.png"
import bouquetThree from "../assets/images/Bouquet3.png"

export default function About() {
    return (
        <div className="about">
            <div className="firstParagraph">
                <div className="image">
                    <img className="upperBouquet" src={bouquetFive} alt="bouquet de plantes vertes"/>
                    <img className="coupleDisney" src={coupleDisney} alt="Antoine et Sophie devant le chateau de Disneyland"/>
                    <img className="lowerBouquet" src={bouquetThree} alt="bouquet de plantes vertes"/>
                </div>
                <div className="paragraph">
                    <p>{`Cela fait déjà plus de 4 ans que nous avons décidé de prendre main dans la main le même chemin. À la question 
                        "Comment souhaite-tu voir évoluer notre relation ?", la réponse fut rapide "Je voudrais te garder pour moi." Ces mots ont été un portail vers une relation remplie d'amour, de tendresse, de complicité, et de bienveillance.`}</p>
                </div>
            </div>
            <div className="secondParagraph">
                <div className="image">
                    <img className="upperBouquet" src={bouquetFive} alt="bouquet de plantes vertes"/>
                    <img className="coupleDisney" src={coupleKissingCheek} alt="Sophie embrassant Antoine sur la joue"/>
                    <img className="lowerBouquet" src={bouquetThree} alt="bouquet de plantes vertes"/>
                </div>
                <div className="paragraph">
                    <p>{`Après 3 ans de vie de couple et les divers rebondissements et épreuves traversés (une reconversion professionnelle, un accident de moto, l'arrivée dans le foyer d'un second chat...), Sophie au eu l'idée de demander la main d'Antoine. Et si les préparatifs d'un mariage se font aujourd'hui, c'est évidemment parce qu'il a accepté !`}</p>
                </div>
            </div>
            <div className="thirdParagraph">
                <div className="image">
                    <img className="upperBouquet" src={bouquetFive} alt="bouquet de plantes vertes"/>
                    <img className="coupleDisney" src={coupleDisney} alt="Antoine et Sophie devant le chateau de Disneyland"/>
                    <img className="lowerBouquet" src={bouquetThree} alt="bouquet de plantes vertes"/>
                </div>
                <div className="paragraph">
                    <p>{`Aujourd'hui, nous sommes heureux d'annoncer à tous nos proches que nous nous apprêtons à sceller notre union dans un cadre qui nous parle : le Village Fantastique du Domaine de la Pierre Ronde. Un magnifique écrin de verdure aux allures de roman de Tolkien et au charme féerique. Nous espérons vous y voir nombreux !`}</p>
                </div>
            </div>
        </div>
    )
}