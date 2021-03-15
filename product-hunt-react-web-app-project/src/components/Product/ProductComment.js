import React, { useState, useContext } from "react";
import {
  IonCard,
  IonCardContent,
  IonList,
  IonItem,
  IonLabel,
  IonButton,
} from "@ionic/react";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import UserContext from "../../contexts/UserContexts";
import CommentModal from "./CommentModal";
import firebase from "../../firebase";

const ProductComment = ({ comment, product, setProduct }) => {
  const { user } = useContext(UserContext);
  const [showModal, setShowModal] = useState(false);

  const postedByAuthUser = user && user.uid === comment.postedBy.id;

  function handleCloseModal() {
    setShowModal(false);
  }

  function handleEditComment(commentText) {
    const productRef = firebase.db.collection("products").doc(product.id);
    productRef.get().then((doc) => {
      if (doc.exists) {
        const previousComments = doc.data().comments;
        const newComment = {
          postedBy: { id: user.uid, name: user.displayName },
          created: Date.now(),
          text: commentText,
        };
        const updatedComments = previousComments.map((item) =>
          item.created === comment.created ? newComment : item
        );
        productRef.update({ comments: updatedComments });
        setProduct((prevState) => ({
          ...prevState,
          comments: updatedComments,
        }));
      }
    });
    setShowModal(false);
  }

  function handleDeleteComment() {
    const productRef = firebase.db.collection("products").doc(product.id);
    productRef.get().then((doc) => {
      if (doc.exists) {
        const previousComments = doc.data().comments;
        const updatedComments = previousComments.filter(
          (item) => item.created !== comment.created
        );
        productRef.update({ comments: updatedComments });
        setProduct((prevState) => ({
          ...prevState,
          comments: updatedComments,
        }));
      }
    });
  }

  return (
    <>
      <CommentModal
        isOpen={showModal}
        title="Edit Comment"
        sendAction={handleEditComment}
        closeAction={handleCloseModal}
        comment={comment}
      />
      <IonCard>
        <IonCardContent>
          <IonList lines="none">
            <IonItem>
              <IonLabel class="ion-text-wrap ">
                <p
                  style={{
                    alignItems: "center",
                    fontSize: "0.8rem",
                    fontWeight: "normal",
                  }}
                >
                  {comment.postedBy.name} {" 🕑 "}
                  {formatDistanceToNow(comment.created)}
                </p>
                <div className="ion-padding-vertical">{comment.text}</div>
                {postedByAuthUser && (
                  <IonButton size="small" onClick={() => setShowModal(true)}>
                    <span role="img" aria-label="pen">
                      🖊️
                    </span>{" "}
                    Edit
                  </IonButton>
                )}
                {postedByAuthUser && (
                  <IonButton
                    size="small"
                    onClick={() => handleDeleteComment(comment)}
                  >
                    <span role="img" aria-label="bin">
                      🗑️
                    </span>{" "}
                    Delete
                  </IonButton>
                )}
              </IonLabel>
            </IonItem>
          </IonList>
        </IonCardContent>
      </IonCard>
    </>
  );
};

export default ProductComment;
