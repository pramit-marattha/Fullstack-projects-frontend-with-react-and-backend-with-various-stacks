import React, { useState, useEffect } from "react";
import { IonPage, IonContent, IonSearchbar } from "@ionic/react";
import firebase from "../firebase";
import ProductItem from "../components/Product/ProductItem";
import SmallHeader from "../components/Header/SmallHeader";
import LargeHeader from "../components/Header/LargeHeader";

const Search = () => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    getInitialProducts();
  }, []);

  useEffect(() => {
    handleSearch();
  }, [filter]);

  function getInitialProducts() {
    firebase.db
      .collection("products")
      .get()
      .then((snapshot) => {
        const products = snapshot.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        });
        setProducts(products);
      });
  }

  function handleChange(evt) {
    if (evt.key === "Enter") {
      setFilter(evt.target.value);
    }
  }

  function handleSearch() {
    const query = filter.toLowerCase();
    const matchedProducts = products.filter((product) => {
      return (
        product.description.toLowerCase().includes(query) ||
        product.url.toLowerCase().includes(query) ||
        product.postedBy.name.toLowerCase().includes(query)
      );
    });
    setFilteredProducts(matchedProducts);
  }

  return (
    <IonPage>
      <SmallHeader title="Search" />
      <IonContent>
        <LargeHeader title="Search" />
        <IonSearchbar
          style={{ backgroundImage: "linear-gradient(to right, teal , green)" }}
          placeholder="Search"
          spellcheck="false"
          type="url"
          value={filter}
          onKeyPress={handleChange}
          animated
        />
        {filteredProducts.map((filteredProduct, index) => (
          <ProductItem
            key={filteredProduct.id}
            showCount={false}
            product={filteredProduct}
            index={index}
            url={`/product/${filteredProduct.id}`}
          />
        ))}
      </IonContent>
    </IonPage>
  );
};

export default Search;
