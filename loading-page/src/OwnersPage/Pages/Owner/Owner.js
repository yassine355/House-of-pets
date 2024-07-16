import React from 'react'

import Navbar from '../Navbar/Navbar';
import Acceuil from '../Acceuil/Acceuil';
import Offre from '../Offre/Offre';
import Service from '../Service/Service';
import Apropos from '../Apropos/Apropos';
import Inscription from '../Inscription/Inscription';
import Footer from '../Footer/Footer';

const Owner = () => {
  return (
    <div className='Owner'>
      <Navbar />
      <Acceuil />
      <Offre />
      <Service />
      <Apropos />
      <Inscription />
      <Footer />
    </div>
  )
}

export default Owner
