const express = require('express');
const { Recipients } = require('../models/recipients');
const { Donations } = require('../models/donations');
const authenticateJwt = require('../middlewares/authentication')
const { User } = require('../models/user');
const router = express.Router();


router.post('/new-donation', authenticateJwt, async (req, res) => {
    // logic to create a donation
    let newDonation = req.body;
    const currentUser = await User.findOne({ username: req.user.username });
    newDonation = {
        addressFrom: currentUser.address,
        donor_id: currentUser._id,
        completed: false,
        date: new Date(),
        ...newDonation
    }
    const newRequest = new Donations(newDonation);
    await newRequest.save();
    res.json({ message: 'Created successfully' });
});

router.post('/new-request', authenticateJwt, async (req, res) => {
    // logic to create a request
    let newRecipient = req.body;
    const currentUser = await User.findOne({ username: req.user.username })
    newRecipient = {
        addressTo: currentUser.address,
        recipient_id: currentUser._id,
        completed: false,
        date: new Date(),
        ...newRecipient
    }
    const newRequest = new Recipients(newRecipient);
    await newRequest.save();
    res.json({ message: 'Created successfully' });
});

module.exports = router;