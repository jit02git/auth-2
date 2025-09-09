const UserController = require('../controller/UserController');
const express = require('express');


const app = express.Router();

app.post('/add', UserController.addUser);
app.post('/update/:id', UserController.userUpdate);
app.get('/view/:id', UserController.viewUser);
app.delete('/delete/:id', UserController.deleteUser);

module.exports = app;
