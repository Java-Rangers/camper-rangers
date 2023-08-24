import React, { useState } from 'react';
import { API } from '../App'
import { BASE_URL } from '../App';

function RegisterUser() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  async function handleSubmit (event) {
    event.preventDefault();

    try {
        const response = await fetch(`${API}/users`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({email, password})
        })
        console.log('Response:', response)

        
        setEmail('');
        setPassword('');
    }  catch (error){
        console.error('Error:', error)
    }
  };

    return (
        <div>
          <h2>Register User</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Email:</label>
              <input type="email" value={email} onChange={handleEmailChange} />
            </div>
            <div>
              <label>Password:</label>
              <input type="password" value={password} onChange={handlePasswordChange} />
            </div>
            <div>
              <button type="submit">Register</button>
            </div>
          </form>
        </div>
      );
    }
    
    export default RegisterUser;
    