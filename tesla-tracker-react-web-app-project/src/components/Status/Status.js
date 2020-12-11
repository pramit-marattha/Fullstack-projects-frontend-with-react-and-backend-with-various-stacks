import React from 'react';
import PropTypes from 'prop-types';
import "./Status.css";

const Status = (props) => {
    const allItems = props.carstats.map((carstatus) => (    
    <li key={carstatus.model}>      
       
    <p>{carstatus.miles}</p> 
    <div className={`car-status-icon car-status-icon--${carstatus.model.toLowerCase()}`}>
    </div>     
    </li>  
    ));  

    return (    
    <div className="car-model-status">    
    <ul>{allItems}</ul>  
    </div>  
    )
};

Status.propTypes = {carstats: PropTypes.array}

export default Status;
