const express = require('express');
const router = express.Router();
const Player = require('../models/players');

// Index 
router.get('/', async (req, res) => {
    try {
        const players = await Player.find({});
        res.render('index.ejs', { players: players });
    } catch (err) {
        console.error(err);
        res.send('Error retrieving players');
    }
});

// New 
router.get('/new', (req, res) => {
    res.render('new.ejs');
  });
  
  // Create 
  router.post('/', async (req, res) => {
    try {
      await Player.create(req.body); 
      res.redirect('/players'); 
    } catch (err) {
      console.error(err);
      res.send('Error creating player');
    }
  });

module.exports = router;
