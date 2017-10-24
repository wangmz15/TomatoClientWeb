import React from 'react';
// import MobileTearSheet from '../../../MobileTearSheet';
import {List, ListItem} from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentSend from 'material-ui/svg-icons/content/send';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import Divider from 'material-ui/Divider';
import ActionInfo from 'material-ui/svg-icons/action/info';
import {Paper} from "material-ui";
const styles = {
    ContainerStyle : {
        width: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
};

export default class InfoList extends React.Component{
    constructor(props){
        // noinspection JSAnnotator
        super(props);
    }
    render(){
        return(
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
        );
    }
};
