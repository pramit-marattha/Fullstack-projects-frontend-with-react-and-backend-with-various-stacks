import React from "react";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

export default function SignIn() {
  const googleSignInOption = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
  };

  return (
    <>
      <button className="sign-in" onClick={googleSignInOption}>
        Sign in
      </button>
      <div className="main-start-font">Welcome! To the Community Chat App.</div>
    </>
  );
}
