const express = require('express')
const adminRouter = express.Router();

const {
  editProduct,
  getAllUsers,
  deleteUser,
  getUserById

} =require('../db/admin');

adminRouter.patch('/edit/:id', async(req, res, next)  => {
  try{
    // if (isAdmin) {
    const updatedProduct = await editProduct( req.params.id, req.body )
    res.send(updatedProduct)
    // }
  } catch(err) {
    console.log('error route to edit product', err)
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
