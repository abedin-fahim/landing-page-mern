const express = require('express');
const homeRouter = require('./routes/auth-router');

const app = express();

require('dotenv').config();

app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Hello, world!' });
});

app.use('/api/v1/auth', homeRouter);

app.listen(process.env.PORT, () => {
  console.log('Server started!');
});
