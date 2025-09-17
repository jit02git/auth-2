const AuthController = require('../controller/AuthController');
const express = require('express');
const authRoute = express.Router();

authRoute.post('/register', AuthController.register);
authRoute.post('/login', AuthController.login); 

module.exports = authRoute;