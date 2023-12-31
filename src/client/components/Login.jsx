import React, { useState } from 'react';
import { Container, Typography, FormControl, FormLabel, FormHelperText, TextField, Box, Paper, Button} from '@mui/material'
import { Link, useNavigate } from 'react-router-dom';
import { BASE_URL } from '../App'
import { Visibility } from '@mui/icons-material';
import { VisibilityOff } from '@mui/icons-material';
import { InputLabel, IconButton, Input, InputAdornment } from '@mui/material';

export default function Login ({userId, setUserId}) {
  const [values, setValues] = useState({
    email:"",
    password:"",
    showPassword: false,
});
  const [message, setMessage] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const [userID, setUserID] = useState();
  const isAdmin = sessionStorage.getItem('isAdmin')

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword })
  }

  const handleMouseDownPassword = (e) => {
    e.preventDefault();
  }

  const handleEmailChange = (prop) => (e) => {
    setValues({ ...values, [prop]: e.target.value})
  };

  const handlePasswordChange = (prop) => (e) => {
    setValues({ ...values, [prop]: e.target.value })
  };

  async function createNewOrder(id){
    try{
      const response = await fetch('http://localhost:8080/api/orders', {
        method: 'POST',
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify({
          userID: id,
          total: 0,
          fullfilled: false
        })
      })
      const result = await response.json()
    }catch(err){
      console.error('Error creating new order', err)
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
        const response = await fetch('http://localhost:8080/api/users/login', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            }, 
            body: JSON.stringify({
                email: values.email,
                password: values.password
            })
        });

        

        if (response.ok) {
          
          const data = await response.json();

          setUserID(data.id)
          setMessage(data.message);
          createNewOrder(data.id)
          //logs
          console.log(data)
          console.log('logged in', data);
          console.log('isAdmin?', data.isAdmin);
          console.log('userID', data.id)
          //token handling
          sessionStorage.setItem('isAdmin', data.isAdmin)
          sessionStorage.setItem('token', data.token);
          sessionStorage.setItem('userID', data.id);
          let user_id = data.id
          setUserId(user_id)
          
          alert('You are logged in!');
          navigate('/products')
          window.location.reload();
        } else {
          const errorData = await response.json();
          console.log('Login error', errorData);
          alert('login failed' + errorData.message);
        }
  } catch (err) {
      console.log('Invalid user or password', err)
      alert('Incorrect email or password!')
  }
};

  return (
    <Container sx={{my:3, textAlign:'center', padding:'10px'}}>
      <Paper elevation={20}>
        <Box sx={{padding:'20px', paddingBottom:'100px'}}>
          <Typography variant="h5" color="primary.main" sx={{marginBottom:'20px'}}>Login</Typography>
            <Box component='form' onSubmit={handleSubmit}>
              <FormControl id='email' sx={{my:1, width:320}}>
                  <TextField
                    id="email"
                    label="Email"
                    value={values.email}
                    onChange={handleEmailChange("email")}
                    required
                    autoFocus
                    autoComplete='email'
                    InputLabelProps={{ shrink: true }}
                  />
              </FormControl>
              <FormControl id='password' sx={{my: 1, width:320}}>
                  <TextField
                    type={values.showPassword ? "text" : "password"}
                    id="password"
                    label='Password'
                    autoFocus
                    autoComplete='password'
                    InputLabelProps={{ shrink: true }}
                    value={values.password}
                    onChange={handlePasswordChange("password")} required
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                        >
                          {values.showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    }  
                        />
              </FormControl>  
                  <Button 
                    type='submit'
                    variant='outlined'
                    fullWidth 
                    sx={{
                      position:'relative',
                      top:'25px',
                      bgcolor:'primary.main',
                      color:'text.main'
                    }}>
                      Login!
                  </Button>
            </Box>
              <Typography variant='h7' sx={{
                position:'relative',
                top:'40px',
              }}>
                <Link to='/registerUser'>Need an account? Create one here!</Link>
                  </Typography>
        </Box>
      </Paper>
    </Container>
  );
};


