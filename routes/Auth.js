const express = require('express');
const { CreateUser ,LoginUser } = require('../controller/Auth');

const router = express.Router();

router.post('/signup', CreateUser)
router.post('/login',LoginUser)

exports.router = router;