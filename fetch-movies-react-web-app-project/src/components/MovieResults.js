import React from "react";

function Result({ result }) {
  return (
    <div className="result">
      <h3>{result.Title}</h3>
      <img src={result.Poster} alt={result.Title} />
      <h3>{result.Year}</h3>
      <p>{result.Type}</p>
    </div>
  );
}

export default Result;
