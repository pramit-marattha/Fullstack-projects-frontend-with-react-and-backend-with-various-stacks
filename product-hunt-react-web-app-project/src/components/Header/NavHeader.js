import React from "react";
import {
  IonBackButton,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButton,
  IonIcon,
} from "@ionic/react";

const NavHeader = ({ title, option, icon, action }) => {
  return (
    <IonHeader>
      <IonToolbar color="primary">
        <IonButton slot="start">
          <IonBackButton defaultHref="/" />
        </IonButton>
        {option && (
          <IonButton slot="primary">
            <IonButton onClick={action}>
              <IonIcon slot="icon-only" icon={icon} />
            </IonButton>
          </IonButton>
        )}
        <IonTitle>{title}</IonTitle>
      </IonToolbar>
    </IonHeader>
  );
};

export default NavHeader;
