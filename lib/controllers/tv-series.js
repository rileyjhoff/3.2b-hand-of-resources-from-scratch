const { Router } = require('express');
const TVSeries = require('../models/TvSeries');

module.exports = Router()
  .get('/', async (req, res) => {
    const tvSeries = await TVSeries.getAll();
    res.json(tvSeries);
  })
  .get('/:id', async (req, res) => {
    const id = req.params.id;
    const tvSeries = await TVSeries.getById(id);
    res.json(tvSeries);
  });
