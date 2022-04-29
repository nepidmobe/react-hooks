import React, { useState, useEffect } from "react";
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [data, setData] = useState("dipen");
  useEffect(() => {
    console.log("runs on every render and re-renders");
  });

  useEffect(() => {
    console.log("only runs on initial render");
  }, []);
  useEffect(() => {
    if (data === "thapa") {
      document.title = `${data}`;
    }
    console.log("only runs if value of dependency in dependency array changes");
  }, [data]);

  console.log("re-rendered");

  return <h2 onClick={() => setData("thapa")}>{data}</h2>;
};

export default UseEffectBasics;
