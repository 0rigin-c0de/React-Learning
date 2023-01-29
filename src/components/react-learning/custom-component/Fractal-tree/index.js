import { FractalHelpers } from "./FractalHelpers.js";
import React from "react";
import ReactDOM from "react-dom";

function FractalBox(props) {
  if (props.depth > props.maxDepth) {
    return null;
  } else {
    return (
      <div
        style={FractalHelpers({
          depth: props.depth,
          heightFactor: 0.4,
          lean: 0,
          maxDepth: props.maxDepth,
          side: "left",
        })}
      >
        <FractalBox depth={props.depth + 1} />
      </div>
    );
  }
}

FractalBox.defaultProps = {
  depth: 1,
  maxDepth: 8,
};

ReactDOM.render(
  <FractalBox
    // You probably don't want to change this. See below for why.
    maxDepth={8}
  />,
  document.getElementById("root")
);
