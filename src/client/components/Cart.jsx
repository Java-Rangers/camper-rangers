import React, { useEffect, useState } from 'react';
import { API } from '../App';
import { BASE_URL } from '../App';
import { useNavigate, useParams } from 'react-router-dom';
import { Container, Typography, Paper, Box, Button } from '@mui/material'

// user id is hard set to params for now, need to grab user id from logged in user and inject that into the fetch request when ready

export default function Cart({token}){

  const [ productArray, setProductArray ] = useState([]);
  const [ products, setProducts ] = useState([]);
  const [ totalPrice, setTotalPrice ] = useState(0);
  const navigate = useNavigate();
  const userID = sessionStorage.getItem('userID')

  useEffect(()=>{
    const getUserCart = async () => {
      try{
        const response = await fetch(`${API}/users/${userID}/cart`);
        const result = await response.json();
        setProductArray(result.cart)
      }catch(err){
        console.log('Error getting users cart', err)
      }
    }
    getUserCart();
  }, [])

  console.log('productArray: ', productArray)

  useEffect(()=>{
    const getCartProducts = async () => {
      try{
        let workingTotal = 0
        const productDetailsArray = []
        for(let i = 0; i < productArray.length; i++){
          const response = await fetch(`${API}/products/${productArray[i].productId}`)
          const result = await response.json()
          productDetailsArray.push(result.singleProduct)
          workingTotal += parseFloat(result.singleProduct.price)
        }
        setProducts(productDetailsArray)
        setTotalPrice(workingTotal)
      }catch(err){
        console.log('Error getting product items', err)
      }
    }
    if (productArray === undefined || productArray.length <= 0){
      return
    }else{
      getCartProducts();
    }
  }, [productArray])

  async function checkout(){
    try{
      const response = await fetch(`${API}/users/${userID}/cart`, {
        method: "PATCH",
        headers: {"Content-Type" : "application/json"}
      })
      const result = await response.json()
      window.location.reload()
      alert('Thank you for shopping with us!')
    }catch(err){
      console.log('Error checking out cart', err)
    }
  }

  return(
    <>
      <Container>
        <Typography sx={{textAlign:'center'}} variant='h3'>User {userID}'s Shopping Cart</Typography>
        <Typography sx={{textAlign:'center'}} variant='h3'>Total: ${totalPrice}</Typography>
        <Button onClick={()=>{
          checkout()
        }}>Proceed to Checkout</Button>
        {productArray ? (
        // runs when cart has products
        products.map((product)=> {
          return(
            <Paper elevation={4} key={product.id}>
              <Box sx={{display:'flex'}} onClick={() => navigate(`/products/${product.id}`)}>
                <Typography variant='h3' className='productTitle'>{product.title}</Typography>

                <Box component='img' className='productImage' sx={{width:300}} src={product.image}/>

                <Typography className='productDescription'>{product.description}</Typography>

                <Typography className= 'productPrice'> ${product.price} </Typography>

                <Typography className='productBrand'> {product.brand} </Typography>
              </Box>
            </Paper>
          )})
        
        ) : (
        // runs when cart is empty
        <h1>Your cart is empty</h1>
        )
        }
      </Container>
    </>
  )
}