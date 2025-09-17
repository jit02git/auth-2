const express = require("express");
const connectDB = require('./config/dbConnect');
const router = require('./route/UserRoute');
const router = require('./route/AuthRoute');
const bodyParser = require('body-parser');
require('dotenv').config();
const app = express();

connectDB();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.json());
app.use('/api/user', router);
app.use('/api/auth', AuthRoute);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
