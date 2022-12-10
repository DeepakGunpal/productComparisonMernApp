const express = require('express');
const { createProduct, getProducts, getAllProduct, getProduct } = require('../controller/controller');
const route = express.Router();

route.post('/createProduct', createProduct);
route.get('/getProduct/:productName', getProduct);
route.get('/compare', getProducts);
route.get('/getAllProduct', getAllProduct);

module.exports = route;