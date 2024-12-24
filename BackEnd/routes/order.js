const express = require('express');
const { ordercontroller } = require('../controllers/orderController');
const orderRouter = express.Router();

orderRouter.post('/order', ordercontroller);


module.exports = { orderRouter };