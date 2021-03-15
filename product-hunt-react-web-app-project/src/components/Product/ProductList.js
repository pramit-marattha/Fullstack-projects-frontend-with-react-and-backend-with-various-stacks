import React, { useState, useEffect } from "react";
import firebase from "../../firebase";
import ProductItem from "./ProductItem";
import formatDate from "date-fns/format";
import isYesterday from "date-fns/isYesterday";
import isToday from "date-fns/isToday";
import { IonItem, IonLabel } from "@ionic/react";

const ProductList = (props) => {
  const [products, setProducts] = useState([]);
  const isTrending = props.location.pathname.includes("trending");

  useEffect(() => {
    const unsubscribe = getProducts();
    return () => unsubscribe();
  }, [isTrending]);

  function getProducts() {
    if (isTrending) {
      return firebase.db
        .collection("products")
        .orderBy("voteCount", "desc")
        .onSnapshot(handleSnapshot);
    }

    return firebase.db
      .collection("products")
      .orderBy("created", "desc")
      .onSnapshot(handleSnapshot);
  }

  function handleSnapshot(snapshot) {
    const products = snapshot.docs.map((doc) => {
      return { id: doc.id, ...doc.data() };
    });

    setProducts(products);
  }

  let prevDate = null;

  return products.map((product, index) => {
    const result = [
      <ProductItem
        key={product.id}
        showCount={true}
        url={`/product/${product.id}`}
        product={product}
        index={index + 1}
      />,
    ];
    const currentDate = isToday(product.created)
      ? "Today"
      : isYesterday(product.created)
      ? "Yesterday"
      : formatDate(product.created, "MMM d");

    if (currentDate !== prevDate && !isTrending) {
      result.unshift(
        <IonItem
          color="teal"
          style={{
            color: "#2196f3",
            fontSize: "1.3rem",
            fontStyle: "italic",
          }}
          lines="none"
          key={currentDate}
        >
          <IonLabel>
            <strong>{currentDate}</strong>
          </IonLabel>
        </IonItem>
      );
      prevDate = currentDate;
    }

    return result;
  });
};

export default ProductList;
