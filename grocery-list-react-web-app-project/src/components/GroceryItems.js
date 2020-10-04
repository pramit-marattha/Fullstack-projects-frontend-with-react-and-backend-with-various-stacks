import React from "react";

const Item = ({ item, removeItem }) => {
  return (
    <div>
      <span> {item} </span>
      <button className="redButton" onClick={() => removeItem(item)}>
        Clear
      </button>
    </div>
  );
};
export default Item;
