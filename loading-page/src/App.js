import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './OwnersPage/Pages/Navbar/Navbar';
import Acceuil from './OwnersPage/Pages/Acceuil/Acceuil';
import Offre from './OwnersPage/Pages/Offre/Offre';
import Inscription from './OwnersPage/Pages/Inscription/Inscription';
import Service from './OwnersPage/Pages/Service/Service';
import Apropos from './OwnersPage/Pages/Apropos/Apropos';
import Imagecompo from './OwnersPage/Pages/Imagecompo/Imagecompo';


function App() {
  return (
    <Router>
      <div className="App">
        
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

const Home = () => {
  return (
    <div>
    <Navbar />
      <Acceuil />
      <Offre />
      <Service />
      <Apropos />
      <Inscription />
      <Imagecompo />
    </div>
  );
}

export default App;