import { FractalHelpers } from "./FractalHelpers.js";
import { createElement } from "react";

export function FractalTree(props) {
  if (props.depth > props.maxDepth) {
    return null;
  } else {
    return createElement(
      "div",
      {
        style: FractalHelpers({
          depth: props.depth,
          heightFactor: props.sprout,
          lean: props.lean,
          maxDepth: props.maxDepth,
          side: props.side,
          size: props.size,
        }),
      },
      createElement(FractalTree, {
        depth: props.depth + 1,
        lean: props.lean,
        side: "left",
        sprout: props.sprout,
        size: props.size,
      }),
      createElement(FractalTree, {
        depth: props.depth + 1,
        lean: props.lean,
        side: "right",
        sprout: props.sprout,
        size: props.size,
      })
    );
  }
}

FractalTree.defaultProps = {
  depth: 1,
  sprout: 0.4,
  lean: 0,
  maxDepth: 8,
  size: 100,
};
