import React from 'react'

  function ClockUI (props){
    return (
        <div>
          <button className="bedTimeBtn" onClick={props.getTime}><i class="far fa-moon"></i></button>
          <button className="wakeupBtn"><i class="fas fa-sun"></i></button>
        </div>
      )
    };

export default ClockUI