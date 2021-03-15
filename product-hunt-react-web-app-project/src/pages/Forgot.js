import React, { useState } from "react";
import {
  IonPage,
  IonContent,
  IonItem,
  IonLabel,
  IonInput,
  IonRow,
  IonCol,
  IonButton,
} from "@ionic/react";
import NavHeader from "../components/Header/NavHeader";

import { toast } from "../utils/toast";
import useFormValidation from "../Hooks/useFormValidation";
import validatePassword from "../components/Auth/validatePassword";
import firebase from "../firebase";

const INITIAL_STATE = {
  email: "",
};

const Forgot = (props) => {
  const {
    handleChange,
    handleSubmit,
    values,
    setValues,
    loading,
  } = useFormValidation(INITIAL_STATE, validatePassword, handleResetPassword);

  const [busyloading, setBusyloading] = useState(false);

  async function handleResetPassword() {
    setBusyloading(true);
    const { email } = values;
    try {
      await firebase.resetPassword(email);
      toast("password reset link sent to your email");
      props.history.push("/login");
    } catch (err) {
      console.error(
        "Error while reseting password.. Please try again later!",
        err
      );
      toast(err.message);
    }
    setBusyloading(false);
  }
  return (
    <IonPage>
      <NavHeader title="Forgot Password" />
      <IonContent>
        <IonItem lines="full">
          <IonLabel position="floating">Email</IonLabel>
          <IonInput
            name="email"
            type="text"
            value={values.email}
            onIonChange={handleChange}
            required
          />
        </IonItem>

        <IonRow>
          <IonCol>
            <IonButton
              type="submit"
              color="primary"
              expand="block"
              onClick={handleSubmit}
              disabled={loading}
            >
              Email my password
            </IonButton>
          </IonCol>
        </IonRow>
      </IonContent>
    </IonPage>
  );
};

export default Forgot;
