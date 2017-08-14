import React, { Component } from 'react';
import { connect } from 'react-redux';

import { receivedServiceData, updateActiveTab } from '../state/actions';

import { buildServicePageData } from './servicePageData';

import { ChartBlock } from '../components/ChartBlock.jsx';
import { StatBlock } from '../components/StatBlock.jsx';

class Service extends Component {

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
        if (!this.state.hasData && !this.props.servicePageData.length) {
            fetch('https://performance.ons.gov.uk/responsetimes.json', {
                method: 'get'
            }).then(function (response) {
                if (response.ok) {
                    return response.json();
                }
                throw new Error(`Network response was not ok - ${response.status}`);
            }).then(json => {
                this.props.dispatch(receivedServiceData(buildServicePageData(json)));
            }).catch(() => {
                this.setState({error: {
                    hasError: true,
                    message: "Unable to retrieve data."
                }});
            });
        }

        this.props.dispatch(updateActiveTab("service"));
    }

    componentWillReceiveProps() {
        this.setState({hasData: true});
    }

    render() {
        let pageData = this.props.servicePageData;
        return(
            <div>
                <h2>Website response times</h2>
                <p>Time taken to return a page request, measured through Pingdom</p>
                {this.state.hasData ?
                    pageData.map((item, index) => {
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

export default connect(mapStateToProps)(Service);
