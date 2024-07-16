// Navbar.js
import React, { useState } from 'react';
import './NavbarSitter.css';
import { Link } from 'react-router-dom'; 
import logo from './Images/logo hop.png';

const Navbar = () => {
    const [menu, setMenu] = useState("Accueil");

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <div className="header-container-sitter">
            <img src={logo} alt="Logo HOP" className='logo-sitter' />
            <ul className="nav-links-sitter">
                <Link to='/' onClick={() => { setMenu("Accueil"); scrollToTop(); }} className={menu === "Accueil" ? "active" : ""}>Accueil</Link>
                <a href='#container-offer-sitter' onClick={() => setMenu("Télécharger application")} className={menu === "Télécharger application" ? "active" : ""}>Télécharger application</a>
                <a href='#propos-container-sitter' onClick={() => setMenu("Pourquoi HOP")} className={menu === "Pourquoi HOP" ? "active" : ""}>Pourquoi HOP</a>
                <Link to='/' onClick={() => { setMenu("Sitters"); scrollToTop(); }} className={menu === "Sitters" ? "active sitters" : "sitters"}>Owner</Link>
            </ul>
        </div>
    );
};

export default Navbar;