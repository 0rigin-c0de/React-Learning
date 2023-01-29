import React from "react";
import "./style.css";
import { Contact } from "contact.js";
import { billionaires } from "./billionaires";
import { element } from "prop-types";

function ContactList(props) {
  return (
    <div className="ContactList">
      <h2 className="ContactList-tittle">Contacts</h2>
      {props.children}
    </div>
  );
}

let contactElements = billionaires.map((billionaires) => (
  <Contact>{...billionaires} key= {billionaires.email}</Contact>
));

ReactDOM.render(
  <ContactList>{contactElements}</ContactList>,
  document.getElementById("root")
);
