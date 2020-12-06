import React, { useState } from "react";

const AddItemForm = ({ addItem }) => {
  const [item, setItem] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addItem(item);
    setItem("");
  };

  return (
    <div>
      <p>Shopping List</p>
      <form onSubmit={handleSubmit}>
        <div className="form-grp">
          <input
            className="field"
            placeholder="Name"
            name="name"
            id="name"
            value={item}
            onChange={(e) => setItem(e.target.value)}
          />
          <label for="name" class="label">
            Item Name
          </label>
        </div>
        <br />
        <button className="myButton">
          {" "}
          Add in Bag
          <span role="img" aria-label="bag">
            {" "}
            🛍️
          </span>
        </button>
      </form>
    </div>
  );
};

export default AddItemForm;
