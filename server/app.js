const express = require('express');
const authRouter = require('./routes/auth-router');
const contactRouter = require('./routes/contact-router');
const connectDB = require('./db/connect');
const errorMiddleware = require('./middlewares/error-middleware');
require('dotenv').config();

const PORT = process.env.PORT || 3000;
const URI = process.env.MONGO_URI;

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Hello, world!' });
});

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/form', contactRouter);
app.use(errorMiddleware);

const startServer = async () => {
  try {
    await connectDB(URI);
    await app.listen(PORT, () => {
      console.log('Server started!');
    });
  } catch (error) {
    console.log('Error', error);
  }
};

startServer();
