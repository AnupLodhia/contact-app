import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function EditContact(props) {
  const { id, name, email } = props.editContactHandler.location.state.contact;
  //console.log(props);
  const [contact, setContact] = useState({
    id,
    name,
    email,
  });

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (contact.name === "" || contact.email === "") {
      alert("All fields are mandatory");
    }
    console.log(contact.name);
    console.log(contact.email);
    console.log(props.updateContactHandler);
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
      <h1>Edit Contact</h1>
      <form className="ui form" onSubmit={handleSubmit} action="/">
        <div className="field">
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={handleChange}
            value={name}
          />
        </div>
        <div className="field">
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            value={email}
          />
        </div>
        <button className="ui button blue">Edit</button>
      </form>
    </div>
  );
}

export default EditContact;
