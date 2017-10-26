import {GET_HISTORY_LIST} from '../Constants/ActionTypes'

const initialState = {
    historyList:[],
};
const statistics = (state = initialState, action) => {
    switch (action.type) {
        case `${GET_HISTORY_LIST}_ACK`: {
                console.log({
                    ...state,
                    historyList:action.payload,
                });
                return {
                    ...state,
                    historyList:action.payload,
                };
        }
        case `${GET_HISTORY_LIST}_ERR`: {
            return {
                ...state,
                historyList: [],
            };
        }
        default:
            return state;
    }
}


export default statistics;