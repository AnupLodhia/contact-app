import React from "react";
import { Link } from "react-router-dom";
import user from "../images/img_avatar.png";

function ContactCard(props) {
  const { id, name, email } = props.contact;
  const contact=props.contact;
  //console.log(props.contact);
  return (
    <div className="ui celled list">
      <div className="item" style={{ display: "flex", padding: "20px" }}>
        <img src={user} alt="profile" className="ui avatar image" />
        <div className="content" style={{ flex: "1" }}>
          <Link to={{ pathname: `/contact/${id}`, param: props.contact }}>
            <div className="header">{name}</div>
            <div>{email}</div>
          </Link>
        </div>
        <Link
          to={{
            pathname: `/edit/${id}`,
            state: { contact:contact }
          }}>
          <i
          className="edit alternate outline icon"
          style={{ color: "blue", marginTop: "7px" }}
        //onClick={() => props.clickHandler(id)}
        />
      </Link>
      <i
        className="trash alternate outline icon"
        style={{ color: "red", marginTop: "7px", marginLeft: "20px" }}
        onClick={() => props.clickHandler(id)}
      />
    </div>
    </div >
  );
}

export default ContactCard;
