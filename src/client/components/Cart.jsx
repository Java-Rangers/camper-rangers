import React, { useEffect, useState } from 'react';
import { API } from '../App';
import { BASE_URL } from '../App';
import { useNavigate, useParams } from 'react-router-dom';
import { Container, Typography, Paper, Box, Button } from '@mui/material'


export default function Cart(){

  const [ productArray, setProductArray ] = useState([]);
  const [ products, setProducts ] = useState([]);
  const [ totalPrice, setTotalPrice ] = useState(0);
  const navigate = useNavigate();
  const userID = sessionStorage.getItem('userID')


  if (userID === null || userID === undefined){
    return
  }

  useEffect(()=>{
    console.log('getting user cart')
    const getUserCart = async () => {
      try{
        const response = await fetch(`${API}/users/${userID}/cart`);
        const result = await response.json();
        setProductArray(result.cart)
        console.log(productArray)
      }catch(err){
        console.log('Error getting users cart', err)
      }
    }
    getUserCart();
  }, [])

  console.log('productArray: ', productArray)

  useEffect(()=>{
    console.log('getting cart products')
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
      if (result.cart[0].fullfilled === true){
      }
      console.log('line 87 result', result)
      /// createNewCart()
      // window.location.reload()
      alert('Thank you for shopping with us!')
      setProductArray([])
      setProducts([])
      setTotalPrice(0)


    }catch(err){
      console.log('Error checking out cart', err)
    }
  }


  const updateUserCart = async () => {
    try{
      const response = await fetch(`${API}/users/${userID}/cart`);
      const result = await response.json();
      setProductArray(result.cart)
      console.log(productArray)
      if(productArray.length === 0){
        console.log('last item in cart removed')
        setProductArray([])
        setProducts([])
        setTotalPrice(0)
      }
    }catch(err){
      console.log('Error updating users cart', err)
    }
  }



  async function removeFromCart(productId){
    try{
      console.log('product id: ', productId)
      const response = await fetch(`${API}/users/${userID}/cart`, {
        method: "DELETE",
        headers: {"Content-Type" : "application/json"},
        body: JSON.stringify({productId})
      })
      const result = await response.json()
      console.log('response result json is: ', result)
      updateUserCart()

    }catch(err){

    }
  }




  return(
    <>
      <Container>
      <Typography variant='h4' sx={{textAlign:'center', padding:'10px', color:'secondary.main'}}>User {userID}'s Shopping Cart</Typography>
      <Typography variant='h4' sx={{textAlign:'center', padding:'10px', color:'secondary.main'}}>Total: ${totalPrice}</Typography>
        <Button 
          sx={{
            color:'trinary.main',
            fontWeight:'bold',
            padding:'15px',
            backgroundColor:'text.main',
            position:'relative',
            left:'10px'
            }}
          onClick={()=>{
            checkout()
        }}>Proceed to Checkout</Button>
        {productArray != undefined || userID === undefined ? (
        // runs when cart has products
        products.map((product, index)=> {
          return(
            <Paper elevation={4} key={index}>
              <Box sx={{display:'flex',flexDirection:'column' ,margin:2, textAlign:'center'}} onClick={() => navigate(`/products/${product.id}`)}>
                <Typography variant='h5' sx={{color:'secondary.main'}} className='postTitle'> {product.title} </Typography>
                <Typography variant='h7' sx={{marginBottom:1}} className='productBrand'> {product.brand} </Typography>
                <Box component='img' className='productImage' sx={{width:90, maxHeight:70, position:'relative', left:120}} src={product.image}/>
                <Typography variant='h5' sx={{color:'trinary.main', fontWeight:'550'}} className= 'productPrice'> {product.price}$ </Typography>
              </Box>
              <Box sx={{display:'flex',flexDirection:'column' ,margin:2, textAlign:'center'}}>
                <Button sx={{my:3, color: 'secondary.main', zIndex: 0 }} onClick={()=>{
                    removeFromCart(product.id)
                    // window.location.reload()
                  }}>Remove from cart</Button>
              </Box>
            </Paper>
          )})
        
        ) : (
        // runs when cart is empty
        <Typography variant='h4' sx={{textAlign:'center', padding:'10px', color:'secondary.main'}}>Your cart is empty</Typography>
        )}

        {userID === null ? <Typography variant='h4' sx={{textAlign:'center', padding:'10px', color:'secondary.main'}}>Must be logged in to view your cart</Typography> : null}

      </Container>
    </>
  )
}