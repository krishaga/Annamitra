const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const { createUser } = require('../controllers/userController.js');

router.post('/signup',
    [
        check('name', 'Name is required').not().isEmpty(),
        check('mobileno', 'Mobile number is required').not().isEmpty(),
        check('email', 'Please include a valid email').isEmail(),
        check('username', 'Username is required').not().isEmpty(),
        check('password', 'Password must be at least 6 characters long').isLength({ min: 6 }),
        check('address.street', 'Street address is required').not().isEmpty(),
        check('address.city', 'City is required').not().isEmpty(),
        check('address.state', 'State/Province is required').not().isEmpty(),
        check('address.postalcode', 'Postal code is required').not().isEmpty(),
        check('address.country', 'Country is required').not().isEmpty(),
    ],
    (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(500).json({ errors: errors.array() });
        }

        // If no validation errors, proceed to createUser function
        createUser(req, res);
    }
);

module.exports = router;
