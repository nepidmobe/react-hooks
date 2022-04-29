import React, { useState } from "react";

const UseStateBasics = () => {
  //useState returns array of[value to change, changingFun]
  // console.log(useState("dipen"));
  let [text, setText] = useState("dipen is awesome");
  const handleClick = () => {
    if (text === "dipen is awesome") setText("dipe is not awesome");
    else {
      setText("dipen is awesome");
    }
  };

  return (
    <React.Fragment>
      <h2>{text}</h2>
      <button type="button" className="btn" onClick={handleClick}>
        change text
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
