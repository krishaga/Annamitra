const express = require('express');
const router = express.Router();
const { User } = require('../models/user');
const upload = require('../middlewares/dpUpload');
const authenticateJwt = require('../middlewares/authentication');

// Route for uploading profile pictures
router.post('/upload-profile-picture', authenticateJwt, upload.single('file'), async (req, res) => {
    try {
        const profile = await User.findOneAndUpdate(
            { username: req.user.username },
            { profilePicture: `/uploads/profile-pictures/${req.file.filename}` }, // Save relative file path
            { new: true, upsert: true }
        );
        console.log('Profile picture uploaded:', profile.profilePicture);
        res.json({ success: true, profilePicture: profile.profilePicture });
    } catch (error) {
        console.error('Error uploading profile picture:', error);
        res.status(500).json({ success: false, message: 'Failed to upload profile picture' });
    }
});

module.exports = router;
