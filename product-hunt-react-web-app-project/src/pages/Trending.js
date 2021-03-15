import React from "react";
import { IonPage, IonContent } from "@ionic/react";
import SmallHeader from "../components/Header/SmallHeader";
import LargeHeader from "../components/Header/LargeHeader";
import ProductList from "../components/Product/ProductList";

const Trending = (props) => {
  return (
    <IonPage>
      <SmallHeader title="📈 Trending Products" />
      <IonContent fullscreen>
        <LargeHeader title="📈 Trending Products" />
        <br></br>
        <ProductList location={props.location}></ProductList>
        {console.log("What the fuzzzz", props.location)}
      </IonContent>
    </IonPage>
  );
};

export default Trending;
