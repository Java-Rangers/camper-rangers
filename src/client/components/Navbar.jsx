// import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Container, Paper, Box, Typography } from '@mui/material'
import { useState, useEffect } from 'react';

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
                                    <Typography variant='li' margin={2}><Link variant='contained' to='/products'>Home</Link></Typography>
                                    <Typography variant='li' margin={2}><Link to='/cart/1'>Cart</Link></Typography>
                                    {token ? null : <Typography variant='li' margin={2}><Link to='/users/login'>Login</Link></Typography>}
                            </Typography>
                        </nav>
                    </Box>
            </Paper>
        </Container>
    )    
}
