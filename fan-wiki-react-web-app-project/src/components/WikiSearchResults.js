import React from 'react';
import "../styles/results.css";

function WikiSearchResults(props) {
    return (
        <div className="resultsBox">
        <h2>{props.name}</h2>
        <a href={props.link}><div>{props.link}</div></a>
        </div>
    )
}

export default WikiSearchResults
