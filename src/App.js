import React, { useState } from "react";
import Square from './components/Square';
import './style.css';

function App() {
  const [state, setState] = useState(Array(9).fill(null));
  const [istrue, setIstrue] = useState(true);
  const [winner, setWinner] = useState(null);
  const [tie, setTie] = useState(false); 

  const checkWinner = (squares) => {
    const winningConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (let condition of winningConditions) {
      const [a, b, c] = condition;
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  const handleClick = (index) => {
    if (state[index] || winner || tie) return;

    const copystate = [...state];
    copystate[index] = istrue ? "X" : "O";
    setState(copystate);
    setIstrue(!istrue);

    const gameWinner = checkWinner(copystate);
    if (gameWinner) {
      setWinner(gameWinner);
    } else if (!copystate.includes(null)) {
      setTie(true); // 
    }
  };

  function restartgame() {
    setState(Array(9).fill(null));
    setWinner(null);
    setTie(false);
    setIstrue(true);
  }

  return (
    <div className='square-items'>
      {winner ? (
        <>
          <p>🏆 Won the game: {winner}</p>
          <button onClick={restartgame}>Restart Game</button>
        </>
      ) : tie ? (
        <>
          <p>🤝 It's a Tie!</p>
          <button onClick={restartgame}>Restart Game</button>
        </>
      ) : (
        <>
          <div className='board-items'>
            <Square onClick={() => handleClick(0)} value={state[0]} />
            <Square onClick={() => handleClick(1)} value={state[1]} />
            <Square onClick={() => handleClick(2)} value={state[2]} />
          </div>
          <div className='board-items'>
            <Square onClick={() => handleClick(3)} value={state[3]} />
            <Square onClick={() => handleClick(4)} value={state[4]} />
            <Square onClick={() => handleClick(5)} value={state[5]} />
          </div>
          <div className='board-items'>
            <Square onClick={() => handleClick(6)} value={state[6]} />
            <Square onClick={() => handleClick(7)} value={state[7]} />
            <Square onClick={() => handleClick(8)} value={state[8]} />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
