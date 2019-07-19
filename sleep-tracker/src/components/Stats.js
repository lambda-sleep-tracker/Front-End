import React, { Component } from 'react';
import Chart from './Chart';
import StatStyles from './StatStyles.css';
import Sidebar from './Sidebar';
// import 'sleep-tracker/public/assets/css/material-kit.css';

class Stats extends Component {
    constructor() {
        super();
        this.state = {
            chartData: {}
        }
    }

    componentWillMount() {
        this.getChartData();
    }

    getChartData() {
        // Axios Call goes here
        this.setState({
            chartData: {
                labels: ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'],
                datasets: [{
                    label: 'Hours Slept',
                    data: [8, 7, 6, 7, 8.5, 7, 5.8],
                    backgroundColor: [
                        'rgba(255, 255, 255, 0.20)',
                        'rgba(255, 255, 255, 0.20)',
                        'rgba(255, 255, 255, 0.20)',
                        'rgba(255, 255, 255, 0.20)',
                        'rgba(255, 255, 255, 0.20)',
                        'rgba(255, 255, 255, 0.20)',
                        'rgba(255, 255, 255, 0.20)'
                    ]
                }
                ]
            }
        })
    }

    render() {
        return (
            <div className="stats-container" >
            <Sidebar/>
                <div className="stats-main-container">
                    <div className="stats-main">
                        <div className="stats-nav">
                            <h1>HYPNOS</h1>
                            <i className="fas fa-bars fa-2x statAwesome"></i>
                        </div>
                        <div className="chart-main">
                            {/** Insert Chart component below and passing in the chart data from state */}
                            <Chart chartData={this.state.chartData} />
                            <div className="change-chart-buttons">
                                <button>7 days</button><button>30 days</button><button>90 days</button>
                            </div>
                            <div className="display-average">
                                <div>
                                    <p>Average Sleep:</p>
                                </div>
                                <div>
                                    {/** here we will pass in the average/best sleep time */}
                                    <p>7.5 Hours</p>
                                </div>
                            </div>
                        </div>{/* end chart-main */}
                    </div>
                    <div className="stats-bottom-section">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Stats;