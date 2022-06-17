const { Router } = require('express');
const Pet = require('../models/Pet');

module.exports = Router().get('/', async (req, res) => {
  const pets = await Pet.getAll();
  res.json(pets);
});
