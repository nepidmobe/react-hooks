import React, { useState } from "react";

const UseStateCounter = () => {
  const [count, setCount] = useState(0);
  const complexIncrease = () => {
    setTimeout(() => {
      setCount((prevCount) => prevCount + 1);
    }, 2000);
  };

  console.log("xyz");

  return (
    <>
      <h2 onClick={() => setCount(count + 1)}>click here = {count}</h2>
      <h2 onClick={complexIncrease}>click here wait 2 sec = {count}</h2>
    </>
  );
};

export default UseStateCounter;
