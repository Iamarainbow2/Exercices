
const express = require('express');
const bodyParser = require('body-parser');
const pgp = require('pg-promise')();
const app = express();
const PORT = process.env.PORT || 3000;

const dbConfig = 'postgres://bhlusude:uF7SeAjj1JG4H_pTG1CxuBShYAx5VBGS@berry.db.elephantsql.com/bhlusude';


const db = pgp(dbConfig);

app.use(bodyParser.json());


app.get('/planets', async (req, res) => {
  try {
    const planets = await db.any('SELECT * FROM planets');
    res.json(planets);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


app.get('/planets/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const planet = await db.one('SELECT * FROM planets WHERE id=$1', [id]);
    res.json(planet);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/planets', async (req, res) => {
  const { name } = req.body;
  try {
    await db.none('INSERT INTO planets (name) VALUES ($1)', [name]);
    res.status(201).json({ msg: 'Planet created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


app.put('/planets/:id', async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  try {
    await db.none('UPDATE planets SET name=$2 WHERE id=$1', [id, name]);
    res.json({ msg: 'Planet updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


app.delete('/planets/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await db.none('DELETE FROM planets WHERE id=$1', [id]);
    res.json({ msg: 'Planet deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
