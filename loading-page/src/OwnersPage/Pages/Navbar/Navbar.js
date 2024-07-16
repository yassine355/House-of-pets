import React, { useState } from 'react';
import './Navbar.css';
import logo from './Images/logo hop.png';

const Navbar = () => {
    const [menu, setMenu] = useState("Accueil");

    return (
        <div className="header-container">
            <img src={logo} alt="Logo HOP" className='logo' />
            <ul className="nav-links">
                <li onClick={() => setMenu("Accueil")} className={menu === "Accueil" ? "active" : ""}>Accueil</li>
                <li onClick={() => setMenu("Télécharger application")} className={menu === "Télécharger application" ? "active" : ""}>Télécharger application</li>
                <li onClick={() => setMenu("Services")} className={menu === "Services" ? "active" : ""}>Services</li>
                <li onClick={() => setMenu("Pourquoi HOP")} className={menu === "Pourquoi HOP" ? "active" : ""}>Pourquoi HOP</li>
                <li onClick={() => setMenu("Sitters")} className={menu === "Sitters" ? "active sitters" : "sitters"}>Sitters</li>
            </ul>
        </div>
    );
};

export default Navbar;