const express = require('express');
const { createProduct, getProduct, getAllProduct } = require('../controller/controller');
const route = express.Router();

route.post('/createProduct', createProduct);
route.get('/getProduct/:productName', getProduct);
route.get('/getAllProduct', getAllProduct);

module.exports = route;