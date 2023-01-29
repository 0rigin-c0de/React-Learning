import PropTypes from "prop-types";
import React from "react";
import "./styles.css";

export function Contact(props) {
  let { email, name, photoURL, ...other } = props;
  let names = name.split(" ");
  let initials = names.map((name) => name[0].toUpperCase()).join("");

  return (
    <div className="Contact" {...other}>
      <div className="Contact-avatar">
        {initials}
        {photoURL}
      </div>
      <span className="Contact-name">{name}</span>
      <a href={"mailto:" + email}>{email}</a>
    </div>
  );
}

export function ContactList(props) {
  return (
    <div className="ContactList">
      <h2 className="ContactList-title">Contacts</h2>
      {props.children}
    </div>
  );
}

export class ContactForm extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
    };
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleClickAdd = this.handleClickAdd.bind(this);
  }

  render() {
    return (
      <div className="ContactForm">
        <label>
          <span>Name</span>
          <input value={this.state.name} onChange={this.handleChangeName} />
        </label>
        <label>
          <span>E-mail</span>
          <input value={this.state.email} onChange={this.handleChangeEmail} />
        </label>
        <button onClick={this.handleClickAdd}>Add</button>
      </div>
    );
  }

  handleChangeName(event) {
    this.setState({
      name: event.target.value,
    });
  }

  handleChangeEmail(event) {
    this.setState({
      email: event.target.value,
    });
  }

  handleClickAdd(event) {
    this.props.onAddContact(this.state);
  }
}

ContactForm.propTypes = {
  onAddContact: PropTypes.func.isRequired,
};
