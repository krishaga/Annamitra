// const express= require('express')
// const cors= require('cors')
// const jwt = require('jsonwebtoken');
// const app = express();
// app.use(cors())
// app.use(express.json());
// const SECRET = 'SECr3t';  // This should be in an environment variable in a real application


// const authenticateJwt = (req, res, next) => {
//     const authHeader = req.headers.authorization;
//     if (authHeader) {
//       const token = authHeader.split(' ')[1];
//       jwt.verify(token, SECRET, (err, user) => {
//         if (err) {
//           return res.sendStatus(403);
//         }
//         req.user = user;
//         next();
//       });
//     } else {
//       res.sendStatus(401);
//     }
//   };
 
  
const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const { createUser } = require('../controllers/userController');

router.post('/signup',
[
    check('name', 'Name is required').not().isEmpty(),
    check('mobileno', 'Mobile number is required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('username', 'Username is required').not().isEmpty(),
    check('password', 'Password must be at least 6 characters long').isLength({ min: 6 }),
    check('street', 'Street address is required').not().isEmpty(),
    check('city', 'City is required').not().isEmpty(),
    check('state', 'State/Province is required').not().isEmpty(),
    check('postalcode', 'Postal code is required').not().isEmpty(),
    check('country', 'Country is required').not().isEmpty(),
],
createUser
);

module.exports = router;
  
  