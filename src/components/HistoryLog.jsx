import React from "react";
import "../styles/HistoryLog.css";

export const HistoryLog = ({ history, handleFuture }) => {
  console.log(history);

  return (
    <>
      {history.map((log, idx) => {
        return (
          <h1 className="log" key={idx} onClick={() => handleFuture(log, idx)}>
            {idx ? `Go to step ${idx}` : "Go to game start"}
          </h1>
        );
      })}
    </>
  );
};

export default HistoryLog;
