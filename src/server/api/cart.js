const express = require('express')
const cartRouter = express.Router();

const {
    getCartByUser,
    checkoutCart
} = require('../db/cart')

cartRouter.get('/user/:id', async (req, res, next) => {
    try {
        const cart = await getCartByUser(req.params.id);

        // sends an array of orderItem objects
        res.send ({cart})
    } catch(err) {
        console.error('Error while getting cart by user', err);
        throw err;
    }
})

cartRouter.patch('/user/:id', async (req, res, next) => {
  try{
    const cart = await checkoutCart(req.params.id);
    res.send({cart});
  }catch(err){
    console.log('Error during cart checkout of user id: ', req.params.id, err);
    next(err);
  }
})

module.exports = cartRouter;