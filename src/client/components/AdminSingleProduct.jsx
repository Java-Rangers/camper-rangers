import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import { BASE_URL } from "../App"
import { API } from "../App"
import { useParams } from "react-router-dom"
import { Container, Typography, Paper, Box, Button, InputLabel, Input, OutlinedInput } from "@mui/material"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import EditNoteIcon from '@mui/icons-material/EditNote';

export default function AdminSingleProduct() {
  const [ product, setProduct ] = useState({});
  const [ description, setDescription ] = useState('');
  const [ quantity, setQuantity ] = useState (0);
  const [ price, setPrice ] = useState (0);
  const [ editorActive, setEditorActive ] = useState(false);
  const { id } = useParams();

  
  const userCart = sessionStorage.getItem('userCart');
  const userID = sessionStorage.getItem('userID');

  useEffect(() => {
      const getUserCart = async () => {
        
        if(userID !== null) {
          try{
          
          const response = await fetch (`${API}/users/${userID}/cart`)
      
          const data = await response.json();
          console.log('fetch Cart success', data.cart[0].orderId)
          sessionStorage.setItem('userCart', data.cart[0].orderId);
          return(data.cart[0].orderId);
          } catch(err) {
          console.log('error getting user cart', err)
          }
      
        }  
      }
     getUserCart(); 
  }, [])
        
 
  

    const cartSubmit = async ( productId, quantity ) => {
      // e.preventDefault();
      try{
        const response = await fetch (`${API}/orders/${userCart}/items`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              orderId: `${userCart}`,
              productId: productId,
              quantity: quantity = 1,    
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
  
   


   const startEdit = () => {
    setEditorActive(true);
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

  const handleEdit = async (e) => {
    try{
      const response = await fetch (`${API}/admin/edit/${id}`,{
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          description: description,
          quantity: quantity,
          price: price,
        })
      });
      if(!response.ok) {
        throw new Error (`HTTP error! Status: ${response.status}`)
      }
      const data = await response.json();
      console.log(data)
      return data
    } catch(err) {
      console.log ('error editing your product', err)
    }
  }

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
    <Container sx={{mb:15}}>
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
                    {editorActive ? 
                      <Box>
                        <InputLabel htmlFor='description'>  Description: </InputLabel>
                          <OutlinedInput
                            autoFocus
                            sx={{mb:2}}
                            fullWidth
                            id= 'DescriptionInput'
                            type='text'
                            value= {description}
                            onChange={e=> setDescription(e.target.value)}
                          />
                         <InputLabel htmlFor='quantity'>  Quantity: </InputLabel>
                          <OutlinedInput
                            autoFocus
                            sx={{mb:2}}
                            fullWidth
                            id= 'QuantityInput'
                            type='number'
                            value= {quantity}
                            onChange={e => setQuantity(e.target.value)}
                          />
                         <InputLabel htmlFor='price'> Price: </InputLabel>
                          <OutlinedInput
                            autoFocus
                            sx={{mb:2}}
                            fullWidth
                            id= 'PriceInput'
                            type='integer'
                            value= {price}
                            onChange={e => setPrice(e.target.value)}
                          />
                      </Box>
                    :
                      <Box>
                        <Typography>{product.description}</Typography>
                        <Typography variant="h5" sx={{mt:4}}>In Stock:{product.quantity}</Typography>
                        <Typography variant="h4">Price:${product.price}</Typography> 
                      </Box>
                    }
                      
                      
                    <form >
                            <Button variant='outlined' endIcon={<AddShoppingCartIcon/>} sx={{
                              my:1,
                              color: 'secondary.main', 
                              zIndex: 100000 }}

                            onClick={()=> {cartSubmit(product.id)}} 
                            // type = 'submit'
                            id= 'addCartButton'
                            // value='add to cart'
                            >
                            Add to cart
                            </Button>
                        </form>    
                    {editorActive ? (
                      <Button variant='outlined' sx={{my:2, color: 'secondary.main'}} onClick={() => { handleEdit() } }>
                      Save Edit
                    </Button>
                    ) : (
                      <Button variant="outlined"  sx={{my:2, color: 'secondary.main'}} 
                        onClick={() => { startEdit() }}>
                        Edit Product </Button>  
                    )}
                    <Button href='/products' sx={{my:1 }} variant='contained'>go back</Button> 
            </Box>
        </Paper>
        
    </Container>        
  )

}