const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const goalRoutes = require("./routes/api")

require("dotenv").config();

const app = express();

app.use(cors());

app.use(bodyParser.json());

const PORT = process.env.PORT || 6969;

app.listen(PORT,()=>{
    console.log(`Currently listening at http://localhost:${PORT}`)
});


mongoose.connect(process.env.MONGODB,{ useNewUrlParser: true, useUnifiedTopology: true }).then(()=>{
    console.log("MongoDB successfully connected")
}).catch((err)=>{
    console.log(err)
});

mongoose.Promise = global.Promise;


app.use('/api', goalRoutes);

app.use((err, req, res, next) => {
  console.log(err);
  next();
});



