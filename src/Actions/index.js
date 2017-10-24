import * as types from '../Constants/ActionTypes'
import request from "superagent";
import {dispatch} from "redux/es/createStore";
const API = 'http://localhost:8080/api/client';

export const sellMaterial = (userid, type,number) =>(dispatch) => { //测试通过
    console.log("调用 sellMaterial")
    let dispatchObj = {
        type:types.SELL_MATERIAL,
        payload:{
            promise:
                request
                    .post(`${API}/property/sellmaterial/id=${userid}`)
                    .set('Content-Type', 'application/json')
                    .accept('application/json')
                    .send({
                        "type": type,
                        "number": number,
                    })
                    .then(response => response.body)
        },
    };
    return dispatch(dispatchObj);
}

export const sellMachine = (userid, id) =>(dispatch) => { //正在测试
    console.log("调用 sellMachine")
    let dispatchObj = {
        type:types.SELL_MACHINE,
        payload:{
            promise:
                request
                    .post(`${API}/property/sellmachine/id=${userid}`)
                    .set('Content-Type', 'application/json')
                    .accept('application/json')
                    .send({
                        "id":id,
                    })
                    .then(response => response.body)
        },
    };
    return dispatch(dispatchObj);
}

export const getPropertyList = (id) =>(dispatch)=> { //通过测试
    console.log("调用 getPropertyList")
    let dispatchObj = {
        type:types.GET_PROPERTY_LIST,
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

export const updatePropertyList = (id) => (dispatch) => {
    let dispatchObj = {
        type: types.UPDATE_PROPERTY_LIST,
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


export const getInformation = (id) =>(dispatch)=> {//已经测试通过
    console.log("调用 getInformation");
    let dispatchObj = {
        type:types.GET_INFORMATION,
        payload:{
            promise:
                request
                    .get(`${API}/info/id=${id}`)
                    .set('Content-Type', 'application/json')
                    .accept('application/json')
                    .then(response => response.body)
        },
    };
    console.log(dispatchObj)
    return dispatch(dispatchObj);
};

export const loginCustomer = (username, password) => (dispatch) => {//已经测试通过
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