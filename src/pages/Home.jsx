import { useState, useEffect } from "react";
import hobbitDoor from "../assets/images/hobbitDoor.png";
import photoOfUs from "../assets/images/couple.jpg";
import bouquetFive from "../assets/images/Bouquet5.png";
import bouquetThree from "../assets/images/Bouquet3.png";

export default function Home() {
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const dateTill = new Date('09/27/2025');

        const updateCountdown = () => {
            const dateFrom = new Date();
            const diff = dateTill - dateFrom;
            
            const day_to_milliseconds = 1000 * 60 * 60 * 24;
            const hour_to_milliseconds = 1000 * 60 * 60;
            const minute_to_milliseconds = 1000 * 60;
            const second_to_milliseconds = 1000;

            const newDays = Math.floor(diff / day_to_milliseconds);
            const newHours = Math.floor((diff % day_to_milliseconds) / hour_to_milliseconds);
            const newMinutes = Math.floor((diff % hour_to_milliseconds) / minute_to_milliseconds);
            const newSeconds = Math.floor((diff % minute_to_milliseconds) / second_to_milliseconds);

            setDays(newDays);
            setHours(newHours);
            setMinutes(newMinutes);
            setSeconds(newSeconds);
        };

        updateCountdown(); // Initial call to set the countdown immediately

        const interval = setInterval(updateCountdown, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="home">
            <div className='container' id="time-on">
                <div className='counter-container'>
                    <div className="counter-timer-wrapper">
                        <div className='counter-timer' id="time-up">
                            <img className="hobbitDoor" src={hobbitDoor} alt="porte de Cul-de-Sac, la maison de Bilbo dans le Seigneur des Anneaux"/>
                        </div>
                    </div>

                    <div className="counter-timer-wrapper">
                        <div className='counter-timer' id="days">{days}</div>
                        <span>Jours</span>
                    </div>
                    <div className="counter-timer-wrapper">
                        <div className='counter-timer'>:</div>
                    </div>
                    <div className="counter-timer-wrapper">
                        <div className='counter-timer' id="hours">{hours}</div>
                        <span>Heures</span>
                    </div>
                    <div className="counter-timer-wrapper">
                        <div className='counter-timer'>:</div>
                    </div>
                    <div className="counter-timer-wrapper">
                        <div className='counter-timer' id="minutes">{minutes}</div>
                        <span>Minutes</span>
                    </div>
                    <div className="counter-timer-wrapper">
                        <div className='counter-timer'>:</div>
                    </div>
                    <div className="counter-timer-wrapper">
                        <div className='counter-timer' id="seconds">{seconds}</div>
                        <span>Secondes</span>
                    </div>
                </div>
            </div>
            <div className="imgBlock">
                <img className="upperBouquet" src={bouquetFive} alt="bouquet de plantes vertes"/>
                <img className="couple" src={photoOfUs} alt="Antoine et Sophie devant les ruines d'une vieille abbaye"/>
                <img className="lowerBouquet" src={bouquetThree} alt="bouquet de plantes vertes"/>
            </div>
        </div>
    );
}
