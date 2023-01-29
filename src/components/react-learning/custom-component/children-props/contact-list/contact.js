import React from "react";

export function Contact(props) {
  let { email, name, photoURL, ...other } = props;
  let names = name.split("");
  let initials = names.map((name) => name[0].toUpperCase()).join("");

  return (
    <div className="Contact">
      <div className="Contact-avatar">
        {initials}
        {photoURL && <img src={photoURL} />}
      </div>
      <span className="Contact-name">{name}</span>
      <a href={"mailto:" + email}>{email}</a>
    </div>
  );
}
