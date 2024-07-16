import React, { useState } from 'react';
import './InscriptionSitter.css';

const RegistrationForm = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
  };

  return (
    <div className='main-i-sitter'>
      <form onSubmit={handleSubmit} className="registration-form-sitter">
        <h2>Rester informé!</h2>
        <div className="form-group-sitter">
          <label htmlFor="email">E-mail :</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit">OK</button>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;