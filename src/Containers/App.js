import React from 'react';

import LoginContainer from './LoginContainer'


import {cyan500} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

// import { Provider } from 'react-redux'
// import { Route,} from 'react-router'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Help from './Help'
import Statistics from "../Components/Statistics";
import Wealth from '../Components/Wealth'
import TeamMessageContainer from "./TeamMessageContainer";
import WealthContainer from "./WealthContainer";
import StatisticsContainer from "./StatisticsContainer";



const muiTheme = getMuiTheme({
    palette: {
        textColor: cyan500,
    },
    appBar: {
        height: 50,
    },
});

const supportsHistory = 'pushState' in window.history;

const App = () => (
    <MuiThemeProvider muiTheme = {muiTheme}>
        <Router
            basename='/'
            forceRefresh={supportsHistory}>

            <div>
            <Route exact path="/" component={LoginContainer} />
                <Route exact path = "/TeamMessage" component = {TeamMessageContainer}/>
                <Route exact path = "/Statistics" component = {StatisticsContainer}/>
                <Route exact path = "/Wealth" component = {WealthContainer}/>
                <Route exact path = "/Help" component = {Help}/>
            </div>
        </Router>
    </MuiThemeProvider>
);



export default App