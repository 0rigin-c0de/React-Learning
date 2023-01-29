import React from "react";

export const containerStyle = {
  display: "inline-block",
  borderRadius: "2px",
  textAlign: "right",
  backgroundColor: "#0f0035",
  color: "#ffb3cb",
  fontFamily: "'Lato', 'PT Sans', Helvetica, sans-serif",
};
export const timeStyle = {
  fontSize: "20px",
  lineHeight: "20px",
  height: "29px",
  padding: "5px 5px 4px",
  fontFamily: "'Lato', 'PT Sans', Helvetica, sans-serif",
};
export const titleStyle = {
  fontSize: "10px",
  lineHeight: "10px",
  padding: "5px 5px 0",
  color: "#ff6796",
};
export const buttonStyle = {
  backgroundColor: "transparent",
  border: 0,
  borderTop: "1px solid #ff6796",
  fontSize: "10px",
  color: "#ffb3cb",
  padding: "5px",
  cursor: "pointer",
};
export const disabledButtonStyle = Object.assign({}, buttonStyle, {
  color: "rgb(70, 58, 62)",
});

export function TimerDisplay({
  title,
  margin = "5px",
  time,
  active,
  onStart,
  onStop,
  onReset,
}) {
  return React.createElement(
    "div",
    { style: Object.assign({ margin }, containerStyle) },
    title && React.createElement("div", { style: titleStyle }, title),
    React.createElement(
      "div",
      { style: timeStyle },
      time ? time.toFixed(3) : ""
    ),
    React.createElement(
      "button",
      {
        style: onStart || onStop ? buttonStyle : disabledButtonStyle,
        onClick: active ? onStop : onStart,
      },
      active ? "STOP" : "START"
    ),
    React.createElement(
      "button",
      {
        style: time === 0 || !onReset ? disabledButtonStyle : buttonStyle,
        onClick: onReset,
      },
      "RESET"
    )
  );
}
