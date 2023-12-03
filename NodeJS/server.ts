const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const path = require('path');
const pgp = require('pg-promise')();
const app = express();
const PORT = process.env.PORT || 3000;

const dbConfig = 'postgres://bhlusude:uF7SeAjj1JG4H_pTG1CxuBShYAx5VBGS@berry.db.elephantsql.com/bhlusude';
const db = pgp(dbConfig);


app.use(bodyParser.json());


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const extension = path.extname(file.originalname);
    cb(null, file.fieldname + '-' + uniqueSuffix + extension);
  },
});

const upload = multer({ storage: storage });



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


app.post('/planets/:id/image', upload.single('image'), async (req, res) => {
  const { id } = req.params;
  const imagePath = req.file.path;

  try {
    await db.none('UPDATE planets SET image=$2 WHERE id=$1', [id, imagePath]);
    res.status(200).json({ msg: 'Planet image updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});




app.listen(PORT, () => {
  console.log(`Server is running in port ${PORT}`);
});