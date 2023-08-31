import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import { BASE_URL } from "../App"
import { API } from "../App"
import { useParams } from "react-router-dom"
import { Container, Typography, Paper, Box, Button, InputLabel, Checkbox, Input, FormControl, OutlinedInput, FormControlLabel } from "@mui/material"


export default function AddProduct () {

  const [title, setTitle ] = useState('');
  const [description, setDescription] = useState('');
  const [brand, setBrand ] = useState('');
  const [availability, setAvailability ] = useState(false);
  const [image, setImage ] = useState('');
  const [price, setPrice ] = useState(0);
  const [quantity, setQuantity ] = useState(0);


  const submitProduct = async () => {
    try{
      const response = await fetch (`${API}/admin/products/newProduct`, {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: title,
            description: description,
            brand: brand,
            availability, availability,
            image: image,
            price:  price,
            quantity: quantity,
        })
      })
      if(!response.ok){
        throw new Error (`HTTP error! Status: ${response.status}`)
      }
      const data = await response.json()
      console.log('new product', data);
      return data;
    } catch (err) {
      console.log('error posting new product', err)
    }
  }
  


  return(
      <Container sx={{my:3, textAlign:'center', padding:'10px'}}>
        <Paper elevation={20}>
          <Box sx={{padding:'20px', paddingBottom:'100px'}}>
            <FormControl sx={{width:330}}>
              <InputLabel htmlFor='title'> Title: </InputLabel>
                <OutlinedInput 
                  id='title'
                  // value={product.title}
                  // onChange={e => setTitle(e.target.value)}
                />
            </FormControl>
            <FormControl>
              <InputLabel htmlFor='description'> Description:</InputLabel>
                <OutlinedInput 
                  id='description'
                  // value={product.description}
                  // onChange={e => setDescription(e.target.value)}
                />
            </FormControl>
            <FormControl>
              <InputLabel htmlFor='brand'> Brand: </InputLabel>
              <OutlinedInput 
                id='brand'
                // value={product.brand}
                // onChange={e => setBrand(e.target.value)}
              />
            </FormControl>
            <FormControl>
              <FormControlLabel
                control = {<Checkbox defaultChecked />} 
                label = {availability}
                id='availability'
                // value={product.availability}
                // onChange={e => setAvailability(e.target.value)}
              />
            </FormControl>
            <FormControl>
              <InputLabel htmlFor='image'> Image URL:</InputLabel>
              <OutlinedInput 
                id='image'
                // value={product.image}
                // onChange={e => setImage(e.target.value)}
              />
            </FormControl>
            <FormControl> 
              <InputLabel htmlFor='price'> Price:</InputLabel>
              <OutlinedInput 
                id='price'
                // value={product.price}
                // onChange={e => setPrice(e.target.value)}
              />
            </FormControl>
            <FormControl>
              <InputLabel htmlFor='quantity'> Quantity: </InputLabel>
              <OutlinedInput 
                id='quantity'
                // value={product.quantity}
                // onChange={e => setQuantity(e.target.value)}
              />
            </FormControl>
          </Box>
        </Paper>
      </Container> 
  )
}