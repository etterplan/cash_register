const express = require('express');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();
const app = express();

app.use(express.json());

// Add a new guest
app.post('/guests', async (req, res) => {
  const { firstName, lastName, email } = req.body;
  if (!firstName || !lastName || !email) {
    return res.status(400).send('All fields must be filled.');
  }
  try {
    const newGuest = await prisma.guest.create({
      data: {
        firstName,
        lastName,
        email
      },
    });
    res.status(201).json(newGuest);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all guests
app.get('/guests', async (req, res) => {
  try {
    const guests = await prisma.guest.findMany();
    res.json(guests);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
