import React, { Component} from 'react'
import { connect } from 'react-redux'
import {loginCustomer} from '../Actions'
import {Redirect} from 'react-router-dom'
// import { isActive } from '../Reducers'
import Login from '../Components/Login'
import state from "../Reducers/Customer";

class LoginContainer extends Component {

    // static propTypes = {
    //     username: PropTypes.string,
    //     isAuthenticated: PropTypes.bool,
    // };

    render() {
        const { loginCustomer,isAuthenticated, username } = this.props;
        if (isAuthenticated) {
            //url = this.props.loginCustomer+"/login"
            // console.log("if " + isAuthenticated);
            // this.props.history.replace('/TeamMessage')
            // this.props.username = '';
            console.log("state.username = " + username)
            return (
                <Redirect to= "/TeamMessage" />);
        }
        // return(<div>err</div>);
        else {
            console.log("else " +isAuthenticated);
            return (
                <Login //history={this.props.history}
                        loginCustomer = {loginCustomer}
                         username = {username}
                         isAuthenticated = {isAuthenticated}
                />
            );
        }
  }
}

const mapStateToProps = (state) => ({//定义怎么绑定
  isAuthenticated: state.customer.isAuthenticated,//前者是LoginContainer的是一个props, 它后来又传给了components／Login//后者是reducers/index.js里的一个函数///后者是Reducers／Customer.js的state里的成
  username:state.customer.username,
});

export default connect(// 把需要绑定的东西放进去
  mapStateToProps,
  { loginCustomer }
)(LoginContainer)