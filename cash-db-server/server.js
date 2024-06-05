const express = require('express');
const { PrismaClient } = require('@prisma/client');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = 5000;
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

prisma.$on('query', e => {
  console.log(e);
});

app.get('/all_guests', async (req, res) => {
  try {
    const result = await prisma.guests.findMany();
    res.json(result);
  } catch (error) {
    console.error('Guests: Error retrieving data: ', error);
    res.status(500).send('Guests: Internal Server Error');
  }
});

app.get('/guests', async (req, res) => {
  try {
    const result = await prisma.guests.findFirst();
    res.json(result);
  } catch (error) {
    console.error('Guests: Error retrieving data: ', error);
    res.status(500).send('Guests: Internal Server Error');
  }
});

app.post('/guests', async (req, res) => {
  const { firstName, lastName, email } = req.body;
  try {
    const result = await prisma.guests.create({
      data: {
        firstName,
        lastName,
        email
      }
    });

    res.json(result);
  } catch (error) {
    console.error('Guests: Error creating data: ', error);
    res.status(500).send('Guests: Internal Server Error - ' + error.message);
  }
});

app.get('/get_guest_id', async (req, res) => {
  const { firstName, lastName } = req.query;

  try {
    const results = await prisma.guests.findMany({
      where: {
        firstName: firstName,
        lastName: lastName
      },
      select: {
        id: true,
        email: true
      }
    });

    if (results.length > 0) {
      res.json(results);
    } else {
      res.status(404).send('Guests not found');
    }
  } catch (error) {
    console.error('Get_guest_ids: Error retrieving data: ', error);
    res.status(500).send('Get_guest_ids: Internal Server Error');
  }
});

app.get('/articles', async (req, res) => {
  try {
    const result = await prisma.articles.findMany();
    res.json(result);
  } catch (error) {
    console.error('Articles: Error retrieving data: ', error);
    res.status(500).send('Articles: Internal Server Error');
  }
});

app.post('/articles', async (req, res) => {
  const { article, price } = req.body;
  try {
    const result = await prisma.articles.create({
      data: {
        article,
        price
      }
    });

    res.json(result);
  } catch (error) {
    console.error('Articles: Error creating data: ', error);
    res.status(500).send('Articles: Internal Server Error - ' + error.message);
  }
});

app.get('/purchase', async (req, res) => {
  try {
    const result = await prisma.purchase.findMany();
    res.json(result);
  } catch (error) {
    console.error('Purchase: Error retrieving data: ', error);
    res.status(500).send('Purchase: Internal Server Error');
  }
});

app.post('/purchase', async (req, res) => {
  const { guest_id, time, purchase_id } = req.body;
  try {
    const result = await prisma.purchase.create({
      data: {
        guest_id,
        time,
        purchase_id
      }
    });

    res.json(result);
  } catch (error) {
    console.error('Purchase: Error creating data: ', error);
    res.status(500).send('Purchase: Internal Server Error - ' + error.message);
  }
});

app.get('/getlastpurchaseid', async (req, res) => {
  try {
    const result = await prisma.purchase.findFirst({
      select: {
        purchase_id: true
      },
      orderBy: {
        purchase_id: 'desc'
      }
    });

    res.json(result);
  } catch (error) {
    console.error('GetLastPurchaseId: Error creating data: ', error);
    res.status(500).send('GetLastPurchaseId: Internal Server Error - ' + error.message);
  }
});

app.get('/purchasedetails', async (req, res) => {
  try {
    const result = await prisma.purchaseDetails.findMany();
    res.json(result);
  } catch (error) {
    console.error('Purchase: Error retrieving data: ', error);
    res.status(500).send('Purchase: Internal Server Error');
  }
});

app.post('/purchasedetails', async (req, res) => {
  const { purchase_id, article, amount, price } = req.body;
  try {
    const result = await prisma.purchaseDetails.create({
      data: {
        purchase_id,
        article,
        amount,
        price
      }
    });

    res.json(result);
  } catch (error) {
    console.error('Purchase: Error creating data: ', error);
    res.status(500).send('Purchase: Internal Server Error - ' + error.message);
  }
});

const getBillData = async (guestId) => {
  console.log('Server: getBillData(): ' + guestId);
  return { bill: 532, currency: 'sek' };
}

app.get('/getbilldata', async (req, res) => {

  try {
    const guestId = parseInt(req.query.guestId, 10);
    console.log('Server: /getBillData: ' + guestId);

    if (isNaN(guestId)) {
      res.status(400).send('Invalid guest ID');
    }

    const data = await getBillData(guestId);
    console.log("Waiting is over");
    return res.status(200).json(data);
  } catch (error) {
    console.error('Error retrieving bill data: ', error);
    res.status(500).send('Internal Server Error - ' + error.message);
  }
});


app.listen(port, '0.0.0.0', () => {
  console.log(`Server is running on http://0.0.0.0:${port}`);
});
