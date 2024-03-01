const express = require('express');
const { Recipients } = require('../models/recipients');
const { Donations } = require('../models/donations');
const { authenticateJwt } = require('../middlewares/authentication')

const router = express.Router();

router.post('/courses', authenticateJwt, async (req, res) => {
    // logic to create a course
    const newCourse = new Donations(req.body);
    await newCourse.save();
    res.json({ message: 'Course created successfully', courseId: newCourse._id });
});

module.exports = router;