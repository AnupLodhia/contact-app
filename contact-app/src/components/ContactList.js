import React from "react";
import ContactCard from "./ContactCard";
import { Link } from "react-router-dom";

function ContactList(props) {
  const deleteContactHandler = (id) => {
    props.getContactId(id);
  };
  return (
    <div className="main">
      <h2 style={{ marginTop: "80px" }}>
        Contact List
        <Link to="/add">
          <button
            className="ui button blue right floated"
            style={{ marginLeft: "auto" }}
          >
            Add Contact
          </button>
        </Link>
      </h2>
      {props.contacts.map((contact) => (
        <ContactCard
          contact={contact}
          key={contact.id}
          clickHandler={deleteContactHandler}
        />
      ))}
    </div>
  );
}

export default ContactList;
