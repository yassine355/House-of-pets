import React from 'react';
import './Store.css';
import appStore from './ios.png';
import googlePlay from './android.png';

const App = () => {
  return (
    <div className="main">
      <div className="text">
        <h1 className="app-title">Téléchargez l'application </h1>
        <div className="new-buttons">
          <img src={appStore} alt="Télécharger sur l'App Store" className="ios" />
          <img src={googlePlay} alt="Obtenez-le sur Google Play" className="android" />
        </div>
      </div>
    </div>
  );
};

export default App;