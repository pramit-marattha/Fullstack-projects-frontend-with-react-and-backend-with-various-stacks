const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const database = require('./database')
const noteRouter = require('./routes/note-routes')

require('dotenv').config();


const app = express();
const port = process.env.PORT || 4000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

database.on('error', console.error.bind(console, 'MongoDB failed to connect'))


app.use('/', noteRouter)

app.listen(port, () => console.log(`Currently server is running at http://localhost:${port}`))