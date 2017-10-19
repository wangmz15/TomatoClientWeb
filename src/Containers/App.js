import React from 'react';

import LoginContainer from './LoginContainer'


import {cyan500} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

// import { Provider } from 'react-redux'
// import { Route,} from 'react-router'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Help from './Help'
import Statistics from "./Statistics";
import Wealth from './Wealth'
import TeamMessage from './TeamMessage'



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
                <Route exact path = "/:userNamee/TeamMessage" component = {TeamMessage}/>
                <Route exact path = "/:userNamee/Statistics" component = {Statistics}/>
                <Route exact path = "/:userNamee/Wealth" component = {Wealth}/>
                <Route exact path = "/:userNamee/Help" component = {Help}/>
            </div>
        </Router>
    </MuiThemeProvider>
);



export default App