const express = require('express')
const cartRouter = express.Router({ mergeParams:true });

const {
    getCartByUser,
    checkoutCart
} = require('../db/cart')

// GET /api/users/userId/cart
// GETS AND RETURNS CART BY USER ID
cartRouter.get('/', async (req, res, next) => {
  const {userId} = req.params
    try {
        const cart = await getCartByUser(userId);

        // sends an array of orderItem objects
        res.send ({cart})
    } catch(err) {
        console.error('Error while getting cart by user', err);
        throw err;
    }
})

// PATCH /api/users/userId/cart
// SETS CART OF USER ID TO FULLFILLED
cartRouter.patch('/', async (req, res, next) => {
  const {userId} = req.params
  try{
    const cart = await checkoutCart(userId);
    res.send({cart});
  }catch(err){
    console.log('Error during cart checkout of user id: ', req.params.id, err);
    next(err);
  }
})

module.exports = cartRouter;