import React from 'react';
import './Acceuilsitter.css'

import appStoreImage from './ios.png';
import googlePlayImage from './android.png';

const Acceuil = () => {
  return (
    <div className='Acceuilsitter'>
      <div className='Acceuil-main-sitter'>
        <div className='heading-container-sitter'>
          <h1 className='main-heading-sitter'>Gagner de l'argent</h1>
          <p className='description-sitter'>en s’amusant avec les animaux</p>
          <div className='buttons-sitter'>
            <img src={appStoreImage} alt="Télécharger sur l'App Store" className="str1-sitter" />
            <img src={googlePlayImage} alt="Obtenez-le sur Google Play" className="str2-sitter" />
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default Acceuil;