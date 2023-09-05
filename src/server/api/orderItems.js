const express = require('express');
const orderItemsRouter = express.Router({ mergeParams:true });

const {
  addItemToOrder,
  getItemsByOrder,
  editOrderItem,
  removeItemFromOrder
} = require('../db/orderItems')

// POST /api/orders/orderId/items
// CREATES AND RETURNS A NEW ORDER ITEM TO AN ORDER ID
// requires a body conataing {productId, quantity}
orderItemsRouter.post('/', async(req, res, next) => {
  const { orderId } = req.params
  const { productId, quantity } = req.body
  console.log('check out this: ', req.params, productId, quantity)
  try{
    const orderItem = await addItemToOrder({orderId, productId, quantity})
    res.send({orderItem})
  }catch(err){
    console.error('Error creating orderItem')
    next(err)
  }
})

// GET /api/orders/orderId/items
// GETS AND RETURNS ALL ITEMS OF AN ORDER ID
orderItemsRouter.get('/', async(req, res, next) => {
  const {orderId} = req.params
  try{
    const items = await getItemsByOrder(orderId)
    res.send({items})
  }catch(err){
    console.error(`Error getting all items from order ${req.params}`, err)
    next(err)
  }
})

// GET /api/orders/orderId/items
// SETS AND RETURNS AN ITEMS QUANTITY
orderItemsRouter.patch('/', async(req, res, next) => {
  const {orderId} = req.params
  const body = req.body
  try{
    const item = await editOrderItem(orderId, body)
    res.send({item})
  }catch(err){
    console.error('Error adjusting item quantity', err)
    next(err)
  }
})

// DELETE /api/orders/orderId/items
orderItemsRouter.delete('/', async(req, res, next) => {
  try{
    
  }catch(err){
    console.error('Error deleting item', err)
    next(err)
  }
})

module.exports = orderItemsRouter;