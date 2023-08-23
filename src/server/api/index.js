const express = require('express');
const apiRouter = express.Router();
const jwt = require('jsonwebtoken');

const volleyball = require('volleyball')
apiRouter.use(volleyball)

// TO BE COMPLETED - set `req.user` if possible, using token sent in the request header
apiRouter.use(async (req, res, next) => {
  const auth = req.header('Authorization');
  
  if (!auth) { 
    next();
  } 
  else if (auth.startsWith('REPLACE_ME')) {
    // TODO - Get JUST the token out of 'auth'
    const token = 'REPLACE_ME';
    
    try {
      const parsedToken = 'REPLACE_ME';
      // TODO - Call 'jwt.verify()' to see if the token is valid. If it is, use it to get the user's 'id'. Look up the user with their 'id' and set 'req.user'

    } catch (error) {
      next(error);
    }
  } 
  else {
    next({
      name: 'AuthorizationHeaderError',
      message: `Authorization token must start with 'Bearer'`
    });
  }
});

const cartRouter = require('./cart');
apiRouter.use('/cart', cartRouter);

const ordersRouter = require('./orders');
apiRouter.use('/orders', ordersRouter);

const orderItemsRouter = require('./orderItems');
apiRouter.use('/orderItems', orderItemsRouter);

const usersRouter = require('./users');
apiRouter.use('/users', usersRouter);

const addressRouter = require('./address');
apiRouter.use('/address', addressRouter);

const productRouter = require('./products');
apiRouter.use('/products', productRouter);

const adminRouter = require('./admin');
apiRouter.use('/admin', adminRouter);

const billingRouter = require('./billing');
apiRouter.use('/billing', billingRouter);

apiRouter.use((err, req, res, next) => {
    res.status(500).send(err)
  })

module.exports = apiRouter;