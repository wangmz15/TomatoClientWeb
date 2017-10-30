import React from 'react'
import {RaisedButton} from "material-ui";
import {removeJwtToken} from "../Actions/Storage";
import {stompClient} from '../Actions/index'
import connect from "react-redux/es/connect/connect";

const styles = {
    title:{
        'text-align': 'center',
    },
    logoutDiv:{
        width:'100px',
        height:'50px',
        // border:'1px solid blue',
        textAlign: 'center',
        // top:'50%',
        left:'50%',
        position:'absolute',
        marginLeft:' -50px', /*width的一半*/
        marginTop: '5%', /*height的一半*/
    },
}

class LogoutButton extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            text:props.text,
            navigate:'false'
        }
    }
    // handleNavigation = () => {
    //     this.setState({navigate:!this.state.navigate})
    //     console.log("navigate = "+this.state.username)
    // }

    handleLogout = () => {
        const { stompClient} = this.props;
        removeJwtToken();
        this.props.stompClient.disconnect();
        // this.props.history.replace('/');
        window.location.href = '/';
    };
    render(){

        return(
            <div>
                <div style={styles.logoutDiv}>
                    <RaisedButton
                        label="登出"
                        primary={true}
                        // onClick={() => this.props.onClick()}
                        onClick={this.handleLogout}
                    />
                </div>
            </div>

        )

    }

}


const mapStateToProps = (state) => ({//定义怎么绑定
    // isAuthenticated: state.customer.isAuthenticated,//前者是LoginContainer的是一个props, 它后来又传给了components／Login//后者是reducers/index.js里的一个函数///后者是Reducers／Customer.js的state里的成
    // username:state.customer.username,
    stompClient:state.customer.stompClient,
});

export default connect(// 把需要绑定的东西放进去
    mapStateToProps,
)(LogoutButton);