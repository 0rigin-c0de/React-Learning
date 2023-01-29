import React from "react";
import ReactDOM from "react-dom";
import { TimerDisplay } from "./TimerDisplay";

class Timer extends React.Component {
  constructor() {
    super();
    this.state = {
      time: 0,
    };
    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
    this.reset = this.reset.bind(this);
  }

  render() {
    return React.createElement(TimerDisplay, {
      title: "POMODORO",
      time: this.getTimeRemaining(),
      active: this.state.active,
      onStart: this.start,
      onStop: this.stop,
      onReset: this.reset,
    });
  }

  getTimeRemaining() {
    return Math.max((60 * 25 - this.state.time) / 60, 0);
  }

  start() {
    this.setState({
      lastTime: Date.now(),
      active: setInterval(() => {
        let now = Date.now();
        let newTime = this.state.time + (now - this.state.lastTime) / 1000;
        this.setState({
          time: newTime,
          lastTime: now,
        });

        // If the Timer element receives an `onChange` prop, then
        // call it each time the timer's current reading changes.
        if (this.props.onChange) {
          this.props.onChange(this.getTimeRemaining());
        }
      }, 37),
    });
  }
  stop() {
    clearInterval(this.state.active);
    this.setState({
      active: null,
    });
  }
  reset() {
    this.setState({
      time: 0,
    });
    if (this.props.onChange) {
      this.props.onChange(25);
    }
  }
}

ReactDOM.render(
  <Timer
    onChange={(time) => {
      document.getElementById("latestTime").innerHTML =
        parseInt(time * 100) / 100;
    }}
  />,
  document.getElementById("root")
);
