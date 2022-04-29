import React from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);
  return (
    <React.Fragment>
      {people.map((person) => {
        return (
          <div key={person.id} className="item">
            <h1>{person.name}</h1>
            <button
              className="btn"
              onClick={() =>
                setPeople(people.filter((perso) => perso.id !== person.id))
              }
            >
              clear {person.id}
            </button>
          </div>
        );
      })}
      <button className="btn" onClick={() => setPeople([])}>
        clear all
      </button>
    </React.Fragment>
  );
};

export default UseStateArray;
