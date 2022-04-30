import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState("");
  const [isError, setisError] = useState(false);
  const firstValue = text || "hello world";
  const secondValue = !text && "hello world";

  return (
    <>
      <h5>{firstValue}</h5>
      <h5>{secondValue}</h5>
      <button
        className="btn"
        onClick={() => [setisError(!isError), setText(!text)]}
      >
        toggle error
      </button>
      <h5>{isError && <h3>there is error..</h3>}</h5>
      {isError ? <h3>yes error</h3> : <h3>no error</h3>}
    </>
  );
};

export default ShortCircuit;
