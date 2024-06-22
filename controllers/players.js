const express = require('express');
const router = express.Router();
const Player = require('../models/players');
const mockPlayerStats = require('../mockData/mockStats');

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
      res.status(500).send(err);
    }
  });

// Show
router.get('/:id', async (req, res) => {
    try {
        const player = await Player.findById(req.params.id);
        res.render('show.ejs', { 
            player: player 
        });
    } catch (err) {
        console.error(err);
        res.send('Error retrieving player');
    }
});

// Edit
router.get('/:id/edit', async (req, res) => {
    try {
        const player = await Player.findById(req.params.id);
        res.render('edit.ejs', { player: player });
    } catch (err) {
        console.error(err);
        res.send('Error retrieving player for editing');
    }
});

// Update
router.put('/:id', async (req, res) => {
    try {
        await Player.findByIdAndUpdate(req.params.id, req.body);
        res.redirect(`/players/${req.params.id}`);
    } catch (err) {
        console.error(err);
        res.send('Error updating player');
    }
});

// Delete
router.delete('/:id', async (req, res) => {
    try {
        await Player.findByIdAndDelete(req.params.id);
        res.redirect('/players');
    } catch (err) {
        console.error(err);
        res.send('Error deleting player');
    }
});

module.exports = router;
