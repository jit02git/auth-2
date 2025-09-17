const AuthController = require('../controller/AuthController');
const express = require('express');
const router = express.Router();

router.post('/register', AuthController.register);

module.exports = router;