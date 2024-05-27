const express = require('express');
const { PrismaClient } = require('@prisma/client');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = 5000;
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());


app.get('/guests', async (req, res) => {
  try {
    const guests = await prisma.guest.findMany();
    res.json(guests);
  } catch (error) {
    console.error('Error retrieving data: ', error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Server is running on http://0.0.0.0:${port}`);
});






// const express = require('express');
// const readTableData = require('./readTableData');

// const app = express();
// const port = 5000;

// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     next();
// });

// app.get('/', async (req, res) => {
//     try {
//         const data = await readTableData();
//         res.json(data);
//     } catch (err) {
//         console.error(err);
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
// });

// app.listen(port, () => {
//     console.log(`Server running at http://localhost:${port}`);
// });
