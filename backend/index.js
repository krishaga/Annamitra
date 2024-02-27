const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/Auth');
const cors = require('cors')
const app = express();
app.use(cors())

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/Annamitradb', { useNewUrlParser: true, useUnifiedTopology: true });

// Use body-parser middleware to parse incoming JSON requests
app.use(bodyParser.json());

// Use the auth routes
app.use('/api/auth', authRoutes);

// Your other middleware and routes go here...

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
