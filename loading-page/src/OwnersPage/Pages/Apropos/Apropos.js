import React from 'react';
import './Apropos.css';
import img1 from './Image/img1.png';
import img2 from './Image/img2.png';
import img3 from './Image/img3.png';
import img4 from './Image/img4.png';
import back from './Image/backdog.png';

const Apropos = () => {
  return (
    <div className="propos-container">
    <img src={back} alt="back"  className='background'/>
    <h1>POURQUOI HOP ?</h1>
      <div className="propos-item">
        <img src={img1} alt="Gérez votre emploi du temps" />
        <div className="propos-content">
          <h2>Gérez votre emploi du temps</h2>
          <p>Planifiez et organisez vos petsittings en toute simplicité avec notre calendrier intuitif.</p>
          
        </div>
      </div>
      <div className="propos-item">
        <img src={img2} alt="Des missions proches de chez vous" />
        <div className="propos-content">
          <h2>Des missions proches de chez vous</h2>
          <p>Trouvez facilement des opportunités de petsitting dans votre région grâce à notre carte interactive.</p>
          
        </div>
      </div>
      <div className="propos-item">
        <img src={img3} alt="Communiquez en toute sécurité" />
        <div className="propos-content">
          <h2>Communiquez en toute sécurité</h2>
          <p>Échangez des messages sécurisés et recevez des messages de votre bien aimé.</p>
          
        </div>
      </div>
      <div className="propos-item">
        <img src={img4} alt="Une tranquillité d'esprit absolue" />
        <div className="propos-content">
          <h2>Une tranquillité d'esprit absolue</h2>
          <p>Nous vérifions l'identité de nos sitters et affichons les avis vérifiés provenant d'autres propriétaires.</p>
          
        </div>
      </div>
    </div>
  );
};

export default Apropos;