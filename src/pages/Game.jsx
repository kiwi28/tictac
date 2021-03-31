import React, { useCallback, useMemo, useState, useEffect } from "react";
import Board from "../components/Board";
import HistoryLog from "../components/HistoryLog";
import "../styles/Game.css";
import { calculateWinner, getMessageByStatus } from "../utils.js";

const STORAGE_KEY = "localGameState";
const defaultState = {
  squares: Array(9).fill(null),
  currentPlayer: true,
  history: [Array(9).fill(null)],
};

export const Game = () => {
  const [gameState, setGameState] = useState(() => {
    const storageState = localStorage.getItem(STORAGE_KEY);
    if (storageState) {
      return JSON.parse(storageState);
    }

    return defaultState;
  });

  const winner = useMemo(() => calculateWinner(gameState.squares), [
    gameState.squares,
  ]);

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

  const handleFuture = useCallback(
    (log, idx) => () => {
      setGameState((gs) => ({
        squares: log,
        currentPlayer: !(idx % 2),
        history: [...gs.history.slice(0, idx + 1)],
      }));
    },
    [setGameState]
  );

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(gameState));
  }, [gameState]);

  return (
    <div className="gameContainer">
      <Board gameState={gameState} handleClick={handleClick} />

      {getMessageByStatus(winner, gameState.currentPlayer)}

      <HistoryLog history={gameState.history} handleFuture={handleFuture} />
    </div>
  );
};

export default Game;
