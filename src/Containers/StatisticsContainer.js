import React, { Component} from 'react'
import { connect } from 'react-redux'
import Statistics from "../Components/Statistics";
import { getHistoryList} from "../Actions/index";

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