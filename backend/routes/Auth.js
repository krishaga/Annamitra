const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const { loginUser, updateUser, getUserDetails, createUser, logoutUser, getuserdata, getUsername } = require('../controllers/userController.js');
const authenticateJwt = require('../middlewares/authentication.js');

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
        createUser(req, res);
    }
);

router.post('/login', async (req, res) => {
    loginUser(req, res);
});

router.post('/update-profile',
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
        updateUser(req, res);
    }
);

router.get('/user-details', authenticateJwt, async (req, res) => {
    getUserDetails(req, res);
});

router.post('/logout', authenticateJwt, async (req, res) => {
    logoutUser(req, res);
});

router.get('/dashboard', authenticateJwt, async (req, res) => {
    getuserdata(req, res);
});

router.get('/get-username', authenticateJwt, async (req, res) => {
    getUsername(req, res);
});

module.exports = router;
