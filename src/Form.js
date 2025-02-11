import React from "react";
import { useState } from "react";

function Form() {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();

  const [allEntry, setAllEntry] = useState([]);

  const handleFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastName = (e) => {
    setLastName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newEntry = { firstName: firstName, lastName: lastName };

    setAllEntry([...allEntry, newEntry]);

    // setFirstname("");
    // setLastname("");
  };
  return (
    <div>
      <form className="addlist" onSubmit={handleSubmit}>
        <h1>Full Name Display</h1>
         <p>First Name: <input
          type="text"
          name="first name"
          value={firstName}
          onChange={handleFirstName}
          required
        /></p>
        <p>
        Last Name: <input
          type="text"
          name="last name"
          value={lastName}
          onChange={handleLastName}
          required
        /></p>
        <button type="submit" className="addlist">Submit</button>
      </form>
    
      <div>
        {
          allEntry.map((currElem) => {
              return (
                <div className="showDataStyles">
                  <p>
                  <span>Full Name: </span>
                  <span>{currElem.firstName}</span> <span>{currElem.lastName}</span>
                  </p>
                </div>
              )
          })
        }
      </div>
    </div>
  );
}

export default Form;
