const express = require('express');
const usersRouter = express.Router();

const {
  createProduct,
  getProducts,
  getProductById
} = require ('../db/product')