import {
    LOGIN_CUSTOMER,
    GET_INFORMATION, UPDATE_INFORMATION,CHANGE_AVATAR
} from '../Constants/ActionTypes'



const initialState = {
    username: '',
    id: 3,
    avatar: null,
    isAuthenticated: false,
    rank: -1,
    gameStatus:'-1',
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
            // console.log({
            //     ...state,
            //     ...action.payload,
            // });
            return {
                ...state,
                ...action.payload,
            };
        }
        case `${UPDATE_INFORMATION}_ACK`: {
            console.log({
                ...state,
                // ...action.payload,
                // action.payload,
            });
            return {
                ...state,
                ...action.payload,
                // avatar:action.payload.avatar,
            };
        }
        case `${CHANGE_AVATAR}_ACK`: {
            // console.log({
            //     ...state,
            //     // ...action.payload,
            //     // action.payload,
            // });
            return {
                ...state,
                avatar:action.payload,
            };
        }
        default:
            return state;
    }
}


export default customer;