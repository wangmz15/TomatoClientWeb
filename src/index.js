import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import promiseMiddleware from 'redux-promise-middleware'

import './index.css';
import reducer from './Reducers'
import registerServiceWorker from './registerServiceWorker';

import {cyan500} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import {BrowserRouter as Router, Route} from 'react-router-dom'

import LoginContainer from './Containers/LoginContainer'
import TeamMessageContainer from "./Containers/TeamMessageContainer";
import StatisticsContainer from "./Containers/StatisticsContainer";
import Help from "./Containers/Help";
import PropertyContainer from "./Containers/PropertyContainer";
import ReplyDialog from "./Components/BuyerDialog";


const middleware = [
    thunkMiddleware,
    promiseMiddleware({
        promiseTypeSuffixes: ['REQ', 'ACK', 'ERR'],
    }),
];

const store = createStore(
    reducer,
    applyMiddleware(...middleware),
);


const muiTheme = getMuiTheme({
    palette: {
        textColor: cyan500,
    },
    appBar: {
        height: 50,
    },
});

ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider muiTheme = {muiTheme}>
            <Router basename='/'>
                <div>
                    <Route exact path="/" component={LoginContainer} />
                    <Route exact path = "/TeamMessage" component = {TeamMessageContainer}/>
                    <Route exact path = "/Statistics" component = {StatisticsContainer}/>
                    <Route exact path = "/Property" component = {PropertyContainer}/>
                    <Route exact path = "/Help" component = {Help}/>
                </div>
            </Router>
        </MuiThemeProvider>
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
