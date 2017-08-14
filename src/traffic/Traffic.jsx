import React, { Component } from 'react';
import { connect } from 'react-redux';

import { receivedTrafficData, updateActiveTab } from '../state/actions';

import { buildTrafficPageData } from './trafficPageData';

import { HighlightBlock } from '../components/HighlightBlock.jsx';
import { ChartBlock } from '../components/ChartBlock.jsx';
import { StatBlock } from '../components/StatBlock.jsx';

class Traffic extends Component {

    constructor(props) {
        super(props);

        this.state = {
            hasData: false,
            error: {
                hasError: false,
                message: ""
            }
        };
    }

    componentWillMount() {
        if (!this.state.hasData && !this.props.trafficPageData.length) {
            fetch('https://performance.ons.gov.uk/analytics.json', {
                method: 'get'
            }).then(response => {
                if (response.ok) {
                    return response.json();
                }
                v
            }).then(json => {
                this.props.dispatch(receivedTrafficData(buildTrafficPageData(json)));
            }).catch(() => {
                this.setState({error: {
                    hasError: true,
                    message: "Unable to retrieve data."
                }});
            });
        }

        this.props.dispatch(updateActiveTab("traffic"));
    }

    componentWillReceiveProps() {
        this.setState({hasData: true});
    }

    render() {
        let pageData = this.props.trafficPageData;
        return(
            <div>
            <h2>Website traffic</h2>
                {this.state.hasData ?
                    pageData.map((item, index) => {
                        if (item.type === 'highlight-block') {
                            return <HighlightBlock key={index} {...item} />
                        }

                        if (item.type === "chart-block") {
                            return <ChartBlock key={index} {...item} />
                        }

                        if (item.type === 'stat-block') {
                            return <StatBlock key={index} {...item} />
                        }
                    })
                    : ""
                }
                {this.state.error.hasError ?
                    <p>{this.state.error.message}</p> : ""
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps)(Traffic);
