import React, { useState } from "react";
import { useHistory } from "react-router";

function AddContact(props) {
  const [contact, setContact] = useState({
    name: "",
    email: "",
  });

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (contact.name === "" || contact.email === "") {
      alert("All fields are mandatory");
    }
    console.log(contact.name);
    console.log(contact.email);
    props.addContactHandler(contact);
    setContact({
      name: "",
      email: "",
    });
    history.push("/");
  };

  const handleChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    setContact({
      ...contact,
      [name]: value,
    });
  };

  return (
    <div className="ui main">
      <div className="ui hidden section divider"></div>
      <h1>Add Contact</h1>
      <form className="ui form" onSubmit={handleSubmit} action="/">
        <div className="field">
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={handleChange}
            value={contact.name}
          />
        </div>
        <div className="field">
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            value={contact.email}
          />
        </div>
        <button className="ui button blue">Add</button>
      </form>
    </div>
  );
}

export default AddContact;
