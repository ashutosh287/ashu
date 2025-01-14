const mongoose = require("mongoose");
const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const port = 8085;
const app = express();
app.use(express.json());

// Ensure .env file contains the correct MongoDB URL
console.log(process.env.url);  // Check if the URL is loaded correctly

mongoose.connect(process.env.url)
    .then(() => { console.log('MongoDB connected'); })
    .catch((error) => { console.error('MongoDB connection error:', error); });

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
