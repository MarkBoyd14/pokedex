import React from 'react';
import typeColours from '../../helpers/typeColours';
import './style.css';

export default function Card({ pokemon }) {
  function capitalizeWords(string) {
    const words = string.split('-');
    for (let i = 0; i < words.length; i++) {
      words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }
    return words.join('-');
  }

  return (
    <div className="card">
      <div className="card-img">
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      </div>
      <div className="card-name">{pokemon.name}</div>
      <div className="card-types">
        {pokemon.types.map(({ type }) => {
          return (
            <div
              className="card-type"
              style={{ backgroundColor: typeColours[type.name] }}
            >
              {capitalizeWords(type.name)}
            </div>
          );
        })}
      </div>
      <div className="card-info">
        <div className="card-data">
          <p className="title">Weight</p>
          <p>{pokemon.weight / 10}kg</p>
        </div>
        <div className="card-data">
          <p className="title">Height</p>
          <p>{pokemon.height / 10}m</p>
        </div>
        <div className="card-data">
          <p className="title">Abilities</p>
          {pokemon.abilities.map(({ ability }) => {
            return <p>{capitalizeWords(ability.name)}</p>;
          })}
        </div>
      </div>
    </div>
  );
}
