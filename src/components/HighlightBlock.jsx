import React, { Component } from 'react';

export class HighlightBlock extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="highlight-block">
                <p className="font-size--24 flush">{this.props.data.figure}{this.props.data.unit}</p>
                <p className="flush">{this.props.title}</p>
            </div>
        )
    }
}