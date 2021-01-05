const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv").config();
const discordDatabase = require("./models/schema");
const chatRoutes = require("./routes/conversation");
const Pusher = require("pusher");

//application configuration
const app = express();
const port = process.env.PORT || 4000;
const mongoURI = process.env.MONGO_URI;

const pusher = new Pusher({
  appId: process.env.PUSHER_APP_ID,
  key: process.env.PUSHER_APP_KEY,
  secret: process.env.PUSHER_APP_SECRET,
  cluster: "ap2",
  useTLS: true
});

//middlewares configuration
app.use(express.json());
app.use(cors());

//MONGO DB database configuration
mongoose.connect(mongoURI, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.once("open", () => {
  console.log("Cheers!! Database is succefully connected");

  const changeStream = mongoose.connection.collection("conversations").watch();

  changeStream.on("change", (change) => {
    if (change.operationType === "insert") {
      pusher.trigger("channels", "newChannel", {
        change: change,
      });
    } else if (change.operationType === "update") {
      pusher.trigger("conversation", "newMessage", {
        change: change,
      });
    } else {
      console.log("Error triggering Pusher");
    }
  });
});

//API ROUTES
app.use("/", chatRoutes);

//listening port
app.listen(port, () => {
  console.log(`Currently listening on http://localhost:${port}`);
});
