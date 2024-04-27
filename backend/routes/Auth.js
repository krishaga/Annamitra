const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const { loginUser, updateUser, getUserByName, createUser, logoutUser, getuserdata, getUserById } = require('../controllers/userController.js');
const authenticateJwt = require('../middlewares/authentication.js');

router.post('/signup',                                                                                       // SignUp Route
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

router.post('/login', async (req, res) => {                                                            //Login Route
    loginUser(req, res);
});

router.post('/update-profile',                                                                         //Profile Update Route
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

router.get('/user-details', authenticateJwt, async (req, res) => {                                    //Gets user data by name Route
    getUserByName(req, res);
});

router.post('/logout', authenticateJwt, async (req, res) => {                                        //Logout Route
    logoutUser(req, res);
});

router.get('/dashboard', authenticateJwt, async (req, res) => {                                       //Dashboard Route
    getuserdata(req, res);
});

router.get('/get-user', authenticateJwt, async (req, res) => {                                       //Get user data by Id route
    getUserById(req, res);
});

module.exports = router;
