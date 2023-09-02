const express = require('express');
const { CreateCart, fetchCartById, updateCartById } = require('../controller/Cart');

const router = express.Router();

router.post('/', CreateCart);
//router.get('/', FetchAllCart);
router.get('/:id',fetchCartById);
router.patch('/:id',updateCartById);

exports.router = router;