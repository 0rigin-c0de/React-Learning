import React from "react";
import "./style.css";

function Contact(props) {
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

ReactDOM.render(
  <Contact
    name="Shunnu"
    email="shunnu807@gmail.com"
    photoURL="https://avatars.githubusercontent.com/u/106311923?v=4"
  />,
  document.getElementById("root")
);
