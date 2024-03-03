const { User } = require('../models/user');
const jwt = require('jsonwebtoken');

const SECRET = "Foodsew";  // add to env

const createUser = async (req, res) => {
    const { name, mobileno, email, username, password } = req.body;
    const { street, city, state, postalcode, country } = req.body.address;

    try {
        const userExists = await User.findOne({ username });

        if (userExists) {
            return res.status(403).json({ message: 'User already exists' });
        }

        const newUser = new User({
            name,
            mobileno,
            email,
            username,
            password,
            address: {
                street,
                city,
                state,
                postalcode,
                country,
            },
        });
        await newUser.save();
        const token = jwt.sign({ username, role: 'user' }, SECRET, { expiresIn: '30d' });
        res.status(200).json({ message: 'User created successfully', token });
    } catch (error) {
        console.error('User Creation Error:', error);
        res.status(500).json({ message: 'Server Error', error });
    }
};

const loginUser = async (req, res) => {
    const { username, password } = req.headers;
    const user = await User.findOne({ username, password });
    if (user) {
        const token = jwt.sign({ username }, SECRET, { expiresIn: '30d' });
        res.json({ message: 'Logged in successfully', token });
    } else {
        res.status(403).json({ errorMessage: 'Invalid username or password' });
    }
}

const updateUser = async (req, res) => {
    const { name, mobileno, email, username, password } = req.body;
    const { street, city, state, postalcode, country } = req.body.address;

    try {
        const user = await User.findOne({ username });

        user.name = name;
        user.mobileno = mobileno;
        user.email = email;
        user.password = password;
        user.address.street = street;
        user.address.city = city;
        user.address.state = state;
        user.address.postalcode = postalcode;
        user.address.country = country;

        await user.save();

        res.status(200).json({ message: 'User updated successfully', user: user });
    } catch (error) {
        console.error('User Update Error:', error);
        res.status(500).json({ message: 'Server Error', error });
    }
};

const logoutUser = async (req, res) => {
    localStorage.removeItem('token');
    return res.status(200).json({ message: "Logout successful" });
};

module.exports = { createUser, loginUser, logoutUser, updateUser };
