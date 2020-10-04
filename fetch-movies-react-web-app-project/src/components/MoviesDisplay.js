import React from "react";
import MovieResults from "./MovieResults";

function MoviesDisplay({ results }) {
  return (
    <section className="results">
      {results.map((result) => (
        <MovieResults key={result.imdbID} result={result} />
      ))}
    </section>
  );
}

export default MoviesDisplay;
