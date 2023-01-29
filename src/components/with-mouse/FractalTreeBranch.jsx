import React from 'react'
import { getFractalBoxStyle, getFractalContainerStyle } from './FractalHelpers'

export default function FractalTreeBranch(props) {
  let {
    depth = 1,
    lean,
    maxDepth = 7,
    side,
    size,
    sprout,
  } = props

  if (depth > maxDepth) {
    return null
  } else {
    return (
      <div style={getFractalContainerStyle({
        depth,
        lean,
        maxDepth,
        side,
        size,
        sprout
      })}>
        {/* This div renders the visible box */}
        <div style={getFractalBoxStyle(depth, maxDepth)} />
        <FractalTreeBranch
          depth={depth + 1}
          lean={lean}
          side='left'
          sprout={sprout}
          size={size}
        />
        <FractalTreeBranch
          depth={depth + 1}
          lean={lean}
          side='right'
          sprout={sprout}
          size={size}
        />
      </div>
    )
  }
}
