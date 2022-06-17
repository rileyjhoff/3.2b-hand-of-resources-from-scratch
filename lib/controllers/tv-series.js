const { Router } = require('express');
const TVSeries = require('../models/TVSeries');

module.exports = Router()
  .get('/', async (req, res) => {
    const tvSeriesList = await TVSeries.getAll();
    res.json(tvSeriesList);
  })
  .get('/:id', async (req, res) => {
    const id = req.params.id;
    const tvSeries = await TVSeries.getById(id);
    res.json(tvSeries);
  })
  .post('/', async (req, res, next) => {
    try {
      const tvSeries = await TVSeries.insert(req.body);
      res.json(tvSeries);
    } catch (e) {
      next(e);
    }
  })
  .put('/:id', async (req, res, next) => {
    try {
      const id = req.params.id;
      const tvSeries = await TVSeries.updateById(id, req.body);
      res.json(tvSeries);
    } catch (e) {
      next(e);
    }
  })
  .delete('/:id', async (req, res, next) => {
    try {
      const id = req.params.id;
      const tvSeries = await TVSeries.deleteById(id);
      res.json(tvSeries);
    } catch (e) {
      next(e);
    }
  });
