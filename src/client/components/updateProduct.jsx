import React, { useEffect, useState } from 'react';
import { API } from '../App';
import { BASE_URL } from '../App';
import { useNavigate } from 'react-router-dom';
import { Container, Typography, Paper, Box, TextField, Button } from '@mui/material'

  export default function products( { token } ) {

  const [editingProductId, setEditingProductId ] = useState (null);
  const [editedProduct, setEditedProduct ] = useState({
    title: '',
    description: '',
    price: '',
    quantity: '',
    
  });
  
  const navigate = useNavigate();



 const handleEdit = (product) => {
    setEditingProductId(product._id);
    setEditedProduct({
        title: product.title,
        description: product.description,
        price: product.price,
        quantity: product.quantity,
      });
    };

const handleUpdate = async (productId) => {
    try {
        const response = await fetch (`${API}/products/${productId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(editedProduct)
        });

        if(response.ok) {
            setEditingProductId(null);
            setEditedProduct({
                title: '',
                description: '',
                price: '',
                quantity:'',
            })
        } else {
            console.log('Error updating product');
        }
    } catch (error){
        console.log('Error updating product', error)
    }
    
}

return (
    <Container>
    {isAdmin && (
      <>
        <Typography variant="h6">Admin Actions:</Typography>
        {products.map((product) => (
          <Box key={product._id}>
            {editingProductId === product._id ? (
              <>
                <TextField
                  label="Title"
                  value={editedProduct.title}
                  onChange={(e) =>
                    setEditedProduct({ ...editedProduct, title: e.target.value })
                  }
                />
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => handleUpdate(product._id)}
                >
                  Save
                </Button>
              </>
            ) : (
              <>
                <Typography>{product.title}</Typography>
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={() => handleEdit(product)}
                >
                  Edit
                </Button>
              </>
            )}
          </Box>
        ))}
      </>
    )}
  </Container>
);}