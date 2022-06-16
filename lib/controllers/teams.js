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
  });
