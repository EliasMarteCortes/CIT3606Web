import './App.css';

function Pokemon(props) {
  return (
    <div className="pokemon-card">
      <h2>{props.name}</h2>
      <img src={props.image}/>
      <p>{props.type}</p>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Pokedex</h1>
        <Pokemon name="Zangoose" image="images\zangoose.png" type="Normal"/>
        <Pokemon name="Mudkip" image="images\mudkip.png" type="Water"/>
        <Pokemon name="Metapod" image="images\metapod.png" type="Bug"/>
      </header>
    </div>
  );
}

export default App;
