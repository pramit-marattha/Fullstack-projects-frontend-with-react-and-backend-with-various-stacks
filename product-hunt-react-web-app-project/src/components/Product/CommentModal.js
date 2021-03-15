import React, { useState } from "react";
import {
  IonModal,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonButton,
  IonContent,
  IonTextarea,
} from "@ionic/react";

const CommentModal = ({ isOpen, title, sendAction, closeAction, comment }) => {
  const [commentText, setCommentText] = useState(comment ? comment.text : "");

  function handleSendAction(item) {
    sendAction(item);
    setCommentText("");
  }

  return (
    <IonModal isOpen={isOpen} onDidDismiss={closeAction}>
      <IonHeader translucent>
        <IonToolbar color="primary">
          <IonTitle>{title}</IonTitle>
          <IonButtons slot="start">
            <IonButton onClick={closeAction}>
              <span role="img" aria-label="cross">
                ❌
              </span>{" "}
              Close
            </IonButton>
          </IonButtons>
          <IonButtons slot="end">
            <IonButton onClick={() => handleSendAction(commentText)}>
              Post{" "}
              <span role="img" aria-label="postbox">
                📮
              </span>
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonTextarea
          rows={25}
          cols={25}
          placeholder="What dou you think about this product?"
          value={commentText}
          onIonChange={(e) => setCommentText(e.target.value)}
        />
      </IonContent>
    </IonModal>
  );
};

export default CommentModal;
