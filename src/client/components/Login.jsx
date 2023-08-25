import React, { useState } from 'react';
import { Container, Typography, FormControl, FormLabel, FormHelperText, TextField } from '@mui/material'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const login = async() => {
    try {
        const response = await fetch('http://localhost:3000/api/users/login', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            }, 
            body: JSON.stringify({
                email,
                password
            })
        });
        const result = await response.json();
        setMessage(result.message);
        if(!response.ok) {
          throw(result)
        }
        setEmail('');
        setPassword('');
    } catch (err) {
        console.error(`${err.name}: ${err.message}`);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    login();
  };

  return (
    <Container> 
      <Typography variant="h3" color="initial"> Login: </Typography>
        <FormControl>
          <TextField
            id="email"
            label="email"
            value={email}
            onChange={handleEmailChange}
          />
          <TextField
            id="password"
            label="password"
            value={password}
            onChange={handlePasswordChange}
          />
          <button type='submit'> Login! </button>
        </FormControl> 
        
          {/* <label htmlFor='email'>Email:</label>
          <input
            type='email'
            id='email'
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div>
          <label htmlFor='password'>Password:</label>
          <input
            type='password'
            id='password'
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <button type='submit'>Login</button>
      </form>
      <p>{message}</p> */}
    </Container>
  );
};

export default Login;
