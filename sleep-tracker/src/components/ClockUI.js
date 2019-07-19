import React from 'react'
import { Link } from 'react-router-dom'

  function ClockUI (props){
    return (
        <div>
          <button className="bedTimeBtn" onClick={props.getBedTime}><i className="far fa-moon"></i></button>
          <button className="wakeupBtn" onClick={props.getWakeTime}><i className="fas fa-sun"></i></button>
          <Link to ={'/stats'}><p>Stats</p></Link>
        </div>
      )
    };

export default ClockUI