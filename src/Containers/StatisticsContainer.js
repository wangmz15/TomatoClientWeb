import React, { Component} from 'react'
import { connect } from 'react-redux'
import Statistics from "../Components/Statistics";

class StatisticsContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: this.props.username,
            password: '',
            open: false,
            error: {
                username: '',
                password: '',
            },
            navigate: 'false',
        }
    }

    componentWillMount() {
        this.props.loginCustomer;
    }

    render() {
        const { loginCustomer,isAuthenticated } = this.props;
        let url;
        return(
            <Statistics //history={this.props.history}
                loginCustomer={loginCustomer}
                username = {this.props.username}

            />
        );
    }
}

const mapStateToProps = (state) => ({//定义怎么绑定
    // isAuthenticated: state.customer.isAuthenticated,//前者是TeamMessageContainer的是一个props, 它后来又传给了components／TeamMessage后者是reducers/index.js里的一个函数,后者是Reducers／Customer.js的state里的成员
    // username:state.customer.username,
});

export default connect(// 把需要绑定的东西放进去
    mapStateToProps,
)(StatisticsContainer)