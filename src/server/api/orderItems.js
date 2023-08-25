const express = require('express');
const orderItemsRouter = express.Router();

const {
  addItemToOrder, createOrderItem
} = require('../db/orderItems')

orderItemsRouter.patch('/user/:id', async (req, res, next) => {
  try {
      const cart = await getCartByUser(req.params.id);

      // sends an array of orderItem objects
      res.send ({cart})
  } catch(err) {
      console.error('Error while getting cart by user', err);
      throw err;
  }
})

orderItemsRouter.post('/', async(req, res, next) => {
  const {orderId, productId, quantity} = req.body
  try{
    const orderItem = await createOrderItem({orderId, productId, quantity})
    res.send({orderItem})
  }catch(err){
    console.error('Error creating orderItem')
    next(err)
  }
})


module.exports = orderItemsRouter;