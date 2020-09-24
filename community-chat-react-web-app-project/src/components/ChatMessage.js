import React from "react";
import "firebase/firestore";
import "firebase/auth";
import firebase from "firebase/app";

export default function ChatMessge(props) {
  const { text, uid, photoURL } = props.message;

  const messageClass =
    uid === firebase.auth().currentUser.uid ? "sent" : "received";

  return (
    <>
      <div className={`message ${messageClass}`}>
        <img
          src={
            photoURL ||
            "https://png.pngtree.com/png-vector/20190217/ourlarge/pngtree-vector-chat-icon-png-image_555480.jpg"
          }
          alt="profile_pic"
        />
        <p>{text}</p>
      </div>
    </>
  );
}
