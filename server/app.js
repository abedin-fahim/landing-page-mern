const express = require('express');
const homeRouter = require('./routes/auth-router');
const connectDB = require('./db/connect');
require('dotenv').config();

const PORT = process.env.PORT || 3000;
const URI = process.env.MONGO_URI;

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Hello, world!' });
});

app.use('/api/v1/auth', homeRouter);

const startServer = async () => {
  try {
    await connectDB(URI);
    app.listen(PORT, () => {
      console.log('Server started!');
    });
  } catch (error) {
    console.log('Error', error);
  }
};

startServer();
