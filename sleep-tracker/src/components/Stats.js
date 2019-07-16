import React from 'react';
import Chart from './Chart';
import StatStyles from './StatStyles.css';
// import 'sleep-tracker/public/assets/css/material-kit.css';

const Stats = props => {
    return (
        <div className="stats-container">
            <div className="sidebar">
                <div className="icon-box">
                    <a href="#">
                        <i className="fas fa-cloud-moon fa-3x statAwesome"></i>
                    </a>
                </div>
                <div className="icon-box">
                    <i className="fas fa-chart-area fa-3x statAwesome"></i>
                </div>
                <div className="icon-box">
                    <i className="fas fa-pencil-alt fa-3x statAwesome"></i>
                </div>
                <div className="icon-box">
                    <a href="#">
                        <i className="fas fa-trash fa-3x statAwesome"></i>
                    </a>
                </div>
                <div className="icon-box">
                    <a href="#">
                        <i className="fas fa-cog fa-3x statAwesome"></i>
                    </a>
                </div>

            </div>
            <div className="stats-main-container">
                <div className="stats-main">
                    <div className="stats-nav">
                        <h1>HYPNOS</h1>
                        <i className="fas fa-bars fa-3x statAwesome"></i>
                    </div>
                    <div className="chart-main">
                        <Chart />
                    </div>
                </div>
                <div className="stats-bottom-section">

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div>
        </div >
    )
}

export default Stats;