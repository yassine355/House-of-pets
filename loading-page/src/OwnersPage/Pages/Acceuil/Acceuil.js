import React from 'react';
import './Acceuil.css';

import appStoreImage from './ios.png';
import googlePlayImage from './android.png';

const Acceuil = () => {
  return (
    <div className='Acceuil'>
      <div className='Acceuil-main'>
        <div className='heading-container'>
          <h1 className='main-heading'>À la recherche d'une personne <br />de confiance pour garder votre <br />animal de compagnie ?</h1>
          <p className='description'>Un service tout en un, sécurisé et personnalisé.</p>
          <div className='buttons'>
            <img src={appStoreImage} alt="Télécharger sur l'App Store" className="str1" />
            <img src={googlePlayImage} alt="Obtenez-le sur Google Play" className="str2" />
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default Acceuil;