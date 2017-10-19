import React from 'react';
import ReactDOM from 'react-dom';
// import render from 'react-dom'
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import promiseMiddleware from 'redux-promise-middleware'

import './index.css';
import reducer from './Reducers'
import App from './Containers/App.js';
import registerServiceWorker from './registerServiceWorker';

import {
    inicialWholePage,
} from './Actions'


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

store.dispatch(inicialWholePage())

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
