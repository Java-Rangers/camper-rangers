import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import { BASE_URL } from "../App"
import { API } from "../App"
import { useParams } from "react-router-dom"
import { Container, Typography, Paper, Box, Button, SvgIcon } from "@mui/material"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';


export default function SingleProduct() {

    const [ product, setProduct ] = useState({})
    const { id } = useParams();
    
    const userCart = sessionStorage.getItem('userCart');
    const userID = sessionStorage.getItem('userID');

    useEffect(() => {
        const getUserCart = async () => {
    
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
                    <Typography variant="h1">{product.title}</Typography>
                    <Typography variant="h3">{product.brand}</Typography>
                    <Box component='img' margin='20px' src={product.image}/>
                    <Typography>{product.description}</Typography>
                    <Typography variant="h3">In Stock:{product.quantity}</Typography>
                    <Typography variant="h3">Price:${product.price}</Typography>
                    <form >
                        {/* <AddShoppingCartIcon> */}
                            <Button variant='outlined' endIcon={<AddShoppingCartIcon/>} sx={{my:3, color: 'secondary.main', zIndex: 100000 }}
                            onClick={()=> {cartSubmit(product.id)}} 
                            // type = 'submit'
                            id= 'addCartButton'
                            // value='add to cart'
                            >
                            Add to cart
                            </Button>
                            {/* </AddShoppingCartIcon> */}
                        </form>
                    <Link to='/products'  className="backButton"><Button sx={{my:1 }} variant='contained'>go back</Button></Link>    
            </Box>
        </Paper>
        
    </Container>        
    )
}
