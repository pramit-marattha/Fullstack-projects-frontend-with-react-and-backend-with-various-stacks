import React from "react";
import { IonToolbar, IonHeader, IonTitle } from "@ionic/react";

const SmallHeader = ({ title }) => {
  return (
    <IonHeader>
      <IonToolbar style={{ background: "#cc4d29" }} color="primary">
        <IonTitle size="small">{title}</IonTitle>
      </IonToolbar>
    </IonHeader>
  );
};

export default SmallHeader;
