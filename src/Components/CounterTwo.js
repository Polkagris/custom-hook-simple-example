import React from "react";
import useCounter from "../hooks/useCounter";

function CounterTwo() {
  const [count, increment, decriment, reset] = useCounter();

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>add</button>
      <button onClick={decriment}>subtract</button>
      <button onClick={reset}>reset</button>
    </div>
  );
}
export default CounterTwo;
