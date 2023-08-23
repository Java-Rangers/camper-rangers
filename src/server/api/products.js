const express = require('express');
<<<<<<< HEAD
const usersRouter = express.Router();
=======
const productRouter = express.Router();
>>>>>>> main

const {
  createProduct,
  getProducts,
  getProductById
<<<<<<< HEAD
} = require ('../db/product')
=======
} = require ('../db/product')


//-----------------routes to an all products "home" page-----------------------
productRouter.get('/', async (req, res, next) => {
  try{
    const products = await getProducts();

    res.send({
      products
    })

  } catch(err) {
    console.log('error routing to get all products', err)
  }
})


// -----------------routes to a single product page that will useable on click--------------
productRouter.get('/:id', async (req, res, next) => {
  try{
    const singleProduct = await getProductById(req.params.id);

    res.send({
      singleProduct
    })
  
  } catch(err){
    console.log('error routing single product', err);
  }
})

module.exports = productRouter;
>>>>>>> main
