import React from 'react';
import FontAwesomeIcon from 'react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import StatStyles from './StatStyles.css';


const Stats = props => {
    return (
        <div className="stats-container">
            <div className="sidebar">
                <div className="icon-box">
                    <FontAwesomeIcon icon={faCoffee} />
                </div>
            </div>
            <div className="stats-main-container">
                <div className="stats-main">
                    <h1>Sleep Tracker App</h1>
                </div>
                <div className="stats-bottom-section">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div>
        </div>
    )
}

export default Stats;