import React, { useContext } from "react";
import { withRouter } from "react-router-dom";
import {
  IonItem,
  IonLabel,
  IonCard,
  IonCardContent,
  IonThumbnail,
  IonList,
  IonImg,
  IonIcon,
  IonText,
  IonButton,
} from "@ionic/react";
import {
  chevronUpCircleOutline,
  personCircleOutline,
  timeOutline,
  caretUp,
  chatbubbleEllipsesOutline,
} from "ionicons/icons";
import UserContext from "../../contexts/UserContexts";
import productService from "../../services/product";
import formatDistanceToNow from "date-fns/formatDistanceToNow";

const ProductItem = ({ product, url, browser, history }) => {
  const { user } = useContext(UserContext);

  const addUpvote = (event) => {
    event.preventDefault();
    event.stopPropagation();
    productService.addUpvote(user, product.id).catch(() => {
      history.push("/login");
    });
  };

  return (
    <IonCard routerLink={url} onClick={browser} button>
      <IonCardContent class="ion-no-padding">
        <IonList lines="none">
          <IonItem>
            <IonThumbnail slot="start">
              <IonImg src={product.thumbnail} />
            </IonThumbnail>
            <IonLabel>
              <div className="ion-text-wrap">
                <strong style={{ fontSize: "1.5rem" }}>{product.title}</strong>
              </div>
              <div className="ion-text-wrap" style={{ fontSize: "1rem" }}>
                {product.description}
              </div>
              <p
                style={{
                  alignItems: "center",
                  fontSize: "0.6rem",
                  fontWeight: "normal",
                }}
              >
                <IonIcon
                  icon={chevronUpCircleOutline}
                  style={{
                    verticalAlign: "middle",
                  }}
                />{" "}
                <IonText
                  style={{
                    verticalAlign: "middle",
                  }}
                >
                  {product.voteCount} hunting-point
                </IonText>
                {" 🎈 "}
                <IonIcon
                  icon={personCircleOutline}
                  style={{
                    verticalAlign: "middle",
                  }}
                />{" "}
                <IonText
                  style={{
                    verticalAlign: "middle",
                  }}
                >
                  {product.postedBy.name}
                </IonText>
                {" 🧱 "}
                <IonIcon
                  icon={timeOutline}
                  style={{
                    verticalAlign: "middle",
                  }}
                />{" "}
                <IonText
                  style={{
                    verticalAlign: "middle",
                  }}
                >
                  {formatDistanceToNow(product.created)}
                </IonText>
                {product.comments.length > 0 && (
                  <>
                    {" 📜 "}
                    <IonIcon
                      icon={chatbubbleEllipsesOutline}
                      style={{
                        verticalAlign: "middle",
                      }}
                    />{" "}
                    <IonText
                      style={{
                        verticalAlign: "middle",
                      }}
                    >
                      {product.comments.length} comments
                    </IonText>
                  </>
                )}{" "}
              </p>
            </IonLabel>
            <IonButton slot="end" onClick={addUpvote} size="medium">
              <div className="upvote-button__inner">
                <IonIcon icon={caretUp} />
                {product.voteCount}
              </div>
            </IonButton>
          </IonItem>
        </IonList>
      </IonCardContent>
    </IonCard>
  );
};

export default withRouter(ProductItem);
