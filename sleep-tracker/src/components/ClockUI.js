import React from 'react'
import { Link } from 'react-router-dom'
import Sidebar from './Sidebar'
import './clockUI.css'

  function ClockUI (props){
    return (
        <div className="clockUIContainer">
        <Sidebar/>
          <div className="clockUIContent">
          <button className="bedTimeBtn" onClick={props.getBedTime}><i className="far fa-moon"></i></button>
          <button className="wakeupBtn" onClick={props.getWakeTime}><i className="fas fa-sun"></i></button>
          </div>
        </div>
      )
    };

export default ClockUI