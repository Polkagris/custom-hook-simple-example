import { useState } from "react";

function useCounter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decriment = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return [count, increment, decriment, reset];
}

export default useCounter;
