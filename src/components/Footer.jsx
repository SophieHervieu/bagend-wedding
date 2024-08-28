import { Link } from "react-router-dom"
import { useState } from "react"
import { MdMenuBook } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";


export default function Footer() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="footer">
            <button className="buttonMenu" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <RxCross2 className="cross"/> : <MdMenuBook className="book"/>}
            </button>
            <nav>
                <div className="menuList">
                    <ul className="menuListContent" style={{ display: isOpen ? "block" : "none" }}>
                        <Link to="/">
                            <li onClick={() => {setIsOpen(false)}}>Accueil</li>
                        </Link>
                        <Link to="About">
                            <li onClick={() => {setIsOpen(false)}}>Notre histoire</li>
                        </Link>
                        <Link to="Ceremony">
                            <li onClick={() => {setIsOpen(false)}}>La ceremonie</li>
                        </Link>
                        <Link to="Gallery">
                            <li onClick={() => {setIsOpen(false)}}>Galerie</li>
                        </Link>
                        <Link to="Contact">
                            <li onClick={() => {setIsOpen(false)}}>RSVP</li>
                        </Link>
                    </ul>
                </div>
            </nav>
        </div>
    )
}