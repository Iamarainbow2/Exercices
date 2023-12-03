import { Request, Response } from 'express';


let planets = [
  { id: 1, name: 'Earth' },
  { id: 2, name: 'Mars' },
];

interface Planet {
  id: number;
  name: string;
}

export const getAll = (req: Request, res: Response) => {
  res.json(planets);
};

export const getOneById = (req: Request, res: Response) => {
  const planetId = parseInt(req.params.id);
  const planet = planets.find((p) => p.id === planetId);

  if (!planet) {
    return res.status(404).json({ error: 'Planet not found' });
  }

  res.json(planet);
};

export const create = (req: Request, res: Response) => {
  const newPlanet: Planet = { ...req.body, id: planets.length + 1 };
  planets.push(newPlanet);
  res.status(201).json({ msg: 'Planet created successfully' });
};

export const updateById = (req: Request, res: Response) => {
  const planetId = parseInt(req.params.id);
  const updatedPlanet = req.body;

  const existingPlanet = planets.find((p) => p.id === planetId);

  if (!existingPlanet) {
    return res.status(404).json({ error: 'Planet not found' });
  }

 
  existingPlanet.name = updatedPlanet.name;

  res.status(200).json({ msg: 'Planet updated successfully' });
};

export const deleteById = (req: Request, res: Response) => {
  const planetId = parseInt(req.params.id);
  const index = planets.findIndex((p) => p.id === planetId);

  if (index === -1) {
    return res.status(404).json({ error: 'Planet not found' });
  }

  
  planets.splice(index, 1);

  res.status(200).json({ msg: 'Planet deleted successfully' });
};
