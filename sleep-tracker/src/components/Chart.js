import React, { Component } from 'react';
import { Bar, Line, Pie, Bubble, Radar, Scatter, Area, Mixed, Doughnut, Polar, HorizontalBar } from 'react-chartjs-2';
import { string } from 'prop-types';

class Chart extends Component {

    constructor(props) {
        super(props);
        this.state = {
            chartData: props.chartData,
            user: 'Chris'
        }

    }

    static defaultProps = {
        displayTitle: true,
        displayLegend: true,
        legendPosition: 'bottom',
    }

    render() {
        return (
            <div className="chart">
                <Polar
                    data={this.state.chartData}
                    options={{
                        title: {
                            display: this.props.displayTitle,
                            // pass in the users name in the stats title 
                            text: this.state.user + '\'s ' + 'Weekly Sleep Stats',
                            fontSize: 35
                        },
                        legend: {
                            display: this.props.displayLegend,
                            position: this.props.legendPosition
                        }
                    }}
                />
            </div>
        )
    }
}

export default Chart;
