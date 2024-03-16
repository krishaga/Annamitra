const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/Auth');
const listRoutes = require('./routes/lists');
const formRoutes = require('./routes/forms');
const matchRoutes = require('./routes/match');
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
app.use('/api/lists', listRoutes);
app.use('/api/forms', formRoutes);
app.use('/api/match', matchRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
