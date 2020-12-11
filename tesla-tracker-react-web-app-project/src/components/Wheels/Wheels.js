import React from 'react';
import PropTypes from "prop-types";
import "./Wheels.css";

const LabelLists = (props) => {
    const value = props.wheels.value;
    const changeHandler = props.wheels.handleChangeWheels;
    const sizes = [19, 21];
    const tireLabelItem = sizes.map(size => (
      <label key={size} className={`wheels-size__item wheels-size__item--${size} ${value === size ? 'wheels-size__item--active' : '' }`}>
        <input
          type="radio"
          name="wheelsize"
          value={size}
          checked={value === size} 
          onChange={() => {changeHandler(size)}} />
        <p>
          {size} 
        </p>
      </label> 
      )
    );
    return (
      <div>
        {tireLabelItem}
      </div>
    );
  }
  const Wheels = (props) => (
    <div className="wheels-sizebox__component">
      <p className="wheels__title"><span role="img" aria-label="wheels">⚙️</span>Wheels<span role="img" aria-label="wheels">⚙️</span></p>
      <div className="wheels__container cf">
        <LabelLists wheels={props}/>
      </div>
    </div>
  );
  Wheels.propTypes = {
    value: PropTypes.number,
    handleChangeWheels: PropTypes.func
  }
export default Wheels;
