const express = require('express');
const addressRouter = express.Router();

const {
  createAddress,
  getAllAddresses,
  getAddressByUser,
  getAddress,
  editAddress,
  editAddressByUser,
  deleteAddress,
  deleteAddressByUser
} = require('../db/address');

// ------------------GET FUNCTIONS---------------------

// GETS ALL ADDRESSES
addressRouter.get('/', async(req, res, next) => {
  try{
    const addresses = await getAllAddresses();
    res.send({addresses})
  }catch(err){
    throw err
  }
})

// GETS ADDRESS BY ID
addressRouter.get('/:id', async(req, res, next) => {
  try{
    const address = await getAddress(req.params.id)
    res.send({address})
  }catch(err){
    throw err
  }
})

// GETS ADDRESS BY USER ID
addressRouter.get('/user/:id', async(req, res, next) => {
  try{
    const address = await getAddressByUser(req.params.id);
    res.send({address})
  }catch(err){
    throw err
  }
})

// ---------------POST FUNCTIONS------------------

// ADDS A NEW ADDRESS TO DATABASE
// need to pass in the userID the address will be assigned to, is this variable inside the req.body?
addressRouter.post('/', async(req, res, next) => {
  const {userID, street, city, state, zip} = req.body
  try{
    const address = await createAddress({userID, street, city, state, zip})
    res.send({address})
  }catch(err){
    throw err
  }
})

// ----------------PATCH FUNCTIONS-----------------

// EDITS AN ADDRESS BY ID
addressRouter.patch('/:id', async(req, res, next) => {
  try{
    const address = await editAddress(req.params.id, req.body)
    console.log(typeof address, address)
    res.send({address})
  }catch(err){
    throw err
  }
})

// EDITS AN ADDRESS BY USER ID
addressRouter.patch('/user/:id', async(req, res, next) => {
  try{
    const address = await editAddressByUser(req.params.id, req.body)
    res.send({address})
  }catch(err){
    throw err
  }
})

// ----------------DELETE FUNCTIONS------------------

// DELETES AN ADDRESS BY ID
addressRouter.delete('/:id', async(req, res, next) => {
  try{
    const address = await deleteAddress(req.params.id)
    res.send({address})
  }catch(err){
    throw err
  }
})

// DELETES AN ADDRESS BY USER ID
addressRouter.delete('/user/:id', async(req, res, next) => {
  try{
    const address = await deleteAddressByUser(req.params.id)
    res.send({address})
  }catch(err){
    throw err
  }
})

module.exports = addressRouter;