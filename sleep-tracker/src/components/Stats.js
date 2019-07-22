import React, { Component } from 'react';
import Chart from './Chart';
import StatStyles from './StatStyles.css';
import Sidebar from './Sidebar';
import DeleteForm from './DeleteForm';
// import axios from "axios";
import ShowSleeps from './ShowSleeps';

class Stats extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chartData: {}
        }
    }

    componentWillMount() {
        this.getChartData();
    }

    getChartData() {
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
                <Sidebar />
                <div className="stats-main-container">
                    <div className="stats-main">
                        <div className="stats-nav">
                            <h1>HYPNOS</h1>
                            <i className="fas fa-bars fa-2x statAwesome"></i>
                        </div>
                        <div className="chart-main">
                            {/** Insert Chart component below and passing in the chart data from state */}
                            <Chart chartData={this.state.chartData} getSleeps={this.props.getSleeps} userSleepData={this.props.userSleepData} />
                        </div>
                    </div>
                    <div className="stats-bottom-section">
                        <div className="showSleeps">
                            <div className="sleeps-container">

                            </div>
                        </div>
                        <div><DeleteForm /></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Stats;