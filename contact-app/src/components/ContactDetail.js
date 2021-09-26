import React from "react";
import { Link } from "react-router-dom";
import user from "../images/img_avatar.png";

function ContactDetail(props) {
  const { name, email } = props.location.param;
  return (
    <div className="main" style={{ marginTop: "80px" }}>
      <div className="ui card centered">
        <div className="image">
          <img src={user} alt="profile" />
        </div>
        <div className="content">
          <div className="header">{name}</div>
          <div className="description">{email}</div>
        </div>
      </div>
      <div style={{ textAlign: "center" }}>
        <Link to="/">
          <button className="ui button blue center">
            {" "}
            Back to Contact List
          </button>
        </Link>
      </div>
    </div>
  );
}

export default ContactDetail;
