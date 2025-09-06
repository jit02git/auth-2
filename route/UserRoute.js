const UserController = require('../controller/UserController');
const express = require('express');

const app = express.Router();

app.post('/user/add', UserController.addUser);

module.exports = app;
