const express = require('express')
const cartRouter = express.Router();

const {
    getCart
} = require('../db/orders')

cartRouter.get('/:id', async (req, res, next) => {
    console.log('running cart get...')
    try {
        const cart = await getCart(req.params.id);
        res.send ({
            cart
        })
    } catch(err) {
        console.error(err);
        throw err;
    }
})

module.exports = cartRouter;