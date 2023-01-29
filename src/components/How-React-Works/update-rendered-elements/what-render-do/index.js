import React from "react";
import ReactDOM from "react-dom";
import { billionaires } from "./billionaires.js";
import { ContactList, Contact } from "./Contacts.js";

const domNode = document.getElementById("root");

// The App's top-level component, which is rendered both initially
// and after an update.
function App(props) {
  return (
    <ContactList>
      {props.contacts.map((contact, i) => (
        <Contact {...contact} key={i} />
      ))}
      <button onClick={update}>Add</button>
    </ContactList>
  );
}

// Called whenever you click "Add"
function update() {
  let updatedContacts = billionaires.concat({
    name: "Masayoshi Son",
    email: "mson@softbank.co.jp",
  });

  ReactDOM.render(<App contacts={updatedContacts} />, domNode);
}

// The initial render
ReactDOM.render(<App contacts={billionaires} />, domNode);
