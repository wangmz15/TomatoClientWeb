
import React, { Component} from 'react'
// import { connect } from 'react-redux'
// import { getCustomer} from '../Actions'
// import { isActive } from '../Reducers'
import HomePage from '../Components/HomePage'

class HomePageContainer extends Component {
    render() {
        // const { getCustomer, logoutCustomer, isActive } = this.props
        // console.log(getCustomer);
        return (
            <HomePage/>
        )
    }
}

// LoginContainer.propTypes = {
//  getCustomer: PropTypes.func.isRequired,
//  logoutCustomer: PropTypes.func.isRequired,
//  isActive: PropTypes.bool
// }

// const mapStateToProps = state => ({//定义怎么绑定
//     isActive: isActive(state)
// })
//
// export default connect(// 把需要绑定的东西放进去
//     mapStateToProps,
//     { getCustomer }
// )(LoginContainer)

export default HomePageContainer