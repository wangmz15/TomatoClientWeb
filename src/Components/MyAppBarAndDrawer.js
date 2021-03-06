import AppBar from 'material-ui/AppBar';
import React from 'react'
import {Drawer, MenuItem} from "material-ui";
import { Link } from 'react-router-dom'
const styles = {
    title:{
        'textAlign': 'center',
    }
}

export default class MyAppBarAndDrawer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            text:props.text,
            navigate:false
        }
    }
    handleNavigation = () => this.setState({navigate:!this.state.navigate})
    render(){
        return(
            <div>
                <AppBar
                    titleStyle={styles.title}
                    title={this.state.text}
                    onLeftIconButtonTouchTap = {this.handleNavigation}
                />

                <Drawer
                    width={150}
                    open={this.state.navigate}
                    onRequestChange={(navigate) => this.setState({navigate})}
                    docked={false}
                    zDepth = {1}
                >
                    {/*<MenuItem onClick={this.handleTeamMessageClick}>队伍信息</MenuItem>*/}
                    {/*<MenuItem onClick={this.handleWealthClick}>资产</MenuItem>*/}
                    {/*<MenuItem onClick={this.handleStatisticsClick}>统计</MenuItem>*/}
                    {/*<MenuItem onClick={this.handleHelpClick}>帮助</MenuItem>*/}
                    <MenuItem containerElement={<Link to="/TeamMessage" />}>队伍信息</MenuItem>
                    <MenuItem containerElement={<Link to="/Property" />}>资产</MenuItem>
                    <MenuItem containerElement={<Link to="/Statistics" />}>统计</MenuItem>
                    <MenuItem containerElement={<Link to="/Help" />}>帮助</MenuItem>
                    {/*<MenuItem containerElement={<Link to="/" />}>登出</MenuItem>*/}
                </Drawer>
            </div>


        )

    }

}