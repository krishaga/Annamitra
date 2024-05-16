const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../uploads/profile-pictures')); // Use path.join to ensure platform-independent file paths
    },
    filename: function (req, file, cb) {
        // Use a unique filename, such as a timestamp or random string, to avoid naming conflicts
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, 'profile-picture-' + uniqueSuffix + file.originalname + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

module.exports = upload;