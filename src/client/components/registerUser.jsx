import React, { useState } from 'react';
import { API } from '../App'
import { BASE_URL } from '../App';
import { Container, Box, Paper, Typography, FormControl } from '@mui/material'

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
        <Container>
          <Paper elevation={10}>
            <Box sx={{textAlign:'center', padding:'30px', marginTop:'100px'}}>       
              <Typography variant='h2' sx={{marginBottom:'10px'}}>Register User</Typography>
                  <form onSubmit={handleSubmit}>
                    <Box sx={{marginBottom:'10px'}}>
                      <label>Email:</label>
                      <input type="email" value={email} onChange={handleEmailChange} />
                    </Box>
                    <Box sx={{marginBottom:'10px'}}>
                      <label>Password:</label>
                      <input type="password" value={password} onChange={handlePasswordChange} />
                    </Box>
                      <button type="submit">Register</button>
                  </form>
            </Box>
          </Paper>
        </Container>
      );
    }
    
    export default RegisterUser;
    