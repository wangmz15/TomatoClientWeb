import React from 'react';
import MyAppBarAndDrawer from "../Components/MyAppBarAndDrawer";
import LogoutButton from "../Components/LogoutButton";

export default class Help extends React.Component{
    constructor(props){
        super(props)
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
        }

    }

    render(){
        return(
            <div>
                <MyAppBarAndDrawer text = {'帮助'} history = {this.props.history}/>
                <h1>this is a help page</h1>
                <LogoutButton onClick={this.handleLogout}/>


            </div>
        )
    }
}