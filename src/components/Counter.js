import React, { useState } from "react";
import "./CounterStyle.css";
// let intervalId = undefined;
function Counter() {
  const [count, setCount] = useState(0);
  const [isDisabled, setIsDisabled] = useState(false);
  const [intervalId, setIntervalId] = useState(undefined);

  const handleCounter = () => {
    setIsDisabled(true);
    const id = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);
    setIntervalId(id);
  };

  const handleStopCounter = () => {
    clearInterval(intervalId);
    setIsDisabled(false);
  };

  return (
    <div className="container">
      <h1 className="count">{count}</h1>
      <button
        onClick={handleCounter}
        disabled={isDisabled}
        className="StartBtn"
      >
        start Counter
      </button>
      <button onClick={handleStopCounter} className="StartBtn">
        stop Counter
      </button>
    </div>
  );
}

export default Counter;
