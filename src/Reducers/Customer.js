import {
  CREATE_CUSTOMER,
  LOGIN_CUSTOMER,
  LOGOUT_CUSTOMER,
  ADD_USER,
} from '../Constants/ActionTypes'



const initialState = {
    username: '',
    isAuthenticated: false,
};
const customer = (state = initialState, action) => {
    switch (action.type) {
        case `${LOGOUT_CUSTOMER}`:{
            return{
                ...state,
                ...action.payload,
                isAuthenticated:false,
            };
        }
        case `${LOGIN_CUSTOMER}_ACK`: {
            return {
                ...state,
                 ...action.payload,
                isAuthenticated:true,
                username:action.payload.username,
            };
            // console.error("state.isA "+state.isAuthenticated)
        }
        case `${LOGIN_CUSTOMER}_ERR`: {
            return {
                ...state,
                username: '',
                isAuthenticated: false,
            };
        }
        // case `${GET_CUSTOMER}`: {
        //     return {
        //         ...state,
        //         username: '',
        //     };
        // }
        default:
            return state;
    }
}


export default customer;