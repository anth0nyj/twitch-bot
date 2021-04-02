// Dependencies
const express = require('express');
const connectDB = require('./config/db');

// Instantiate app
const app = express();

// Connect database
connectDB();

// Initialize middleware
app.use(express.json({ extended: false }));

// Route definition
app.use('/api/pronouns', require('./routes/pronouns'));

// Test route
app.get('/', (req, res) => res.send('TFB API online'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`TFB API listening on Port ${PORT}`));
