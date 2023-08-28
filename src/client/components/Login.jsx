import React, { useState } from 'react';
import { Container, Typography, FormControl, FormLabel, FormHelperText, TextField, Box } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom';
import { BASE_URL } from '../App'

export default function Login ({ setToken }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // const login = async() => {
//   try {
  //       const response = await fetch('http://localhost:3000/api/users/login', {
  //           method: 'POST',
  //           headers: {
  //               'Content-Type' : 'application/json'
  //           }, 
  //           body: JSON.stringify({
  //               email,
  //               password
  //           })
  //       });
  //       const data = await response.json();
  //       setMessage(data.message);
  //       console.log(data)
  //       if(!response.ok) {
  //         throw(data)
  //       }
  //       setEmail('');
  //       setPassword('');
  //   } catch (err) {
  //       console.error(`${err.name}: ${err.message}`);
  //   }
  // }

  async function handleSubmit(e) {
    e.preventDefault();
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
        const data = await response.json();
        setMessage(data.message);
        console.log(data)
          
        // setEmail('');
        // setPassword('');
        console.log('logged in', data.token)
        // setToken(data.token);
        sessionStorage.setItem('token', data.token);
        alert('You are logged in!');

        navigate('/products');

  } catch (err) {
    console.log('Invalid user or password', err)
    alert('Incorrect email or password!')
  }
// } catch (err) {
//       // console.error(`${err.name}: ${err.message}`);
//       console.log('error logging in with email or password', err);
//       setError ('Invalid username or password', error);
//       alert ("Wrong email or password!")
//   }

    
    };

  return (
    <Container sx={{my:3, textAlign:'center',}}> 
      <Typography variant="h3" color="secondary.main"> Login: </Typography>
        <FormControl >
          <form onSubmit={handleSubmit}>
            <TextField
              id="email"
              label="email"
              value={email}
              onChange={handleEmailChange} required
            />
            <TextField
              id="password"
              label="password"
              value={password}
              onChange={handlePasswordChange} required
            />
            <button type='submit'> Login! </button>
          </form>
        </FormControl> 
          <Box>
            <Typography variant='h5' sx={{marginTop: 5}}><Link to='/registerUser'>Need an account? Create one here!</Link></Typography>
          </Box>
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


