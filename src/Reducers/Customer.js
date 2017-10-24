import {
    LOGIN_CUSTOMER,
    GET_INFORMATION, UPDATE_INFORMATION,
} from '../Constants/ActionTypes'



const initialState = {
    username: '',
    id: '',
    avatar: '',
    isAuthenticated: false,
    rank: '',
};
const customer = (state = initialState, action) => {
    switch (action.type) {
        case `${LOGIN_CUSTOMER}_ACK`: {
            return {
                ...state,
                 ...action.payload,
                isAuthenticated:true,
                // username:action.payload.username,
            };
        }
        case `${LOGIN_CUSTOMER}_ERR`: {
            return {
                ...state,
                username: '',
                isAuthenticated: false,
            };
        }
        case `${GET_INFORMATION}_ACK`: {
            console.log({
                ...state,
                ...action.payload,
            });
            return {
                ...state,
                ...action.payload,
            };
        }
        case `${UPDATE_INFORMATION}`: {
            return {
                ...state,
                ...action.payload,
            };
        }
        default:
            return state;
    }
}


export default customer;