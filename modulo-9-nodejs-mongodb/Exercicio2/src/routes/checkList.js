const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  console.log('olá');
  res.send();
})

router.post('/', (req, res) => {
  console.log(req.body);
  res.status(200).json(req.body)
})

router.get('/:id', (req, res) => {
  console.log(req.params.id);
  res.send(`id: ${req.params.id}`)
})

router.put('/:id', (req, res) => {
  console.log(req.body);
  res.send(` PUT id: ${req.params.id}`)
})

router.delete('/:id', (req, res) => {
  console.log(req.body);
  res.send(`DELETE id: ${req.params.id}`)
})

module.exports = router;