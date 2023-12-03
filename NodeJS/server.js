const express = require('express');
require('express-async-errors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const planetRouter = require('./planetRouter'); 

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.json());


app.use(morgan('dev'));


app.use(planetRouter);


app.use((req, res) => {
  res.status(404).json({ error: 'Not Found' });
});


process.on('unhandledRejection', (err) => {
  console.error('Unhandled Rejection:', err);
  process.exit(1);
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


