import React from 'react';
import './Service.css';
import image1 from './Images/image1.png';
import image2 from './Images/image2.png';
import image3 from './Images/image3.png';
import image4 from './Images/image4.png';
import image5 from './Images/image5.png';

const Service = () => {
  return (
    <div className='service' id='service'>
      <div className="service-container">
        <h1>
          Découvrez des services personnalisés, pratiques et sûrs pour prendre soin de votre animal de compagnie !
        </h1>
        <div className="service-grid">
          <div className="service-item">
            <div className="service-image-container">
              <img src={image1} alt="Garde d'animaux" className="service-image" />
            </div>
            <div className="service-text">
              <h2>1. GARDE D'ANIMAUX</h2>
              <p>Réservez un pet sitter de confiance pour garder votre animal à son domicile ou chez vous.</p>
            </div>
          </div>
          <div className="service-item">
            <div className="service-image-container">
              <img src={image2} alt="Balades" className="service-image" />
            </div>
            <div className="service-text">
              <h2>2. BALADES</h2>
              <p>Offrez à votre compagnon des promenades régulières et stimulantes pour son bien-être physique et mental.</p>
            </div>
          </div>
          <div className="service-item">
            <div className="service-image-container">
              <img src={image3} alt="Visites à domicile" className="service-image" />
            </div>
            <div className="service-text">
              <h2>3. VISITES À DOMICILE</h2>
              <p>Idéal pour les animaux plus âgés ou ceux qui préfèrent rester dans leur environnement familier. Nos pet sitters viennent nourrir, jouer et câliner votre animal à domicile.</p>
            </div>
          </div>
          <div className="service-item">
            <div className="service-image-container">
              <img src={image4} alt="Toilettage" className="service-image" />
            </div>
            <div className="service-text">
              <h2>4. TOILETTAGE</h2>
              <p>Réservez des séances de toilettage professionnel directement depuis l'application pour garder votre animal propre et confortable.</p>
            </div>
          </div>
          <div className="service-item">
            <div className="service-image-container">
              <img src={image5} alt="Le vétérinaire" className="service-image" />
            </div>
            <div className="service-text">
              <h2>5. LE VÉTÉRINAIRE</h2>
              <p>Besoin d'accompagnement pour une visite médicale ? Nos pet sitters peuvent transporter votre animal chez le vétérinaire et vous tenir informé du déroulement de la consultation.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;