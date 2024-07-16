import React from 'react'

import Navbar from '../NavbarSitter/NavbarSitter';
import Acceuil from '../Acceuilsitter/Acceuilsitter';
import Offre from '../OffreSitter/OffreSitter';
import Apropos from '../Apropossitter/AproposSitter';
import Inscription from '../InscriptionSitter/InscriptionSitter';
import Footer from '../FooterSitter/FooterSitter';

const Owner = () => {
  return (
    <div className='Sitter'>
      <Navbar />
      <Acceuil />
      <Offre />
      <Apropos />
      <Inscription />
      <Footer />
    </div>
  )
}

export default Owner
