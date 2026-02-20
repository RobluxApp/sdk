const express = require('express');
const router = express.Router();
const collectibles = require('../data/collectibles.json');

// GET all collectibles
router.get('/', (req, res) => {
  res.json(collectibles);
});

// GET collectible by id
router.get('/:id', (req, res) => {
  const collectible = collectibles.find(c => c.id === parseInt(req.params.id));
  if (!collectible) return res.status(404).json({ message: 'Not found' });
  res.json(collectible);
});

// POST new collectible
router.post('/', (req, res) => {
  const newCollectible = {
    id: collectibles.length + 1,
    name: req.body.name,
    owner: req.body.owner
  };
  collectibles.push(newCollectible);
  res.status(201).json(newCollectible);
});

module.exports = router;
