import React, { useState, useContext } from "react";
import useFormValidation from "../Hooks/useFormValidation";
import validateCreateProduct from "../components/Product/validateCreateProduct";
import firebase from "../firebase";
import UserContext from "../contexts/UserContexts";
import {
  IonPage,
  IonContent,
  IonItem,
  IonInput,
  IonRow,
  IonLabel,
  IonCol,
  IonButton,
} from "@ionic/react";
import SmallHeader from "../components/Header/SmallHeader";
import LargeHeader from "../components/Header/LargeHeader";
import { toast } from "../utils/toast";
import Upload from "../components/Form/Upload";

const INITIAL_STATE = {
  title: "",
  description: "",
  url: "",
};

const Submit = ({ history }) => {
  const { user } = useContext(UserContext);
  const [submitting, setSubmitting] = useState(false);
  const [thumbnail, setThumbnail] = useState([]);
  const [photos, setPhotos] = useState([]);
  const { handleSubmit, handleChange, values } = useFormValidation(
    INITIAL_STATE,
    validateCreateProduct,
    handleCreate
  );

  async function handleCreate() {
    try {
      if (!user) {
        history.push("/login");
        return;
      }
      setSubmitting(true);
      const { url, description, title } = values;
      const id = firebase.db.collection("products").doc().id;

      await Promise.all([
        ...thumbnail.map((f, index) =>
          firebase.storage
            .ref()
            .child(`products/${id}_thumbnail_${index}.jpg`)
            .put(f)
        ),
        ...photos.map((f, index) =>
          firebase.storage
            .ref()
            .child(`products/${id}_photos_${index}.jpg`)
            .put(f)
        ),
      ]);

      const productPhotos = await Promise.all(
        photos.map((f, index) =>
          firebase.storage
            .ref()
            .child(`products/${id}_photos_${index}.jpg`)
            .getDownloadURL()
        )
      );

      const productThumbnails = await Promise.all(
        thumbnail.map((f, index) =>
          firebase.storage
            .ref()
            .child(`products/${id}_thumbnail_${index}.jpg`)
            .getDownloadURL()
        )
      );

      const newProduct = {
        title,
        url,
        description,
        postedBy: {
          id: user.uid,
          name: user.displayName,
        },
        thumbnail: productThumbnails[0] || null,
        photos: productPhotos,
        voteCount: 1,
        comments: [],
        votes: [
          {
            votedBy: { id: user.uid, name: user.displayName },
          },
        ],
        created: Date.now(),
      };
      setThumbnail([]);
      setPhotos([]);
      await firebase.db.collection("products").doc(id).set(newProduct);
      history.push("/");
    } catch (e) {
      console.error(e);
      toast(e.message);
      setSubmitting(false);
    }
  }

  return (
    <>
      <IonPage>
        <SmallHeader title="Submit Your Product" />
        <IonContent fullscreen>
          <LargeHeader title="Submit" />
          <IonItem lines="full">
            <IonLabel position="floating">Title</IonLabel>
            <IonInput
              name="title"
              value={values.title}
              type="text"
              onIonChange={handleChange}
              required
            ></IonInput>
          </IonItem>

          <IonItem lines="full">
            <IonLabel position="floating">Description</IonLabel>
            <IonInput
              name="description"
              value={values.description}
              type="text"
              onIonChange={handleChange}
              required
            ></IonInput>
          </IonItem>

          <IonItem lines="full">
            <IonLabel position="floating">URL</IonLabel>
            <IonInput
              name="url"
              value={values.url}
              type="url"
              onIonChange={handleChange}
              required
            ></IonInput>
          </IonItem>

          <IonRow>
            <IonCol style={{ textAlign: "center" }}>
              <Upload
                files={thumbnail}
                onChange={setThumbnail}
                placeholder="Choose thumbnail‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎         ‎‏‏‎👀‎‏‏‎‎‏‏‎‎"
              />
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol style={{ textAlign: "center" }}>
              <Upload
                files={photos}
                onChange={setPhotos}
                placeholder="Upload product photo📤"
                multiple
              />
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol>
              <IonButton
                type="submit"
                color="success"
                expand="block"
                fill="solid"
                disabled={submitting}
                onClick={handleSubmit}
              >
                Submit
              </IonButton>
            </IonCol>
          </IonRow>
        </IonContent>
      </IonPage>
    </>
  );
};

export default Submit;
