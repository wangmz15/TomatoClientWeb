import React from 'react';

import LoginContainer from './LoginContainer.js'
// eslint-disable-next-line
import HomePageContainer from './HomePageContainer.js'

import {cyan500} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

// import { Provider } from 'react-redux'
// import { Route,} from 'react-router'
import {HashRouter as Router, Route} from 'react-router-dom'



const muiTheme = getMuiTheme({
    palette: {
        textColor: cyan500,
    },
    appBar: {
        height: 50,
    },
});


// class App extends React.Component {
//  render() {
//    return (
//      {/*<div className="Login"></div>*/}
//    );
//  }
// }

const supportsHistory = 'pushState' in window.history;

const App = () => (
    <MuiThemeProvider muiTheme = {muiTheme}>
        <Router
            basename='/'
            forceRefresh={supportsHistory}>

            <div>
            <Route exact path="/" component={LoginContainer} ></Route>
            <Route exact path="/HomePage/:userNamee" component={HomePageContainer} ></Route>
            </div>
        </Router>
    </MuiThemeProvider>
);



export default App