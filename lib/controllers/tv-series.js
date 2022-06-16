const { Router } = require('express');
const TVSeries = require('../models/TvSeries');

module.exports = Router().get('/', async (req, res) => {
  const tvSeries = await TVSeries.getAll();
  res.json(tvSeries);
});
