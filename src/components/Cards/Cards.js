import React from 'react';
import Card from '../Card/Card';

export default function Cards({ loading, pokemonData, prev, next }) {
  return (
    <div>
      {loading ? (
        <h1 style={{ textAlign: 'center' }}>Loading...</h1>
      ) : (
        <>
          <div className="btn">
            <button onClick={prev}>
              <i
                class="fa fa-chevron-left"
                style={{ marginRight: '5px', fontSize: '14px' }}
              ></i>
              Prev
            </button>
            <button onClick={next}>
              Next{' '}
              <i
                class="fa fa-chevron-right"
                style={{ marginLeft: '5px', fontSize: '14px' }}
              ></i>
            </button>
          </div>
          <div className="grid-container">
            {pokemonData.map((pokemon, i) => {
              return <Card key={i} pokemon={pokemon} />;
            })}
          </div>
          <div className="btn">
            <button onClick={prev}>Prev</button>
            <button onClick={next}>Next</button>
          </div>
        </>
      )}
    </div>
  );
}
