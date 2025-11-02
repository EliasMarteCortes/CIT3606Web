import './App.css';
import { useState } from 'react';

function Pokemon(props) {
  return (
    <div className="pokemon-card">
      <h2>{props.name}</h2>
      <img src={props.image} alt={props.name}/>
      <p>{props.type}</p>
    </div>
  );
}

function Search() {
  const [pokemonName, setPokemonName] = useState('pikachu');
  const [pokemonImage, setPokemonImage] = useState('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png');
  const [pokemonType, setPokemonType] = useState('electric');

  function changeState(e) {
    setPokemonName(e.target.value);
  }

  function handleSearch() {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`)
      .then(response => response.json())
      .then(data => {
        setPokemonImage(data.sprites.front_default);
        setPokemonType(data.types[0].type.name);
      })
      .catch(error => {
        console.error('Error fetching Pokemon data:', error);
      }
    );
  }

  return (
    <div className='search-container'>
      <div className="search-bar">
        <input type="text" placeholder="Search Pokemon..." value={pokemonName} onChange={changeState}/>
        <button onClick={handleSearch}>Search</button>
      </div>
      <Pokemon name={pokemonName} image={pokemonImage} type={pokemonType}/>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Pokedex</h1>
      </header>
      <Search />
    </div>
  );
}

export default App;
