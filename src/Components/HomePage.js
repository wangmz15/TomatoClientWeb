import React from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import AccountCircle from 'material-ui/svg-icons/action/account-circle'
import IconButton from 'material-ui/IconButton';

import MemberTable from "./MemberTable.js";
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


class HomePage extends React.Component {
    constructor(props) {
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
            }
        }
    }

    handleLogout = () => {
        if (true){
            console.log("asdjf;lajdf")
            console.log(this.props);
            // this.props.replaceState(null, '/HomePage');
            // this.props.history.go(this.props.history.length-2);
            this.props.history.replace('/')
        }
        else {
            // 这里使用 replaceState 方法做了跳转，但在浏览器历史中不会多一条记录，因为是替换了当前的记录
            // this.props.history.replaceState(null, '/about');
        }

    }

    render()
    {
        return(
            <div>
                <AppBar
                    titleStyle={styles.title}
                    title={<span>队伍信息</span>}
                    // iconElementLeft={<IconButton><NavigationClose /></IconButton>}
                />

                <IconButton
                iconStyle={styles.largeAvatarIcon}
                style={styles.largeDIV}
                >
                <AccountCircle />
                </IconButton>
                <br/>

                <MemberTable/>

                <div style={styles.logoutDiv}>
                    <FlatButton
                        label="登出"
                        primary={true}
                        onClick={this.handleLogout}
                    />
                </div>

            </div>
        )
    }
}

//Login.propTypes = {
//  loginCustomer: PropTypes.func,
//  logoutCustomer: PropTypes.func,
//  isActive: PropTypes.bool
//}

export default HomePage;