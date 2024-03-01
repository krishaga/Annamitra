const express = require('express');
const { Recipients } = require('../models/recipients');
const { Donations } = require('../models/donations');
const authenticateJwt = require('../middlewares/authentication')
const router = express.Router();

router.post('/new-donation', authenticateJwt, async (req, res) => {
    // logic to create a course
    const newRequest = new Donations(req.body);
    await newRequest.save();
    res.json({ message: 'Created successfully' });
});

router.post('/new-request', authenticateJwt, async (req, res) => {
    // logic to create a course
    const newRequest = new Recipients(req.body);
    await newRequest.save();
    res.json({ message: 'Created successfully' });
});

module.exports = router;