import React, { useEffect, useState, useCallback } from 'react';
import './Offre.css';
import dogImg from './dog 2.png';
import appStore from './ios.png';
import playStore from './android.png';

const Offre = () => {
  const getEndDate = () => {
    const storedEndDate = localStorage.getItem('endDate');
    if (storedEndDate) {
      return new Date(storedEndDate);
    } else {
      const endDate = new Date();
      endDate.setDate(endDate.getDate() + 90);
      localStorage.setItem('endDate', endDate.toISOString());
      return endDate;
    }
  };

  const [endDate] = useState(getEndDate());

  const calculateTimeLeft = useCallback(() => {
    const difference = endDate - new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  }, [endDate]);

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [endDate, calculateTimeLeft]);

  return (
    <div className="container-offer" id='container-offer'>
      <h1 className="heading">Soyez les premiers à profiter de notre offre de lancement !</h1>
      <div className="content">
        <div className="left-section">
          <div className='fisrt-partie'>
            <h2 className="discount">-20%</h2>
            <h3 className="offer">sur vos 5 premières gardes</h3>
          </div>
          <div className='second-partie'>
            <div className="banner">
              <i>Offre valable pendant 3 mois.</i>
            </div>
            <div className='center'>
              <div className="countdown">
                {Object.keys(timeLeft).map((unit) => (
                  <div className="time" key={unit}>
                  <span className="number">{timeLeft[unit] || '0'}</span>
                  <span className="label">{unit.charAt(0).toUpperCase() + unit.slice(1)}</span>
                </div>
                ))}
              </div>
              <p className="download">Téléchargez l'application</p>
            <div className="store-buttons">
              <img src={appStore} alt="App Store" className="ios" />
              <img src={playStore} alt="Google Play" className="android" />
            </div>
            </div>
          </div>
        </div>
        <div className="image-container">
          <img src={dogImg} alt="Dog" />
        </div>
      </div>
      
    </div>
  );
};

export default Offre;