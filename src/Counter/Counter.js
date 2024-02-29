import React, { useState } from "react";
import "./Counter.css";
const Counter = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  const decrementt = () => {
    setCount(count - 1);
  };

  return (
    <div className="counterapp">
      <h1>Counter App</h1>
      <p>Count: {count}</p>
      <div>
        <button className="incre" onClick={increment}>
          Increment
        </button>
        <button className="decri" onClick={decrementt}>
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;
