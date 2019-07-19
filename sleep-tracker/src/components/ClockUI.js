import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import "./clockUI.css";
import moment from "moment";

class ClockUI extends React.Component {
  constructor(props) {
    super(props);
  }

  getClockTime() {
    setInterval(() => {
      const clock = document.getElementById('clock');
      const now = moment();
      const clockTime = now.format('hh:mm:ss a')
      clock.textContent = clockTime;
      // console.log(clockTime)
    }, 1000)
  };

  onSubmit(value) {
    console.log(value)
  }

  render() {
    return (
      <div className="clockUIContainer">
        <Sidebar />
        {this.getClockTime()}
        <div className="clockUIContent">
          <div className="clockFace">
            <p id="clock">{moment().format('hh:mm:ss a')}</p>
          </div>
          <button className="bedTimeBtn" onClick={this.props.getBedTime}>
            <i className="far fa-moon" />
          </button>
          <button className="wakeupBtn" value="wakeupBtn" onClick={e => this.props.getWakeTime}>
            <i className="fas fa-sun" />
          </button>
        </div>
      </div>
    );
  }
}

export default ClockUI;
