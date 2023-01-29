let createElement = React.createElement;

const square = createElement("div", {
  // The `style` prop accepts an object of styles
  style: {
    width: "100px",
    height: "100px",
    backgroundColor: "red",
    margin: "10px",
  },
});

const container = createElement(
  "div",
  {
    // The `className` prop set's the element's CSS class.
    // The `blue-border` class is defined in styles.css.
    className: "blue-border",
  },

  // The remaining arguments list the element's children
  square,
  square
);

ReactDOM.render(container, document.getElementById("root"));
