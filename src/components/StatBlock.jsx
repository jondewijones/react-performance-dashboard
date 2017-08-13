import React, { Component } from 'react'

export class StatBlock extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        //console.log('in StatBlock');
        return (
            <div className="col col--lg-18 padding-right--1 padding-left-sm--1 padding-left-md--1 margin-top--2 margin-right--1 margin-left-sm--0 margin-left-md--0 margin-left-lg--0 border--left-thick">
                <p>{this.props.title}</p>
                <p className="font-size--24 margin-top--0">{this.props.data.figure}{this.props.data.unit}</p>
            </div>
        )
    }

}