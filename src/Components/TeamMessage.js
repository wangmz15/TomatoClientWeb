import React from 'react';
import AccountCircle from 'material-ui/svg-icons/action/account-circle'
import IconButton from 'material-ui/IconButton';
import {List, ListItem} from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import Divider from 'material-ui/Divider';
import {Paper} from "material-ui";
import MyAppBarAndDrawer from "./MyAppBarAndDrawer";
import LogoutButton from "./LogoutButton";

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
        // border :'1px solid blue',
    },
    ContainerStyle : {
        width: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',
    },

}
export default class TeamMessage extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            username:'',
            id: '',
            wealth:'',
        }
    }

    componentWillMount() {
        this.props.getInformation(this.props.id).then(() => {
            // console.log("getInfo之后 wealth = " + this.props.wealth);
        });
    }


    changeAvatar = () => {
        console.log("change Avatar")
    };

    render(){

        return(
            <div>
                <MyAppBarAndDrawer text = {'队伍信息'} history = {this.props.history}/>

                <IconButton
                    iconStyle={styles.largeAvatarIcon}
                    style={styles.largeDIV}>
                    <AccountCircle onClick = {this.changeAvatar}/>
                </IconButton>
                <br/><br/>
                    {/*<InfoList*/}
                        {/*username = {this.props.username}*/}
                        {/*// avatar = {this.props.avatar}*/}
                        {/*id = {this.props.id}*/}
                        {/*rank = {this.props.rank}*/}
                        {/*gameStatus = {this.props.gameStatus}*/}
                    {/*/>*/}
                <Paper style={ styles.ContainerStyle }>
                    <List>
                        <ListItem primaryText="队伍名称" secondaryText={this.props.username} leftIcon={<ContentInbox />} />
                        <Divider />
                        <ListItem primaryText="ID" secondaryText={this.props.id} leftIcon={<ActionGrade />} />
                        <Divider />
                        <ListItem primaryText="排名" secondaryText={this.props.rank} leftIcon={<ContentDrafts />} />
                        <Divider />
                        <ListItem primaryText="游戏状态" secondaryText={this.props.gameStatus} leftIcon={<ContentInbox />} />
                    </List>
                </Paper>

                <br/><br/>
                <LogoutButton />
                {/*<LogoutButton onClick={this.handleLogout}/>*/}
            </div>
        )
    }
}