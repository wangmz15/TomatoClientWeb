import React from 'react';
import AccountCircle from 'material-ui/svg-icons/action/account-circle'
import IconButton from 'material-ui/IconButton';
import {List, ListItem} from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import Divider from 'material-ui/Divider';
import {
    Avatar, Dialog, FlatButton, makeSelectable, Paper, Subheader, Table, TableBody, TableRow,
    Toggle
} from "material-ui";
import MyAppBarAndDrawer from "./MyAppBarAndDrawer";
import LogoutButton from "./LogoutButton";
import img1 from "../Resources/1.jpg";
import img2 from "../Resources/2.jpg";
import img3 from "../Resources/3.jpg";
import ReplyDialog from "./ReplyDialog";
import RequestDialog from "./RequestDialog";

// import SelectAvatar from "./SelectAvatar";

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
    constructor(props) {
        super(props);
        this.state = {
            avatarDialogOpen:false,
            avatar:"",
            // selectedIndex:null,
            selected:[1],
        }
    }

    selected =  (index) => {
        return this.state.selected.indexOf(index) !== -1;
    };
    componentWillMount() {
        this.props.getInformation(this.props.id).then(() => {
        });
        // this.props.connectReplyClient(this.props.replyClient);
        // this.props.connectRequestClient(this.props.requestClient);
    }


    changeAvatar = () => {this.setState({avatarDialogOpen:true});};

    handleRequestChange = (event,value) => {
        this.setState({
            selectedIndex: value,
            avatar:"../Resources/"+value+".jpg"
        });
        console.log(value);
        this.props.updateInformation(this.props.username,this.props.id, this.state.avatar,this.props.rank,this.props.gameStatus);

        // this.handleClose();
    };

    handleClose = () => {
        this.setState({
            avatarDialogOpen:false,
            selectedIndex:null,
        });
    };

    handleRowSelection = (selectedRows) => {
        this.setState({
            selected: selectedRows,
        });
    };
    handleSubmitChangeAvatar = ()=>{
        this.props.changeAvatar("899");
        this.props.updateInformation(this.props.username,this.props.id,this.state.avatar,this.props.rank,this.props.gameStatus);
        this.handleClose();
    };
    render(){
        const ChangeAvatarActions = [
            <FlatButton
                label="取消"
                primary={true}
                onClick={this.handleClose}
            />,
            <FlatButton
                label="确认"
                primary={true}
                onClick={this.handleSubmitChangeAvatar}
            />,
        ];

        return(
            <div>


                <MyAppBarAndDrawer text = {'队伍信息'}/>



                <IconButton
                    iconStyle={styles.largeAvatarIcon}
                    style={styles.largeDIV}>
                    <AccountCircle onClick = {this.changeAvatar}/>
                </IconButton>

                <RequestDialog/>
                <ReplyDialog/>


                <Dialog title="更改头像"
                        actions={ChangeAvatarActions}
                        open={this.state.avatarDialogOpen}
                        onRequestClose={this.handleClose}
                >
                    <Table
                        displaySelectAll={false}
                        onRowSelection={this.handleRowSelection}
                    >
                        <TableBody displayRowCheckbox={false}>
                            <Subheader>可选头像</Subheader>
                            <TableRow selected={this.selected(1)}><ListItem
                                value = {1}
                                primaryText="你是魔鬼吗"
                                leftAvatar={<Avatar src={img1} />}
                            /></TableRow>
                            <TableRow selected={this.selected(2)}><ListItem
                                value = {2}
                                primaryText="你是魔鬼吗2"
                                leftAvatar={<Avatar src={img2} />}
                            /></TableRow>
                            <TableRow selected={this.selected(3)}><ListItem
                                value = {3}
                                primaryText="苗子"
                                leftAvatar={<Avatar src={img3} />}
                            /></TableRow>
                        </TableBody>

                    </Table>
                    {/*</SelectableList>*/}
                </Dialog>

                <br/><br/>
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
            </div>
        )
    }
}