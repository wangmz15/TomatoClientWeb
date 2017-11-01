import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {setJwtToken} from "../Actions/Storage";

const styles = {
  title: {
   //cursor: 'pointer',

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

    constructor(props){
    super(props)
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
    };

    handlePassword = (event) => {
        this.setState({ password: event.target.value })
    };

    handleLogin = () => {
        if (!this.state.username) {
            this.setState({ error: { username: '请输入用户名' } })
            return
            }
            // error: empty password
        if (!this.state.password) {
            this.setState({ error: { password: '请输入密码' } })
            return
        }

        this.props.loginCustomer(this.state.username, this.state.password).then(
            response => {
                setJwtToken(response.value.token);
                this.props.connectReplyClient(this.props.replyClient);
                this.props.connectRequestClient(this.props.requestClient);
            }).catch ((err) => {
            this.setState({
                username: '',
                password: '',
                error: { username: '不存在该用户或用户名与账号不匹配', password: '' }
            });
        });
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
                 <RaisedButton
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


export default Login;