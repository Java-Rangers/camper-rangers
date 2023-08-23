const express = require('express')
const cartRouter = express.Router();

const {
    getCartByUser
} = require('../db/cart')

cartRouter.get('/:id', async (req, res, next) => {
    console.log('running cart get...')
    try {
        const cart = await getCartByUser(req.params.id);
        res.send ({cart})
    } catch(err) {
        console.error('Error while getting cart by user', err);
        throw err;
    }
})

module.exports = cartRouter;