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
        case `${SELL_MATERIAL}_ACK`: {
            return {
                ...state,
                ...action.payload,
            };
        }
        case `${GET_PROPERTY}`: {
            return {
                ...state,
                ...action.payload,
            };
        }
        case `${UPDATE_PROPERTY}`: {
            return {
                ...state,
                ...action.payload,
            };
        }
        default:
            return state;
    }
}


export default property;