// import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Container, Paper, Box, Typography, Button } from '@mui/material'
import { useState, useEffect } from 'react';
import { fontWeight } from '@mui/system';

const userID = sessionStorage.getItem('userID')

export default function NavBar() {
    const [token, setToken] = useState(localStorage.getItem('token'));

    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        setToken(storedToken);
    }, []);

    return (
      <Container>
        <Paper elevation={10}>
          <Box sx={{textAlign: 'center', padding:'15px'}}>
            <nav>
              <Typography variant='h2'>Java Campers</Typography>
                <Typography variant='ul'>
                    <Typography variant='li' margin={2}>
                        <Button href="/products" sx={{color:'trinary.main', fontWeight:'600'}}>Home</Button>
                            </Typography>
                    {userID ? <Typography variant='li' margin={2}>
                        <Button href={`/cart/${userID}`} sx={{color:'trinary.main', fontWeight:'600'}}>Cart</Button>
                            </Typography> : null}
                    {sessionStorage.getItem('token') ? <Typography variant='li' margin={2}>
                        <Link to='/products' onClick={()=>{
                    // logic goes here for what happens when a user clicks logout
                    sessionStorage.removeItem('userID')
                    sessionStorage.removeItem('token')
                    window.location.reload()
                    }}>Logout</Link></Typography> : <Typography variant='li' margin={2}>
                        <Link to='/users/login'>Login</Link>
                            </Typography>}
              </Typography>
            </nav>
          </Box>
        </Paper>
      </Container>
    )    
}
{/* <Link variant='contained' to='/products'>Home</Link> */}
{/* <Link to={`/cart/${userID}`}>Cart</Link> */}