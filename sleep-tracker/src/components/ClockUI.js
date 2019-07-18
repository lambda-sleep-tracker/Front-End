import React from 'react'

  function ClockUI (props){
    return (
        <div>
          <button className="bedTimeBtn" onClick={props.getBedTime}><i className="far fa-moon"></i></button>
          <button className="wakeupBtn" onClick={props.getWakeTime}><i className="fas fa-sun"></i></button>
        </div>
      )
    };

export default ClockUI