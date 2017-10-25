import {
    GET_PROPERTY_LIST,  UPDATE_PROPERTY_LIST,} from '../Constants/ActionTypes'

const initialState = {
    wealth:-1,
    machineList: [],
    materialList:[],
};
const propertyList = (state = initialState, action) => {
    switch (action.type) {
        case `${GET_PROPERTY_LIST}_ACK`: {
            // console.log({
            //     ...state,
            //     ...action.payload,
            //     // machineList:action.pa
            // })
            return {
                ...state,
                ...action.payload,
                // machineList:action.pa
            };
        }
        case `${GET_PROPERTY_LIST}_ERR`: {
            return {
                ...state,
                machineList: [],
                materialList:[],
            };
        }
        case `${UPDATE_PROPERTY_LIST}_ACK`: {
            return {
                ...state,
                ...action.payload,
            };
        }
        default:
            return state;
    }
}


export default propertyList;