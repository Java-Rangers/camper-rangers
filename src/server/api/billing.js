const express = require('express')
const billingRouter = express.Router();

const {
    createBilling,
    getBillingByUser
} = require('../db');
const { deleteBillingById } = require('../db/billing');



// GET /api/createBilling
billingRouter.get('/', async (req, res, next) => {
    try {
        const billing = await createBilling();

        res.send({billing});

    } catch (error) {
       next(error) 
    }
});

// GET /api/:userId
billingRouter.get('/:userId', async(req,res,next) =>{
    try {
        const user = await getBillingByUser(req.params.userId);
        res.send(user)
    } catch (error){
        next(error)
    }
})

billingRouter.delete('/:userId', async(req, res,next) => {
    try {
        const user = await deleteBillingById(req.params.userId);
        res.send(bike);
    } catch (error){
        next(error)
    }
})






module.exports = billingRouter;