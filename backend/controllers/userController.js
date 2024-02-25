const User = require('../models/user');
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');

const SECRET = 'your-secret-key'; // Replace with your actual secret key

const createUser = async (req, res) => {
    // Validate user input
    const errors = validationResult(req);
    console.log('User Creation Validation Errors:', errors.array());
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    // Destructure user input from request body
    const { name, mobileno, email, username, password } = req.body;
    const {street, city, state, postalcode, country} = req.body.address
    console.log(name,mobileno,email,username,password,street,city,state,postalcode,country)
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
        const token = jwt.sign({ username, role: 'user' }, SECRET, { expiresIn: '1h' });

        res.json({ message: 'User created successfully', token });
    } catch (err) {
        console.error('User Creation Error:', err.message);
        res.status(500).json({ message: 'Server Error', error: err.message });
    }
};

module.exports = { createUser };
