import React from "react";
import firebase from "firebase/app";

export default function SignOut() {
  return (
    firebase.auth().currentUser && (
      <button className="sign-out" onClick={() => firebase.auth().signOut()}>
        Log Out
      </button>
    )
  );
}
