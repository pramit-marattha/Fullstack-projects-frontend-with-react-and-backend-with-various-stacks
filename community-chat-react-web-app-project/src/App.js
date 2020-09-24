import React from "react";
import "./styles/App.css";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import ChatRoom from "./components/ChatRoom";
import SignIn from "./components/SignIn";
import SignOut from "./components/SignOut";

firebase.initializeApp({
  // apiKey: "", // Insert Your key Here
  // authDomain: "", // Insert Your authDomain Here
  // databaseURL: "", // Insert Your databaseURL Here
  // projectId: "", // Insert Your projectId Here
  // storageBucket: "", // Insert Your storageBucket Here
  // messagingSenderId: "", // Insert Your messagingSenderId Here
  // appId: "", // Insert Your appId Here
  // measurementId: "", // Insert Your measurementId Here
});

const auth = firebase.auth();
// const [user] = useAuthState(auth);

function App() {
  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <header>
        <h1>
          <span role="img" aria-label="message">
            Community Chat App 💬
          </span>
        </h1>
        <SignOut />
      </header>

      <section>{user ? <ChatRoom /> : <SignIn />}</section>
    </div>
  );
}

export default App;
