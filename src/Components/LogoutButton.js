import React from 'react'
import {RaisedButton} from "material-ui";
import {removeJwtToken} from "../Actions/Storage";
const styles = {
    title:{
        'text-align': 'center',
    },
    logoutDiv:{
        width:'100px',
        height:'50px',
        // border:'1px solid blue',
        textAlign: 'center',
        top:'50%',
        left:'50%',
        position:'absolute',
        marginLeft:' -50px', /*width的一半*/
        marginTop: '400px', /*height的一半*/
    },
}

export default class LogoutButton extends React.Component{
    constructor(props){
        super(props)
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
        removeJwtToken();
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