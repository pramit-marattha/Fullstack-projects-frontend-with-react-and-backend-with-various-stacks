import React, { useEffect, useState } from "react";
import GroceryForm from "./components/GroceryForm";
import "./App.css";
import GroceryList from "./components/GroceryList";

function App() {
  const [items, setItems] = useState([]);
  const addItem = (item) => {
    setItems([...items, item]);
  };

  const removeItem = (itemToBeDeleted) => {
    setItems(items.filter((item) => itemToBeDeleted !== item));
  };

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("items"));
    if (items) {
      setItems(items);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  return (
    <div className="App">
      <header className="App-header">
        <GroceryList items={items} removeItem={removeItem} />
        <GroceryForm addItem={addItem} />
        Grocery Items
      </header>
    </div>
  );
}

export default App;
