import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import { BASE_URL } from "../App"
import { API } from "../App"
import { useParams } from "react-router-dom"
import { Container, Typography, Paper, Box } from "@mui/material"

export default function SingleProduct() {

    const [ product, setProduct ] = useState({})
    const { id } = useParams()

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
            price: data.singleProduct.price
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
                    <Link to='/products' className="backButton"><button>go back</button></Link>
            </Box>
        </Paper>
        
    </Container>        
    )
}
