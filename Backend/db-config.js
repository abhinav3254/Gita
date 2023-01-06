// In this file we have constructed the database and establish the connection

// Database name is gita
const mongoose = require('mongoose');
const url = 'mongodb://127.0.0.1/gita';
mongoose.connect(url);