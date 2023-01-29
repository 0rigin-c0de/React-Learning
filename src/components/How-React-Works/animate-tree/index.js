import React from "react";
import ReactDOM from "react-dom";
import { FractalTree } from "./FractalTree";

const startTime = Date.now();

function renderFrame() {
  let delta = startTime - Date.now();

  let lean = 0.1 * Math.sin(delta / 2000);
  let sprout = 0.3 + 0.05 * Math.sin(delta / 1300);

  ReactDOM.render(
    <FractalTree lean={lean} size={100} sprout={sprout} />,
    document.getElementById("root")
  );

  window.requestAnimationFrame(renderFrame);
}

renderFrame();
