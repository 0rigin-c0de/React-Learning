import React from "react";

export function Contact(props) {
  return (
    <div className="Contact">
      <span className="Contact-name">{props.name}</span>
      <a href={"mailto:" + props.email}>{props.email}</a>
    </div>
  );
}
