import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sitter from './SittersPage/Pages/Sitter/Sitter';
import Owner from './OwnersPage/Pages/Owner/Owner';


function App() {
  return (
    <Router>
      <div className="App">
        
        <Routes>
        <Route path='/' element={<Owner/>} />
          <Route path="/Sitter" element={<Sitter />} />
          
        </Routes>
      </div>
    </Router>
  );
}




export default App;