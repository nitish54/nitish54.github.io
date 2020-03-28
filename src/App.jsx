import React from 'react';
import logo from './logo.svg';
import Game from './components/tic-tac-toe/Game';
import './common/css/App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameOn: false,
    };
  }

  openGame = () => {
    this.setState({
      gameOn: true,
    });
  }

  render() {
    const { gameOn } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {
              gameOn
                ? (<Game />)
                : (
                  <div>
                    {' '}
                    Welcome!!!
                    <div className="App-link cursor-pointer" role="presentation" onClick={() => this.openGame()} onKeyPress={() => {}}>Lets play a game.</div>
                  </div>
                )
          }
        </header>
      </div>
    );
  }
}

export default App;
