import React from "react";
import Square from "./Square";
import "../styles/Board.css";

export const Board = ({ gameState, handleClick }) => {
  return (
    <div className="board">
      {gameState.squares.map((square, idx) => (
        <Square key={idx} onClick={() => handleClick(idx)}>
          {square}
        </Square>
      ))}
    </div>
  );
};

export default Board;
