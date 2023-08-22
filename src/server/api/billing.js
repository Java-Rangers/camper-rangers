const express = require('express')
const billingRouter = express.Router();

const {
    createBilling,
    getBillingByUser,
    deleteBillingById,
    updateBillingById,
} = require('../db');




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
billingRouter.get('/:userID', async(req,res,next) =>{
    try {
        const user = await getBillingByUser(req.params.userId);
        res.send(user)
    } catch (error){
        next(error)
    }
})

billingRouter.delete('/:userID', async(req, res,next) => {
    try {
        const user = await deleteBillingById(req.params.userId);
        res.send(user);
    } catch (error){
        next(error)
    }
})

billingRouter.patch ('/:userID', async(req, res, next) => {
    try {
        const user = await updateBillingById(req.params.userID, req.body);
        res.send(user);
    } catch (error){
        next (error)
    }
})





module.exports = billingRouter;