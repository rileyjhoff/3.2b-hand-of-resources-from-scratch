const { Router } = require('express');
const VideoGame = require('../models/VideoGame');

module.exports = Router().get('/', async (req, res) => {
  const videoGamesList = await VideoGame.getAll();
  res.json(videoGamesList);
});
