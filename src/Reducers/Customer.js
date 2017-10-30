import {
    LOGIN_CUSTOMER,
    GET_INFORMATION, UPDATE_INFORMATION, CHANGE_AVATAR, CONNECT_CLIENT
} from '../Constants/ActionTypes'

import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';

const initialState = {
    username: '',
    id: 3,
    avatar: null,
    isAuthenticated: false,
    rank: -1,
    gameStatus:'-1',
    stompClient:{},
};

const customer = (state = initialState, action) => {
    switch (action.type) {
        case `${CONNECT_CLIENT}`: {
            // console.log("??" + this.state.stompClient);
            //
            // this.state.stompClient = Stomp.over(new SockJS('http://127.0.0.1:8090/hhh'));
            // // console.log("??" + this.state.stompClient);
            // this.state.stompClient.connect({}, function (frame) {
            //     this.state.stompClient.subscribe('/topic/greetings', function (greeting) {
            //         console.log("!!!!!");
            //         console.log(JSON.parse(greeting.body).content);
            //     });
            // });
            return {
                ...state,
                ...action.payload,
            };
        }

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