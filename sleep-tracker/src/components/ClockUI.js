import React from 'react'
import axios from 'axios'

class ClockUI extends React.Component {
  state = {
    user: [
      {
        bedtime: 0,
        waketime: 1,
        sleepquality: 2,
        date: 3,
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