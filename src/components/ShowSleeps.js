import React, { Component } from 'react';
import ShowSleepStyles from './ShowSleepStyles.css';
import axios from 'axios';


const ShowSleeps = (props) => {
    console.log(props.userSleepData, "UserSleepData")
    return (

        <div>
            <h1>Sleep Stats</h1>
            <div className="show-sleeps-container">
                <div>{props.userSleepData.map(sleep =>
                    <div className="show-sleeps-box">
                        <p>User ID:</p>
                        <h2>{sleep.user_id}</h2>

                        <div className="sleeps-li">
                            <h2>{sleep.date}</h2>
                        </div>

                        <h3>went to bed at:</h3>
                        <div className="sleeps-li">{sleep.bedtime}</div>

                        <h3>wake up times:</h3>
                        <div className="sleeps-li">{sleep.waketime}</div>

                        <h3>Sleep Quality</h3>
                        <div className="sleeps-li">{sleep.sleepquality}</div>

                        <h3>sleep id:</h3>
                        <div className="sleeps-li">{sleep.id}</div>
                    </div>
                )}
                </div>
            </div>
        </div>

    )

}

export default ShowSleeps;