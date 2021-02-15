import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ProductLists.css";

const ProductLists = () => {
  const [data, setData] = useState(null);
  const [yololoading, setYololoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadData();
  }, []);

  async function loadData() {
    await axios("https://fakestoreapi.com/products")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setError(error);
      })
      .then(() => {
        setYololoading(false);
      });
  }

  if (yololoading) return "Loading...";
  if (error) return "Error!!!!";

  return (
    <div className="container">
      <div className="main">
        <div className="header">
          <h1 className="title">Online पसल</h1>

          <p className="description">
            <a
              className="snipcart-checkout snipcart-summary"
              href="#"
              style={{ textDecoration: "none" }}
            >
              <strong className="sr-only">Cart</strong>
              <span className="snipcart-total-price">$0.00</span>
            </a>
          </p>
        </div>

        <div className="grid">
          {data.map((product) => {
            return (
              <div key={product.id} className="card">
                <img src={product.image} alt={`Preview of ${product.title}`} />
                <h3>{product.title}</h3>
                <p className="cardDescription">{product.description}</p>
                <p>
                  <p style={{ color: "orange" }}>${product.price}</p>

                  <button
                    className="snipcart-add-item"
                    data-item-id={product.id}
                    data-item-image={product.image}
                    data-item-name={product.title}
                    data-item-url="/"
                    data-item-price={product.price}
                  >
                    Add to Cart
                  </button>
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <footer className="footer">&copy; Online पसल</footer>
    </div>
  );
};

export default ProductLists;
