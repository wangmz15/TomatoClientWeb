import React from 'react';
import MyAppBarAndDrawer from "./MyAppBarAndDrawer";
import LogoutButton from "./LogoutButton";
import MyTab from "./MyTab";

export default class Helpe extends React.Component{
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
                <MyAppBarAndDrawer text = {'资产'} history = {this.props.history}/>
                {/*<h1>this is a Wealth page</h1>*/}

                <MyTab/>


                <LogoutButton onClick={this.handleLogout}/>


            </div>
        )
    }
}