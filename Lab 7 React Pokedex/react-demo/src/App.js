import './App.css';

function Pokemon(props) {
  return (
    <div className="pokemon-card">
      <h2>{props.name}</h2>
      <img src={props.image}/>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Pokedex</h1>
        <Pokemon name="Zangoose" image="images\zangoose.png"/>
        <Pokemon name="Mudkip" image="images\mudkip.png"/>
        <Pokemon name="Metapod" image="images\metapod.png"/>
      </header>
    </div>
  );
}

export default App;
