import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "dipen thapa",
    age: 23,
    message: "hello dipen",
  });
  return (
    <>
      <h3 onClick={() => setPerson({ ...person, name: "thapa" })}>
        {person.name}
      </h3>
      <h3 onClick={() => setPerson({ ...person, age: "thapa" })}>
        {person.age}
      </h3>
      <h3 onClick={() => setPerson({ ...person, message: "thapa" })}>
        {person.message}
      </h3>
    </>
  );
};

export default UseStateObject;
