const User = require('../models/user');
const jwt = require('jsonwebtoken');

const SECRET = "Foodsew";  // add to env

const createUser = async (req, res) => {
    // Destructure user input from request body
    const { name, mobileno, email, username, password } = req.body;
    const { street, city, state, postalcode, country } = req.body.address
    try {
        // Check if the user with the given username already exists
        const userExists = await User.findOne({ username });

        if (userExists) {
            return res.status(403).json({ message: 'User already exists' });
        }

        // Create a new user instance
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

        // Save the user to the database
        await newUser.save();

        // Create and return a JWT token for user authentication
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
module.exports = { createUser, loginUser };
