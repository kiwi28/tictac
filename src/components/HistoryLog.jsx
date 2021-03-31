import React from "react";
import "../styles/HistoryLog.css";

export const HistoryLog = ({ history, handleFuture }) => {
  return (
    <>
      {history.map((log, idx) => {
        return (
          <button className="log" key={idx} onClick={handleFuture(log, idx)}>
            {idx ? `Go to step ${idx}` : "Go to game start"}
          </button>
        );
      })}
    </>
  );
};

export default HistoryLog;
