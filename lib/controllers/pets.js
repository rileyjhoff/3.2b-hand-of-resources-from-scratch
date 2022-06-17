const { Router } = require('express');
const Pet = require('../models/Pet');

module.exports = Router()
  .get('/', async (req, res) => {
    const pets = await Pet.getAll();
    res.json(pets);
  })
  .get('/:id', async (req, res) => {
    const id = req.params.id;
    const pet = await Pet.getById(id);
    res.json(pet);
  });
