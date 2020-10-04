import React, { useState, useEffect } from "react";
import "./styles/App.css";
import { fetchAllpokemon, getPokemon } from "./services/pokemon";
import Tilecard from "./components/Tilecard";

function App() {
  const [pokedata, setPokedata] = useState([]);
  const [nextpagination, setNextpagination] = useState("");
  const [prevpagination, setPrevpagination] = useState("");
  const [loading, setLoading] = useState(true);
  const API_END_POINT_URL = "https://pokeapi.co/api/v2/pokemon";

  useEffect(() => {
    async function fetchData() {
      let response = await fetchAllpokemon(API_END_POINT_URL);
      console.log(response);
      setNextpagination(response.next);
      setPrevpagination(response.previous);
      await loadingPokemon(response.results);
      setLoading(false);
    }
    fetchData();
  }, []);

  const nextPage = async () => {
    setLoading(true);
    let data = await fetchAllpokemon(nextpagination);
    await loadingPokemon(data.results);
    setNextpagination(data.next);
    setPrevpagination(data.previous);
    setLoading(false);
  };
  const prevPage = async () => {
    if (!prevpagination) return;
    setLoading(true);
    let data = await fetchAllpokemon(prevpagination);
    await loadingPokemon(data.results);
    setNextpagination(data.next);
    setPrevpagination(data.previous);
    setLoading(false);
  };

  const loadingPokemon = async (data) => {
    let _pokedex = await Promise.all(
      data.map(async (pokemon) => {
        let pokemonRecord = await getPokemon(pokemon.url);
        return pokemonRecord;
      })
    );
    setPokedata(_pokedex);
  };
  return (
    <>
      {loading ? (
        <div className="loader"></div>
      ) : (
        <>
          <div className="grid-container">
            {pokedata.map((pokemon, i) => {
              return <Tilecard key={i} pokemon={pokemon} />;
            })}
          </div>
          <div className="btn">
            <button onClick={prevPage}> Previous page</button>
            <button onClick={nextPage}>Next Page</button>
          </div>
        </>
      )}
    </>
  );
}

export default App;
