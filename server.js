const express = require("express");
const app = express()
const mongoose = require("mongoose");
const port = process.env.PORT || 3000
const methodOverride = require("method-override");
const playersController = require("./controllers/players.js");

const Player = require("./models/players.js");

const mongoURI = 'mongodb://127.0.0.1:27017/players';




// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use('/players', playersController)

async function connectToMongo() {
    try {
      await mongoose.connect(mongoURI);
      console.log('The connection with MongoDB is established');
    } catch (error) {
      console.error('Error connecting to MongoDB:', error);
    }
  }
  
  connectToMongo();



app.listen(port, () => {
    console.log('listenening on port', port)
})
