import React, { Component} from 'react'
import { connect } from 'react-redux'
import Statistics from "../Components/Statistics";
import { getHistoryList} from "../Actions/index";

import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';

var socket = new SockJS('http://127.0.0.1:8090/hhh');
let replyClient = Stomp.over(socket);



class StatisticsContainer extends Component {
    componentWillMount() {
    };

    componentWillUnmount(){
    }

   render() {
        console.log("rendering");
       // this.connect();
        const { id,historyList,getHistoryList} = this.props;
        return(
            <Statistics
                id = {id}
                historyList = {historyList}

                getHistoryList = {getHistoryList}

                // replyClient = {replyClient}
            />
        );
    }
}

const mapStateToProps = (state) => ({//定义怎么绑定
    id:state.customer.id,
    historyList:state.statistics.historyList,
});

export default connect(// 把需要绑定的东西放进去
    mapStateToProps,
    {getHistoryList}
)(StatisticsContainer)