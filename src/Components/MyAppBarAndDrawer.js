import AppBar from 'material-ui/AppBar';
import React from 'react'
import {Drawer, MenuItem} from "material-ui";
import { Link } from 'react-router-dom'
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

export default class MyAppBarAndDrawer extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            text:props.text,
            navigate:'false'
        }
    }
    handleNavigation = () => this.setState({navigate:!this.state.navigate})

    // handleTeamMessageClick = () => {
    //     this.setState({navigate:false})
    //     this.props.history.replace('/'+this.state.username+'/TeamMessage')
    // }
    // handleWealthClick = () => {
    //     this.setState({navigate:false})
    //     this.props.history.replace('/'+this.state.username+'/Wealth')
    // }
    // handleStatisticsClick = () => {
    //     this.setState({navigate:false})
    //     this.props.history.replace('/'+this.state.username+'/Statistics')
    // }
    // handleHelpClick = () => {
    //     this.setState({navigate:false})
    //     this.props.history.replace('/'+this.state.username+'/Help')
    // }
    render(){
        console.log(this.state.navigate)
        return(
            <div>
                <AppBar
                    titleStyle={styles.title}
                    title={this.state.text}
                    onLeftIconButtonTouchTap = {this.handleNavigation}
                />

                <Drawer
                    open={this.state.navigate}
                    onRequestChange={(navigate) => this.setState({navigate})}
                    docked={false}
                >
                    {/*<MenuItem onClick={this.handleTeamMessageClick}>队伍信息</MenuItem>*/}
                    {/*<MenuItem onClick={this.handleWealthClick}>资产</MenuItem>*/}
                    {/*<MenuItem onClick={this.handleStatisticsClick}>统计</MenuItem>*/}
                    {/*<MenuItem onClick={this.handleHelpClick}>帮助</MenuItem>*/}
                    <MenuItem containerElement={<Link to="/+this.state.username+/TeamMessage" />} >队伍信息</MenuItem>
                    <MenuItem containerElement={<Link to="/+this.state.username+/Wealth" />}>资产</MenuItem>
                    <MenuItem containerElement={<Link to="/+this.state.username+/Statistics" />}>统计</MenuItem>
                    <MenuItem containerElement={<Link to="/+this.state.username+/Help" />}>帮助</MenuItem>
                </Drawer>
            </div>


        )

    }

}