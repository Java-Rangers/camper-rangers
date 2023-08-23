const express = require('express');
const ordersRouter = express.Router();

const {
  getAllOrders,
  getOrder,
  getOrderByUser,
  createOrder,
} = require('../db/orders');

ordersRouter.get('/', async(req, res, next) => {
  try{
    const orders = await getAllOrders();
    res.send({orders})
  }catch(err){
    console.error('Error while getting all orders', err);
    throw err
  }
})

ordersRouter.get('/:id', async(req, res, next) => {
  try{
    const order = await getOrder(req.params.id);
    res.send({order})
  }catch(err){
    console.error('Error while getting order by id', err);
    throw err
  }
})

ordersRouter.get('/user/:id', async(req, res, next) => {
  try{
    const order = await getOrderByUser(req.params.id)
    res.send({order})
  }catch(err){
    console.error('Error while getting order by user id', err);
    throw err
  }
})

module.exports = ordersRouter;