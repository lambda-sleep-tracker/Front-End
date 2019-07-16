import React, { Component } from 'react';
import { Bar, Line, Pie, Bubble, Radar, Scatter, Area, Mixed, Doughnut, Polar, HorizontalBar } from 'react-chartjs-2';
import { string } from 'prop-types';

class Chart extends Component {

    constructor(props) {
        super(props);
        this.state = {
            chartData: {

                labels: ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'],
                datasets: [{
                    label: 'Hours Slept',
                    data: [8, 7, 6, 7, 8.5, 7, 5.8],
                    backgroundColor: [
                        // 'rgba(255, 255, 255, 0.20)'
                        // '#007bff',
                        '#6610f2',
                        // '#6f42c1',
                        // '#e83e8c',
                        // '#dc3545',
                        // '#fd7e14',
                        // '#ffc107'
                    ]
                }
                ]
            }
        }
    }

    render() {
        return (
            <div className="chart">
                <Line
                    data={this.state.chartData}
                    option={{
                        maintainAspectRation: false
                    }}
                />
            </div>
        )
    }
}

export default Chart;
