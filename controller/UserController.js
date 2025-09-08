const User = require('../model/User');

const addUser = (req, res) => {
    const { name, email, phone, address, city, state, country } = req.body;

    const user = new User(req.body);

    user.save().then(() => {
        console.log('User added successfully');
        res.status(201).json({ message: 'User added successfully', data: user });
    }).catch((error) => {
        console.error('Failed to add user:', error);
        res.status(500).json({ error: 'Failed to add user' });
    });
}

module.exports = {addUser}