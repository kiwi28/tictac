import React, { useState } from "react";
import Board from "../components/Board";
import HistoryLog from "../components/HistoryLog";
import Status from "../components/Status";
import "../styles/Game.css";
import { calculateWinner } from "../utils.js";

export const Game = () => {
  const [gameState, setGameState] = useState({
    squares: Array(9).fill(null),
    currentPlayer: true,
    history: [Array(9).fill(null)],
  });

  const handleClick = (idx) => {
    const squares = [...gameState.squares];
    if (calculateWinner(squares) || squares[idx]) {
      return;
    }
    setGameState((gs) => {
      squares[idx] = gameState.currentPlayer ? "X" : "O";

      const createHistory = gameState.history.slice();
      createHistory.push(squares);
      return Object.assign(
        {},
        {
          squares,
          currentPlayer: !gameState.currentPlayer,
          history: createHistory,
        }
      );
    });
  };

  const handleFuture = (log, idx) => {
    const oldHistory = [...gameState.history];

    const newHistory = oldHistory.slice(0, idx);
    newHistory.push(log);
    const currentPlayer = idx % 2 ? false : true;
    setGameState({ squares: log, currentPlayer, history: newHistory });
  };

  return (
    <div className="gameContainer">
      <Board gameState={gameState} handleClick={handleClick} />
      <Status
        winner={calculateWinner(gameState.squares)}
        next={gameState.currentPlayer}
      />
      <HistoryLog history={gameState.history} handleFuture={handleFuture} />
    </div>
  );
};

export default Game;
