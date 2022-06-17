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
  })
  .post('/', async (req, res, next) => {
    try {
      const pet = await Pet.insert(req.body);
      res.json(pet);
    } catch (e) {
      next(e);
    }
  })
  .put('/:id', async (req, res, next) => {
    try {
      const id = req.params.id;
      const pet = await Pet.updateById(id, req.body);
      res.json(pet);
    } catch (e) {
      next(e);
    }
  });
