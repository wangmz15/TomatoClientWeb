import React, { Component} from 'react'
import { connect } from 'react-redux'
import Property from "../Components/Property";

class PropertyContainer extends Component {
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
            <Property //history={this.props.history}
                loginCustomer={loginCustomer}
                username = {this.props.username}

            />
        );
    }
}

const mapStateToProps = (state) => ({//定义怎么绑定

});

export default connect(// 把需要绑定的东西放进去
    mapStateToProps,
)(PropertyContainer)