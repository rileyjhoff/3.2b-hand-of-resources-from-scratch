const { Router } = require('express');
const VideoGame = require('../models/VideoGame');

module.exports = Router()
  .get('/', async (req, res) => {
    const videoGames = await VideoGame.getAll();
    res.json(videoGames);
  })
  .get('/:id', async (req, res) => {
    const id = req.params.id;
    const videoGame = await VideoGame.getById(id);
    res.json(videoGame);
  });
