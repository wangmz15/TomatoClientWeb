import React from 'react'
import {RaisedButton} from "material-ui";
import {removeJwtToken} from "../Actions/Storage";
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

    handleLogout = () => {
        removeJwtToken();
        this.props.buyerClient.disconnect();
        window.location.href = '/';
    };
    render(){

        return(
            <div>
                <div style={styles.logoutDiv}>
                    <RaisedButton
                        label="登出"
                        primary={true}
                        onClick={this.handleLogout}
                    />
                </div>
            </div>

        )

    }

}


const mapStateToProps = (state) => ({
    buyerClient:state.propertyy.buyerClient,
});

export default connect(// 把需要绑定的东西放进去
    mapStateToProps,
)(LogoutButton);