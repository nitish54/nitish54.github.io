import React from 'react';
import Square from './Square';

class Board extends React.Component {
  static toggle(turn) {
    if (turn === 'X') return 'O';
    return 'X';
  }

  static findWinner(board) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i += 1) {
      const [a, b, c] = lines[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return null;
  }

  constructor(props) {
    super(props);
    this.state = {
      board: Array(9).fill(null),
      turn: 'X',
      winner: '',
      gameOn: true,
    };
  }

  reset = () => {
    this.setState({
      board: Array(9).fill(null),
      turn: 'X',
      winner: '',
      gameOn: true,
    });
  }

  checkWinner = (turn, board) => {
    if (Board.findWinner(board) !== null) {
      this.setState({
        winner: turn,
      });
      return true;
    }
    return false;
  }

  isBoardInComplete = (board) => board.some((elem) => elem === null)

  handleSquareClick = (i) => {
    const { turn, board } = this.state;
    if (!board[i]) {
      const nextTurn = Board.toggle(turn);
      const boardClone = board.slice();
      boardClone[i] = turn;
      const hasWinner = this.checkWinner(turn, boardClone);
      const isBoardComplete = !this.isBoardInComplete(boardClone);
      if (!hasWinner && !isBoardComplete) {
        this.setState({
          board: boardClone,
          turn: nextTurn,
        });
      } else if (!hasWinner && isBoardComplete) {
        this.setState({
          gameOn: false,
        });
      }
    }
  }

  renderSquare = (i) => {
    const { board } = this.state;
    return <Square value={board[i]} onClick={() => this.handleSquareClick(i)} />;
  }

  render() {
    const { turn, winner, gameOn } = this.state;
    const status = `Next player: ${turn}`;

    if (!gameOn) {
      return (
        <div className="display-flex-column ">
          {' '}
          <div className="flex-4">
            Game Over - Winner undecided
          </div>
          <div className="flex-2">
            <button type="button" onClick={() => this.reset()}>Reset Board</button>
          </div>
        </div>
      );
    }

    return (
      <div>
        {
        !winner ? (
          <div className="">
            <div className="status">{status}</div>
            <div className="board-row">
              {this.renderSquare(0)}
              {this.renderSquare(1)}
              {this.renderSquare(2)}
            </div>
            <div className="board-row">
              {this.renderSquare(3)}
              {this.renderSquare(4)}
              {this.renderSquare(5)}
            </div>
            <div className="board-row">
              {this.renderSquare(6)}
              {this.renderSquare(7)}
              {this.renderSquare(8)}
            </div>
          </div>
        ) : (
          <div className="display-flex-column ">
            {' '}
            <div className="flex-4">
              The winner is: Player
              {` ${turn}`}
            </div>
            <div className="flex-2">
              <button type="button" onClick={() => this.reset()}>Reset Board</button>
            </div>
          </div>
        )
    }
      </div>
    );
  }
}

export default Board;
