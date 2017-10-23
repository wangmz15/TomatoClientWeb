import React from 'react';
import MyAppBarAndDrawer from "./MyAppBarAndDrawer";
import LogoutButton from "./LogoutButton";

export default class Statistics extends React.Component{
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
                <MyAppBarAndDrawer text = {'统计'} history = {this.props.history}/>
                <h1>this is a Statistics page</h1>
                <LogoutButton onClick={this.handleLogout}/>


            </div>
        )
    }
}