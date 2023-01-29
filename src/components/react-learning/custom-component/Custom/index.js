import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Contact } from "./Contact.js";

let element = React.createElement(
  // Custom types can be used in place of HTML element names
  Contact,

  // Custom types can accept any props they need
  {
    name: "James K Nelson",
    email: "james@frontarm.com",
  }
);

ReactDOM.render(element, document.getElementById("root"));
