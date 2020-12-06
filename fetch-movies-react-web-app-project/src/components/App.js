import React, { useState } from "react";
import "../styles/App.css";
import Search from "./Search";
import axios from "axios";
import MoviesDisplay from "./MoviesDisplay";

function App() {
  const API_KEY = "https://www.omdbapi.com/?i=tt3896198&apikey=ab6efc1d"; // http://www.omdbapi.com/?i=tt3896198&apikey=120bd05f
  const [state, setState] = useState({
    s: "",
    results: [],
    selected: {},
  });

  const search = (e) => {
    if (e.key === "Enter") {
      axios(API_KEY + "&s=" + state.s).then(({ data }) => {
        let results = data.Search;

        setState((prevState) => {
          return { ...prevState, results: results };
        });
      });
    }
  };

  const handleInput = (e) => {
    let s = e.target.value;

    setState((prevState) => {
      return { ...prevState, s: s };
    });
  };

  return (
    <div className="App">
      <header>
        <h1>Fetch Movies</h1>
      </header>
      <main>
        <Search handleInput={handleInput} search={search} />

        <MoviesDisplay results={state.results} />
      </main>
    </div>
  );
}

export default App;
