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
  })
  .post('/', async (req, res, next) => {
    try {
      const golfer = await Golfer.insert(req.body);
      res.json(golfer);
    } catch (e) {
      next(e);
    }
  })
  .put('/:id', async (req, res, next) => {
    try {
      const id = req.params.id;
      const golfer = await Golfer.updateById(id, req.body);
      res.json(golfer);
    } catch (e) {
      next(e);
    }
  });
