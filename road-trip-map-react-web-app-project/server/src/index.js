const express = require('express');
// NOTE morgan is a logger
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const middlewares = require('./middlewares');
const logs = require('./api/logs');
const app = express();

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  newUnifiedTopology: true,
});

app.use(morgan('common'));
app.use(helmet());
app.use(cors({
  origin: process.env.CORS_ORIGIN,
}));

app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    message: 'Hello There',
  });
});

app.use('/api/logs', logs);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Currently Listening at http://localhost:${port}`);
});
