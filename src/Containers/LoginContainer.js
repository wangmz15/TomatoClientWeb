import React, { Component} from 'react'
import { connect } from 'react-redux'
import {loginCustomer, connectReplyClient,connectRequestClient} from '../Actions'
import {Redirect} from 'react-router-dom'
import Login from '../Components/Login'
class LoginContainer extends Component {
    render() {
        const { loginCustomer,isAuthenticated, username, replyClient,requestClient, connectReplyClient,connectRequestClient } = this.props;

        if (isAuthenticated) {
            return (
                <Redirect to= "/TeamMessage" />);
        }
        else {
            console.log("not login!");
            return (
                <Login //history={this.props.history}
                        loginCustomer = {loginCustomer}
                         username = {username}
                         isAuthenticated = {isAuthenticated}
                        requestClient = {requestClient}
                        replyClient = {replyClient}
                        connectReplyClient = {connectReplyClient}
                        connectRequestClient = {connectRequestClient}
                />
            );
        }
  }
}

const mapStateToProps = (state) => ({//定义怎么绑定
  isAuthenticated: state.customer.isAuthenticated,//前者是LoginContainer的是一个props, 它后来又传给了components／Login//后者是reducers/index.js里的一个函数///后者是Reducers／Customer.js的state里的成
  username:state.customer.username,
    replyClient:state.property.replyClient,
    requestClient:state.property.requestClient,
});

export default connect(// 把需要绑定的东西放进去
  mapStateToProps,
  { loginCustomer,connectReplyClient,connectRequestClient }
)(LoginContainer)