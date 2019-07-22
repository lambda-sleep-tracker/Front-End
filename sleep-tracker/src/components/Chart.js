import React, { Component } from 'react';
import ShowSleeps from './ShowSleeps';
import { Bar, Line, Pie, Bubble, Radar, Scatter, Area, Mixed, Doughnut, Polar, HorizontalBar } from 'react-chartjs-2';
import { string } from 'prop-types';

class Chart extends Component {

    constructor(props) {
        super(props);
        this.state = {
            chartData: props.chartData,
            user: this.props.user
        }

    }

    static defaultProps = {
        displayTitle: true,
        displayLegend: true,
        legendPosition: 'bottom',
    }

    render() {
        return (
            // <div className="chart">
            //     <Bar
            //         data={this.state.chartData}
            //         options={{
            //             title: {
            //                 display: this.props.displayTitle,

            //                 text: 'Your Weekly Sleep Stats',
            //                 fontSize: 35
            //             },
            //             legend: {
            //                 display: this.props.displayLegend,
            //                 position: this.props.legendPosition
            //             }
            //         }}
            //     />
            // </div>
            <ShowSleeps getSleeps={this.props.getSleeps} userSleepData={this.props.userSleepData} />
        )
    }
}

export default Chart;