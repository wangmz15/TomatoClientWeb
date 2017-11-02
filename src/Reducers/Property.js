import {
    CONNECT_CLIENT, GET_ALL_USER, IS_ACCEPT_SELL, RECEIVE_REPLY,
} from '../Constants/ActionTypes'

const initialState = {
    sellerClient:{},
    buyerClient:{},

    request:{buyer:-1,seller:-1,price:-1,typeOrMachineID:'',number:-1},
    reply:{buyer:-1, price:-1,typeOrMachineID:'',number:-1,isAgree:false},
    allUserList:[],

    buyerDialogOpen:false,
    sellerDialogOpen:false,
};

const propertyy = (state = initialState, action) => {
    switch (action.type) {
        case `${GET_ALL_USER}_ACK`: {
            return {
                ...state,
                allUserList:action.payload,
            };
        }
        case `${RECEIVE_REPLY}`: {
            return {
                ...state,
                ...action.payload,
            };
        }
        case `${IS_ACCEPT_SELL}`: {
            return {
                ...state,
                ...action.payload,
            };
        }
        case `${CONNECT_CLIENT}`: {
            let curState =  {
                ...state,
                ...action.payload,
            };
            if (curState.request === undefined || curState.request === null||
                curState.reply === undefined || curState.reply === null) {
                curState.request = initialState.request;
                curState.reply = initialState.reply;
            }
            return curState;
        }
        default:
            return state;
    }
}


export default propertyy;