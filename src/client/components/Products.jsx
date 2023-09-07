import React, { useEffect, useState } from 'react';
import { API } from '../App';
import { BASE_URL } from '../App';
import { useNavigate } from 'react-router-dom';
import { Container, Typography, Paper, Box, ListItemSecondaryAction, TextField, Button } from '@mui/material'
import { BorderStyle, CenterFocusStrong } from '@mui/icons-material';


  export default function Products( {token} ) {

  const [products, setProducts ] = useState ([]);
  const [searchBar, setSearchBar ] = useState ('');
  const [ search, setSearch ] = useState([]); 
  const [ searchActive, setSearchActive ] = useState(false);
  const navigate = useNavigate();

  const handleSearch = () => {

    const filteredProducts = products.filter(product => {
      
      return product.title.toLowerCase().includes(searchBar.toLocaleLowerCase());
    });

    setSearch(filteredProducts);
    setSearchActive(true);
    console.log(filteredProducts);
    }

    const clearSearch = () => {
      setSearchBar('') 
      setSearch([]);
      setSearchActive(false);
    }

  useEffect (() => {    
    const getAllProducts = async () => {
      
      try{
        
        const response = await fetch (`${API}/products`)

        const data = await response.json();

        console.log('fetch all products success', data);
        setProducts (data.products)
      
      } catch(err) {
        
        console.log('error fetching ALL PRODUCTS', err)
        
      }
    }  
    getAllProducts();

  }, [])
  return (
      <>
      <Container sx={{paddingTop:'20px'}}>
        <Typography variant='h4' sx={{textAlign:'center', padding:'10px', color:'secondary.main'}}>All Products</Typography>
          <Box className='subheader'>
            <Box id ='searchContainer' sx={{paddingBottom:'20px', textAlign:'center'}}>
              <form onSubmit = {(e)=> {
              e.preventDefault();
              handleSearch(); }}>  
                <TextField
                  sx={{backgroundColor:'text.main', boxShadow:20}}
                  type = 'text'
                  id= 'searchBar'
                  name= 'searchBar'
                  placeholder= 'Looking for something?'
                  value = {searchBar}
                  onChange= {(e) => setSearchBar(e.target.value)}
                  />
                <Button id ='searchBarButton' type='submit' value='Find it!' sx={{
                  color:'trinary.main',
                  fontWeight:'bold',
                  padding:'15px',
                  backgroundColor:'text.main',
                  position:'relative',
                  left:'10px',
                  boxShadow: 20,
                  }}>Find it!</Button>
                <Button type='button' id='clearBttn' onClick={clearSearch} sx={{
                  color:'trinary.main',
                  fontWeight:'bold',
                  padding:'15px',
                  backgroundColor:'text.main',
                  paddingLeft:'50px',
                  paddingRight:'50px',
                  marginTop:'10px',
                  boxShadow: 20,
                  }}>
                Clear</Button>
              </form>
            </Box>
          </Box>
        </Container>
          {searchActive ? (
            search.map(product => (
              <Container sx={{textAlign:'center', padding:'10px'}} key={product.id}>
                <Paper elevation={10} className='productsCards' >
                <Box  className='productsContainer' sx={{margin:'20px'}}>
                  <Box className='productCard' sx={{display:'flex',flexDirection:'column' ,margin:2, textAlign:'center'}} onClick={() => navigate(`/${product.id}`)}>  
                    <Typography variant='h5' sx={{color:'secondary.main'}} className='productName'> {product.title} </Typography>
                      <Typography variant='h7' sx={{marginBottom:1}} className='productBrand'> {product.brand} </Typography>
                        <Box component='img' className='productImage' sx={{maxwidth:70, maxHeight:70, position:'relative', left:105}} src={product.image}/>
                            <Typography variant='h5' sx={{color:'trinary.main', fontWeight:'550'}} className= 'productPrice'> ${product.price} </Typography>
                  </Box>
                </Box>
                </Paper>
              </Container>
              ))
              ) : (
                <Container>
                  {products.map((product, index) => (
                    <Paper elevation={4} key={index} className='productsCards'>
                      <Box className='productCard' sx={{display:'flex', flexDirection:'column' ,margin:2, textAlign:'center'}}  onClick={() => navigate(`/products/${product.id}`)}>
                        <Typography variant='h5' sx={{color:'secondary.main'}} className='productName'> {product.title} </Typography>
                        <Typography variant='h7' sx={{marginBottom:1}} className='productBrand'> {product.brand} </Typography>
                        <Box component='img' className='productImage' sx={{width:75, maxHeight:70, position:'relative', left:120}} src={product.image}/>
                        <Typography variant='h5' sx={{color:'trinary.main', fontWeight:'550'}} className='productPrice'> ${product.price} </Typography>
                      </Box>
                    </Paper>
                ))
                }
              </Container>  
              )} 
      </>
    )
}