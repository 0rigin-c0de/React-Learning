let createElement = React.createElement;

let rootElement = createElement(
  "div",
  {},
  createElement(
    "div",
    { className: "ContactList" },
    createElement("h2", { className: "ContactList-title" }, "Contacts"),
    createElement(
      "div",
      { className: "Contact" },
      createElement("div", { className: "Contact-avatar" }, "Sk"),
      createElement("span", { className: "Contact-name" }, "Sunil Kumar"),
      createElement(
        "a",
        { href: "mailto:codingninnja@gmail.com" },
        "codingninnja@gmail.com"
      )
    ),
    createElement(
      "div",
      { className: "Contact" },
      createElement("div", { className: "Contact-avatar" }, "Sh"),
      createElement("span", { className: "Contact-name" }, "Shunnu"),
      createElement(
        "a",
        { href: "mailto:Shunnu@gmail.com" },
        "Shunnu@gmail.com"
      )
    )
  )
);

// The `ReactDOM` variable is set by the second `<script>` tag
// in the above HTML file
let domNode = document.getElementById("root");
ReactDOM.render(rootElement, domNode);
