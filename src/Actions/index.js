import * as types from '../Constants/ActionTypes'
import request from "superagent";
// import {dispatch} from "redux/es/createStore";
const API = 'http://localhost:8080/api/client';


export const changeAvatar = (id,newAvatar) => (dispatch) =>{
    let dispatchObj = {
        type:types.CHANGE_AVATAR,
        payload:{
            promise:
                request
                    .put(`${API}/info/avatar/id=${id}`)
                    .set('Content-Type', 'application/json')
                    .accept('application/json')
                    .then(response => response.body)
        },
    };

    return dispatch(dispatchObj);
};


export const getHistory = (id) =>(dispatch)=> { //通过测试
    console.log("调用 getHistory");
    let dispatchObj = {
        type:types.GET_HISTORY,
        payload:{
            promise:
                request
                    .get(`${API}/history/id=${id}`)
                    .set('Content-Type', 'application/json')
                    .accept('application/json')
                    .then(response => response.body)
        },
    };

    return dispatch(dispatchObj);
};


export const produce = (userid, id, times) =>(dispatch) => { //测试通过
    console.log("调用 produce");
    let dispatchObj = {
        type:types.PRODUCE,
        payload:{
            promise:
                request
                    .post(`${API}/property/produce/id=${userid}`)
                    .set('Content-Type', 'application/json')
                    .accept('application/json')
                    .send({
                        "id": id,
                        "times":times
                    })
                    .then(response => response.body)
        },
    };
    return dispatch(dispatchObj);
}


export const sellMaterial = (userid,type,number,price,recieverID) =>(dispatch) => { //测试通过
    console.log("调用 sellMaterial");
    let dispatchObj = {
        type:types.SELL_MATERIAL,
        payload:{
            promise:
                request
                    .post(`${API}/property/sellMaterial/id=${userid}`)
                    .set('Content-Type', 'application/json')
                    .accept('application/json')
                    .send({
                        "type": type,
                        "number":number,
                        "price":price,
                        "recieverID":recieverID,
                    })
                    .then(response => response.body)
        },
    };
    return dispatch(dispatchObj);
}



export const sellMachine = (userid, id,number,price,recieverID) =>(dispatch) => { //测试通过
    console.log("调用 sellMachine")
    let dispatchObj = {
        type:types.SELL_MACHINE,
        payload:{
            promise:
                request
                    .post(`${API}/property/sellMachine/id=${userid}`)
                    .set('Content-Type', 'application/json')
                    .accept('application/json')
                    .send({
                        "id":id,
                        "number":number,
                        "price":price,
                        "recieverID":recieverID,
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

export const updateInformation = (username,id,avatar,rank,gameStatus) => (dispatch) => {
    // console.log("avatar"+avatar);
    let dispatchObj = {
        type: types.UPDATE_INFORMATION,
        payload: {
            promise:
                request
                    .put(`${API}/info/id=${id}`)
                    .set('Content-Type', 'application/json')
                    .accept('application/json')
                    .send({
                        "username": username,
                        "id": id,
                        "avatar": avatar,
                        "rank": 1,
                        "gameStatus":gameStatus,
                    })
                    .then(response => response.body)
        },
    };
    // console.log(dispatchObj)
    return dispatch(dispatchObj);
};


export const getInformation = (id) =>(dispatch)=> {//测试通过
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