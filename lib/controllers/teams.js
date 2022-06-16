const { Router } = require('express');
const Team = require('../models/Team');

module.exports = Router()
  .get('/', async (req, res) => {
    const teams = await Team.getAll();
    res.json(teams);
  })
  .get('/:id', async (req, res) => {
    const id = req.params.id;
    const teams = await Team.getById(id);
    res.json(teams);
  })
  .post('/', async (req, res, next) => {
    try {
      const team = await Team.insert(req.body);
      res.json(team);
    } catch (e) {
      next(e);
    }
  })
  .put('/:id', async (req, res, next) => {
    try {
      const id = req.params.id;
      const team = await Team.updateById(id, req.body);
      res.json(team);
    } catch (e) {
      next(e);
    }
  });
