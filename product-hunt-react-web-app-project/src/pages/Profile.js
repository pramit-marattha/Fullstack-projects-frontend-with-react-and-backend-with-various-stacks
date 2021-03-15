import React, { useContext } from "react";
import {
  IonPage,
  IonContent,
  IonList,
  IonCol,
  IonRow,
  IonIcon,
  IonLabel,
  IonItem,
  IonCard,
  IonButton,
  IonCardContent,
  IonGrid,
} from "@ionic/react";
import { personCircleOutline, mailOutline } from "ionicons/icons";
import UserContexts from "../contexts/UserContexts";
import firebase from "../firebase";
import { toast } from "../utils/toast";
import SmallHeader from "../components/Header/SmallHeader";
import LargeHeader from "../components/Header/LargeHeader";

const Profile = (props) => {
  const { user } = useContext(UserContexts);
  async function logoutUser() {
    try {
      await firebase.logout();
      props.history.push("/");
      toast("Sorry to see you goo.. BYE!!");
    } catch (err) {
      console.error("Error while logging out", err);
      toast(err.message);
    }
  }
  return (
    <IonPage>
      <SmallHeader title="Profile" />
      <IonContent fullscreen>
        <LargeHeader title="Profile" />
        {user ? (
          <>
            <IonCard>
              <IonCardContent>
                <IonList lines="none">
                  <IonItem>
                    <IonIcon icon={personCircleOutline} slot="start" />
                    <IonLabel>
                      <strong>{user.displayName}</strong>
                      <p>Username</p>
                    </IonLabel>
                  </IonItem>
                  <IonItem>
                    <IonIcon icon={mailOutline} slot="start"></IonIcon>
                    <IonLabel>
                      <strong>{user.email}</strong>
                      <p>Email</p>
                    </IonLabel>
                  </IonItem>
                </IonList>
              </IonCardContent>
            </IonCard>
            <IonRow>
              <IonCol>
                <IonButton
                  expand="block"
                  routerLink={`/editprofile`}
                  color="success"
                  fill="outline"
                >
                  Edit profile
                </IonButton>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonButton
                  expand="block"
                  color="danger"
                  fill="outline"
                  onClick={logoutUser}
                >
                  LOGOUT
                </IonButton>
              </IonCol>
            </IonRow>
          </>
        ) : (
          <IonGrid>
            <IonRow>
              <IonCol style={{ textAlign: "center" }}>
                <IonButton
                  size="large"
                  color="secondary"
                  routerLink={`/signup`}
                >
                  Register
                </IonButton>
              </IonCol>
            </IonRow>

            <IonRow>
              <IonCol style={{ textAlign: "center" }}>
                <IonButton size="large" routerLink={`/login`} color="tertiary">
                  Login
                </IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Profile;
