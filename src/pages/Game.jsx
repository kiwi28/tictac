import React, { useCallback, useMemo, useState } from "react";
import Board from "../components/Board";
import HistoryLog from "../components/HistoryLog";
import "../styles/Game.css";
import { calculateWinner, getMessageByStatus } from "../utils.js";

export const Game = () => {
  const [gameState, setGameState] = useState({
    squares: Array(9).fill(null),
    currentPlayer: true,
    history: [Array(9).fill(null)],
  });

  const winner = useMemo(() => {
    return calculateWinner(gameState.squares);
  }, [gameState.squares]);

  const handleClick = useCallback(
    (idx) => {
      if (winner || gameState.squares[idx]) {
        return;
      }

      setGameState((gs) => {
        const squares = gs.squares.map((sq, index) =>
          index === idx ? (gs.currentPlayer ? "X" : "O") : sq
        );

        return {
          squares,
          currentPlayer: !gs.currentPlayer,
          history: [...gs.history, squares],
        };
      });
    },
    [winner, gameState, setGameState]
  );

  const handleFuture = (log, idx) => () => {
    setGameState((gs) => ({
      squares: log,
      currentPlayer: !(idx % 2),
      history: [...gs.history.slice(0, idx + 1)],
    }));
  };

  console.log("squares", gameState);

  return (
    <div className="gameContainer">
      <Board gameState={gameState} handleClick={handleClick} />

      {getMessageByStatus(winner, gameState.currentPlayer)}

      <HistoryLog history={gameState.history} handleFuture={handleFuture} />
    </div>
  );
};

export default Game;
