const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/Auth');
const listRoutes = require('./routes/lists');
const formRoutes = require('./routes/forms');
const matchRoutes = require('./routes/match');
const profileRoutes = require('./routes/profile')
const { dbConnect } = require('./database');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded bodies

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Connect to MongoDB
dbConnect();

// Use the auth routes
app.use('/api/auth', authRoutes);
app.use('/api/lists', listRoutes);
app.use('/api/forms', formRoutes);
app.use('/api/match', matchRoutes);
app.use('/api/profile', profileRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
