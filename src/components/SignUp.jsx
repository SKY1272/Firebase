

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './signup.css'



function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
  
    navigate('/login');
  };

  return (
    <div className='container'>
      <h1>Signup Page</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Email:</label>
        <input
          type='text'
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br />
        <label htmlFor="">Password:</label>
        <input
          type='password'
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br />
        <button type='submit'>Signup</button>
      </form>
    </div>
  );
}

export default Signup;
