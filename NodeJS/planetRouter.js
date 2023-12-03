const express = require('express');
const router = express.Router();
const Joi = require('joi');

let planets = [
  { id: 1, name: 'Earth' },
  { id: 2, name: 'Mars' },
];


const planetSchema = Joi.object({
  id: Joi.number().required(),
  name: Joi.string().required(),
});

function validatePlanet(req, res, next) {
  const { error } = planetSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  next();
}

router.get('/api/planets', (req, res) => {
  res.json(planets);
});

router.get('/api/planets/:id', (req, res) => {
  const planetId = parseInt(req.params.id);
  const planet = planets.find((p) => p.id === planetId);

  if (!planet) {
    return res.status(404).json({ error: 'Planet not found' });
  }

  res.json(planet);
});

router.post('/api/planets', validatePlanet, (req, res) => {
  const newPlanet = req.body;
  planets.push(newPlanet);
  res.status(201).json({ msg: 'Planet created successfully' });
});

router.put('/api/planets/:id', validatePlanet, (req, res) => {
  const planetId = parseInt(req.params.id);
  const updatedPlanet = req.body;

  const existingPlanet = planets.find((p) => p.id === planetId);

  if (!existingPlanet) {
    return res.status(404).json({ error: 'Planet not found' });
  }


  existingPlanet.name = updatedPlanet.name;

  res.status(200).json({ msg: 'Planet updated successfully' });
});

router.delete('/api/planets/:id', (req, res) => {
  const planetId = parseInt(req.params.id);
  const index = planets.findIndex((p) => p.id === planetId);

  if (index === -1) {
    return res.status(404).json({ error: 'Planet not found' });
  }


  planets.splice(index, 1);

  res.status(200).json({ msg: 'Planet deleted successfully' });
});

module.exports = router;
