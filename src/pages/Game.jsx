import React from "react";
import Board from "../components/Board";
import "../styles/Game.css";

export const Game = () => {
  return (
    <div className="gameContainer">
      <Board />
    </div>
  );
};

export default Game;
