import React from "react";
import ReactDOM from "react-dom";
import { Contact, ContactList, ContactForm } from "./Contacts";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      contacts: [
        {
          name: "Bill Gates",
          email: "billg@microsoft.com",
          photoURL:
            "https://frontarm.com/courses/react-fundamentals/bill-gates.jpg",
        },
        {
          name: "Jeff Bezos",
          email: "jeff@amazon.com",
          photoURL:
            "https://frontarm.com/courses/react-fundamentals/jeff-bezos.jpg",
        },
        {
          name: "Mark Zuckerberg",
          email: "zuck@fb.com",
        },
      ],
    };
  }

  render() {
    return (
      <ContactList>
        {this.state.contacts.map((contact, i) =>
          React.createElement(Contact, { ...contact, key: i })
        )}
        <ContactForm
          onAddContact={(contact) => {
            this.setState({
              contacts: this.state.contacts.concat(contact),
            });
          }}
        />
      </ContactList>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
