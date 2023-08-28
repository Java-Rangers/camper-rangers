import React, { useEffect, useState } from 'react';
import { API } from '../App';
import { BASE_URL } from '../App';
import { useNavigate } from 'react-router-dom';
import { Container, Typography, Paper, Box } from '@mui/material'

export default function Cart({token}){

  const [ productArray, setProductArray ] = useState([]);
  const [ products, setProducts ] = useState([]);

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

  console.log(productArray)

  useEffect(()=>{
    const getCartProducts = async () => {
      try{
        
        const response = productArray.map((product) => {
          fetch(`${API}/products/${product.productId}`).then(res => res.json())
          console.log(product.productId)
        })
        const result = await Promise.all(response)
        console.log(result)

        setProducts(result)

        console.log('hello')
      }catch(err){
        console.log('Error getting product items', err)
      }
    }
    if (productArray.length > 0){
      getCartProducts();
    }

  }, [productArray])










  return(
    <div>
      {/* <Container>
      <Typography sx={{textAlign:'center'}} variant='h3'>Shopping Cart</Typography>
      {products.map((product)=>{
        <Paper elevation={4}>
          <Typography variant='h3' className='postTitle'> {product.title} </Typography>
        </Paper>
      })}
      </Container> */}
    </div>
  )
}