import React from 'react';
import './AproposSitter.css';
import img1 from './Image/test.jpg';
import img2 from './Image/image2.jpg';
import img3 from './Image/image3.png';
import img4 from './Image/image4.png';
import img from './Image/sitter.png';

const Apropos = () => {
  return (
    <div className="propos-container-sitter" id='propos-container-sitter'>
    <img src={img} alt="back"  className='background-sitter'/>
    <h1>POURQUOI HOP ?</h1>
      <div className="propos-item-sitter">
        <img src={img1} alt="Gérez votre emploi du temps" />
        <div className="propos-content-sitter">
          <h2>Gestion idéale de votre temps</h2>
          <p>Fixez vos tarifs et vos disponibilités. Personnalisés votre offre comme vous le désirez.</p>
          
        </div>
      </div>
      <div className="propos-item-sitter">
        <img src={img2} alt="Des missions proches de chez vous" />
        <div className="propos-content-sitter">
          <h2>Des missions proches de chez vous</h2>
          <p>Trouvez facilement des opportunités de petsitting dans votre région grâce à notre carte interactive.</p>
          
        </div>
      </div>
      <div className="propos-item-sitter">
        <img src={img3} alt="Communiquez en toute sécurité" />
        <div className="propos-content-sitter">
          <h2>Une application intuitive</h2>
          <p>Une plateforme conviviale qui facilite la réservation et la gestion des services proposés.</p>
          
        </div>
      </div>
      <div className="propos-item-sitter">
        <img src={img4} alt="Une tranquillité d'esprit absolue" />
        <div className="propos-content-sitter">
          <h2>Gagnez de l'argent sans effort</h2>
          <p>Transformez votre passion pour les animaux en une source de revenus fluctuante.</p>
          
        </div>
      </div>
    </div>
  );
};

export default Apropos;