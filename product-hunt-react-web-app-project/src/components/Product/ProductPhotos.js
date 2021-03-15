import React, { useState } from "react";
import PropTypes from "prop-types";
import { IonImg, IonThumbnail, IonItem, IonCard, IonList } from "@ionic/react";

function ProductPhotos({ photos }) {
  const [index, setIndex] = useState(0);
  return (
    <IonCard>
      <IonList lines="none">
        <IonItem>
          <div style={{ margin: "0 auto" }}>
            <IonImg src={photos[index]} />
          </div>
        </IonItem>
        <IonItem>
          {photos.map((p, i) => (
            <IonThumbnail
              key={`photos_${i}`}
              onClick={() => setIndex(i)}
              slot="start"
            >
              <IonImg src={p} />
            </IonThumbnail>
          ))}
        </IonItem>
      </IonList>
    </IonCard>
  );
}

ProductPhotos.propTypes = {
  photos: PropTypes.array,
};

export default ProductPhotos;
