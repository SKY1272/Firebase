import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div className='container'>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Email:</label>
        <input
          type='text'
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br/>
        <label htmlFor="">Password:</label>
     
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type='button' onClick={togglePasswordVisibility}>
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        
        <br/>
        <button>Login</button>
        <br/>
        <span>Forgot Password</span>
      </form>
      <p>Don't have an account? <span>Sign up?</span></p>
    </div>
  );
}

export default Login;

