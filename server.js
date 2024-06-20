const express = require("express");
const app = express()
const mongoose = require("mongoose");
const port = process.env.PORT || 3000
const methodOverride = require("method-override");


const Player = require("./models/players.js");






// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));


//Index
app.get('/players', async (req, res) => {
    try {
        const players = await Player.find({}); 
        res.render('index.ejs', { players: players }); 
    } catch (err) {
        console.error(err);
        res.send('Error retrieving players');
    }
});

// New


// Create


// Show


// Edit


// Update


// Delete

app.listen(port, () => {
    console.log('listenening on port', port)
})
