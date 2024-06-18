const express = require("express");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const app = express()
const port = 3000

//Database

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));


//Index
app.get('/players/', (req, res) => {
    res.send("hello world")
})

// New


// Create


// Show


// Edit


// Update


// Delete

app.listen(port, () => {
    console.log('listenening on port', port)
})
