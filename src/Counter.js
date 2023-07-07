import React, { useState } from "react";

const Counter = () => {
const [counter, setCounter] = useState(0);

const incrementCounter = () => {
  setCounter((prevCounter) => prevCounter + 1);
};

const decrementCounter = () => {
  setCounter((prevCounter) => prevCounter - 1);
};

return (
  <>
    <button data-testid="increment" onClick={incrementCounter}>
      Increment Counter
    </button>
    <p data-testid="countering">{counter}</p>
    <button disabled data-testid="decrement" onClick={decrementCounter}>
      Decrement Counter
    </button>
  </>
  );
};

export default Counter;
