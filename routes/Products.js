const express = require('express');
const { CreateProduct, FetchAllProducts, fetchProductById, updateProductById } = require('../controller/Product');

const router = express.Router();

router.post('/', CreateProduct)
router.get('/', FetchAllProducts)
router.get('/:id',fetchProductById);
router.patch('/:id',updateProductById);

exports.router = router;