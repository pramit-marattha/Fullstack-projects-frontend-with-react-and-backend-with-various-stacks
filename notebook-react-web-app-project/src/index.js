import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const firebase = require("firebase");
require("firebase/firestore");

firebase.initializeApp({
  //Insert your own API key
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: "",
});

ReactDOM.render(<App />, document.getElementById("root"));
