import logo from './logo.svg';
import './App.css';
import MyButton from './MyButton.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Elias
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <MyButton text="Click me!"/>
      </header>
    </div>
  );
}

export default App;
