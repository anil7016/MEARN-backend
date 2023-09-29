const express = require('express');
const { CreateOrder, fetchOrderById, deleteFromOrder, updateOrderById } = require('../controller/Order');

const router = express.Router();

router.post('/', CreateOrder)
.get('/',fetchOrderById)
.delete('/:id',deleteFromOrder)
.patch('/:id',updateOrderById);

exports.router = router;