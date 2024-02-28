const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/Auth');
const { dbConnect } = require('./database');
require('dotenv').config();
const cors = require('cors');
const app = express();
app.use(cors());

// Connect to MongoDB
dbConnect();

// Use body-parser middleware to parse incoming JSON requests
app.use(bodyParser.json());

// Use the auth routes
app.use('/api/auth', authRoutes);

// Your other middleware and routes go here...

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
