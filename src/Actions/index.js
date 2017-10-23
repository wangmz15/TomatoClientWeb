import * as types from '../Constants/ActionTypes'
import request from "superagent";
const API = 'http://localhost:8080/api/client';
// const API = 'http://localhost:3000/api/client';

export const loginCustomer = (username, password) => (dispatch) => {
    let dispatchObj = {
        type: types.LOGIN_CUSTOMER,
        payload: {
            promise:
                request
                    .post(`${API}/login`)
                    .set('Content-Type', 'application/json')
                    .accept('application/json')
                    .send({
                        "username": username,
                        "password": password,
                    })
                    .then(response => response.body)
        },
    };
    return dispatch(dispatchObj);
};


export const logoutCustomer = () => (dispatch) => {
    dispatch({
        type: types.LOGOUT_CUSTOMER
    })
}

// export const getCustomer = (username, password) => {
//     return (dispatch) => {
//         //TODO: update actions
//         let dispatchObj = {
//             type: types.GET_CUSTOMER,
//         }
//          let dispatchObj = {
//            type: types.GET_CUSTOMER,
//            payload: {
//              promise:
//              request
//                .get(`${API}/customer/username=${username}`)
//                .accept('application/json')
//                .end()
//                .then((res) => res.body)
//            },
//          }
//         return dispatch(dispatchObj)
//     };
// }

// export const inicialWholePage = () => (dispatch) =>{
//     let dispatchObj = {
//         type: types.INICIAL_WHOLE_PAGE,
//     }
//     return dispatch(dispatchObj)
// }
