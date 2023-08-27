const express = require('express');
const { FetchAllCategory, CreateCategory } = require('../controller/Category');

const router = express.Router();

router.get('/', FetchAllCategory).post('/', CreateCategory)

exports.router = router;