import React from 'react';
import AccountCircle from 'material-ui/svg-icons/action/account-circle'
import IconButton from 'material-ui/IconButton';

import MemberTable from "./MemberTable";
import MyAppBarAndDrawer from "./MyAppBarAndDrawer";
import LogoutButton from "./LogoutButton";
import { removeJwtToken } from '../Actions/Storage';
import Redirect from "react-router-dom/es/Redirect";
import { loginCustomer, logoutCustomer} from "../Actions/index";

const styles = {
    largeAvatarIcon: {
        // border:'1px solid blue',
        width: 120,
        height: 120,
    },
    largeDIV: {
        width: 200,
        height: 200,
        padding: 30,
        top:"30px",
        left:"50%",
        marginLeft:' -100px',
        // border:'1px solid blue',
    },

}
export default class TeamMessage extends React.Component{
    constructor(props){
        super(props)
//    this.handleUsername = this.handleUsername.bind(this);
//    this.handlePassword = this.handlePassword.bind(this);
        this.state = {
            username: this.props.username,
            password: '',
            open: false,
            error: {
                username: '',
                password: '',
            },
            navigate:false,
        }
        // console.log("log ::: " + this.props.username)
    }
    handleLogout = () => {
        removeJwtToken();
        // this.props.history.replace('/');
        window.location.href = '/';
    };

    changeAvatar = () => {
        console.log("change avatar");
    }

    render(){
        return(
            <div>
                <MyAppBarAndDrawer text = {'队伍信息'} history = {this.props.history}/>

                <IconButton
                    iconStyle={styles.largeAvatarIcon}
                    style={styles.largeDIV}>
                    <AccountCircle onClick = {this.changeAvatar}/>
                </IconButton>

                <MemberTable username = {this.state.username}/>
                <LogoutButton />
                {/*<LogoutButton onClick={this.handleLogout}/>*/}
            </div>
        )
    }
}