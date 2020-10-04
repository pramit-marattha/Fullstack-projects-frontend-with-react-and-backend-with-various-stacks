import React from "react";
import GroceryItems from "./GroceryItems";

const ItemList = ({ items, removeItem }) => {
  return (
    <div className="grid-container ">
      <ol>
        {items.map((item) => (
          <li>
            <GroceryItems key={item} item={item} removeItem={removeItem} />
          </li>
        ))}
      </ol>
    </div>
  );
};

export default ItemList;
