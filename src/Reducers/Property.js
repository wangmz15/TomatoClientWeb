import {
    GET_PROPERTY, SELL_MACHINE, SELL_MATERIAL, UPDATE_PROPERTY,
} from '../Constants/ActionTypes'

const initialState = {
    machine:{
        id:-1,
        type:"type ?",
        left:-1,
    },
    material:{
        type:"none",
        price:-11,
        number:-111,
    }
};
const property = (state = initialState, action) => {
    switch (action.type) {
        case `${SELL_MACHINE}_ACK`: {
            return {
                ...state,
                ...action.payload,
            };
        }
        // case `${SELL_MACHINE}_ERR`: {
        //     return {
        //         state
        //     };
        // }
        case `${SELL_MATERIAL}_ACK`: {
            return {
                ...state,
                ...action.payload,
            };
        }
        // case `${SELL_MATERIAL}_ERR`: {
        //     return {
        //         state,
        //     };
        // }
        case `${GET_PROPERTY}_ACK`: {
            return {
                ...state,
                ...action.payload,
            };
        }
        // case `${UPDATE_PROPERTY}_ERR`: {
        //     return {
        //         state,
        //     };
        // }
        default:
            return state;
    }
}


export default property;