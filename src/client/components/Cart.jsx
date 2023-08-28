import React, { useEffect, useState } from 'react';
import { API } from '../App';
import { BASE_URL } from '../App';
import { useNavigate } from 'react-router-dom';
import { Container, Typography, Paper, Box } from '@mui/material'

export default function Cart({token}){

  const [ productArray, setProductArray ] = useState([]);
  const [ products, setProducts ] = useState([]);
  const navigate = useNavigate();

  useEffect(()=>{
    const getUserCart = async () => {
      try{
        let id = 2
        const response = await fetch(`${API}/users/${id}/cart`);
        const result = await response.json();
        setProductArray(result.cart)
      }catch(err){
        console.log('Error getting users cart', err)
      }
    }
    getUserCart();
  }, [])

  useEffect(()=>{
    const getCartProducts = async () => {
      try{
        const productDetailsArray = []
        if(productArray.length > 0){
          for(let i = 0; i < productArray.length; i++){
            const response = await fetch(`${API}/products/${productArray[i].productId}`)
            const result = await response.json()
            productDetailsArray.push(result.singleProduct)
          }
          setProducts(productDetailsArray)
        }else{
          return
        }
      }catch(err){
        console.log('Error getting product items', err)
      }
    }
    getCartProducts();
  }, [productArray])

  return(
    <>
      <Container>
        <Typography sx={{textAlign:'center'}} variant='h3'>Shopping Cart</Typography>
        {products.map((product)=> {
          return(
            <Paper elevation={4} key={product.id}>
              <Box sx={{display:'flex'}} onClick={() => navigate(`/products/${product.id}`)}>
                <Typography variant='h3' className='productTitle'>{product.title}</Typography>
                <Box component='img' className='productImage' sx={{width:300}} src={product.image}/>
                <Typography className='productDescription'>{product.description}</Typography>
                <Typography className= 'productPrice'> {product.price} </Typography>
                <Typography className='productBrand'> {product.brand} </Typography>
              </Box>
            </Paper>
          )})}
      </Container>
    </>
  )
}