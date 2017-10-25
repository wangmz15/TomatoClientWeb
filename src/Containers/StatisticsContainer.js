import React, { Component} from 'react'
import { connect } from 'react-redux'
import Statistics from "../Components/Statistics";
import {getHistory, getInformation, getPropertyList} from "../Actions/index";

class StatisticsContainer extends Component {
    // constructor(props) {
    //     super(props)
    // }

    componentWillMount() {

    }

    render() {
        const { id,getHistory,getInformation,getPropertyList } = this.props;
        return(
            <Statistics
                getHistory = {getHistory}
                id = {id}
                getInformation={getInformation}
                getPropertyList={getPropertyList}
            />
        );
    }
}

const mapStateToProps = (state) => ({//定义怎么绑定
    id:state.customer.id,

});

export default connect(// 把需要绑定的东西放进去
    mapStateToProps,
    {getHistory,getInformation,getPropertyList}
)(StatisticsContainer)