import React from 'react';
import AccountCircle from 'material-ui/svg-icons/action/account-circle'
import IconButton from 'material-ui/IconButton';

import MemberTable from "../Components/MemberTable";
import MyAppBarAndDrawer from "../Components/MyAppBarAndDrawer";
import LogoutButton from "../Components/LogoutButton";

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
            username: '',
            password: '',
            open: false,
            error: {
                username: '',
                password: '',
            },
            navigate:'false',
        }
    }
    handleLogout = () => {
        if (true){
            this.props.history.replace('/')
        }
        else {
            // 这里使用 replaceState 方法做了跳转，但在浏览器历史中不会多一条记录，因为是替换了当前的记录
            // this.props.history.replaceState(null, '/about');
        }

    }
    render(){
        return(
            <div>
                <MyAppBarAndDrawer text = {'队伍信息'} history = {this.props.history}/>



                <IconButton
                    iconStyle={styles.largeAvatarIcon}
                    style={styles.largeDIV}>
                    <AccountCircle/>
                </IconButton>

                <MemberTable username = {this.state.username}/>

                <LogoutButton onClick={this.handleLogout}/>


            </div>
        )
    }
}