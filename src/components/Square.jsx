import React from "react";
import "../styles/Square.css";

export const Square = ({ onClick, children }) => {
  return (
    <button className="square" onClick={onClick}>
      {children}
    </button>
  );
};

export default Square;
