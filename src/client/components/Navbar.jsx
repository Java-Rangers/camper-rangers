// import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Container, Paper, Box, Typography, Button } from '@mui/material'
import { useState, useEffect } from 'react';
import { fontWeight } from '@mui/system';

const userID = sessionStorage.getItem('userID')
const isAdmin = sessionStorage.getItem('isAdmin') == 'true'

export default function NavBar() {
    const [token, setToken] = useState(localStorage.getItem('token'));

    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        setToken(storedToken);
    }, []);

    console.log("isAdmin:", isAdmin);

    return (
      <Container>
        <Paper elevation={10}>
          <Box sx={{textAlign: 'center', padding:'15px'}}>
            <nav>
              <Typography variant='h2'>Java Campers</Typography>
                <Typography variant='ul'>
                    <Typography variant='li' margin={2}>
                        <Button href="/products" id='homeLink' sx={{color:'trinary.main', fontWeight:'600'}}>Home</Button>
                            </Typography>
                    {userID ? <Typography variant='li' margin={2}>
                        <Button href={`/cart/${userID}`} sx={{color:'trinary.main', fontWeight:'600'}}>Cart</Button>
                            </Typography> : null}
                    {sessionStorage.getItem('token') ? <Typography variant='li' margin={2}>
                        <Button href='/products' id='logoutLink' sx={{color:'trinary.main', fontWeight:'600', mx:12}} onClick={()=>{
                            sessionStorage.removeItem('userID')
                                sessionStorage.removeItem('token')
                                sessionStorage.removeItem('isAdmin')
                                    window.location.reload()
                                    }}>Logout</Button></Typography> : 
                        <Typography variant='li' margin={2}>
                            <Button href="/users/login" sx={{color:'trinary.main', fontWeight:'600'}}>Login</Button>
                                </Typography>}
                                <Typography variant='li' margin={2}>
                                      {console.log("Rendering All Users button. isAdmin:", isAdmin)}
                                      {isAdmin && (
                                        <Button
                                          component={Link}
                                          to="/AdminViewAllUsers"
                                          sx={{ color: 'trinary.main', fontWeight: '600' }}
                                          
                                        >
                                          All Users
                                        </Button>
                                      )}
                                    </Typography>
                                    <Typography variant='li' margin={2}>
                                      
                                      {isAdmin && (
                                        <Button
                                          component={Link}
                                          to="/admin/products/newProduct"
                                          sx={{ color: 'trinary.main', fontWeight: '600' }}
                                          
                                        >
                                          Add New product
                                        </Button>
                                      )}
                                    </Typography>
                          

                        
              </Typography>
            </nav>
          </Box>
        </Paper>
      </Container>
    )    
}
{/* <Link variant='contained' to='/products'>Home</Link> */}
{/* <Link to={`/cart/${userID}`}>Cart</Link> */}