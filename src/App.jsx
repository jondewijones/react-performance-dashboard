import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux';
import reducers from './state/reducers';
import { initalState } from './state/initialState';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ReactHighcharts from 'react-highcharts';

import Layout from './global/Layout.jsx';
import Traffic from './traffic/Traffic.jsx';
import Service from './service/Service.jsx';

let store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

class App extends Component {

    render() {
        return (
            <Provider store={store}>
                    <Router>
                        <Layout>
                            <Switch>
                                <Route exact path="/" component={Traffic}/>
                                <Route path="/traffic" component={Traffic}/>
                                <Route path="/service" component={Service}/>
                            </Switch>
                        </Layout>
                    </Router>
            </Provider>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));