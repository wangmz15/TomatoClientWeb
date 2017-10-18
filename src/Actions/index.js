import * as types from '../Constants/ActionTypes'

export const getCustomer = (username, password) => (dispatch) => {
  //TODO: update actions
  let dispatchObj = {
      type: types.LOGIN_CUSTOMER,
  }
//  let dispatchObj = {
//    type: types.LOGIN_CUSTOMER,
//    payload: {
//      promise:
//      request
//        .get(`${API}/customer/username=${username}`)
//        .accept('application/json')
//        .end()
//        .then((res) => res.body)
//    },
//  }
  return dispatch(dispatchObj)
}

export const inicialWholePage = () => (dispatch) =>{
    let dispatchObj = {
        type: types.INICIAL_WHOLE_PAGE,
    }
    return dispatch(dispatchObj)
}
