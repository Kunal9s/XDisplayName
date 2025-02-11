import React from "react";
import { useState } from "react";

function Form() {
  const [firstName, setFirstname] = useState();
  const [lastName, setLastname] = useState();

  const [allEntry, setAllEntry] = useState([]);

  const handleFirstName = (e) => {
    setFirstname(e.target.value);
  };

  const handleLastName = (e) => {
    setLastname(e.target.value);
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
         <div>First Name: <input
          type="text"
          name="first name"
          value={firstName}
          onChange={handleFirstName}
          required
        /></div>
        <div>
        Last Name: <input
          type="text"
          name="last name"
          value={lastName}
          onChange={handleLastName}
          required
        /></div>
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
