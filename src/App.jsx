import React from 'react';
import logo from './logo.svg';
import Game from './components/tic-tac-toe/Game';
import './common/css/App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Game />
      </header>
    </div>
  );
}

export default App;
