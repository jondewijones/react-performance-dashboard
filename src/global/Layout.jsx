import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

export default class Layout extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activeTab: ""
        };

        this.handleClick = this.handleClick.bind(this);
    }

    changeActiveTabState(tab) {
        if (tab === '/' || tab === '/traffic') {
            this.setState({activeTab: 'traffic'});
            return;
        }
        if (tab === '/service') {
            this.setState({activeTab: 'service'});
            return;
        }
    }

    componentWillMount() {
        this.changeActiveTabState(window.location.pathname)
    }


    handleClick(e) {
        this.changeActiveTabState(e.target.pathname);
    }

    render() {
        // console.log(this.props);
        const activeTab = this.state.activeTab;
        return (
            <div>
                <div className=" background--ship-grey">
                    <div className="wrapper">
                        <nav className="tabs--js">
                            <ul className="list--neutral flush">
                                <li className="tab__item width-sm--6">
                                    {activeTab === "traffic" ?
                                        <span className="tab__link tab__link--active">Traffic</span>
                                        :
                                        <Link className="tab__link" to="/traffic" onClick={this.handleClick}>Traffic</Link>
                                    }
                                </li>
                                <li className="tab__item width-sm--6">
                                    {activeTab === "service" ?
                                        <span className="tab__link tab__link--active">Service</span>
                                        :
                                        <Link className="tab__link" to="/service" onClick={this.handleClick}>Service</Link>
                                    }
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div className="wrapper">
                    {this.props.children}
                </div>
            </div>
        )
    }
}

// function mapStateToProps(state) {
//     return state;
// }
//
// export default connect(mapStateToProps)(Layout);
