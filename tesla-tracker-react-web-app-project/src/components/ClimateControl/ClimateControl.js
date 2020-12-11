import React from 'react';
import PropTypes from "prop-types";
import "./ClimateControl.css";

const ClimateControl = (props) => (
    <div className="aircondition-toggle">    
    <label className={`aircondition-toggle__item ${props.value ? 'aircondition-toggle__item--active' : '' }  ${!props.limit ? 'car-heater-toggle':''}`}>      
    <p>{props.limit ? 'ac' : 'heat'} {props.value ? 'on' : 'off'}</p>      
    <i className="aircondition-toggle__icon"></i>      
    <input type="checkbox" name="climate" checked={props.value} onChange={() => {props.handleChangeClimate()}} />    
    </label>  
    </div>
);
ClimateControl.propTypes = {  
    value: PropTypes.bool,  
    limit: PropTypes.bool,  
    handleChangeClimate: PropTypes.func
}

export default ClimateControl;
