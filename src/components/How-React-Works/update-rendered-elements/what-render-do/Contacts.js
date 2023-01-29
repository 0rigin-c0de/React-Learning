import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

export function ContactList(props) {
  return (
    <div className="ContactList">
      <h2 className="ContactList-title">Contacts</h2>
      {props.children}
    </div>
  );
}

export function Contact(props) {
  let { email, name, photoURL, ...other } = props;
  let names = name.split(" ");
  let initials = names.map((name) => name[0].toUpperCase()).join("");

  return (
    <div className="Contact" {...other}>
      <div className="Contact-avatar">
        {initials}
        {photoURL && <img src={photoURL} />}
      </div>
      <span className="Contact-name">{name}</span>
      <a href={"mailto:" + email}>{email}</a>
    </div>
  );
}
