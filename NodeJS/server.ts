import express from 'express';
import 'express-async-errors';
import morgan from 'morgan';
import dotenv from 'dotenv';
import { getAll, getOneById, create, updateById, deleteById } from './controllers/planets.ts';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.json());


app.use(morgan('dev'));


app.get('/api/planets', getAll);
app.get('/api/planets/:id', getOneById);
app.post('/api/planets', create);
app.put('/api/planets/:id', updateById);
app.delete('/api/planets/:id', deleteById);


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


