import React from 'react';
import PropTypes from "prop-types";
import "./CounterStat.css";

const CounterStat = (props) => (
    <div className="speed-temp-count">
      <p className="speed-temp-count__title">{props.initValues.title}</p>
      <div className="speed-temp-count__container cf">
        <div className="speed-temp-count__item">
          <p className="speed-temp-count__number">
            { props.currentValue }
            <span>{ props.initValues.unit }</span>
          </p>
          <div className="speed-temp-count__controls">
            <button 
              onClick={(e) => props.increment(e, props.initValues.title)} 
              disabled={props.currentValue >= props.initValues.max} 
            >
            </button>
            <button 
              onClick={(e) => props.decrement(e, props.initValues.title)} 
              disabled={props.currentValue <= props.initValues.min} 
            >
            </button>
          </div>
        </div>
      </div>
    </div>  
  );
  
  CounterStat.propTypes = {
    currentValue: PropTypes.number,
    increment: PropTypes.func,
    decrement: PropTypes.func,
    initValues: PropTypes.object
  }
  
  export default CounterStat;
  