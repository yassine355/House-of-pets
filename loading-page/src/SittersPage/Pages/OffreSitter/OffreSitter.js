import React, { useEffect, useState, useCallback } from 'react';
import './OffreSitter.css';
import offerImg from './picture.png';
import app from './ios.png';
import play from './android.png';

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
    <div className="container-offer-sitter" id='container-offer-sitter'>
      <h1 className="heading-sitter">Soyez les premiers à profiter de notre offre de lancement !</h1>
      <div className="content-sitter">
        <div className="left-section-sitter">
          <div className='fisrt-partie-sitter'>
            <h2 className="discount-sitter">-100%</h2>
            <h3 className="offer-sitter">de vos gains garanties sur <br></br> vos 5 premières gardes</h3>
          </div>
          <div className='second-partie-sitter'>
            <div className="banner-sitter">
              <i>Offre valable pendant 3 mois.</i>
            </div>
            <div className='center-sitter'>
              <div className="countdown-sitter">
                {Object.keys(timeLeft).map((unit) => (
                  <div className="time-sitter" key={unit}>
                  <span className="number-sitter">{timeLeft[unit] || '0'}</span>
                  <span className="label-sitter">{unit.charAt(0).toUpperCase() + unit.slice(1)}</span>
                </div>
                ))}
              </div>
              <p className="download-sitter">Téléchargez l'application</p>
            <div className="store-buttons-sitter">
              <img src={app} alt="App Store" className="ios-sitter" />
              <img src={play} alt="Google Play" className="android-sitter" />
            </div>
            </div>
          </div>
        </div>
        <div className="image-container-sitter">
          <img src={offerImg} alt="Dog" />
        </div>
      </div>
      
    </div>
  );
};

export default Offre;