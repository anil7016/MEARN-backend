const express = require('express');
const { CreateUser, fetchUserById, updateUserById } = require('../controller/User');

const router = express.Router();

router.post('/', CreateUser)
router.get('/:id',fetchUserById);
router.patch('/:id',updateUserById);

exports.router = router;