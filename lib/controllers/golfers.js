const { Router } = require('express');
const Golfer = require('../models/Golfer');

module.exports = Router()
  .get('/', async (req, res) => {
    const golfers = await Golfer.getAll();
    res.json(golfers);
  })
  .get('/:id', async (req, res) => {
    const id = req.params.id;
    const golfer = await Golfer.getById(id);
    res.json(golfer);
  });
