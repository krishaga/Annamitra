const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const { Profile } = require('../models/user');
const upload = require('../middlewares/dpUpload')

// Route for uploading profile pictures
router.post('/upload-profile-picture', upload.single('file'), async (req, res) => {
    try {
        // Save file path in MongoDB
        const profile = await Profile.findOneAndUpdate(
            { username: 'user1' }, // Assuming you have a way to identify the user
            { profilePicture: req.file.path }, // Save file path
            { new: true, upsert: true }
        );
        console.log('Profile picture uploaded:', profile.profilePicture);
        res.json({ success: true });
    } catch (error) {
        console.error('Error uploading profile picture:', error);
        res.status(500).json({ success: false, message: 'Failed to upload profile picture' });
    }
});

module.exports = router;
