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
    console.error('Guests: Error retrieving data: ', error);
    res.status(500).send('Guests: Internal Server Error');
  }
});

app.get('/articles', async (req, res) => {
  try {
    const articles = await prisma.articles.findMany();
    res.json(articles);
  } catch (error) {
    console.error('Articles: Error retrieving data: ', error);
    res.status(500).send('Articles: Internal Server Error');
  }
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Server is running on http://0.0.0.0:${port}`);
});
