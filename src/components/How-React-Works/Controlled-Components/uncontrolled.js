import React from "react";
import ReactDOM from "react-dom";

const App = (props) => (
  <div>
    <input type="text" />
    <span> rendered {props.count} times </span>
  </div>
);

let renderCount = 0;
function render() {
  ReactDOM.render(
    <App count={renderCount++} />,
    document.getElementById("root")
  );
}

// Render the App component once every second.
window.setInterval(render, 1000);
