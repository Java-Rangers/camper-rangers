import React, { useEffect, useState } from 'react';
import { API } from '../App';
import { BASE_URL } from '../App';
import { useNavigate } from 'react-router-dom';
import { Container, Typography, Paper, Box, TextField, Button } from '@mui/material'

  export default function Products( {token} ) {

  const [products, setProducts ] = useState ([]);
  const [searchBar, setSearchBar ] = useState ('');
  const [ search, setSearch ] = useState([]); 
  const [ searchActive, setSearchActive ] = useState(false);
  const [ userCart, setUserCart ] = useState([]);
  const navigate = useNavigate();

  const getUserCart = async (id) => {
    
    try{
      
      const response = await fetch (`${API}/:userId/cart`)

      const data = await response.json();
      console.log('fetch Cart success', data)
      setUserCart(data);
      return(data);
    } catch(err) {
      console.log('error getting user cart', err)
    }

    getUserCart();
  }

  const cartSubmit = async ( id ) => {
    try{
      const response = await fetch (`${API}/:orderId/items`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        
      });

      const data = await response.json();
      setUserCart(data);
      console.log('Updated cart', data)
    } catch(err) {
      console.log('error adding item to cart', err)
    }
  }


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
      <Container>
        <div className='subheader'>
          <Typography variant="h3" sx={{my:3, textAlign:'center', color:'secondary.main'}}>PRODUCTS COMPONENT TEST</Typography>
          <Typography id='productsPageTitle'> Products </Typography>
          <div id ='searchContainer'>
            <form onSubmit = {(e)=> {
            e.preventDefault();
            handleSearch(); }}>
              <label> Search
                <input
                type = 'text'
                id= 'searchBar'
                name= 'searchBar'
                placeholder= 'Looking for something?'
                value = {searchBar}
                onChange= {(e) => setSearchBar(e.target.value)}
                />
              </label>
              <input id ='searchBarButton' type='submit' value='Find it!'/>
            </form>
          </div>
        </div>
        </Container>
          {searchActive ? (
            search.map(product => (
              <Container sx={{textAlign:'center', padding:'20px'}}>
                <Paper elevation={10}>
                <Box key= {product._id} className='productsContainer' sx={{margin:'20px'}}>
                  <Box className='productCard' onClick={() => navigate(`/${product.id}`)}>  
                    <Typography variant='h3' className='productTitle'> {product.title} </Typography>
                    <Box component='img' src={product.image} sx={{width:'200px'}}/>
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
                  <Typography sx={{textAlign:'center'}} variant='h3'>All Products</Typography>
                  {products.map((product, index) => (
                    <Paper elevation={4} key={index} >
                      <Box sx={{display:'flex'}}onClick={() => navigate(`/products/${product.id}`)}>
                        <Typography variant='h3' className='postTitle'> {product.title} </Typography>
                        <Box component='img' className='productImage' sx={{width:300}} src={product.image}/>
                        <Typography className='productDescription'> {product.description} </Typography>
                        <Typography className= 'productPrice'> {product.price} </Typography>
                        <Typography className='productBrand'> {product.brand} </Typography>
                        <form onSubmit={(e) => cartSubmit ( products.id)} >
                            <Button
                            type = 'submit'
                            id= 'addCartButton'
                            value='Add to Cart'
                            >
                              Add to Cart
                            </Button>
                        </form>
                      </Box>
                    </Paper>
                ))
                }
              </Container>  
              )} 
      </>
    )
}
