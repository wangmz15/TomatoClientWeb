import * as types from '../Constants/ActionTypes'
import request from "superagent";
import {dispatch} from "redux/es/createStore";
const API = 'http://localhost:8080/api/client';

export const loginCustomer = (username, password) => (dispatch) => {
    console.log("调用 loginCustomer");
    let dispatchObj = {
        type: types.LOGIN_CUSTOMER,
        payload: {
            promise:
                request
                    .post(`${API}/login`)
                    .set('Content-Type', 'application/json')//request 头
                    .accept('application/json')//
                    .send({
                        "username": username,
                        "password": password,
                    })
                    .then(response => response.body)
        },
    };

    return dispatch(dispatchObj);
};

export const getInformation = (id) =>(dispatch)=> {
    console.log("调用 getInformation");
    let dispatchObj = {
        type:types.GET_INFORMATION,
        payload:{
            promise:
                request
                    .get(`${API}/info`)
                    .set('Content-Type', 'application/json')
                    .accept('application/json')
                    .then(response => response.body)
        },
    };
    console.log(dispatchObj)
    return dispatch(dispatchObj);
};

export const getProperty = (id) =>(dispatch)=> {
    let dispatchObj = {
        type:types.GET_PROPERTY,
        payload:{
            promise:
                request
                    .get(`${API}/property/id=${id}`)
                    .set('Content-Type', 'application/json')
                    .accept('application/json')
                    .then(response => response.body)
        },
    };

    return dispatch(dispatchObj);
};

export const updateInformation = (id) => (dispatch) => {
    let dispatchObj = {
        type: types.UPDATE_INFORMATION,
        payload: {
            promise:
                request
                    .put(`${API}/info/id=${id}`)
                    .set('Content-Type', 'application/json')
                    .accept('application/json')
                    .send({
                    })
                    .then(response => response.body)
        },
    };
    return dispatch(dispatchObj);
};

export const updateProperty = (id) => (dispatch) => {
    let dispatchObj = {
        type: types.UPDATE_PROPERTY,
        payload: {
            promise:
                request
                    .put(`${API}/property/id=${id}`)
                    .set('Content-Type', 'application/json')
                    .accept('application/json')
                    .send({
                    })
                    .then(response => response.body)
        },
    };
    return dispatch(dispatchObj);
};


