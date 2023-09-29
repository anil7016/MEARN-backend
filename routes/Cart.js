const express = require('express');
const { CreateCart, fetchCartById, updateCartById, deleteFromCart } = require('../controller/Cart');

const router = express.Router();

router.post('/', CreateCart);
//router.get('/', FetchAllCart);
router.get('/',fetchCartById);
//router.get('/:id',fetchCartById);
router.delete('/:id',deleteFromCart);
router.patch('/:id',updateCartById);

exports.router = router;