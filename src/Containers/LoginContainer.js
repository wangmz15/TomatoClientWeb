import React, { Component} from 'react'
import { connect } from 'react-redux'
import { getCustomer} from '../Actions'
import { isActive } from '../Reducers'
import Login from '../Components/Login'

class LoginContainer extends Component {
  render() {
    const { getCustomer, logoutCustomer, isActive } = this.props
    // console.log(getCustomer);
    return (
      <Login history = {this.props.history} loginCustomer={getCustomer} logoutCustomer={logoutCustomer} isActive={isActive} />
    )
  }
}

// LoginContainer.propTypes = {
//  getCustomer: PropTypes.func.isRequired,
//  logoutCustomer: PropTypes.func.isRequired,
//  isActive: PropTypes.bool
// }

const mapStateToProps = state => ({//定义怎么绑定
  isActive: isActive(state)//前者是LoginContainer的是一个props, 它后来又传给了components／Login
                            //后者是reducers/index.js里的一个函数
})

export default connect(// 把需要绑定的东西放进去
  mapStateToProps,
  { getCustomer }
)(LoginContainer)