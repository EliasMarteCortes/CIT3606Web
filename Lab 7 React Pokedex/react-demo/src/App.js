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
  const [pokemonImage, setPokemonImage] = useState('');
  const [pokemonType, setPokemonType] = useState('');

  function changeState(e) {
    setPokemonName(e.target.value);
  }

  function handleSearch() {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.error('Error fetching Pokemon data:', error);
      }
    );
  }

  return (
    <div className="search-bar">
      <input type="text" placeholder="Search Pokemon..." value={pokemonName} onChange={changeState}/>
      <button onClick={handleSearch}>Search</button>
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
      <div className="pokemon-container">
        <Pokemon name="Zangoose" image="images\zangoose.png" type="Normal"/>
        <Pokemon name="Mudkip" image="images\mudkip.png" type="Water"/>
        <Pokemon name="Metapod" image="images\metapod.png" type="Bug"/>
      </div>
    </div>
  );
}

export default App;
