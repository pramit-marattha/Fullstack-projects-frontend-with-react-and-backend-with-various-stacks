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
  IonRouterLink,
} from "@ionic/react";
import NavHeader from "../components/Header/NavHeader";
import { toast } from "../utils/toast";

import useFormValidation from "../Hooks/useFormValidation";
import validateLogin from "../components/Auth/validateLogin";
import firebase from "../firebase";

const INITIAL_STATE = {
  email: "",
  password: "",
};

const Login = (props) => {
  const {
    handleChange,
    handleSubmit,
    values,
    setValues,
    loading,
  } = useFormValidation(INITIAL_STATE, validateLogin, authenticateUser);

  const [busyloading, setBusyloading] = useState(false);

  async function authenticateUser() {
    setBusyloading(true);
    const { email, password } = values;
    try {
      await firebase.login(email, password);
      toast("Logged in successfully.. cheers!!");
      props.history.push("/");
    } catch (err) {
      console.error("Error Logging in.. Please try again later!", err);
      toast(err.message);
    }
    setBusyloading(false);
  }

  return (
    <IonPage>
      <NavHeader title="Login" />
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

        <IonItem lines="full">
          <IonLabel position="floating">Password</IonLabel>
          <IonInput
            name="password"
            type="password"
            value={values.password}
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
              Login
            </IonButton>
          </IonCol>
        </IonRow>

        <IonRow>
          <IonCol class="ion-text-center ion-padding vertical">
            <IonRouterLink routerLink={`/forgot`}>
              Forgot the password ?{" "}
            </IonRouterLink>
          </IonCol>
        </IonRow>
      </IonContent>
    </IonPage>
  );
};

export default Login;
