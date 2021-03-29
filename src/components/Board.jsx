import React, { useState } from "react";
import Square from "./Square";
import "../styles/Board.css";

export const Board = () => {
  const [gameState, setGameState] = useState({
    squares: Array(9).fill(null),
    currentPlayer: true,
  });

  return (
    <div className="board">
      {gameState.squares.map((square, idx) => (
        <Square
          key={idx}
          onClick={() =>
            setGameState((gs) => {
              const squares = [...gameState.squares];
              squares[idx] = gameState.currentPlayer ? "X" : "O";
              return Object.assign(gameState, {
                squares,
                currentPlayer: !gameState.currentPlayer,
              });
            })
          }
        >
          {square}
        </Square>
      ))}
    </div>
  );
};

export default Board;
