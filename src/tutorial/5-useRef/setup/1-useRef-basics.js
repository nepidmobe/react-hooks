import React, { useEffect, useRef } from "react";

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
  const refContainer = useRef(null);
  const divContainer = useRef(null);

  useEffect(() => {
    //here use container get called only once even without dependency because there is nothing that rerenders our component.
    //as we used useRef
    //focus the input after our app renders
    //after render refContainer.current is pointing to input so we can grab it's value
    console.log(refContainer.current);

    refContainer.current.focus();
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(refContainer.current);
    console.log(divContainer.current);
  };

  console.log(refContainer);
  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <input type="text" ref={refContainer} />
          <button type="submit">submit</button>
        </div>
      </form>
      <div ref={divContainer}>hello world</div>
    </>
  );
};

export default UseRefBasics;
