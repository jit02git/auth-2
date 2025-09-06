const User = require('../model/User');

const addUser = (req, res) => {
    const { name, email, phone, address, city, state, country } = req.body;

    const user = new User(req.body);
    console.log(user);
}

module.exports = {addUser}