import React, { useState, useRef } from "react";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
import ChatMessage from "./ChatMessage";

export default function ChatRoom() {
  const auth = firebase.auth();
  const firestore = firebase.firestore();
  const dummy = useRef();
  const messagesRef = firestore.collection("chatmessage");
  const query = messagesRef.orderBy("createdAt").limit(25);

  const [chatmessage] = useCollectionData(query, { idField: "id" });

  const [formValue, setFormValue] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();

    const { uid, photoURL } = auth.currentUser;

    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL,
    });

    setFormValue("");
    dummy.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <main>
        {chatmessage &&
          chatmessage.map((msg) => <ChatMessage key={msg.id} message={msg} />)}

        <span ref={dummy}></span>
      </main>

      <form onSubmit={sendMessage}>
        <input
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
          placeholder="let's Chat"
        />

        <button type="submit" disabled={!formValue}>
          <span role="img" aria-label="message">
            💌{" "}
          </span>
          Send
        </button>
      </form>
    </>
  );
}
