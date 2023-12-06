const express = require('express');
const homeRouter = require('./routes/home');

const app = express();

require('dotenv').config();

app.use(express.json());

// app.get('/', (req, res) => {
//   res.status(200).json({ message: 'Working' });
// });

app.use ('/', homeRouter);

app.listen(process.env.PORT, () => {
  console.log('Server started!');
});
