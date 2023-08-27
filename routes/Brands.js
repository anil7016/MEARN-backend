const express = require('express');
const { FetchAllBrands, CreateBrand } = require('../controller/Brand');

const router = express.Router();

router.get('/', FetchAllBrands).post('/', CreateBrand);

exports.router = router;