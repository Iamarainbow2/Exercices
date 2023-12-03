require('dotenv').config();
const express = require('express');
const asyncErrors = require('express-async-errors');
const morgan = require('morgan');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use(morgan('dev'));


let planets = [
  { id: 1, name: 'Earth' },
  { id: 2, name: 'Mars' },
];


app.get('/planets', (req, res) => {
  res.json(planets);
});


app.use((req, res, next) => {
  res.status(404).json({ error: 'Not Found' });
});


process.on('unhandledRejection', (err) => {
  console.error('Unhandled Rejection:', err);
  process.exit(1);
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


