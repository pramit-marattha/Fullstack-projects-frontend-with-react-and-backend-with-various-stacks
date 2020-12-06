import React from "react";
import "./style.css";

export default function Tilecard({ pokemon }) {
  return (
    <div className="card">
      <div className="card-name">{pokemon.name}</div>

      <div className="card-info">
        <div className="card-data card-data-weight">
          <p className="title">Weight of the {pokemon.name}</p>
          <p>{pokemon.weight}</p>
        </div>
        <div className="card-data card-data-height">
          <p className="title">Height of the {pokemon.name}</p>
          <p>{pokemon.height}</p>
        </div>
        <div className="card-data card-data-abilities">
          <p className="title">Abilities of the {pokemon.name}</p>
          <p>{pokemon.abilities[0].ability.name}</p>
        </div>
      </div>
      <div className="card-types">
        {pokemon.types.map((type) => {
          return <div className="card-type-name">{type.type.name}</div>;
        })}
      </div>
      <div className="card-image">
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      </div>
    </div>
  );
}
