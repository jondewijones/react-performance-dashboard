import React, { Component } from 'react'
import ReactHighcharts from 'react-highcharts'

export class ChartBlock extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={this.props.container}>
                <h3>{this.props.title}</h3>
                <ReactHighcharts config={this.props.config} />
            </div>
        )
    }

}