import React from 'react';
import PropTypes from 'prop-types';
import "./CarStructure.css";

const CarStructure = (props) => {
    return (
        <div className="fullbody-chassis">   
            <div className="front-back-wheels">      
                <div className={`wheel-container wheel-container--front wheel-container--${props.wheelsize}`}>
                </div>      
                
                <div className={`wheel-container wheel-container--rear wheel-container--${props.wheelsize}`}>
                </div> 
            </div>  
            <div className="road-moving"> </div>  
        </div>
    );
};
CarStructure.propTypes = {  wheelsize: PropTypes.number}

export default CarStructure;
