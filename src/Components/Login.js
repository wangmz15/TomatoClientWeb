// eslint-disable-next-line
import React from 'react';
//import PropTypes from 'props-types';
// import {cyan500} from 'material-ui/styles/colors';
//import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
// import {isActive} from "../Reducers/index";



const styles = {
  title: {
   cursor: 'pointer',

  },
  titleStyle: {
    'text-align': 'center',
  },

  loginStyle:{
    'text-align': 'center',
    'font-weight':'400',
    'font-size':'25px',
    'color': 'rgb(48, 48, 48)',
//    border:'1px solid blue',
    width:'200px',
    height:'100px',
    top:'50%',
    left:'50%',
    position:'absolute',
    marginLeft:' -100px', /*width的一半*/
    marginTop: '-200px', /*height的一半*/


  },

  inputStyle:{
         width:'400px',
         height:'300px',
//         border:'1px solid blue',
         textAlign: 'center',
         top:'50%',
         left:'50%',
         position:'absolute',
         marginLeft:' -200px', /*width的一半*/
         marginTop: '-150px', /*height的一半*/
       }
};

//const Main = () => (
class Login extends React.Component{

//    static propTypes = {
//
//    }
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
          }
        }
    }


    handleUsername = (event) => {
        this.setState({ username: event.target.value })
//        console.log(this.state.username)
      }

    handlePassword = (event) => {
        this.setState({ password: event.target.value })
//        console.log(this.state.password)
    }

//    handleUsername(event){
//        this.setState({ username: event.target.value })
//        console.log(this.state.username)
//    }

//    handlePassword(event){
//        this.setState({ password: event.target.value })
//        console.log(this.state.password)
//    }

    handleLogin = () => {
        console.log(this.props);
        const { loginCustomer } = this.props;
        console.log(loginCustomer);

        console.log("usr = "+this.state.username)
        console.log("password = "+this.state.password)
        if (!this.state.username) {
            this.setState({ error: { username: '请输入用户名' } })
            return
            }
            // error: empty password
        if (!this.state.password) {
            this.setState({ error: { password: '请输入密码' } })
            return
        }

        // loginCustomer(this.state.username, this.state.password)
        //       .then(this.handleClose)
        //       // error: user does not exist (status 404)
        //       .catch((err) => {
        //         // TODO: check if error message is ok
        //         this.setState({
        //           username: '',
        //           password: '',
        //           error: { username: 'User not found' }
        //         })
        //       })

        // const location = this.props.location;
        // this.setState({isActive:true})

        if (true) {
            console.log(this.props)
            // this.props.replaceState(null, '/HomePage');
            this.props.history.push('/HomePage/'+this.state.username)
        } else {
            // 这里使用 replaceState 方法做了跳转，但在浏览器历史中不会多一条记录，因为是替换了当前的记录
            // this.props.history.replaceState(null, '/about');
        }


    }

    render()
    {
        return(
            <div>
            <AppBar //顶部文字
            titleStyle={styles.titleStyle}
            title={<span>ASDAN模拟商业竞拍大赛</span>}
            iconElementLeft={<IconButton><NavigationClose /></IconButton>}
            />

            <loginDiv style={styles.loginStyle} > 登录 </loginDiv>

            <br/>
             <inputDiv style={styles.inputStyle} >
                 <TextField
                   hintText="用户名"
                   value={this.state.username}
                   floatingLabelText="用户名"
                   onChange={this.handleUsername}
                   errorText={this.state.error.username}
                 />
                 <br />
                 <TextField
                   hintText="用户密码"
                   value={this.state.password}
                   floatingLabelText="用户密码"
                   type="password"
                   onChange={this.handlePassword}
                   errorText={this.state.error.password}
                 />
                 <br /><br />
                 <FlatButton
                    label="登录"
                    primary={true}
                    onClick={this.handleLogin}
                 />

             </inputDiv>
                { this.props.children }
            </div>
        )
    }
  }
//);

//Login.propTypes = {
//  loginCustomer: PropTypes.func,
//  logoutCustomer: PropTypes.func,
//  isActive: PropTypes.bool
//}

export default Login;