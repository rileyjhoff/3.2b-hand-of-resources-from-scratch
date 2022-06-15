const { Router } = require('express');
const Golfer = require('../models/Golfer');

module.exports = Router().get('/', async (req, res) => {
  const golfers = await Golfer.getAll();
  res.json(golfers);
});
