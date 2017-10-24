import {
    GET_PROPERTY, UPDATE_PROPERTY,
} from '../Constants/ActionTypes'

const initialState = {
    username: '',
    wealth: '',
    machine: '',
    material:'',
};
const property = (state = initialState, action) => {
    switch (action.type) {
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