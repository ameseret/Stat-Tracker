const express = require("express");
const app = express()
const mongoose = require("mongoose");
const port = process.env.PORT || 3000
const methodOverride = require("method-override");


const Player = require("./models/players.js");

const mongoURI = 'mongodb://127.0.0.1:27017/players';




// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

async function connectToMongo() {
    try {
      await mongoose.connect(mongoURI);
      console.log('The connection with MongoDB is established');
    } catch (error) {
      console.error('Error connecting to MongoDB:', error);
    }
  }
  
  connectToMongo();


//Index
app.get(`/players`, async (req,res) => {
    const allPlayers = await Player.find({})
        res.render(`index.ejs`, {
            players: allPlayers
        })
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
