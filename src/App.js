import React, { useState } from "react";
import Counter from "./components/Counter";
import "./components/CounterStyle.css";
function App() {
  const [counterNumber, setCounterNumber] = useState([]);
  return (
    <div className="mainContainer">
      <button
        className="mainBtn"
        onClick={() => {
          setCounterNumber([...counterNumber, 1]);
        }}
      >
        Add Counter
      </button>
      <br />
      {counterNumber.map(() => (
        <Counter />
      ))}
    </div>
  );
}

export default App;
