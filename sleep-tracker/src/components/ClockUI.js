import React from 'react'
import axios from 'axios'

class ClockUI extends React.Component {
  state = {
    user: [
      {
        wakeupTime: 0,
        asleepTime: 1,
        date: 2,
      }
    ]
  };

  getTime = () => {
    let currentTime = new Date(),
      hours = currentTime.getHours(),
      minutes = currentTime.getMinutes();

      console.log(hours, minutes);

      let clockTime = (hours + " : " + minutes);
      console.log(clockTime)

      this.setState({[this.state.user.wakeupTime]: clockTime})
  }

  render() {

    return (
        <div>
          <button className="bedTimeBtn" onClick={this.getTime}><i class="far fa-moon"></i></button>
          <button className="wakeupBtn"><i class="fas fa-sun"></i></button>
        </div>
      )
    };
};

export default ClockUI