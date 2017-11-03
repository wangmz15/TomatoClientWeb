import React from 'react';
import AccountCircle from 'material-ui/svg-icons/action/account-circle'
import IconButton from 'material-ui/IconButton';
import {List, ListItem} from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import Divider from 'material-ui/Divider';
import {
    Avatar, Dialog, FlatButton, makeSelectable, MenuItem, Paper, Subheader, Table, TableBody, TableRow, TableRowColumn,
    Toggle
} from "material-ui";
import MyAppBarAndDrawer from "./MyAppBarAndDrawer";
import LogoutButton from "./LogoutButton";
import img1 from "../Resources/1.jpg";
import img2 from "../Resources/2.jpg";
import img3 from "../Resources/3.jpg";
import BuyerDialog from "./BuyerDialog";
import SellerDialog from "./SellerDialog";
import * as ajax from "ajax";
import * as $ from "jquery";

// import SelectAvatar from "./SelectAvatar";

const styles = {
    largeAvatarIcon: {
        // border:'1px solid blue',
        width: 140,
        height: 140,
        borderRadius:'50%',
        overflow:'hidden',
    },
    largeDIV: {
        width: 200,
        height: 200,
        padding: 30,
        top:"30px",
        left:"50%",
        marginLeft:' -100px',
        // border :'1px solid blue',
        borderRadius:'50%',
        overflow:'hidden'
    },
    ContainerStyle : {
        width: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    CirclePaper:{
        height: 100,
        width: 100,
        // margin: 20,
        textAlign: 'center',
        display: 'inline-block',
        circle:true
    },

};
export default class TeamMessage extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            avatarDialogOpen:false,
            selectedIndex:-1,
            selected:[1],
            file:null,
        }
    }

    selected =  (index) => {
        // console.log(this.state.selected)
        return this.state.selected.indexOf(index) !== -1;
    };
    componentWillMount() {
        this.props.getInformation(this.props.id).then(() => {
        });
    }


    changeAvatar = () => {this.setState({avatarDialogOpen:true});};


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
        console.log(this.state.selected)
    };
    // handleSubmitChangeAvatar = ()=>{
    //     // this.props.changeAvatar("899");
    //     // console.log(this.state.selected);
    //     var form = new FormData();
    //     form.append("username", "Nicholas");
    //     form.append("id",3);
    //     form.append("avatar",this.state.file);
    //     form.append("rank",4);
    //     form.append("gameStatus","第8轮");
    //
    //     var xhr = new XMLHttpRequest();
    //     xhr.onload = function() {
    //
    //         console.log("Upload complete.");
    //     };
    //     xhr.open("post", "http://localhost:8080/api/client/test", true);
    //     xhr.send(form);
    //
    //     // this.props.updateInformation(this.props.username,this.props.id,this.state.file,this.props.rank,this.props.gameStatus);
    //     this.handleClose();
    // };

    handleSubmitChangeAvatar = ()=>{
        var file = $('[name="file"]');
        var imgContainer = $('#imgContainer');

        $.ajax({
            url: 'http://localhost:8080/api/client/echofile',
            type: "POST",
            data: new FormData(document.getElementById("fileForm")),
            enctype: 'multipart/form-data',
            processData: false,
            contentType: false
        }).done(function(data) {
            imgContainer.html('');
            // var img = '<img src="data:' + data.contenttype + ';base64,'
            //     + data.base64 + '"/>';
            var avatar = `<div style="width: 125px; height: 125px; border-radius: 50%; border: 3px solid #eee; overflow: hidden;"> 
                            <img src="data:${data.contenttype};base64,${data.base64}" width="155px" height="155px"/>
                            </div>`;
            imgContainer.append(avatar);
        }).fail(function(jqXHR, textStatus) {
            //alert(jqXHR.responseText);
            alert('File upload failed ...');
        });
        this.handleClose();
    };



    handleChange = () =>{
        // if(this.state.file)console.log(this.state.file.name);
        var control = document.getElementById("file");

        if (!(this.isJpg(control.files[0].name) || this.isPng(control.files[0].name))) {
            alert('Please browse a JPG/PNG file to upload ...');
            return;
        }
        this.setState({
            file:new FormData(document.getElementById("fileForm"))
        });

    };
    isJpg(name) {
        return name.match(/jpg$/i)
    }
    isPng(name) {
        return name.match(/png$/i)
    }


    render(){
        // let formData = new FormData();

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
                    id="imgContainer"
                    iconStyle={styles.largeAvatarIcon}
                    style={styles.largeDIV}
                    onClick = {this.changeAvatar}
                >
                    <AccountCircle />
                </IconButton>

                <SellerDialog/>
                <BuyerDialog/>


                <Dialog title="更改头像"
                        actions={ChangeAvatarActions}
                        open={this.state.avatarDialogOpen}
                        // onRequestClose={this.handleClose}
                >

                    <form id="fileForm">
                        <input type="file" name="file" id='file' onChange={this.handleChange}/>
                    </form>
                    {/*<Table*/}
                        {/*displaySelectAll={false}*/}
                        {/*onRowSelection={this.handleRowSelection}*/}
                    {/*>*/}
                        {/*<TableBody displayRowCheckbox={false}>*/}
                            {/*/!*<Subheader>可选头像</Subheader>*!/*/}
                            {/*<TableRow selected={this.selected(1)}>*/}
                                {/*<MenuItem*/}
                                    {/*value = {1}*/}
                                    {/*primaryText="你是魔鬼吗"*/}
                                    {/*leftAvatar={<Avatar src={img1} />}*/}
                                {/*/>*/}
                            {/*</TableRow>*/}
                            {/*<TableRow selected={this.selected(2)}>*/}
                                {/*<ListItem*/}
                                {/*value = {2}*/}
                                {/*primaryText="你是魔鬼吗2"*/}
                                {/*leftAvatar={<Avatar src={img2} />}*/}
                                {/*/>*/}
                            {/*</TableRow>*/}
                            {/*<TableRow selected={this.selected(3)}>*/}
                                {/*<ListItem*/}
                                {/*value = {3}*/}
                                {/*primaryText="苗子"*/}
                                {/*leftAvatar={<Avatar src={img3} />}*/}
                                {/*/>*/}
                            {/*</TableRow>*/}
                        {/*</TableBody>*/}

                    {/*</Table>*/}
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