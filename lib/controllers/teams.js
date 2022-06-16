const { Router } = require('express');
const Team = require('../models/Team');

module.exports = Router().get('/', async (req, res) => {
  const teams = await Team.getAll();
  res.json(teams);
});
