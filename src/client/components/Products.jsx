import React, { useEffect, useState } from 'react';
import { API } from '../App';
import { BASE_URL } from '../App';
import { useNavigate } from 'react-router-dom';
import { Container, Typography, Paper, Box, ListItemSecondaryAction, TextField, Button } from '@mui/material'
import { CenterFocusStrong } from '@mui/icons-material';


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

    const clearSearch = () => {
    setSearchBar('') 
    setSearch([]);
    setSearchActive(false);
    }
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
                  type = 'text'
                  id= 'searchBar'
                  name= 'searchBar'
                  placeholder= 'Looking for something?'
                  value = {searchBar}
                  onChange= {(e) => setSearchBar(e.target.value)}
                  />
                <Button id ='searchBarButton' type='submit' value='Find it!' sx={{color:'secondary.main'}}>Find it!</Button>
              </form>
            </Box>
          </Box>
        </Container>
          {searchActive ? (
            search.map(product => (
              <Container sx={{textAlign:'center', padding:'10px'}}>
                <Paper elevation={10}>
                <Box key= {product._id} className='productsContainer' sx={{margin:'20px'}}>
                  <Box className='productCard' onClick={() => navigate(`/${product.id}`)}>  
                    <Typography variant='h3' className='productTitle'> {product.title} </Typography>
                    <Box component='img' src={product.image} sx={{width:'100px'}}/>
                    <Typography className='productDescription'> {product.description} </Typography>
                    <Typography className= 'productPrice'> {product.price} </Typography>
                    <Typography className='productBrand'> {product.brand} </Typography>
                  </Box>
                </Box>
                </Paper>
              </Container>
              ))
              ) : (
                <Container>
                  {products.map((product) => (
                    <Paper elevation={4}>
                      <Box sx={{display:'flex',flexDirection:'column' ,margin:2, textAlign:'center'}} onClick={() => navigate(`/products/${product.id}`)}>
                      <Typography variant='h5' sx={{color:'secondary.main'}} className='postTitle'> {product.title} </Typography>
                      <Typography variant='h7' sx={{marginBottom:1}} className='productBrand'> {product.brand} </Typography>
                      <Box component='img' className='productImage' sx={{width:90, maxHeight:70, position:'relative', left:120}} src={product.image}/>
                      <Typography variant='h5' sx={{color:'red'}} className= 'productPrice'> {product.price} </Typography>
                      {/* <form onSubmit={(e) = cartSubmit (e, products.id)} >
                        <label>
                          <input
                          type = 'submit'
                          id= 'addCartButton'
                          value='Add to Cart'
                          />
                        </label>
                      </form> */}
                    </Box>
                    </Paper>
                ))
                }
              </Container>  
              )} 
      </>
    )
}
