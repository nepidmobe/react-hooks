import React, { useState, useEffect } from "react";
//this example shows important of cleanup function as [] dependency don't work here.

const ShowHide = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <button className="btn" onClick={() => setShow(!show)}>
        toggle
      </button>
      {show && <Cleanup />}
    </>
  );
};

const Cleanup = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const checkSize = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", checkSize);
    return () => {
      window.removeEventListener("resize", checkSize);
    };
  }, []);

  return (
    <>
      <h1>event added</h1>
      <h1>{width} px</h1>
    </>
  );
};

export default ShowHide;
