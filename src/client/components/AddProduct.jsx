import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import { BASE_URL } from "../App"
import { API } from "../App"
import { useParams } from "react-router-dom"
import { Container, Typography, Paper, Box, Button, InputLabel, Checkbox, Input, FormControl, OutlinedInput, FormControlLabel, TextField, InputAdornment } from "@mui/material"



export default function AddProduct () {

  const [title, setTitle ] = useState('title');
  const [description, setDescription] = useState('description');
  const [brand, setBrand ] = useState('brand');
  const [availability, setAvailability ] = useState(false);
  const [image, setImage ] = useState('image url');
  const [price, setPrice ] = useState(0);
  const [quantity, setQuantity ] = useState(0);
  const [product, setProduct ] = useState ({
    title: '',
    description: '',
    brand: '',
    availability: '',
    image: '',
    price:  '',
    quantity: '',
  })


  const submitProduct = async () => {
    try{
      const response = await fetch (`${API}/admin/product/newProduct`, {
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
      alert('Item Added!')
      setProduct(data);
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
                <TextField
                  label='Title:' 
                  id='title'
                  InputLabelProps={{shrink: true}}
                  value={title}
                  onChange={e => setTitle(e.target.value)}
                />
            </FormControl>
            <FormControl>
              {/* <InputLabel htmlFor='description'> Description:</InputLabel> */}
                <TextField
                  label='Description:' 
                  id='description'
                  InputLabelProps={{ shrink: true}}
                  value={description}
                  onChange={e => setDescription(e.target.value)}
                />
            </FormControl>
            <FormControl>
              <TextField 
                label='Brand:'
                id='brand'
                InputLabelProps= {{shrink: true}}
                value={brand}
                onChange={e => setBrand(e.target.value)}
              />
            </FormControl>
            <FormControl>
              <FormControlLabel
                control = {<Checkbox defaultChecked />} 
                label = 'Available?'
                labelPlacement="top"
                id='availability'
                value={availability}
                onChange={e => setAvailability(e.target.value)}
              />
            </FormControl>
            <FormControl>
              <TextField 
                label='Image URL:'
                id='image'
                InputLabelProps={{shrink:true}}
                value={image}
                onChange={e => setImage(e.target.value)}
              />
            </FormControl>
            <FormControl> 
              <TextField 
                label='Price:'
                id='price'
                InputLabelProps={{shrink:true}}
                InputProps={{
                    startAdornment:
                  <InputAdornment position="start">
                    $
                  </InputAdornment>
                }}
                value={price}
                onChange={e => setPrice(e.target.value)}
              />
            </FormControl>
            <FormControl>
              <TextField
                label='Quantity:' 
                id='quantity'
                InputLabelProps={{shrink:true}}
                value={quantity}
                onChange={e => setQuantity(e.target.value)}
              />
            </FormControl>
          </Box>
          <Box>
            <Button 
              variant='outlined'
              fullWidth
              id='subProductBttn'
              sx={{
                position:'relative',
                top:'25px',
                bgcolor:'secondary.main',
                color:'text.main'
              }}
              onClick={() => {submitProduct()}}
            > 
              Submit Item
            </Button>
          </Box>
        </Paper>
      </Container> 
  )
}