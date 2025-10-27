import './App.css';

function Pokemon(props) {
  return (
    <div className="pokemon-card">
      <h2>{props.name}</h2>
      <img src={props.image} alt={props.name}/>
      <p>{props.type}</p>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Pokedex</h1>
      </header>
      <div className="pokemon-container">
        <Pokemon name="Zangoose" image="images\zangoose.png" type="Normal"/>
        <Pokemon name="Mudkip" image="images\mudkip.png" type="Water"/>
        <Pokemon name="Metapod" image="images\metapod.png" type="Bug"/>
      </div>
    </div>
  );
}

export default App;
