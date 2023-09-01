const express = require('express')
const adminRouter = express.Router();
require('dotenv').config()
const jwt = require('jsonwebtoken')


const {
  editProduct,
  getAllUsers,
  deleteUser,
  getUserById,
  logIn

} =require('../db/admin');

const {
  createProduct
} =require ('../db/products')

adminRouter.post( '/login', async (req, res) => {
  try {
    const { username, password, isAdmin } = req.body

    let user = await logIn({ username, password, isAdmin })
    
    
  
    res.send({ message: 'You successfully logged in!'})
  } catch (err) {
    console.log(err.message)
    res.status(500).send(err.message)
  }
})

adminRouter.patch('/edit/:id', async(req, res, next)  => {
  try{
    // if (isAdmin) {
    const updatedProduct = await editProduct( req.params.id, req.body )
    console.log(updatedProduct);
    res.send(updatedProduct);
    // }
  } catch(err) {
    console.log('error route to edit product', err)
  }
})

adminRouter.post('/product/newProduct', async(req, res, next) => {
  try{
    const newProduct = await createProduct ( req.body )
    console.log(newProduct);
    res.send(newProduct);
  } catch (err) {
    console.log('error routing to create new product', err)
  }
})

adminRouter.get ('/', async (req, res, next) => {
  try {
    const user = await getAllUsers();
    res.send({user})
  } catch (error) {
    next(error)
  }
})

adminRouter.delete('/:id' , async (req, res, next) => {
  try {
    const user = await deleteUser(req.params.id);
    res.send(user)
  } catch (error) {
    next(error)
  }
})

adminRouter.get('/:id', async (req, res, next) => {
  try {
    const user = await getUserById ( req.params.id);
    res.send(user);
  } catch (error){
    next(error)
  }
})

module.exports = adminRouter
