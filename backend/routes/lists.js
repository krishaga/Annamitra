const express = require('express');
const { Donations } = require('../models/donations');
const { Recipients } = require('../models/recipients');
const { authenticateJwt } = require('../middlewares/authentication')
const router = express.Router();

router.get('/donations-list', authenticateJwt, async (req, res) => {
    // logic to list all donations
    const recipientRequests = await Recipients.find({ status: "Not Completed" });
    res.json({ recipientRequests });
});

router.get('/recipients-list', authenticateJwt, async (req, res) => {
    // logic to list all donations
    const donationRequests = await Donations.find({ status: "Not Completed" });
    res.json({ donationRequests });
});

module.exports = router;
