import React, {Component} from 'react';
import {List, ListItem, makeSelectable} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Subheader from 'material-ui/Subheader';
import img1 from "../Resources/1.jpg";
import img2 from "../Resources/2.jpg";
import img3 from "../Resources/3.jpg";
import {Dialog, FlatButton} from "material-ui";

let SelectableList = makeSelectable(List);

export default class SelectAvatar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            avatarDialogOpen:this.props.avatarDialogOpen,
            selectedIndex:null,
        };
        console.log("avatarDialogOpen ",this.state.avatarDialogOpen)
    };
    handleRequestChange = (event, index) => {
        this.setState({
            selectedIndex: index,
        });
    };
    handleClose = () => {
        this.setState({
            avatarDialogOpen:false,
            selectedIndex:null,
        });
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
                keyboardFocused={true}
                disabled={!(this.state.selectedIndex)}
                onClick={this.handleSubmitChangeAvatar}
            />,
        ];
        return(
            <Dialog title="更改头像"
                    actions={ChangeAvatarActions}
                    open={this.state.avatarDialogOpen}
                    onRequestClose={this.handleClose}
            >
                <SelectableList
                    onChange = {this.handleRequestChange}
                    defaultValue={3}>
                    <Subheader>可选头像</Subheader>
                    <ListItem
                        value = {1}
                        primaryText="你是魔鬼吗"
                        leftAvatar={<Avatar src={img1} />}
                    />
                    <ListItem
                        value = {2}
                        primaryText="你是魔鬼吗2"
                        leftAvatar={<Avatar src={img2} />}
                    />
                    <ListItem
                        value = {3}
                        primaryText="苗子"
                        leftAvatar={<Avatar src={img3} />}
                    />
                </SelectableList>
            </Dialog>
        );
    }
}
