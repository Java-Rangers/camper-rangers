const express = require('express')
const adminRouter = express.Router();

const {
  editProduct
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
module.exports = adminRouter
