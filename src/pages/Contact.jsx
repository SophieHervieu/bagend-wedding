import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import emailjs from "emailjs-com";

export default function Contact() {
    const [formData, setFormData] = useState({
        lastName: '',
        firstName: '',
        presence: '',
        numPeople: '',
        diet: [],
        preciseAllergy: '',
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        if (type === 'checkbox') {
            setFormData((prevData) => ({
                ...prevData,
                diet: checked
                    ? [...prevData.diet, value]
                    : prevData.diet.filter((item) => item !== value)
            }));
        } else {
            setFormData((prevData) => ({
                ...prevData,
                [name]: value
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const templateParams = {
            lastName: formData.lastName,
            firstName: formData.firstName,
            presence: formData.presence === 'yes' ? 'Présent' : 'Absent',
            numPeople: formData.numPeople,
            diet: formData.diet.join(', '),
            preciseAllergy: formData.preciseAllergy,
        };

        emailjs.send('service_pqkn0zf', 'template_3bpr4hr', templateParams, 'cbGUXdGor0bW23viB')
            .then((response) => {
                console.log('Email sent successfully', response.status, response.text);
                navigate('/Confirmation');
            })
            .catch((error) => {
                console.error('Error sending email', error);
                alert('Erreur lors de l\'envoi de la confirmation');
            });
    };

    return (
        <div className="contact">
            <h1>Confirmez votre présence !</h1>
            <form method="post" className="rsvp" onSubmit={handleSubmit}>
                <label className="title" htmlFor="lastname"> Nom:
                    <input type="text" id="lastName" name="lastName" required value={formData.lastName} onChange={handleChange} />
                </label>
                <label className="title" htmlFor="firstName"> Prénom:
                    <input type="text" id="firstName" name="firstName" required value={formData.firstName} onChange={handleChange} />
                </label>
                <fieldset className="choice">
                    <label className="attendance" htmlFor="yes">
                        <input type="radio" id="yes" name="presence" value="yes" className="radio" onChange={handleChange} />Je serais là !
                    </label>
                    <label className="attendance" htmlFor="no">
                        <input type="radio" id="no" name="presence" value="no" className="radio" onChange={handleChange} />Je ne serais malheureusement pas en mesure de venir
                    </label>
                </fieldset>
                <label className="title" htmlFor="numPeople"> Nombre de personnes:
                    <input type="number" id="numPeople" name="numPeople" min="0" step="1" required value={formData.numPeople} onChange={handleChange} />
                </label>
                <fieldset className="choice"><span className="foodChoice">Type de régime:</span>
                    <label className="foodChoice" htmlFor="vegetarian">
                        <input type="checkbox" id="vegetarian" name="diet" value="vegetarian" className="check" onChange={handleChange} />
                        <span>Végétarien</span>
                    </label>
                    <label className="foodChoice" htmlFor="vegan">
                        <input type="checkbox" id="vegan" name="diet" value="vegan" className="check" onChange={handleChange} />
                        <span>Vegan</span>
                    </label>
                    <label className="foodChoice" htmlFor="allergies">
                        <input type="checkbox" id="allergies" name="diet" value="allergies" className="check" onChange={handleChange} />
                        <span>Allergies</span>
                    </label>
                    <label className="foodChoice" htmlFor="precise">
                        Précisez:
                        <input type="text" id="preciseAllergy" name="preciseAllergy" className="preciseAllergy" value={formData.preciseAllergy} onChange={handleChange} />
                    </label>
                </fieldset>
                <input type="submit" value="Confirmer" className="btn" />
            </form>
        </div>
    )
}