import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import { BASE_URL } from "../App"
import { API } from "../App"
import { useParams } from "react-router-dom"
import { Container, Typography, Paper, Box, Button, SvgIcon } from "@mui/material"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';


export default function SingleProductRender({userId, setUserId}) {

  const [ product, setProduct ] = useState({})
  const [ userCart, setUserCart] = useState({})
  const { id } = useParams();
  
  
  const userID = sessionStorage.getItem('userID');
  const isAdmin = sessionStorage.getItem('isAdmin');

    const getUserCart = async () => {
      
      if(userID != null) {
        try{
        console.log('starting to get user cart, id: ', userId)
        const response = await fetch (`${API}/users/${userID}/cart`)
        const data = await response.json();
        const userCartId = data.cart[0].orderId;
        console.log('fetch success, user cart order id: ', userCartId)
        return(userCartId);
        } catch(err) {
        console.log('error getting user cart', err)
        }
    
      }  
    }

        

  

    const cartSubmit = async ( productId ) => {
      // e.preventDefault();
      try{
        console.log('id of product being added: ', productId)
        const userCartId = await getUserCart()
        console.log('userCart id from get user cart: ', userCartId)
        const response = await fetch (`${API}/orders/${userCartId}/items`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              orderId: userCartId,
              productId: productId,
              quantity: 1    
          })
              
        });
  
        const data = await response.json();
      //   setUserCart(data);
        console.log('Updated cart', data)
        alert('Item added to cart!')
        return(data)
      } catch(err) {
        console.log('error adding item to cart', err)
      }
    }
  
   

  useEffect(() => {

      async function fetchData() {
          const response = await fetch(`${API}/products/${id}`)
          const data = await response.json()

          console.log(data)
          setProduct(cleanProduct(data))
      }
      
      fetchData();
      console.log('fetch');

  }, [])

  function cleanProduct(data) {
      return {
          title: data.singleProduct.title,
          description: data.singleProduct.description,
          brand: data.singleProduct.brand,
          image: data.singleProduct.image,
          quantity: data.singleProduct.quantity,
          price: data.singleProduct.price,
          id: data.singleProduct.id,
      }
  }

  return (  
    <Container>
        <Paper elevation={10}>
            <Box 
                sx={{
                    display:'flex',
                    flexDirection:'column',
                    textAlign:'center', 
                    padding:'20px', 
                    margin:'40px'
                }}>
                    <Typography variant="h3">{product.title}</Typography>
                    <Typography variant="h7">{product.brand}</Typography>
                    <Box component='img' margin='20px' src={product.image}/>
                    <Typography>Description: {product.description}</Typography>
                    <Typography variant="h5" sx={{mt:4}}>In Stock:{product.quantity}</Typography>
                    <Typography variant="h4">Price:${product.price}</Typography>
                    <form >
                        {/* <AddShoppingCartIcon> */}
                            <Button variant='outlined' endIcon={<AddShoppingCartIcon/>} sx={{
                              my:3,
                              bgcolor: 'secondary.main', 
                              color:'text.main',
                              zIndex: 100000 }}

                            onClick={()=> {cartSubmit(product.id)}} 
                              // type = 'submit'
                              id= 'addCartButton'
                              // value='add to cart'
                              >
                              Add to cart
                              </Button>
                              {/* </AddShoppingCartIcon> */}
                        </form>
                    <Button href='/products' sx={{my:1 }} variant='contained'>go back</Button> 
            </Box>
        </Paper>  
    </Container>        
  )
}