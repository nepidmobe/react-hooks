import React, { useState } from "react";
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [people, setPeople] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (firstName && email) {
      setPeople((people) => {
        return [
          ...people,
          { id: new Date().getTime().toString(), firstName, email },
        ];
      });
    }
    setFirstName("");
    setEmail("");

    console.log(await people);
    // console.log({ firstName, email });
  };

  // const handleOnChange = (e) => {
  //   console.log(e.target.value);
  //   if (e.target.name === "firstName") {
  //     setFirstName(e.target.value);
  //   }
  //   if (e.target.name === "email") {
  //     setEmail(e.target.value);
  //   }
  // };
  return (
    <>
      <article>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-container">
            <label htmlFor="firstName">Name: </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="form-container">
            <label htmlFor="email">Email: </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button type="submit">add person</button>
          {/*can also remove onSubmit in form and add onClick={handleSubmit} in button make sure type submit in button*/}
        </form>

        {people.map((person) => {
          return (
            <div key={person.id} className="item">
              <h4>{person.firstName}</h4>
              <p>{person.email}</p>
            </div>
          );
        })}
      </article>
    </>
  );
};
//we set up controlled input in react. there is also uncontrolled input useRef

export default ControlledInputs;
