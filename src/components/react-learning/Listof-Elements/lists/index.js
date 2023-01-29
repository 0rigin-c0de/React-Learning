import React from 'react'
import ReactDOM from 'react-dom'
import { getSpiralStyle } from './getSpiralStyle.js'

let boxElements = []
for (let i = 0; i < 10; i++) {
  let style = getSpiralStyle(i, 100, 50*Math.PI/180)
  let boxElement = React.createElement('div', { style }, i)
  boxElements.push(boxElement)
}

let containerElement = React.createElement('div', {}, boxElements)

ReactDOM.render(
  containerElement,
  document.getElementById('root')
)