import React from "react";
import "../styles/HistoryLog.css";

export const HistoryLog = ({ history }) => {
  console.log(history);

  return (
    <>
      {history.map((log, idx) => {
        return (
          <h1 className="log" key={idx}>
            Go to step {idx}
          </h1>
        );
      })}
    </>
  );
};

export default HistoryLog;
